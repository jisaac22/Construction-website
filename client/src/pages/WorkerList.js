import React from 'react';
// Import Link component for all internal application hyperlinks
import { Link } from 'react-router-dom';

const WorkerList = ({ workers, name }) => {
  if (!workers.length) {
    return <h3>No Workers Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{name}</h3>
      <div className="flex-row justify-space-between my-4">
        {workers &&
          workers.map((worker) => (
            <div key={worker._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {worker.name} <br />
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    currently has {worker.skills ? worker.skills.length : 0}{' '}
                    endorsed skill
                    {worker.skills && worker.skills.length === 1 ? '' : 's'}
                  </span>
                </h4>

                {/* Use <Link> component to create an internal hyperlink reference. Use `to` prop to set the path instead of `href` */}
                <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/profiles/${worker._id}`}
                >
                  View and endorse their skills.
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WorkerList;