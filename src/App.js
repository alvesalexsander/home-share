import { useState } from 'react';
import './App.css';
import { TopBar } from './TopBar/TopBar';
import { Main } from './Main/Main';

function App() {

  const [ userName, setUserName ] = useState();

  return (
    <div className="App">
      <TopBar 
      userName={userName} 
      setUserName={setUserName}/>
      <Main />
    </div>
  );
}

export default App;
