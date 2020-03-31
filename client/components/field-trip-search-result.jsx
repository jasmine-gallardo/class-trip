import React from 'react';

export default class FieldTripSearchResult extends React.Component {
  render() {
    // const courseId = this.props.courseId;
    // const courseName = this.props.name;
    // const courseDesc = this.props.courseDesc;
    // const backPage = this.props.currentPage;
    return (
      <div className="col-12 card p-3 bg-light mb-2">
        <div className="row">
          <div className="col-9">
            <div className="h4 text-info">
              {/* {courseName} */}
            </div>
            <div className="desc text-secondary">
              {/* {courseDesc} */}
            </div>
          </div>
          <div className="d-flex flex-wrap align-items-center">
            <button

              type="button" className="btn btn-dark my-1 "> INFO </button>
          </div>
        </div>
      </div>
    );
  }
}
