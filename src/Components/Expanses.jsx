import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'

function Expanses() {
  const {user} = useContext(AuthContext)
  const [expanse, setExpanse] = useState(0)

  const handleExpanse = ()=>{
      localStorage.setItem(user+' expanse', JSON.stringify(expanse))
  }

  return (
    <div>
        <input type="text" value={user} disabled />
        <input type="number" placeholder='Enter Expanse' onChange={(e)=>{setExpanse(e.target.value)}}/>

        <button onClick={handleExpanse}></button>
        

    </div>
  )
}

export default Expanses
