import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
 <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <div className="flex justify-center">
            
        </div>
        <h3 className="text-2xl font-bold text-center">Login to your account</h3>
        <form action="">
            <div className="mt-4">
                <div>
                    <label className="block" for="email">Email</label>
                            <input type="text" placeholder="Email"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"></input>
                            
                </div>
                <div className="mt-4">
                    <label className="block">Password</label>
                            <input type="password" placeholder="Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"></input>
                </div>
                <div className="flex items-baseline justify-between">
                   <Link to ="/home" >
                    <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                    </Link>
                  
                    <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>

                </div>
            </div>
        </form>
    </div>
</div>
</>

  )
}

export default Login