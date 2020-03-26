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

  getFieldTrips(userId) {
    fetch(`/api/users_field_trips/${userId}`)
      .then(res => res.json())
      .then(fieldTripsArray => this.setState({ fieldTrips: fieldTripsArray }))
      .catch(err => console.error(err));
  }

  render() {
    if (!this.state.fieldTrips[0]) {
      return <p>Looks like you need more field trips!</p>;
    }
    return (
      <div className="h-75 d-flex flex-wrap justify-content-center">
        <div className="w-50 m-auto p-2 d-flex justify-content-center justify-content-between">
          <i className="far fa-calendar-alt fa-3x"></i>
          <p className="h2">Field Trips</p>
        </div>
        {/* map out the field trips */}
      </div>
    );
  }
}
