import React from 'react';

const Dashboard = () => {
  return (
    <div className="container mt-5 bg-light p-4 rounded bg-primary-subtle">
      <h1 className="text-center mb-4">Welcome to Your Dashboard</h1>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Profile</h5>
              <p className="card-text">View and edit your profile information.</p>
              <a href="/profile" className="btn btn-primary">Go to Profile</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Settings</h5>
              <p className="card-text">Manage your account settings and preferences.</p>
              <a href="/settings" className="btn btn-primary">Go to Settings</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Reports</h5>
              <p className="card-text">Access your activity and performance reports.</p>
              <a href="/reports" className="btn btn-primary">View Reports</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Notifications</h5>
              <p className="card-text">Check your latest notifications and updates.</p>
              <a href="/notifications" className="btn btn-primary">View Notifications</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Messages</h5>
              <p className="card-text">Read and respond to your messages.</p>
              <a href="/messages" className="btn btn-primary">Go to Messages</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Tasks</h5>
              <p className="card-text">Manage your tasks and to-do lists.</p>
              <a href="/tasks" className="btn btn-primary">View Tasks</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;