import React, { Component } from 'react';
import InputText from './InputText';
import Button from './Button';

// class Header extends Component {
function Header(props) {
  return (
    <div className="App-header">
      <form onSubmit={props.onSubmit}>
        <div className='col-md-6'>
          <p> Weather Now </p>
        </div>
        <InputText />
        <Button />
      </form>
    </div>
  )
}


export default Header;