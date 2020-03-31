import React from 'react';

export default class FieldTripsDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fieldTripDetails: {} };
    this.getFieldTripDetials = this.getFieldTripDetials.bind(this);
  }

  componentDidMount() {
    this.getFieldTripDetials(this.props.fieldTripId);
  }

  getFieldTripDetials(fieldTripId) {
    fetch(`/api/fieldTrips/${fieldTripId}`)
      .then(res => res.json())
      .then(fieldTripObject => this.setState({ fieldTripDetails: fieldTripObject }))
      .catch(err => console.error(err));
  }

  render() {
    const fieldTrip = this.state.fieldTripDetails;
    return (
      <div>
        <div className="open-sans h2 text-info text-center">{fieldTrip.fieldTripName}</div>
        <div className='row'>
          <h4 className="text-secondary open-sans m-auto text-center">{fieldTrip.date}</h4>
        </div>
        <div>
          <p className="lead mt-1 mb-4 text-center">{fieldTrip.time}</p>
        </div>
        <div className='row p-3 h4 my-3'>
          <i className="fa fa-map-marker mr-3"></i>
          <div>
            <p className="lead m-0">{fieldTrip.address}</p>
            <p className="lead m-0">{fieldTrip.city}</p>
          </div>
        </div>
        <div className='row p-3'>
          <div className='col-md-6 text-center'>
            <div id="map-container-google-1" className="z-depth-1-half map-container bg-light">
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <h4>Details:</h4>
          </div>
        </div>
        <div className='col-md-8 lead'>
          <p>{fieldTrip.description}</p>
        </div>
      </div>
    );
  }
}
