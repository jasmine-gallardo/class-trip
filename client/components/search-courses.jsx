import React from 'react';

export default class SearchCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      courses: []
    }
  }

  render() {
    return (
      <div className="component-body p-4 pt-5">
        <div className="mt-4 ml-3 h-75" id="for-cat-search" >
          <label htmlFor="search-cat">Search by Category:</label>
          <input className="search-box" list="categories" id="cat-search" name="category-search" />
          <datalist id="categories">
            <option value="Economics">Economics</option>
            <option value="Engineering">Engineering</option>
            <option value="English">English</option>
            <option value="Film">Film</option>
            <option value="Art">Art</option>
            <option value="Finance">Finance</option>
          </datalist>
        </div>

        <div id="popular-courses d-flex row">
          <h6 className="text-center">Popular Courses</h6>
          <div className="d-flex justify-content-around">
            <div className="pop-course d-inline-flex justify-content-center align-items-center" id="painting">
              <div className="in-border pt-2">
                <p>Painting in Quarantine for Beginners</p>
              </div>
            </div>
            <div className="pop-course d-inline-flex justify-content-center align-items-center" id="meditation">
              <div className="in-border pt-4">
                <p>Meditation 101</p>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
