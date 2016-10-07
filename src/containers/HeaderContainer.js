import React, { Component } from 'react';
// import InputText from './InputText';
// import Button from './Button';
import Header from '../components/Header';


class HeaderContainer extends Component {
  constructor() {
    super();
    this.state = {
      location: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(e) {
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

  render() {
    return (
      <Header
        onUpdate={this.handleUpdate}
        onSubmit={this.handleSubmit}
        />
    )
  }
}

HeaderContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default HeaderContainer;
