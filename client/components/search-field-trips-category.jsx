import React from 'react';
import fieldTripSearchResult from './field-trip-search-result';

export default class SearchFieldTrips extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      categoryName: '',
      fieldTrips: []
    };
    this.handleChangeSelection = this.handleChangeSelection.bind(this);
    this.handleGetFieldTrips = this.handleGetFieldTrips.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories() {
    fetch('/api/categories')
      .then(res => res.json())
      .then(categoriesArray =>
        this.setState({
          categories: categoriesArray
        }))
      .catch(err => console.error(err));
  }

  handleChangeSelection(event) {
    this.setState({
      categoryName: event.target.value
    });
    if (event.target.value) {
      this.handleGetFieldTrips(event.target.value);
    }
  }

  handleGetFieldTrips(categoryName) {
    fetch('/api/fieldTripSearch/' + categoryName)
      .then(res =>
        res.json())
      .then(fieldTripArray => {
        this.setState({
          fieldTrips: fieldTripArray.fieldTrips
        });
      })
      .catch(err => console.error(err));
  }

  handleReset() {
    this.setState({
      categories: [],
      categoryName: '',
      fieldTrips: []
    });
    this.getCategories();
  }

  render() {
    return (
      <div className="d-flex flex-column">
        <form onReset={this.handleReset} autoComplete="off">
          <div className="mb-4 text-center" id="for-cat-search" >
            <label htmlFor="search-cat"></label>
            <input onChange={this.handleChangeSelection} className="search-box mr-3"
              list="categories" id="cat-search" name="category-search" placeholder="Search by Category" />
            <button
              className="p-2 btn btn-info" type="reset" id="clear-select"> Reset</button>
            <datalist id="categories" >
              {this.state.categories.map((cat, key) => {
                return (
                  <option key={cat.categoryId} value={cat.categoryName} >
                    {cat.categoryName}
                  </option>);
              })}
            </datalist>
          </div>
        </form>
        {/* <div className="ml-4 mb-2 h2 open-sans text-info">{this.state.categoryName}</div> */}
      </div >
    );
  }
}
