import React from 'react';

// class InputText extends Component {
function InputText(props) {
  return(
    <input type='text' placeholder='Pune' onChange={props.onUpdate} />
  )
}

export default InputText;

