import React, {Component} from 'react';
import './App.css';
import Form from './components/form';


class App extends Component {
    constructor() {
      super()

      this.state = {
        contact:{}
      }
    }

    addContact(text) {
        this.setState({
          contact: {...this.state.contact, text}
        })
    }

    render() {
        return (
        <div>
            <Form />
        </div> 
     )
    }


}

export default App;