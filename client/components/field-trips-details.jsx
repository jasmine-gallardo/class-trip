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
        <div className='row p-3'>
          <h3>{fieldTrip.date}</h3>
          <h4>{fieldTrip.time}</h4>
        </div>
        <div className='row p-3 h4 mx-auto'>
          <i className="fa fa-map-marker"></i>
        </div>
        <div>
          <p>{fieldTrip.address}</p>
          <p>{fieldTrip.city}</p>
        </div>
        <div className='row p-3'>
          <div className='col-md-6 text-center'>
            <div id="map-container-google-1" className="z-depth-1-half map-container">
              {/* <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0"
                style="border:0" allowFullScreen></iframe> */}
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <h4>Details:</h4>
          </div>
        </div>
        <div className='col-md-8'>
          <p>{fieldTrip.description}</p>
        </div>
      </div>
    );
  }
}
