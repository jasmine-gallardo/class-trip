import React from 'react';

export default class UserFieldTrips extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldTrips: []
    };
    this.getFieldTrips = this.getFieldTrips.bind(this);
  }

  componentDidMount() {
    this.getFieldTrips(this.props.userId);
  }

  getFieldTrips(fieldTripId) {
    fetch(`/api/users_field_trips/${fieldTripId}`)
      .then(res => res.json())
      .then(fieldTripsArray => this.setState({ fieldTrips: fieldTripsArray }))
      .catch(err => console.error(err));
  }

  render() {
    if (!this.state.fieldTrips[0]) {
      return <p>Looks like you need more field trips!</p>;
    }
    return (
      <div className="h-75 d-flex flex-column">
        <div className="p-2 mb-3 d-flex align-items-start justify-content-center">
          <div className="d-flex justify-content-center">
            {/* <i className="far fa-calendar-alt fa-3x mr-3"></i>
            <p className="h2">Field Trips</p> */}
          </div>

        </div>
        {
          this.state.fieldTrips.map(fieldTrip => {
            return (
              <FieldTrip
                key={fieldTrip.fieldTripId}
                name={fieldTrip.fieldTripName}
                fieldTripId={fieldTrip.fieldTripId}
                userName={this.props.userName}
                userId={this.props.userId}
                courseId={this.props.courseId}
                setView={this.props.setView}
                address={fieldTrip.address}
                city={fieldTrip.city}
              />
            );
          })
        }
      </div>
    );
  }
}

function FieldTrip(props) {
  return (
    <div className="w-100 d-flex justify-content-center">
      <button
        onClick={() => props.setView('fieldTripDetails', props.userName, props.userId, props.courseId, props.fieldTripId)}
        className="d-flex align-items-center w-100 btn-block btn-info btn-outline-secondary text-dark h4 mb-3 rounded">
        <div>
          <h3 className="text-light">{props.name} </h3>
          <h6> Location: {props.address} </h6>
          <h5> {props.city} </h5>
        </div>
        <div>
          <button className="btn-lg bg-secondary text-light"> INFO </button>
        </div>
      </button>
    </div>
  );
}
