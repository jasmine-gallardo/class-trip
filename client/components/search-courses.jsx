import React from 'react';

export default class SearchCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      courses: []
    };
  }

componentDidMount() {
  this.getCategories();
}

getCategories() {
    fetch('/api/categories')
      .then(res => res.json())
      .then(categoriesArray => this.setState({ categories: categoriesArray }))
      .catch(err => console.error(err));
}

getCatCourses(courseName) {
    fetch('/api/courses')
      .then(res => res.json())
      .then(coursesArray => this.setState({ courses: coursesArray }))
      .catch(err => console.error(err));
}


  render() {
    return (
      <div>
        <div className="mt-4 ml-3 h-75" id="for-cat-search" >
          <label htmlFor="search-cat">Search by Category:</label>
          <input className="search-box" list="categories" id="cat-search" name="category-search" />
          <datalist id="categories">
            <option value="Economics">Economics</option>
          </datalist>
        </div>
      </div >
    );
  }
  }

// function Result(props) {
//   return (
//     // map through courses here
//     // add result box with button
//   )
// }


//
// import React from 'react';

// export default class UserCourses extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       courses: []
//     };
//     this.getCourses = this.getCourses.bind(this);
//   }

//   componentDidMount() {
//     this.getCourses(this.props.userId);
//   }

//   getCourses(userId) {
//     fetch(`/api/users_courses/${userId}`)
//       .then(res => res.json())
//       .then(coursesArray => this.setState({ courses: coursesArray }))
//       .catch(err => console.error(err));
//   }

//   render() {
//     return (
//       <div className="h-75 d-flex flex-wrap justify-content-center">
//         <div className="w-50 m-auto p-2 d-flex justify-content-center justify-content-between">
//           <i className="far fa-bookmark fa-3x"></i>
//           <p className="h2">Courses</p>
//         </div>
//         {
//           this.state.courses.map(course => {
//             return (
//               <Course
//                 key={course.courseId}
//                 name={course.name}
//                 userName={this.props.userName}
//                 userId={this.props.userId}
//                 courseId={course.courseId}
//                 setView={this.props.setView}
//               />
//             );
//           })
//         }
//       </div>
//     );
//   }
// }

// function Course(props) {
//   const userName = props.userName;
//   const userId = props.userId;
//   const courseId = props.courseId;
//   const courseName = props.name;

//   return (
//     <div className="w-100 d-flex justify-content-center">
//       <button
//         onClick={() => props.setView('myLessons', userName, userId, courseId)}
//         className="w-100 btn-block btn-warning text-light h4 mb-3 rounded">
//         {courseName}
//       </button>
//     </div>
//   );
// }


          {/* THIS IS POPULAR COURSES SECTION */}
        {/* <div id="popular-courses d-flex row">
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
        </div> */}
