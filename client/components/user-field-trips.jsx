import React from 'react';

export default class UserFieldTrips extends React.Component {

  render() {
    if (!this.props.fieldTrips[0]) {
      return <p>Looks like you need more field trips!</p>;
    }
    return (
      <div className="d-flex flex-column">
        <div className="p-2 mb-3 d-flex align-items-start justify-content-center">
          <div className="d-flex justify-content-center">
          </div>

        </div>
        {
          this.props.fieldTrips.map(fieldTrip => {
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
    <div className="col-12 card p-3 mb-1 bg-light mb-2 open-sans">
      <div className="row">
        <div className="col-9">
          <div className="h4 text-info">
            {props.name}
          </div>
          <div className="desc">
            {props.address}
          </div>
          <div className="desc">
            {props.city}
          </div>
        </div>
        <div className="d-flex flex-wrap align-items-center">
          <button
            onClick={() => props.setView('fieldTripDetails')}
            type="button" className="btn btn-info my-1 "> INFO </button>
        </div>
      </div>
    </div>
  );
}
