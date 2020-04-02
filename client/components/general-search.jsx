import React from 'react';

export default function GeneralSearch(props) {

  return (
    <div className="row flex-column pt-4">
      <div className="col my-3">
        <p className="h3">Find courses you&apos;re interested in.</p>
        <p className="lead">Pick from categories you love.</p>
        <div className="col-12 card p-3 mb-2 bg-light shadow-sm">
          <div className="row my-auto">
            <div className="col-9 py-3 pl-4">
              <div className="h4 open-sans mb-0 text-info">
                Search Courses
              </div>
            </div>
            <div className="d-flex flex-wrap align-items-center col-3">
              <button
                onClick={() => props.setView('searchCourses')}
                type="button" className="btn btn-dark my-1">&gt;</button>
            </div>
          </div>
        </div>
      </div>

      <div className="col my-3">
        <p className="h3">Find field trips near you.</p>
        <p className="lead">RSVP to field trips or study nights planned by your local class mates.</p>
        <div className="col-12 card p-3 mb-2 bg-light shadow-sm">
          <div className="row my-auto">
            <div className="col-9 py-3 pl-4">
              <div className="h4 open-sans mb-0 text-info">
                Search Field Trips
              </div>
            </div>
            <div className="d-flex flex-wrap align-items-center col-3">
              <button
                onClick={() => props.setView('searchFieldTrips')}
                type="button" className="btn btn-dark my-1">&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
