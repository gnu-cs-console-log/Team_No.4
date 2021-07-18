import React from 'react';
import './App.css';
import Nav from "./component/Nav";
import Profile from "./component/Profile";
import Card from "./component/Card";
import {data} from "./cardData.json";

export default function App() {
  return (
    <div className="App">
      <header>
        <Nav />
        <div className="title">다혜의 Portfoilo</div>
        <Profile />
      </header>
      
      <div className="content">
        <button>Post</button>
        <div className="articles">
          {data.Card.map((card) => (
            <Card 
              id={card.id}
              image={card.image}
              description={card.description}
            />
          ))} 
        </div>
      </div>
    </div>
  );
}