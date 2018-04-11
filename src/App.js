import React, { Component } from 'react';
import './App.css';
import Form from './components/form';
import List from './components/list';


class App extends Component {
    constructor(props) {
      super(props)

      this.state = {
        contact:[{name:'Jane', address:'123 Glenoak'},
        {name:'Jane2', address:'1232 Glenoak'}]
      }
    }

    addContact(text) {
      console.log(text)
      const newContact = {name:text.name, address:text.address}
      
        this.setState({
          contact: [...this.state.contact, newContact]
        })
    }

    render() {
        return (
        <div>
            <Form passContact={ (e) => this.addContact(e)} />
            <List contacts={this.state.contact}/>
        </div> 
     )
    }


}

export default App;
