import React from 'react';
import Nav from './components/Nav/nav';
import Footer from './components/Footer/footer';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './container';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Nav/>
       <div>
         <Container />
      </div>
      <Footer/>
    </Router>
</>
  );
}

export default App;
