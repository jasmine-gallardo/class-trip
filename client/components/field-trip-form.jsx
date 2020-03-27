import React from 'react';

export default class FieldTripForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldTripName: '',
      address: '',
      city: '',
      category: '',
      date: '',
      time: '',
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
    const newFieldTrip = {
      name: this.state.fieldTripName,
      address: this.state.address,
      city: this.state.city,
      categoryId: this.state.category,
      date: this.state.date,
      time: this.state.time,
      description: this.state.description,
      userId: this.props.user.userId
    };
    const userName = this.props.user.userName;
    const userId = this.props.user.userId;
    this.props.addFieldTrip(newFieldTrip);
    this.handleReset(event);
    this.props.setView('myFieldTrips', userName, userId);
  }

  handleReset(event) {
    event.preventDefault();
    this.setState({
      fieldTripName: '',
      address: '',
      city: '',
      category: '',
      date: '',
      time: '',
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
            <option value="">Please choose an option &#9660;</option>
            <option value="1">Film</option>
            <option value="2">Art</option>
            <option value="3">Wellness</option>
          </select>
        </div>
        <div className="d-flex input-group-lg mb-4">
          <label htmlFor="date"></label>
          <input onChange={this.handleChangeDate} className="form-control w-50 ml-2 mr-2" type="text" name="date" id="date" placeholder="mm/dd/yy"/>
          <label htmlFor="time"></label>
          <select onChange={this.handleChangeTime} className="form-control w-50" name="time" id="time">
            <option value="">Time &#9660;</option>
            <option value="24:00">12:00am</option>
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
            <option value="16:00">4:00pm</option>
            <option value="17:00">5:00pm</option>
            <option value="18:00">6:00pm</option>
            <option value="19:00">7:00pm</option>
            <option value="20:00">8:00pm</option>
            <option value="21:00">9:00pm</option>
            <option value="22:00">10:00pm</option>
            <option value="23:00">11:00pm</option>
          </select>
        </div>
        <div className="input-group-lg mb-3">
          <textarea onChange={this.handleChangeDescription} className="form-control" aria-label="With textarea" placeholder="Describe your field trip"></textarea>
        </div>
        <div className="text-center">
          <button className="btn-lg btn-dark" type="submit">Add Field Trip</button>
        </div>
      </form>
    );
  }
}
