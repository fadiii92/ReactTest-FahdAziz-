import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider'

function UserLogin() {

    const { user, login } = useContext(AuthContext)
    const [errormessage, setErrorMessage] = useState(null)
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {

        const ownerData = JSON.parse(localStorage.getItem(data.ownerEmail))
        console.log(ownerData)
        if(ownerData !== null){
            const filteredData = ownerData.filter((curr)=>{
                return curr.email === data.email
            })
            console.log(filteredData)
            if(filteredData.length === 0)
                setErrorMessage('Could not find Owner')
            else
                if(filteredData[0].email === data.email && filteredData[0].password === data.password)
                    {
                        navigate('/UserPanel')
                        login(data.email)
                    }
                else{
                    setErrorMessage('UserName or password is incorrect')
                }
            
           
        }
            else{
        console.log('could not ifnd any thing')
        }


       
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Your Email Address"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...register('email', { required: "Email is required" })}
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Your Password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...register('password', { required: "Password is required" })}
                        />
                        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                    </div>


                    <div>
                        <input
                            type="text"
                            placeholder="Verify your ownerEmail"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            {...register('ownerEmail')}
                        />
                        {errors.ownerEmail && <span className="text-red-500 text-sm">{errors.ownerEmail.message}</span>}
                    </div>

                    <button
                        type="submit"
                        
                        className={`w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        {isSubmitting ? '....Loading' : 'Submit'}
                    </button>

                    <p>To Create a Company Account </p><Link to={'/register'}>Click Here</Link>
                    <p>Have a User Account </p><Link to={'/UserLogin'}>Click Here to Login</Link><br />
                    <span>{errormessage !== null && 'could not find owner'}</span>
                </form>
            </div>
        </div>
    );
}

export default UserLogin
