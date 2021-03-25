import React,{useState} from 'react'
import './App.css';
import BasicForms from './components/forms/BasicForms';
import RegistrationFrom from './components/forms/RegistrationFrom';
import NameChange from './components/NameChange';
import RuleHooks from './components/RuleHooks';
import SortCirEvl from './components/SortCirEvl';
import UseStateArray from './components/UseStateArray';
import UseStateObject from './components/UseStateObject';

const App = () => {

  return (
    <div className="App">
      {/* <NameChange></NameChange> */}
      {/* <RuleHooks></RuleHooks> */}
      {/* <UseStateArray/> */}
      {/* <UseStateObject></UseStateObject> */}
      {/* <SortCirEvl/> */}
      {/* <BasicForms/> */}
      <RegistrationFrom/>
    </div>
  );
}

export default App;
