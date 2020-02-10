import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Welcome from './WelcomeSect';
import Justin from './Background/justin-background.png'

const image = 'url('+Justin+')'

const App = () => {
  return (
    <div className="App" 
      style={{
        backgroundImage: image,
        backgroundSize: 'cover',
    }}>
      <header className='App-header' style={{position: 'sticky'}}>
        <NavBar/>
      </header>
      <body>
        <div className='App-welcome'>
          <Welcome/>
        </div>
      </body>
    </div>
  );
}

export default App;
