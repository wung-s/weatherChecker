import React, { PropTypes } from 'react';
import InputText from './InputText';
import Button from './Button';

function Header(props) {
  return (
    <div className="App-header">
      <form onSubmit={props.onSubmit}>
        <div className='col-md-6'>
          <p> Weather Now </p>
        </div>
        <InputText onUpdate={props.onUpdate} />
        <Button />
      </form>
    </div>
  )
}

Header.propTypes = {
    onUpdate: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}


export default Header;