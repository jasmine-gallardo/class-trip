import React from 'react';

export default class FieldTripsDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fieldTripDetails: {} };
    this.getFieldTripDetails = this.getFieldTripDetails.bind(this);
  }

  componentDidMount() {
    this.getFieldTripDetails(this.props.fieldTripId);
  }

  getFieldTripDetails(fieldTripId) {
    fetch(`/api/fieldTrips/${fieldTripId}`)
      .then(res => res.json())
      .then(fieldTripObject => this.setState({ fieldTripDetails: fieldTripObject }))
      .catch(err => console.error(err));
  }

  render() {
    const fieldTrip = this.state.fieldTripDetails;
    return (
      <div className="h-100">
        <div className="">
          <div>
            <p className="text-secondary lead mt-3">{fieldTrip.date} @ {fieldTrip.time}</p>
          </div>
          <div className="open-sans h3 text-info">{fieldTrip.fieldTripName}</div>
        </div>
        <div className='row p-3 h4 my-3 mb-2'>
          <i className="fas fa-map-marker-alt ml-2 mr-3 mt-2"></i>
          <div className="align-items-center">
            <p className="lead m-0">{fieldTrip.address}</p>
            <p className="lead m-0">{fieldTrip.city}</p>
          </div>
        </div>
        <div className="h-50 card p-3 mb-5">
          <div className='row'>
            <div className='col-md-8 align-middle'>
              <p className="h4">Details:</p>
            </div>
          </div>
          <div className='col-md-8 lead'>
            <p>{fieldTrip.description}</p>
          </div>
        </div>
        <div className="text-center align-middle">
          <i className="fas fa-edit h3"></i>
        </div>
      </div>
    );
  }
}
