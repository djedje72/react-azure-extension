import React from 'react';
import './App.css';
import Spinner from "./spinner";
import Settings from "./settings";
import PullRequests from "./pullRequests";

function App() {
  return (
    <div className="app">
      <div className="waiting">
          <Spinner/>
      </div>
      <Settings/>
      <PullRequests/>
    </div>
  );
}

export default App;
