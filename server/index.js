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

// GET - Pick User
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

// GET - View Field Trip Details
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

// DELETE - Delete Field Trip
app.delete('/api/fieldTrips/:fieldTripId', (req, res, next) => {
  const { fieldTripId } = req.params;
  if (!parseInt(fieldTripId, 10)) {
    return res.status(400).json({
      error: '"fieldTripId" must be a positive integer'
    });
  }

  const sql = `
    delete from "field_trips"
    where "fieldTripId" = $1
    returning *
  `;

  const values = [fieldTripId];

  db.query(sql, values)
    .then(result => {
      if (!result.rows[0]) {
        return res.status(400).json({
          error: `Cannot find field trip with ${fieldTripId}`
        });
      } else {
        return res.sendStatus(204);
      }
    })
    .catch(err => next(err));
});

// PUT - Edit Field Trip
app.put('/api/fieldTrips/:fieldTripId', (req, res, next) => {
  const fT = req.body;
  const fTId = req.params.fieldTripId;
  if (!parseInt(fTId, 10) || !fT.fieldTripName || !fT.address || !fT.city || !fT.date || !fT.time || !fT.description) {
    return res.status(400).json({
      error: 'Invalid field trip'
    });
  }
  const sql = `
  update  "field_trips"
    set   "fieldTripName" = $1,
          "address" = $2,
          "city" = $3,
          "date" = $4,
          "time" = $5,
          "description" = $6
  where   "fieldTripId" = $7
  returning *
`;
  const values = [fT.fieldTripName, fT.address, fT.city, fT.date, fT.time, fT.description, fTId];
  db.query(sql, values)
    .then(result => {
      const theFT = result.rows[0];
      if (!theFT) {
        res.status(404).json({
          error: 'Field trip does not exist'
        });
      } else {
        res.status(200).json(theFT);

      }
    })
    .catch(err => next(err));
});

// GET - View User's List of Field Trips
app.get('/api/users_field_trips/:userId', (req, res, next) => {
  if (!parseInt(req.params.userId, 10)) {
    return res.status(400).json({
      error: "'userId' must be a positive integer"
    });
  }
  const sql = `
  select "field_trips"."fieldTripName",
    "field_trips"."address",
    "field_trips"."city",
    "field_trips"."date",
    "field_trips"."time",
    "field_trips"."fieldTripId",
    "users_field_trips"."userId"
    from "field_trips"
    join "users_field_trips" using("fieldTripId")
    where "users_field_trips"."userId" = $1
  `;
  db.query(sql, [req.params.userId])
    .then(result => {
      if (!result.rows[0]) {
        return res.status(404).json({
          error: `No field trips found under userId ${req.params.userId}`
        });
      } else {
        return res.json(result.rows);
      }
    })
    .catch(err => next(err));
});

// GET - View Course Details
app.get('/api/courses/:courseId', (req, res, next) => {
  const sql = `
  select "lessons"."name",
    "lessons"."lessonId"
  from "lessons"
  join "courses" using("courseId")
  where "courses"."courseId" = $1
  `;
  db.query(sql, [req.params.courseId])
    .then(result => {
      if (!result.rows[0]) {
        return res.status(404).json({
          error: `User ${req.params.courseId} not found`
        });
      } else {
        return res.json(result.rows);
      }
    })
    .catch(err => next(err));
});
// GET - View User's List of Courses
app.get('/api/users_courses/:userId', (req, res, next) => {
  if (!parseInt(req.params.userId, 10)) {
    return res.status(400).json({
      error: "'userId' must be a positive integer"
    });
  }
  const sql = `
  select "courses"."name",
  "courses"."courseId",
  "users_courses"."userId"
  from "courses"
  join "users_courses" using("courseId")
  where "users_courses"."userId" = $1
  `;
  db.query(sql, [req.params.userId])
    .then(result => {
      if (!result.rows[0]) {
        return res.status(404).json({
          error: `User ${req.params.userId} not found`
        });
      } else {
        return res.json(result.rows);
      }
    })
    .catch(err => next(err));
});

// GET - View Lessons
app.get('/api/lessons/:lessonId', (req, res, next) => {
  const lessonId = req.params.lessonId;
  const sql = `
    select *
      from "lessons"
    where "lessonId" = $1
  `;
  const values = [lessonId];
  db.query(sql, values)
    .then(result => res.status(200).json(result.rows[0]))
    .catch(err => next(err));
});

// GET - Search Categories
app.get('/api/categories', (req, res, next) => {
  const categoryName = req.body.categoryName;
  const sql = `
select "categoryId",
       "categoryName"
from   "categories"
where  "categoryName" ilike $1 || '%'
`;
  const value = [categoryName];
  db.query(sql, value)
    .then(result => {
      if (!result.rows[0]) {
        return res.status(404).json({
          error: 'Category not found'
        });
      } else {
        return res.json(result.rows);
      }
    })
    .catch(err => next(err));
});

// GET - Search Courses by Category
app.get('/api/courses', (req, res, next) => {
  const categoryName = req.body.categoryName;
  const sql = `
select  "courses"."name",
        "categories"."categoryName"
from    "courses"
join    "categories" using ("categoryId")
where   "categoryName" = $1
`;
  const value = [categoryName];
  db.query(sql, value)
    .then(result => {
      if (!result.rows[0]) {
        return res.status(404).json({
          error: 'Courses not found'
        });
      } else {
        return res.json(result.rows);
      }
    })
    .catch(err => next(err));
});

app.post('/api/field_trips', (req, res, next) => {
  const fieldTripName = req.body.name;
  const description = req.body.description;
  const address = req.body.address;
  const city = req.body.city;
  const date = req.body.date;
  const time = req.body.time;
  const categoryId = req.body.categoryId;
  const userId = req.body.userId;

  if (!fieldTripName || !description || !address || !city || !date || !time || !categoryId || !userId) {
    return (
      res.status(400).json({ error: 'All field trip details are required.' })
    );
  }

  const sql = `
    insert into "field_trips" ("fieldTripName", "description", "address", "city", "date", "time")
    values ($1, $2, $3, $4, $5, $6)
    returning "fieldTripId"
  `;
  const values = [fieldTripName, description, address, city, date, time];
  db.query(sql, values)
    .then(result => {
      const fieldTripId = result.rows[0].fieldTripId;
      const sql = `
        insert into "field_trips_categories" ("fieldTripId", "categoryId")
        values ($1, $2)
        returning "fieldTripId"
      `;
      const values = [fieldTripId, categoryId];
      return (
        db.query(sql, values)
          .then(result => {
            const fieldTripId = result.rows[0].fieldTripId;
            return fieldTripId;
          })
      );
    })
    .then(result => {
      const fieldTripId = result;
      const userId = req.body.userId;
      const sql = `
        insert into "users_field_trips" ("fieldTripId", "userId")
        values ($1, $2)
        returning *
      `;
      const values = [fieldTripId, userId];
      return (
        db.query(sql, values)
          .then(result => {
            return (
              result.rows[0]
            );
          })
      );
    })
    .then(result => {
      const fieldTripId = result.fieldTripId;
      const sql = `
        select "ft"."fieldTripId",
              "ft"."fieldTripName",
              "ft"."description",
              "ft"."address",
              "ft"."city",
              "ft"."date",
              "ft"."time",
              "uft"."userId"
          from "field_trips" as "ft"
          join "users_field_trips" as "uft" using ("fieldTripId")
          where "ft"."fieldTripId" = $1
      `;
      const values = [fieldTripId];
      db.query(sql, values)
        .then(result => res.status(201).json(result.rows[0]));
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
