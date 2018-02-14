import React, { Component } from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';

class App extends Component {
  state = {
    mounted: true
  };

  handleSubmit = event => {
    event.preventDefault(); //чтобы браузер не отправил данные на сервер
    this.setState({ mounted: false });
  };

  render() {
    return (
      <div className="App">
        <CSSTransitionGroup
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeOut={500}
          transitionLeaveTimeOut={300}>
          {this.state.mounted && <Form onSubmit={this.handleSubmit} />}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default App;
