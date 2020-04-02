import React from 'react';
import FieldTripButton from './field-trip-button';

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
              <FieldTripButton
                key={fieldTrip.fieldTripId}
                name={fieldTrip.fieldTripName}
                fieldTripId={fieldTrip.fieldTripId}
                userName={this.props.userName}
                userId={this.props.userId}
                courseId={this.props.courseId}
                setView={this.props.setView}
                address={fieldTrip.address}
                city={fieldTrip.city}
                setFieldTrip={this.props.setFieldTrip}
                setBackPage={this.props.setBackPage}
                currentPage={'myFieldTrips'}
              />
            );
          })
        }
      </div>
    );
  }
}
