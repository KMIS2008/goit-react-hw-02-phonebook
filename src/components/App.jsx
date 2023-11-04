// import { render } from '@testing-library/react';
import { Component } from 'react';
import { nanoid } from 'nanoid'
import { GlobalStyle } from './GlobalStyle';
import {FormAddContact} from './FormAddContact';
import {SectionTitle} from './SectionTitle';
import {ContactsList} from './Contacts';


export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  }

  addContact =(newContact)=> {
this.setState(prevState=> {
  return {
    contacts: [...prevState.contacts,
                {
                  ...newContact,
                  id: nanoid(),
                }
              ],
          };
       });
  }



  render(){

  return (
    <div>
     
    <SectionTitle title="Phonebook">
        <FormAddContact onAdd={this.addContact} />
    </SectionTitle>

    <SectionTitle title="Contacts">
       <ContactsList contacts ={this.state.contacts}/>
    </SectionTitle>

      <GlobalStyle/>

    </div>
  );
  }
};
