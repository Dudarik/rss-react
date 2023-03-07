import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import AppStyles from './App.module.scss';

function App() {
  const [count, setCount] = useState(0);
  console.log(AppStyles);
  return (
    <div className={AppStyles.App}>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className={AppStyles.logo} alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className={[AppStyles.logo, AppStyles.react].join(' ')}
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={AppStyles.card}>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
