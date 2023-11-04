import {Contact} from './Contacts.styled';

export const ContactsList = ({contacts})=>{
    return (
        <ul>
            {contacts.map((contact)=>{
                return (
                  <Contact key={contact.id}>{contact.name}:  {contact.number}</Contact>  
                )
            })}
        </ul>
    )
}