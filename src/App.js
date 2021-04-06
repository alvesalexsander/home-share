import { useState } from 'react';
import './App.css';
import { TopBar } from './top-bar/TopBar';

function App() {

  const [ userName, setUserName ] = useState();

  return (
    <div className="App">
      <TopBar 
      userName={userName} 
      setUserName={setUserName}/>
    </div>
  );
}

export default App;
