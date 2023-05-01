import React from 'react'
import { Button } from "react-bootstrap";
import Header from '../pages/shared/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
          <Header></Header>
          <Outlet></Outlet>
    </div>
  );
}

export default Main