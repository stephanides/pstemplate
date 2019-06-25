import React from 'react';
import Layout from './components/Layout';
import Preview from './components/Preview';
import Main from './components/Main';
import Advertise from './components/Advertise';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
// import './App.css';

const App = () => (
  <Layout>
    <Preview />
    <Main />
    <Advertise />
  </Layout>
);

export default App;
