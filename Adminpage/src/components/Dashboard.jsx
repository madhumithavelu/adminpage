import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="header">
        <h1>Super Admin Dashboard</h1>
        <button className="create-user">+ CREATE USER</button>
      </div>

      <div className="cards">
        <div className="card blue">Total Programs</div>
        <div className="card green">Active Batches</div>
        <div className="card orange">Total Trainees</div>
        <div className="card purple">Progress Records</div>
      </div>

      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <button className="btn-outline">Manage Users</button>
        <button className="btn-pink">View Reports</button>
        <button className="btn-green">System Settings</button>
      </div>

      <div className="user-management">
        <h3>User Management</h3>
        <p>Create and manage trainer and trainee accounts</p>
      </div>
    </div>
  );
};

export default Dashboard;