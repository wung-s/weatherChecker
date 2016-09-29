import React, { Component } from 'react';
import '../App.css';
import Button from './Button';
import InputText from './InputText';

function Wrapper() {
  return(
      <div>
        <p className="App-intro">
          Enter a city and a state
        </p>
        <div>
          <InputText />
          <Button />
        </div>

      </div>
  )
}

export default Wrapper;

