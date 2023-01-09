import './App.css';
import {  useState } from 'react';

function App() {

  const[quotes,setQuotes]=useState([]);

  const handleQuotes =()=>{
   fetch("https://leila-quotes-server-app.glitch.me/quotes/random")
     .then((response) => response.json())
     .then((data) => setQuotes(data));
  }
  
  return (
    <div className="App container">
      <p className='quote'>{quotes.quote}</p>
     {quotes.author ? <p className='author'>{`--${quotes.author}--`}</p> : <p></p> } 
      <button onClick={handleQuotes} className='btn'>Show Quotes</button>
    </div>
  );
}

export default App;
