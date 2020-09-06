import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout'
import Welcome from './components/Welcome/Welcome'
import Particles from './components/UI/Particles/Particles'
import About from './components/About/About'
import Experiences from './components/Experiences/Experiences'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'

class App extends Component {

  render(){

    return (
      <div className="App">
        <Layout/>
        <Welcome/>
        <Particles/>
        <About/>
        <Experiences/>
        <Projects/>
        <Footer/>

      </div>
    );
  }
}

export default App;
