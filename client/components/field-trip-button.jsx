import React from 'react';

export default class FieldTripButton extends React.Component {
  constructor(props) {
    super(props);
    this.setViewAndFieldTripId = this.setViewAndFieldTripId.bind(this);
  }

  setViewAndFieldTripId(viewName, fieldTripId) {
    this.props.setView(viewName);
    this.props.setFieldTrip(fieldTripId);
  }

  render() {
    const fieldTripId = this.props.fieldTripId;
    return (
      <div className="col-12 card p-3 mb-1 bg-light mb-2 open-sans">
        <div className="row">
          <div className="col-9">
            <div className="h4 text-info">
              {this.props.name}
            </div>
            <div className="desc">
              {this.props.address}
            </div>
            <div className="desc">
              {this.props.city}
            </div>
          </div>
          <div className="d-flex flex-wrap align-items-center">
            <button
              onClick={() => this.setViewAndFieldTripId('fieldTripDetails', fieldTripId)}
              type="button" className="btn btn-dark my-1 "> INFO </button>
          </div>
        </div>
      </div>
    );
  }
}
