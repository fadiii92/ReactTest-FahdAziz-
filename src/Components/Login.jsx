import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from '../context/AuthProvider'

const Login = () => {
  const {login} = useContext(AuthContext)
  const [errormessage, setErrorMessage] = useState(null)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {

    const allCompanies = JSON.parse(localStorage.getItem('companies'))
    const currentUser = allCompanies.filter((curr)=>{
      return curr.email === data.email
    })
    if(currentUser[0].email === data.email && currentUser[0].password === data.password)
    {
      login(data.email)
      navigate('/')
      console.log('matched')
    }
    else{
      setErrorMessage('Email or password does not match')
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


          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? '....Loading' : 'Submit'}
          </button>

          <p>To Create a Company Account </p><Link to={'/register'}>Click Here</Link>
          <p>Have a User Account </p><Link to={'/UserLogin'}>Click Here to Login</Link>
          <span>{errormessage !== null && 'Email or passwrod is incorrect'}</span>
        </form>
      </div>
    </div>
  );
};

export default Login;
