import React, { Component } from 'react';
import logo from './logo.svg';
import {Card} from 'antd';
import './App.css';
import Main from './Main';
import CardTemp from './CardTemp';
import Start from './Start';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      open:false
    }
  }
  componetDidMount(){

  }
  render() {
    return (
      <div className="App" >
        {/*
          this.state.open?<Main/>:<Start />*/
        }
        <Main />
      </div>
    );
  }
}

export default App;
