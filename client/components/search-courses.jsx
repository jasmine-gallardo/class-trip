import React from 'react';
import CourseSearchResult from './course-search-result';

export default class SearchCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      categoryName: '',
      courses: []
    };
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleGetCourses = this.handleGetCourses.bind(this);
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

  handleChangeSelect(event) {
    this.setState({
      categoryName: event.target.value
    });
    if (event.target.value) {
      this.handleGetCourses(event.target.value);
    }
  }

  handleGetCourses(categoryName) {
    fetch('/api/courseCategories/' + categoryName)
      .then(res =>
        res.json())
      .then(coursesArray => {
        this.setState({
          courses: coursesArray
        });
      })
      .catch(err => console.error(err));
  }

  handleReset() {
    this.setState({
      categories: [],
      categoryName: '',
      courses: []
    });
  }

  render() {
    return (
      <div className=" d-flex flex-column">
        <form onReset={this.handleReset}>
          <div className="mb-3" id="for-cat-search" >
            <label htmlFor="search-cat">Search by Category:</label>
            <input onSelect={this.handleChangeSelect} className="search-box mr-3"
              list="categories" id="cat-search" name="category-search" />
            <button
              className="p-1"
              type="reset"
              id="clear-select">
              Reset</button>
            <datalist id="categories" >
              {this.state.categories.map((cat, key) => {
                return (
                  <option key={cat.categoryId} value={cat.categoryName} >
                    {cat.categoryName} </option>);
              })}
            </datalist>
          </div>
          <div className="mb-1">Category: {this.state.categoryName}</div>
          {this.state.courses.map((course, key) => {
            return (
              <CourseSearchResult
                key={course.courseId}
                courses={this.state.courses}
                name={course.name}
                courseDesc={course.description}
                courseId={course.courseId}
                userName={this.props.userName}
                userId={this.props.userId}
                setView={this.props.setView}
                setCourse={this.props.setCourse}
              />
            );
          })}
        </form>
      </div >
    );
  }
}
