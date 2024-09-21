import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

function Header() {
  const { user, logout } = useContext(AuthContext);
  
  return (
    <header className="bg-blue-500 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <ul className="flex gap-7 space-x-4">
          {user !== null ? (
            <>
              <li>
                <NavLink 
                  to='/CreateCompanyAccount'
                  className={({ isActive }) => isActive ? "text-yellow-400" : "text-white hover:text-yellow-300"}
                >
                  Create Company Account
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to='/ViewCompanyUsers'
                  className={({ isActive }) => isActive ? "text-yellow-400" : "text-white hover:text-yellow-300"}
                >
                  View Company Users
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to='/Income'
                  className={({ isActive }) => isActive ? "text-yellow-400" : "text-white hover:text-yellow-300"}
                >
                  Income
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to='/login'
                  onClick={logout}
                  className="text-red-500 hover:text-red-300"
                >
                  Logout
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <NavLink 
                to='/register'
                className={({ isActive }) => isActive ? "text-yellow-400" : "text-white hover:text-yellow-300"}
              >
                Create Company
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
