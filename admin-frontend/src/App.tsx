import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const func = async () => {
    const res = await fetch('http://localhost:5000/home');
    console.log(res);
  };

  useEffect(() => {
    func();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Hello from admin-frontend
        </a>
      </header>
    </div>
  );
}

export default App;
