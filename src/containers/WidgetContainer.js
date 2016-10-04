import React, { Component } from 'react';
import sunshingImage from '../assets/images/01d.svg';

class WidgetContainer extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log('componentDidMount...');
  }

  render() {
    console.log('loading WidgetContainer');
    return (
      <div>
        <div>
          <p>Select a Day</p>
        </div>
        <div className="col-md-4">
          <img src={sunshingImage} alt="Bright Day" />
          <p>Friday, Sept 30</p>
        </div>

      </div>
    )
  }
}

export default WidgetContainer;
