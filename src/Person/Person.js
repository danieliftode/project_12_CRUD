import React , {Component} from 'react';
import './Person.css';


  class Person extends Component {
    state={
      modifica : false,
    }

    handleToggle = (e) => {
      this.setState({
        modifica : !this.state.modifica
      })

    }
    handleSubmit = (e) => {

      const first_name  = document.querySelector('.first_name input').value;
      const last_name = document.querySelector('.last_name input').value;
      const age = document.querySelector('.age input').value;
      const email = document.querySelector('.email input').value;
      const numar = Math.random();
      const pic = this.props.picture;
      const nat = this.props.nat;
      e.preventDefault();
      this.props.consoleLog(this.props.data, first_name, last_name, age, email, numar, pic, nat);
      const form = document.querySelector('form')
    //  this.props.test(numar)
      this.setState(prevState => ({
        modifica: false,
        persons: [this.props.data]
      }))
      //this.props.test()
    }


    // testing = () => {
    //   this.setState(prevState =>({
    //     persons: [...prevState.persons]
    //   }))
    // }

    render(props){
    //  console.log(this.props.data, 'this is all state passed')
      //console.log(this.props.first_name)
      if(this.state.modifica){
        let individ = {}
       individ =
        <div className='Person'>
          <form  name= 'person' onSubmit={this.handleSubmit}>
            <h2 className='first_name'>First Name: <input  name = 'person' type='text'/></h2>
            <h2 className='last_name'>Last Name: <input type='text' /></h2>
            <h3 className='age'>Age: <input type='number' /></h3>
            <img className='flag' src={`https://www.countryflags.io/${this.props.nat}/flat/64.png`}/>
            <img className='pic' src={this.props.picture} />
            <h3 className='email'>email:<input type='text' /></h3>
            <button >Save</button>

          </form>

        </div>
        return individ
      }else{
      const individ =
          <div className='Person'>
            <h2 >First Name: {this.props.first_name} </h2><br/>
            <h2>Last Name: {this.props.last_name}</h2>
            <h3> Age : {this.props.age}</h3>
            <img className='flag' src={`https://www.countryflags.io/${this.props.nat}/flat/64.png`}/>
            <img className='pic' src={this.props.picture} />
            <h3>email: {this.props.email}</h3>
            <button onClick={this.handleToggle}>edit</button>
            <button  onClick={this.props.remove}>remove</button>
          </div>

          return individ
        }

    }
  }


export default Person;


//
//
//
//
