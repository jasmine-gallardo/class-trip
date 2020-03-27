import React from 'react';
export default function LessonDetails(props) {
  return (
    <div className="bg-light h-100 p-2">
      <h2 className="mb-5">Every story requires 3 things:</h2>
      <div className="mb-5">
        <ol className="h4">
          <li>A beginning</li>
          <li>A middle</li>
          <li>An end</li>
        </ol>
      </div>
      <div>
        <p className="h4">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </div>
  );
}
