import React from 'react'

const ErrorPage = () => {
  return (
    <div className="w-50 mx-auto shadow-md">
      <div className='d-flex justify-items-center align-items-center'>
        <h1 className='text-center text-warning'>404</h1>
        <h2 className='text-center text-danger'>Page Not Found !!</h2>
      </div>
    </div>
  );
}

export default ErrorPage