// DashboardLayout.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
// import Appointments from './Appointments';
// import Customers from './Customers';
// import StaffSchedules from './StaffSchedules';
// import Analytics from './Analytics';
// import Services from './Services';
// import Settings from './Settings';
// import Notifications from './Notifications';
// import Reports from './Reports';
// import Feedback from './Feedback';
import './Dash.css';

const Dashboard = () => {
  return (
    <Router>
      <div className="dashboard-container">
        <nav className="sidebar">
          <h2>Barber Dashboard</h2>
          {/* <ul>
            <li><NavLink to="/appointments" activeClassName="active-link">Appointments</NavLink></li>
            <li><NavLink to="/customers" activeClassName="active-link">Customers</NavLink></li>
            <li><NavLink to="/staff-schedules" activeClassName="active-link">Staff Schedules</NavLink></li>
            <li><NavLink to="/analytics" activeClassName="active-link">Analytics</NavLink></li>
            <li><NavLink to="/services" activeClassName="active-link">Services</NavLink></li>
            <li><NavLink to="/settings" activeClassName="active-link">Settings</NavLink></li>
            <li><NavLink to="/notifications" activeClassName="active-link">Notifications</NavLink></li>
            <li><NavLink to="/reports" activeClassName="active-link">Reports</NavLink></li>
            <li><NavLink to="/feedback" activeClassName="active-link">Feedback</NavLink></li>
          </ul> */}
        </nav>

        <main className="main-content">
          {/* <Routes>
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/staff-schedules" element={<StaffSchedules />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/services" element={<Services />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes> */}
        </main>
      </div>
    </Router>
  );
};
export default Dashboard;


// const Appointments = () => (
//   <div className="appointments-page">
//     <h1>Appointments</h1>
//     <p>Manage customer bookings, view schedules, and track status in real-time.</p>
//     <button className="primary-button">Add Appointment</button>
//     <table className="data-table">
//       <thead>
//         <tr>
//           <th>Customer</th>
//           <th>Date</th>
//           <th>Time</th>
//           <th>Service</th>
//           <th>Status</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>John Doe</td>
//           <td>2025-01-24</td>
//           <td>10:00 AM</td>
//           <td>Haircut</td>
//           <td>Confirmed</td>
//           <td><button className="secondary-button">Edit</button> <button className="danger-button">Cancel</button></td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// );

// const Customers = () => (
//   <div className="customers-page">
//     <h1>Customers</h1>
//     <p>View customer profiles, history, and preferences.</p>
//     <button className="primary-button">Add Customer</button>
//     <table className="data-table">
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Phone</th>
//           <th>Total Visits</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Jane Smith</td>
//           <td>jane@example.com</td>
//           <td>123-456-7890</td>
//           <td>5</td>
//           <td><button className="secondary-button">View</button></td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// );

// const StaffSchedules = () => (
//   <div className="staff-schedules-page">
//     <h1>Staff Schedules</h1>
//     <p>Manage shifts and availability for staff members.</p>
//     <button className="primary-button">Add Schedule</button>
//     <table className="data-table">
//       <thead>
//         <tr>
//           <th>Staff</th>
//           <th>Role</th>
//           <th>Shift</th>
//           <th>Date</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Michael</td>
//           <td>Barber</td>
//           <td>Morning</td>
//           <td>2025-01-24</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// );

// const Analytics = () => (
//   <div className="analytics-page">
//     <h1>Analytics</h1>
//     <p>Track KPIs like revenue, customer retention, and top-performing services.</p>
//     <div className="analytics-charts">
//       <div className="chart">Revenue Trends</div>
//       <div className="chart">Top Services</div>
//       <div className="chart">Customer Demographics</div>
//     </div>
//   </div>
// );

// const Services = () => (
//   <div className="services-page">
//     <h1>Services</h1>
//     <p>Update and manage service offerings and their details.</p>
//     <button className="primary-button">Add Service</button>
//     <table className="data-table">
//       <thead>
//         <tr>
//           <th>Service</th>
//           <th>Price</th>
//           <th>Duration</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Haircut</td>
//           <td>$25</td>
//           <td>30 mins</td>
//           <td><button className="secondary-button">Edit</button></td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// );

// const Settings = () => (
//   <div className="settings-page">
//     <h1>Settings</h1>
//     <p>Configure shop preferences, working hours, and staff permissions.</p>
//     <form>
//       <label>
//         Shop Name:
//         <input type="text" placeholder="Enter shop name" />
//       </label>
//       <label>
//         Working Hours:
//         <input type="text" placeholder="e.g., 9 AM - 9 PM" />
//       </label>
//       <label>
//         Admin Email:
//         <input type="email" placeholder="Enter admin email" />
//       </label>
//       <button className="primary-button">Save Settings</button>
//     </form>
//   </div>
// );

// const Notifications = () => (
//   <div className="notifications-page">
//     <h1>Notifications</h1>
//     <p>Manage notifications for customers and staff.</p>
//     <ul className="notifications-list">
//       <li>John Doe - Appointment Reminder</li>
//       <li>Jane Smith - Feedback Request</li>
//     </ul>
//   </div>
// );

// const Reports = () => (
//   <div className="reports-page">
//     <h1>Reports</h1>
//     <p>Generate and download detailed business reports.</p>
//     <button className="primary-button">Generate Report</button>
//   </div>
// );

// const Feedback = () => (
//   <div className="feedback-page">
//     <h1>Feedback</h1>
//     <p>View customer feedback and ratings.</p>
//     <ul className="feedback-list">
//       <li>John Doe - "Great service!"</li>
//       <li>Jane Smith - "Loved the ambiance."</li>
//     </ul>
//   </div>
// );

// const FeedbackForm = () => (
//   <div className="feedback-form">
//         <h1>Submit Feedback</h1>
//     <p>We value your feedback! Please fill out the form below.</p>
//     <form>
//       <label>
//         Name:
//         <input type="text" placeholder="Your name" />
//       </label>
//       <label>
//         Email:
//         <input type="email" placeholder="Your email" />
//       </label>
//       <label>
//         Feedback:
//         <textarea placeholder="Your feedback"></textarea>
//       </label>
//       <button className="primary-button">Submit</button>
//     </form>
//   </div>
// );

// export default Dashboard;
