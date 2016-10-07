import React, { Component, PropTypes } from 'react';
import Detail from '../components/Detail';


class DetailContainer extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    return (
      <Detail weather={this.props.location.state.weather}/>
    )
  }
}

DetailContainer.prototype
export default DetailContainer;
