import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import { Link } from "@tanstack/react-router";

const employees = [
  {
    userID: "AB12345",
    fullName: "John Doe",
    emailAddress: "john@example.com",
    contact: "123-456-7890",
    organisation: "Org A",
    roles: "Admin",
    status: "Active",
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    userID: "AB12345",
    fullName: "Jane Smith",
    emailAddress: "jane@example.com",
    contact: "123-456-7891",
    organisation: "Org B",
    roles: "User",
    status: "Inactive",
    profilePicture: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    userID: "AB12345",
    fullName: "Blessy",
    emailAddress: "john@example.com",
    contact: "123-456-7891",
    organisation: "Org B",
    roles: "Admin",
    status: "Inactive",
    profilePicture:  "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    userID: "AB12345",
    fullName: "Sam",
    emailAddress: "john@example.com",
    contact: "123-456-7891",
    organisation: "Org B",
    roles: "User",
    status: "Active",
    profilePicture: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    userID: "AB12345",
    fullName: "Johnwick",
    emailAddress: "john@example.com",
    contact: "123-456-7891",
    organisation: "Org B",
    roles: "Admin",
    status: "Active",
    profilePicture: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    userID: "AB12345",
    fullName: "Sammy",
    emailAddress: "john@example.com",
    contact: "123-456-7890",
    organisation: "Org A",
    roles: "Admin",
    status: "Active",
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    userID: "AB12345",
    fullName: "Joseph",
    emailAddress: "jane@example.com",
    contact: "123-456-7891",
    organisation: "Org B",
    roles: "User",
    status: "Inactive",
    profilePicture: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    userID: "AB12345",
    fullName: "Jenny",
    emailAddress: "john@example.com",
    contact: "123-456-7891",
    organisation: "Org B",
    roles: "Admin",
    status: "Active",
    profilePicture:  "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    userID: "AB12345",
    fullName: "John Doe",
    emailAddress: "john@example.com",
    contact: "123-456-7890",
    organisation: "Org A",
    roles: "Admin",
    status: "Active",
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    userID: "AB12345",
    fullName: "Jane Smith",
    emailAddress: "jane@example.com",
    contact: "123-456-7891",
    organisation: "Org B",
    roles: "User",
    status: "Inactive",
    profilePicture: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    userID: "AB12345",
    fullName: "Blessy",
    emailAddress: "john@example.com",
    contact: "123-456-7891",
    organisation: "Org B",
    roles: "Admin",
    status: "Inactive",
    profilePicture:  "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    userID: "AB12345",
    fullName: "Sam",
    emailAddress: "john@example.com",
    contact: "123-456-7891",
    organisation: "Org B",
    roles: "User",
    status: "Active",
    profilePicture: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    userID: "AB12345",
    fullName: "Wick",
    emailAddress: "john@example.com",
    contact: "123-456-7891",
    organisation: "Org B",
    roles: "User",
    status: "Active",
    profilePicture: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    userID: "AB12345",
    fullName: "John",
    emailAddress: "john@example.com",
    contact: "123-456-7891",
    organisation: "Org B",
    roles: "Admin",
    status: "Inactive",
    profilePicture: "https://randomuser.me/api/portraits/men/5.jpg"
  },
];

const ManageUser = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterType, setFilterType] = useState('');
  const [filterCondition, setFilterCondition] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const itemsPerPage = 5;

  const filteredEmployees = employees.filter((employee) => {
    if (!filterType || !filterValue || !filterCondition) {
      return true;
    }

    let fieldValue = employee[filterType] ? employee[filterType].toLowerCase() : '';
    let conditionValue = filterValue.toLowerCase();

    switch (filterCondition) {
      case "equals":
        return fieldValue === conditionValue;
      case "startsWith":
        return fieldValue.startsWith(conditionValue);
      case "contains":
        return fieldValue.includes(conditionValue);
      default:
        return true;
    }
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEmployees.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="tw-min-h-screen tw-bg-gray-200">
      <header className="tw-bg-white tw-p-4 tw-shadow-md tw-sticky tw-top-0 tw-z-50">
        <div className="tw-flex tw-items-center tw-space-x-2">
          <h1 className="tw-text-3xl tw-font-bold">Manage User</h1>
          <nav className="tw-text-lg tw-flex tw-items-center tw-space-x-1">
            <span className=" hover:tw-underline">Home</span>
            <span>&gt;</span>
            <span className="tw-text-black tw-font-medium hover:tw-underline tw-text-lg">Manage User</span>
          </nav>
        </div>
      </header>
      <main className="tw-container tw-mx-auto tw-my-10">
        <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
          <div className="tw-flex tw-space-x-4">
            <select
              className="tw-bg-white tw-border tw-border-blue-900 tw-text-blue-900 tw-py-2 tw-px-0 tw-rounded leading-tight focus:tw-outline-none focus:tw-bg-white focus:tw-border-blue-500"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="" disabled hidden className="tw-text-blue-500">
                Filter
              </option>
              <option value="organisation" className="tw-text-black">Organization</option>
              <option value="roles" className="tw-text-black">Roles</option>
              <option value="status" className="tw-text-black">Status</option>
              <option value="fullName" className="tw-text-black">Name</option>
              <option value="userID" className="tw-text-black">User ID</option>
            </select>
            <select
              className="tw-bg-white tw-border tw-border-blue-900 tw-text-blue-900 tw-py-2 tw-px-0 tw-rounded leading-tight focus:tw-outline-none focus:tw-bg-white focus:tw-border-blue-500"
              value={filterCondition}
              onChange={(e) => setFilterCondition(e.target.value)}
            >
              <option value="" className="tw-text-black" disabled hidden>Select</option>k
              <option value="equals" className="tw-text-black">Equals to</option>
              <option value="startsWith" className="tw-text-black">Starts with</option>
              <option value="contains" className="tw-text-black">Contains</option>
            </select>
            <input
              type="text"
              placeholder="Write..."
              className="tw-bg-white tw-border tw-border-blue-900 tw-rounded tw-py-2 tw-px-1 focus:tw-outline-none focus:tw-border-blue-500"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
            />
          </div>
          <div className="tw-flex tw-space-x-2">
            <button className="tw-text-blue-900 tw-py-2 tw-px-4 tw-rounded tw-underline">
              Data Import/Export
            </button>
            <Link to="/users/AddUser">
              <button className="tw-bg-blue-900 tw-text-white tw-py-2 tw-px-4 tw-rounded hover:tw-bg-blue-700">
                + Add User
              </button>
            </Link>
          </div>
        </div>
        <div className="tw-bg-white tw-shadow-md tw-rounded">
          <table className="tw-min-w-full tw-bg-white">
            <thead>
              <tr>
                <th className="tw-py-2 tw-px-8 tw-bg-orange-200 tw-border-b tw-text-left">UserID</th>
                <th className="tw-py-2 tw-px-0 tw-bg-orange-200 tw-border-b tw-text-left">Full Name</th>
                <th className="tw-py-2 tw-px-8 tw-bg-orange-200 tw-border-b tw-text-left">Email Address</th>
                <th className="tw-py-2 tw-px-1 tw-bg-orange-200 tw-border-b tw-text-left">Contact</th>
                <th className="tw-py-2 tw-px-8 tw-bg-orange-200 tw-border-b tw-text-left">Organisation</th>
                <th className="tw-py-2 tw-px-8 tw-bg-orange-200 tw-border-b tw-text-left">Roles</th>
                <th className="tw-py-2 tw-px-8 tw-bg-orange-200 tw-border-b tw-text-left">Status</th>
                <th className="tw-py-2 tw-px-8 tw-bg-orange-200 tw-border-b tw-text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((employee) => (
                <tr key={employee.userID}>
                  <td className="tw-py-4 tw-px-8 tw-border-b tw-text-left">{employee.userID}</td>
                  <td className="tw-py-4 tw-px-0 tw-border-b tw-text-left">
                    <div className="tw-flex tw-items-center">
                      <img src={employee.profilePicture} className="tw-w-10 tw-h-10 tw-rounded-full tw-mr-2" />
                      {employee.fullName}
                    </div>
                  </td>
                  <td className="tw-py-4 tw-px-8 tw-border-b tw-text-left">{employee.emailAddress}</td>
                  <td className="tw-py-4 tw-px-1 tw-border-b tw-text-left">{employee.contact}</td>
                  <td className="tw-py-4 tw-px-8 tw-border-b tw-text-left">{employee.organisation}</td>
                  <td className="tw-py-4 tw-px-8 tw-border-b tw-text-left">{employee.roles}</td>
                  <td className={`tw-py-4 tw-px-8 tw-border-b tw-text-left ${employee.status === 'Active' ? 'tw-text-green-400 hover:tw-text-green-600' : 'tw-text-red-400  hover:tw-text-red-600'}`}>
                    {employee.status}
                  </td>
                  <td className="tw-py-4 tw-px-8 tw-border-b tw-text-center">
                    <button className="tw-text-gray-500 hover:tw-text-gray-700">
                      <i className="fas fa-edit"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <footer className="tw-flex tw-justify-between tw-items-center tw-my-4">
          <div className="tw-text-lg tw-text-gray-700">
            Page {currentPage}
          </div>
          <div className="tw-flex tw-space-x-2">
            <button
              onClick={() => handleClick(currentPage - 1)}
              disabled={currentPage === 1}
              className="tw-py-2 tw-px-4 tw-bg-gray-200 tw-rounded hover:tw-bg-gray-300 disabled:tw-opacity-50"
            >
              &lt;
            </button>
            {[...Array(totalPages).keys()].map((number) => (
              <button
                key={number + 1}
                onClick={() => handleClick(number + 1)}
                className={`tw-py-2 tw-px-4 ${currentPage === number + 1 ? ' tw-text-gray-400' : 'tw-bg-gray-200'} tw-rounded hover:tw-bg-gray-300`}
              >
                {number + 1}
              </button>
            ))}
            <button
              onClick={() => handleClick(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="tw-py-2 tw-px-4 tw-bg-gray-200 tw-rounded hover:tw-bg-gray-300 disabled:tw-opacity-50"
            >
              &gt;
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ManageUser;