import React from 'react';

export default class FieldTripSearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.setNextPage = this.setNextPage.bind(this);
  }

  setNextPage(viewName, fieldTripId, backPage) {
    this.props.setView(viewName);
    this.props.setFieldTrip(fieldTripId);
    this.props.setBackPage(backPage);
  }

  render() {
    const backPage = this.props.currentPage;
    const fieldTripId = this.props.fieldTripId;
    const fieldTripName = this.props.name;
    const fieldTripDate = this.props.date;
    const fieldTripAddress = this.props.address;
    const fieldTripCity = this.props.city;
    const fieldTripDesc = this.props.fieldTripDesc;
    return (
      <div className="col-12 card p-3 bg-light mb-2">
        <div className="row">
          <div className="col-9">
            <div className="h4 text-info">
              {fieldTripName}
            </div>
            <strong> {fieldTripDate} </strong>
            <div className="desc text-secondary">
              {fieldTripDesc}
            </div>
            <small>
              {fieldTripAddress} {fieldTripCity}
            </small>
          </div>
          <div className="d-flex flex-wrap align-items-center">
            <button
              onClick={() => this.setNextPage('fieldTripDetails', fieldTripId, backPage)}
              type="button" className="btn btn-dark my-1 "> INFO </button>
          </div>
        </div>
      </div>
    );
  }
}
