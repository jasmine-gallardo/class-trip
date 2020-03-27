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
  }

  render() {
    return (
      <div>
        <div className="input-group-lg mb-2">
          <label className="d-block" htmlFor="fieldTripName">Name your field trip.</label>
          <input
            className="form-control"
            type="text"
            id="fieldTripName"/>
        </div>
        <div className="input-group-lg mb-2">
          <label className="d-block" htmlFor="address">Address</label>
          <input
            className="form-control"
            type="text"
            id="address"/>
        </div>
        <div className="input-group-lg mb-2">
          <label className="d-block" htmlFor="city">City</label>
          <input
            className="form-control"
            type="text"
            id="city"/>
        </div>
        <div className="input-group-lg mb-4">
          <label className="d-block" htmlFor="category">Category</label>
          <select className="form-control" name="category" id="category">
            <option value="">Please choose an option</option>
            <option value="Film">Film</option>
            <option value="Art">Art</option>
            <option value="Wellness">Wellness</option>
          </select>
        </div>
        <div className="d-flex input-group-lg mb-4">
          <label htmlFor="date"></label>
          <input className="form-control w-50 ml-2 mr-2" type="text" name="date" id="date" placeholder="Type date"/>
          <label htmlFor="time"></label>
          <select className="form-control w-50" name="time" id="time">
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
          <textarea className="form-control" aria-label="With textarea" placeholder="Describe your field trip"></textarea>
        </div>
        <div className="text-center">
          <button className="btn-lg btn-dark">Add Field Trip</button>
        </div>
      </div>
    );
  }
}
