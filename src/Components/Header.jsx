import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

function Header() {
  const { user, logout } = useContext(AuthContext)
  return (
    <div>
      <ul>
        {user !== null ?
          (
            <>
              <NavLink to='/CreateCompanyAccount'>
                <li>Create Company Account</li>
              </NavLink>
              <NavLink to='/ViewCompanyUsers'>
                <li>View Company Users</li>
              </NavLink>
            
              <NavLink to='/Income'>
                <li>Income</li>
              </NavLink>



              <br />
              <NavLink to='/login' onClick={logout}>
                <li>Logout</li>
              </NavLink>
            </>
          )

          : (<NavLink to='register'>
            <li>Create Company</li>
          </NavLink>)}


      </ul>
    </div>
  )
}

export default Header
