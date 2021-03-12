import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ApplicationViews } from './components/ApplicationViews'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
    <Navbar />
    <ApplicationViews />
    </>
  );
}

export default App;
