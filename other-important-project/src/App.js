import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//parent component
class App0 extends Component {
  render() {
    return (
        <ul>
              <ListItem quantity='1'> one</ListItem>
              <ListItem quantity='2'> two</ListItem>
              <ListItem quantity='3'> three</ListItem>
        </ul>
    );
  }
}

//child component
class ListItem extends Component {
    render(){
        return(
            <li>
                { this.props.quantity  } * {this.props.children}
            </li>
        )
    }
}






export default App;
