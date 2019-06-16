import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import Person from './Person/Person.js';
import Test from './Test/Test.js';
import MyFriends from './MyFriends/MyFriends.js';

class App extends Component {


  


  render(){

    return(
      <div className='App'>
        <MyFriends />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('#root'));
