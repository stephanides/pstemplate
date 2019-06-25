import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header';

const Layout = ({ children }) => (
  <div className="App">
    <Header />
    { children }
  </div>
);

export default Layout;
