import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";

class App extends React.Component {
  render = () => <div className={'app-wrapper'}>
    <Header/>
    <Navbar/>
    <Profile/>
  </div>;
}

export default App;
