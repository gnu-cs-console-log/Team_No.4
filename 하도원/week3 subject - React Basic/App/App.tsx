import React from 'react';
import './App.css';
import Nav from './Component/Header';
import Main from './Component/Section';
import Footer from './Component/Footer';

export default function App() {
  return (
    <div className="App">
      <link 
        rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" 
        integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" 
        crossorigin="anonymous">
        </link>
      <header>
        <Nav/>  
      </header>
      <Main/>
      <Footer/>
    </div>
  );
}

