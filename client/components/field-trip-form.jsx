import React from 'react';

export default class FieldTripForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldTripName: '',
      address: '',
      city: '',
      category: '',
      date: null,
      time: null,
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleChangeFTName = this.handleChangeFTName.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleReset(event) {
    event.preventDefault();
    this.setState({
      fieldTripName: '',
      address: '',
      city: '',
      category: '',
      date: null,
      time: null,
      description: ''
    });
  }

  handleChangeFTName(event) {
    this.setState({ fieldTripName: event.target.value });
  }

  handleChangeAddress(event) {
    this.setState({ address: event.target.value });
  }

  handleChangeCity(event) {
    this.setState({ city: event.target.value });
  }

  handleChangeCategory(event) {
    this.setState({ category: event.target.value });
  }

  handleChangeDate(event) {
    this.setState({ date: event.target.value });
  }

  handleChangeTime(event) {
    this.setState({ time: event.target.value });
  }

  handleChangeDescription(event) {
    this.setState({ description: event.target.value });
  }

  render() {
    const userId = this.props.user.userId;
    return (
      <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <div className="input-group-lg mb-2">
          <label className="d-block" htmlFor="fieldTripName">Name your field trip.</label>
          <input
            onChange={this.handleChangeFTName}
            className="form-control"
            type="text"
            id="fieldTripName"/>
        </div>
        <div className="input-group-lg mb-2">
          <label className="d-block" htmlFor="address">Address</label>
          <input
            onChange={this.handleChangeAddress}
            className="form-control"
            type="text"
            id="address"/>
        </div>
        <div className="input-group-lg mb-2">
          <label className="d-block" htmlFor="city">City</label>
          <input
            onChange={this.handleChangeCity}
            className="form-control"
            type="text"
            id="city"/>
        </div>
        <div className="input-group-lg mb-4">
          <label className="d-block" htmlFor="category">Category</label>
          <select onChange={this.handleChangeCategory} className="form-control" name="category" id="category">
            <option value="">Please choose an option</option>
            <option value="Film">Film</option>
            <option value="Art">Art</option>
            <option value="Wellness">Wellness</option>
          </select>
        </div>
        <div className="d-flex input-group-lg mb-4">
          <label htmlFor="date"></label>
          <input onChange={this.handleChangeDate} className="form-control w-50 ml-2 mr-2" type="text" name="date" id="date" placeholder="Type date"/>
          <label htmlFor="time"></label>
          <select onChange={this.handleChangeTime} className="form-control w-50" name="time" id="time">
            <option value="">Pick time &#9660;</option>
            <option value="00:00">12:00am</option>
            <option value="01:00">1:00am</option>
            <option value="02:00">2:00am</option>
            <option value="03:00">3:00am</option>
            <option value="04:00">4:00am</option>
            <option value="05:00">5:00am</option>
            <option value="06:00">6:00am</option>
            <option value="07:00">7:00am</option>
            <option value="08:00">8:00am</option>
            <option value="09:00">9:00am</option>
            <option value="10:00">10:00am</option>
            <option value="11:00">11:00am</option>
            <option value="12:00">12:00pm</option>
            <option value="13:00">1:00pm</option>
            <option value="14:00">2:00pm</option>
            <option value="15:00">3:00pm</option>
            <option value="15:00">4:00pm</option>
            <option value="15:00">5:00pm</option>
            <option value="15:00">6:00pm</option>
            <option value="15:00">7:00pm</option>
            <option value="15:00">8:00pm</option>
            <option value="15:00">9:00pm</option>
            <option value="15:00">10:00pm</option>
            <option value="15:00">11:00pm</option>
          </select>
        </div>
        <div className="input-group-lg mb-3">
          <textarea onChange={this.handleChangeDescription} className="form-control" aria-label="With textarea" placeholder="Describe your field trip"></textarea>
        </div>
        <div className="text-center">
          <button onClick={() => this.props.setView('myFieldTrips', userId)} className="btn-lg btn-dark">Add Field Trip</button>
        </div>
      </form>
    );
  }
}
