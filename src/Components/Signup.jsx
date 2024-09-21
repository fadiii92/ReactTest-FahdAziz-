import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const formSchema = z.object({
  ownerName: z.string().nonempty("Owner Name is required"),
  companyName: z.string().nonempty("Company Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  confirmPass: z.string().min(6, "Confirm password must be at least 6 characters long"),
}).refine((data) => data.password === data.confirmPass, {
  path: ['confirmPass'],
  message: "Passwords don't match",
});

function Signup() {
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      ownerName: '',
      companyName: '',
      email: '',
      password: '',
      confirmPass: '',
    },
    resolver: zodResolver(formSchema)
  });
  
  const onSubmit = (data) => {
    const previousData = localStorage.getItem('companies') 
    ? JSON.parse(localStorage.getItem('companies')) 
    : [];
    console.log(previousData, 'previous Data');
    
    previousData.push(data);
    
    localStorage.setItem('companies', JSON.stringify(previousData));
    
    navigate('/login')
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Register Your Company</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Owner Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('ownerName')}
            />
            {errors.ownerName && <span className="text-red-500 text-sm">{errors.ownerName.message}</span>}
          </div>

          <div>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('companyName')}
            />
            {errors.companyName && <span className="text-red-500 text-sm">{errors.companyName.message}</span>}
          </div>

          <div>
            <input
              type="text"
              placeholder="Company Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('email')}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Enter a Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('password')}
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Retype your Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('confirmPass')}
            />
            {errors.confirmPass && <span className="text-red-500 text-sm">{errors.confirmPass.message}</span>}
          </div>

          <button
            type="submit"
            
            className={`w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Submit
          </button>

          <p>Already Have an Account</p> <Link className = 'underline text-blue-500' to = '/login'>Login</Link>
          
        </form>
      </div>
    </div>
  );
}

export default Signup;
