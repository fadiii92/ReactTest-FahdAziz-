import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'

function Income() {
    const { user } = useContext(AuthContext)

    const [income, setIncome] = useState(() => {
       return JSON.parse(localStorage.getItem(user + ' Income'))
    })

    const incomeHandler = () => {
        const prevIncome = localStorage.getItem(user + ' Income')
            ? parseInt(JSON.parse(localStorage.getItem(user + ' Income')))
            : 0
            const newIncome = prevIncome + parseInt(income)
        localStorage.setItem(user + ' Income', JSON.stringify(newIncome))
        setIncome(newIncome)
    }
    return (
        <div>
            <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} />
            <button onClick={incomeHandler}>Add Income</button>

            <p>Your total Income as of now is : {income}</p>

        </div>
    )
}

export default Income
