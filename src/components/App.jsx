// import { render } from '@testing-library/react';
import { Component } from 'react';
import { nanoid } from 'nanoid'
import { GlobalStyle } from './GlobalStyle';
import {FormAddContact} from './FormAddContact';
import {SectionTitle} from './SectionTitle';
import {ContactsList} from './Contacts';
import {FilterConctacts} from './Filter.js';
import {TitleContacts} from './App.styled';


export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
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

  filterName =(newName)=>{
    this.setState(
     {name: newName} 
    )
  }

  render(){

    const visibleContact = this.state.contacts.filter(contact=>{
      const hasContact = contact.name.toLowerCase().includes(this.state.name.toLowerCase());
      return hasContact;
    })


  return (
    <div>
     
    <SectionTitle title="Phonebook"/>

    <FormAddContact onAdd={this.addContact} />
   
    <TitleContacts>Contacts</TitleContacts>

    <FilterConctacts name={this.state.name} onNameFilter={this.filterName}/>
    
    <ContactsList contacts ={visibleContact}/>
  

      <GlobalStyle/>

    </div>
  );
  }
};
