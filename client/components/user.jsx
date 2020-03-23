import React from 'react';

export default function User(props) {
  return (
    <div className="w-75 d-flex justify-content-center">
      <button
        onClick={() => props.setView('loggedIn')}
        className="w-100 btn-lrg btn-warning text-light h2 mb-3 rounded">
        {props.name}
      </button>
    </div>
  );
}
