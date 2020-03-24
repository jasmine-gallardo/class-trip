import React from 'react';

export default function Home(props) {
  return (
    <div>
      <div className="w-50 m-auto p-2 d-flex justify-content-center justify-content-between">
        <i className="fas fa-user fa-3x"></i>
        <p className="h2 ml-2">{props.userName}</p>
      </div>
      <div className="search-buttons mt-5 mb-5 d-flex justify-content-center align-items-center">
        <button className="courses pt-5 pb-5 pr-4 pl-4 mr-1 text-light h4" type="submit">Courses</button>
        <button className="field-trips pt-5 pb-5 pr-3 pl-3 ml-1 text-light h4 ">Field Trips</button>
      </div>
      <div className="text-center">
        <div>
          <button className="w-75 btn-lg btn-dark m-2" type="submit">My Courses</button>
        </div>
        <div>
          <button className="w-75 btn-lg btn-dark m-2" type="submit">My Field Trips</button>
        </div>
      </div>
    </div>
  );
}
