import React from 'react';
import store from './store/store.js'
import './style.css';
import InputMirror from './InputMirror';


function App() {
  return (
    <div className="App">
  

      <InputMirror store={store}/>
  
    </div>
  );
}

export default App;
