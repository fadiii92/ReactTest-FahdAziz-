import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'

function UserPanel() {
    const {user, logout} = useContext(AuthContext)
    const navigate = useNavigate()
  return (
    <div>
      <h2>Congratulations {user} you are logged in.</h2>
      <NavLink to='/Expanses'>
                <li>set Expenses</li>
              </NavLink>
      <br />

      <button onClick={()=>{
        logout()
        navigate('/login')
      }}>Logout</button>

    </div>
  )
}

export default UserPanel
