import React from 'react';

export default class SearchFieldTrips extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: '',
      fieldTripsCategories: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getFieldTripsCategory = this.getFieldTripsCategory.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    this.setState({
      categoryName: event.target.value
    });
  }

  getFieldTripsCategory(categoryName) {
    fetch('/api/fieldTripsCategory/' + categoryName)
      .then(res =>
        res.json())
      .then(data => {
        this.setState({ fieldTripsCategories: data });
      })
      .catch(err => console.error(err));
  }

  handleSubmit(event) {
    event.preventDefault();
    if (event.target) {
      this.getFieldTripsCategory(this.state.categoryName);
    }
  }

  handleReset() {
    this.setState({
      categoryName: '',
      fieldTripsCategories: []
    });
  }

  render() {
    return (

      <div className="row d-flex flex-column">
        <div className="mb-3">
          <form className="form-inline" onSubmit={this.handleSubmit} onReset={this.handleReset}>
            <label>
              Search by Category:
              <input
                type="search"
                onChange={this.handleChange}
                value={this.state.categoryName}
                className="form-control mr-sm-2"
                placeholder="Category"
                name="category-search" />
            </label>
            <input
              className="p-1"
              type="submit"
              value="Submit" />

            <button
              className="p-1"
              id="clear-select"
              onClick={this.handleReset}
              type="button">
              Reset</button>
          </form>
        </div>
        <div className="mb-1">Category: {this.state.categoryName}</div>
        {this.state.fieldTripsCategories.map((fieldTrip, key) => {
          return (
            <ViewFieldTrip
              key={fieldTrip.fieldTripId}
              fieldTripsCategories={this.state.fieldTripsCategories}
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
