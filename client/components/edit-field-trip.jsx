import React from 'react';

export default class EditFieldTrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldTripName: '',
      address: '',
      city: '',
      category: { categoryId: null, categoryName: '' },
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

  componentDidMount() {
    this.getUpdateFieldTrip(this.props.fieldTripId);
  }

  getUpdateFieldTrip(fieldTripId) {
    fetch(`/api/fieldTrips/${fieldTripId}`)
      .then(res => res.json())
      .then(fieldTrip =>
        this.setState({
          fieldTripName: fieldTrip.fieldTripName,
          address: fieldTrip.address,
          city: fieldTrip.city,
          category: { categoryId: fieldTrip.categoryId, categoryName: fieldTrip.categoryName },
          date: fieldTrip.date,
          time: fieldTrip.time,
          description: fieldTrip.description
        }))
      .catch(err => console.error(err));
  }

  handleSubmit(event) {
    event.preventDefault();
    const updatedFieldTrip = {
      fieldTripName: this.state.fieldTripName,
      address: this.state.address,
      city: this.state.city,
      categoryId: this.state.category.categoryId,
      date: this.state.date,
      time: this.state.time,
      description: this.state.description,
      userId: this.props.user.userId
    };
    const userName = this.props.user.userName;
    const userId = this.props.user.userId;
    this.props.updateFieldTrip(updatedFieldTrip, this.props.fieldTripId);
    this.handleReset(event);
    this.props.setView('myFieldTrips', userName, userId);
  }

  handleReset(event) {
    event.preventDefault();
    this.setState({
      fieldTripName: '',
      address: '',
      city: '',
      category: { categoryId: null, categoryName: '' },
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
    this.setState({ category: { categoryId: event.target.value } });
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
      <form onSubmit={this.handleSubmit} onReset={this.handleReset} autoComplete="off">
        <div className="input-group-lg mb-2">
          <label className="d-block" htmlFor="fieldTripName">Name your field trip.</label>
          <input
            onChange={this.handleChangeFTName}
            className="form-control"
            type="text"
            value={this.state.fieldTripName}
            id="fieldTripName"
            required/>
        </div>
        <div className="input-group-lg mb-2">
          <label className="d-block" htmlFor="address">Address</label>
          <input
            onChange={this.handleChangeAddress}
            className="form-control"
            type="text"
            value={this.state.address}
            id="address"
            required/>
        </div>
        <div className="input-group-lg mb-2">
          <label className="d-block" htmlFor="city">City</label>
          <input
            onChange={this.handleChangeCity}
            className="form-control"
            type="text"
            value={this.state.city}
            id="city"
            required/>
        </div>
        <div className="input-group-lg mb-4">
          <label className="d-block" htmlFor="category">Category</label>
          <select required onChange={this.handleChangeCategory} className="form-control" name="category" id="category">
            <option value={this.state.category.categoryId}>{this.state.category.categoryName} &#9660;</option>
            <option value="1">Film</option>
            <option value="2">Art</option>
            <option value="3">Wellness</option>
          </select>
        </div>
        <div className="d-flex input-group-lg mb-4">
          <label htmlFor="date"></label>
          <input required onChange={this.handleChangeDate} value={this.state.date} className="form-control w-50 ml-2 mr-2" type="text" name="date" id="date" />
          <label htmlFor="time"></label>
          <select required onChange={this.handleChangeTime} className="form-control w-50" name="time" id="time">
            <option value={this.state.time}> {this.state.time} &#9660;</option>
            <option value="12:00am">12:00am</option>
            <option value="1:00am">1:00am</option>
            <option value="2:00am">2:00am</option>
            <option value="3:00am">3:00am</option>
            <option value="4:00am">4:00am</option>
            <option value="5:00am">5:00am</option>
            <option value="6:00am">6:00am</option>
            <option value="7:00am">7:00am</option>
            <option value="8:00am">8:00am</option>
            <option value="9:00am">9:00am</option>
            <option value="10:00am">10:00am</option>
            <option value="11:00am">11:00am</option>
            <option value="12:00pm">12:00pm</option>
            <option value="1:00pm">1:00pm</option>
            <option value="2:00pm">2:00pm</option>
            <option value="3:00pm">3:00pm</option>
            <option value="4:00pm">4:00pm</option>
            <option value="5:00pm">5:00pm</option>
            <option value="6:00pm">6:00pm</option>
            <option value="7:00pm">7:00pm</option>
            <option value="8:00pm">8:00pm</option>
            <option value="9:00pm">9:00pm</option>
            <option value="10:00pm">10:00pm</option>
            <option value="11:00pm">11:00pm</option>
          </select>
        </div>
        <div className="input-group-lg mb-3">
          <textarea required onChange={this.handleChangeDescription} value={this.state.description} className="form-control" aria-label="With textarea" placeholder="Describe your field trip"></textarea>
        </div>
        <div className="text-center">
          <button className="btn btn-lg btn-info" type="submit">Update</button>
        </div>
      </form>
    );
  }
}
