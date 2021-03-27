import React,{useMemo, useState} from 'react'
import './App.css';
import BasicForms from './components/useState/forms/BasicForms';
import RegistrationFrom from './components/useState/forms/RegistrationFrom';
import NameChange from './components/useState/NameChange';
import RuleHooks from './components/useState/RuleHooks';
import SortCirEvl from './components/useState/SortCirEvl';
import UseEffect1 from './components/useEffect/UseEffect1';
import UseEffect2 from './components/useEffect/UseEffect2';
import UseStateArray from './components/useState/UseStateArray';
import UseStateObject from './components/useState/UseStateObject';
import UseEffectApi from './components/useEffect/UseEffectApi'
import Uncontrolled from './components/useState/forms/Uncontrolled';

const App = () => {

  return (
    <div className="App">
      {/* <NameChange></NameChange> */}
      {/* <RuleHooks></RuleHooks> */}
      {/* <UseStateArray/> */}
      {/* <UseStateObject></UseStateObject> */}
      {/* <SortCirEvl/> */}
      {/* <BasicForms/> */}
      {/* <RegistrationFrom/> */}
      {/* <UseEffect1></UseEffect1> */}
      {/* <UseEffect2/> */}
      {/* <UseEffectApi/> */}
      <Uncontrolled/>
    </div>
  );
}

export default App;
