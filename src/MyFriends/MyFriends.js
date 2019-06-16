import React, {Component} from 'react';
import axios from 'axios';
import Person from '../Person/Person.js';
import './MyFriends.css';
class MyFriends extends Component{

  state = {
    persons: [],
  }

   async componentDidMount( ){
     let response = await axios(`https://randomuser.me/api/?results=1`)
     this.setState(prevState => ({
       persons: [...prevState.persons, ...response.data.results]
     }))
  }

   update = async () => {
    const response = await axios(`https://randomuser.me/api/?results=1`)

    this.setState(prevState => ({
      persons: [...prevState.persons, ...response.data.results]
    }))

  }


  handleDelete = (e) => {
    const test = this.state.persons.splice(-1)
    let oare = this.state.persons.filter( i => i !== test)
    this.setState({
      persons: oare
    })
  }

  updatePerson = (state, first, last, age, email, numar, pic, nat) => {
    const persoana_noua = {
      name: {first: first, last: last},
      dob: {age:age},
      email: email,
      login: {sha1: numar},
      picture: {large:pic},
      nat: nat,
    }

    const proba = this.state.persons
    this.setState(prevState => ({
      persons: [ ...prevState.persons, persoana_noua]
    }))

  }

  remove = (index) => {
  let newPersonList = this.state.persons.splice(index, 1); // the item from array
  const proba = this.state.persons.filter(i => i !== newPersonList)
  this.setState({
    persons: proba
  })
  }




  render(){

    const test = this.state.persons.map( (i , index)=>
      <Person  data={this.state} remove={() => this.remove(index)} test={this.just_testing} consoleLog={this.updatePerson} key={i.login.sha1} id={Math.random()} first_name={i.name.first} last_name={i.name.last} nat={i.nat}
      picture={i.picture.large} email={i.email} age={i.dob.age}
      />
    )
    return(

      <div className='MyFriends'onClick={this.checkIt} >
      {test}
      <button style={{fontSize: '2em', border: '1px solid green'}} onClick={this.update}>add new friend</button>
      <button style={{fontSize: '2em', border: '1px solid green'}} onClick={this.handleDelete}>delete
      last added friend
      </button>
      <button onClick={this.handleChange}>test</button>
      </div>
    )
  }


}


export default MyFriends;
