import React from 'react';
import ViewFieldTrip from './view-field-trip';

export default class SearchFieldTripsCity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      fieldTripsCity: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getFieldTripsCity = this.getFieldTripsCity.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    this.setState({
      cityName: event.target.value
    });
  }

  getFieldTripsCity(cityName) {
    const req = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    fetch('/api/fieldTripsCity/', req)
      .then(res =>
        res.json())
      .then(cityName => {
        const allFieldTripsCity = this.state.fieldTripsCity.concat(JSON.stringify(cityName));
        this.setState({ fieldTripsCity: allFieldTripsCity });
      })
      .catch(err => console.error(err));
  }

  handleSubmit(event) {
    event.preventDefault();
    if (event.target) {
      const cityName = this.state.cityName;
      this.getFieldTripsCity(cityName);
    }
  }

  handleReset() {
    this.setState({
      cityName: '',
      fieldTripsCity: []
    });
  }

  render() {
    return (

      <div className="row d-flex flex-column">
        <div className="mb-3">
          <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
            <label>
              Search by City:
              <input
                type="text"
                onChange={this.handleChange}
                value={this.state.cityName}
                className="search-box mr-3"
                placeholder="City"
              />
            </label>
            <input
              className="p-1"
              type="submit"
              value="Submit" />

            <button
              className="p-1"
              onClick={this.handleReset}
              type="button">
              Reset</button>
          </form>
        </div>
        <div className="mb-1">City: {this.state.cityName}</div>
        {this.state.fieldTripsCity.map((fieldTrip, key) => {
          return (
            <ViewFieldTrip
              key={fieldTrip.fieldTripId}
              fieldTripsCity={this.state.fieldTripsCity}
              fieldTripName={fieldTrip.fieldTripName}
              fieldTripAddress={fieldTrip.address}
              fieldTripId={fieldTrip.fieldTripId}
              userName={this.props.userName}
              userId={this.props.userId}
              setView={this.props.setView}
              setFieldTrip={this.props.setFieldTrip}
            />
          );
        })}
      </div >
    );
  }
}
