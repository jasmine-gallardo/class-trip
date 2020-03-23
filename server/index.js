require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/users', (req, res, next) => {
  const sql = `
    select "userId",
          "name"
      from "users"
  `;
  db.query(sql)
    .then(result => res.status(200).json(result.rows))
    .catch(err => next(err));
});

app.get('/api/fieldTrips/:fieldTripId', (req, res, next) => {
  const { fieldTripId } = req.params;
  if (!parseInt(fieldTripId, 10)) {
    return res.status(400).json({
      error: '"fieldTripId" must be a positive integer'
    });
  }

  const sql = `
    select *
    from "field_trips"
    where "fieldTripId" = $1
  `;

  const values = [fieldTripId];

  db.query(sql, values)
    .then(result => {
      if (!result.rows[0]) {
        return res.status(400).json({
          error: `Cannot find field trip with ${fieldTripId}`
        });
      } else {
        return res.status(200).json(result.rows[0]);
      }
    })
    .catch(err => next(err));
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
