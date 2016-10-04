import React, { Component } from 'react';
// import Header from '../components/Header';
import Home from '../components/Home';

class HomeContainer extends Component {
  constructor() {
    super();
   this.state = {
      location: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(e) {
    console.log(e.target.value);
    this.setState({
      location: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let location = this.state.location;
    this.setState({
      location: ''
    })
    this.context.router.push('/forecast/' + location);
  }

  componentDidMount() {
    console.log('componentDidMount...');
  }

  render() {
    console.log('loading HomeContainer');
    return (
      <Home
        onUpdate={this.handleUpdate}
        onSubmit={this.handleSubmit}
      />
    )
  }
}

HomeContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default HomeContainer;
