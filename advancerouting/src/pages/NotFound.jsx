import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className='py-20 bg-white text-center min-h-screen flex items-center justify-center'>
      <div className='container mx-auto max-w-2xl px-4'>
        <div className='mb-8'>
          <div 
            className='bg-cover bg-center h-96 flex items-center justify-center rounded-lg mb-6'
            style={{
              backgroundImage: 'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)',
            }}
          >
            <h1 className='text-9xl font-bold text-white drop-shadow-lg'>404</h1>
          </div>

          <div className='mt-8'>
            <h2 className='text-4xl font-bold text-gray-800 mb-4'>
              Look like you're lost
            </h2>

            <p className='text-xl text-gray-600 mb-8'>
              The page you are looking for is not available!
            </p>

            <Link 
              to='/' 
              className='inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded transition duration-300'
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound