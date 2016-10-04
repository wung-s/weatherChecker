import React, { PropTypes } from 'react';
import '../App.css';
import Button from './Button';
import InputText from './InputText';

function Home(props) {
  return(
      <div>
        <p className="App-intro">
          Enter a city and a state
        </p>
        <div>
          <form onSubmit={props.onSubmit}>
            <InputText onUpdate={props.onUpdate} />
            <Button />
          </form>
        </div>

      </div>


  )
}

Home.propTypes = {
    onUpdate: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}



export default Home;

