import React from 'react'
import './ErrorPage.css'
import Header from '../shared/Header';
import error1 from '../../assets/error2.svg';

const ErrorPage = () => {
  return (
    <>
      <Header></Header>
      <div className="errorContainer">
        <div className='errorContentContainer'>
         <h3 className='text-danger'>You have lost</h3>
           <img src={error1} className="errorImg"/>
        </div>
      </div>
    </>
  );
}

export default ErrorPage