import React, { useContext } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const formSchema = z.object({
  name: z.string().nonempty("Name is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  email: z.string().email("Invalid email address"),
  ownerEmail: z.string(),
})

function CreateCompanyAccount() {
  const navigate = useNavigate();
  const {user} = useContext(AuthContext)
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      name: '',
      password: '',
      email: '',
      ownerEmail: user,
     
    },
    resolver: zodResolver(formSchema)
  });
  
  const onSubmit = (data) => {

    const previousData = localStorage.getItem(user) 
    ? JSON.parse(localStorage.getItem(user)) 
    : [];   console.log(previousData)

    previousData.push(data)
    localStorage.setItem(user, JSON.stringify(previousData))
    console.log('done')
    navigate('/')
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Register Your User</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="User Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('name')}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>

          <div>
            <input
              type="text"
              placeholder="User Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('password')}
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>

          <div>
            <input
              type="text"
              placeholder="user Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('email')}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          <div>
            <input
              type="text"
              placeholder=""
              disabled
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register('ownerEmail')}
            />
            {errors.ownerEmail && <span className="text-red-500 text-sm">{errors.ownerEmail.message}</span>}
          </div>

         

          <button
            type="submit"
            
            className={`w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Submit
          </button>

          <p>Already Have an Account</p> <Link to = '/login'>Login</Link>
          
        </form>
      </div>
    </div>
  );
}

export default CreateCompanyAccount;
