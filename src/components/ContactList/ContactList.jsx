import ContactItem from './ContactItem';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../Redux/contactsSlice';
function ContactList({contacts, id}) {
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
    
  };
  return (
    <>
      <ul>
        {contacts.map(contact => (
          <ContactItem
          contact ={contact}
            key={contact.id}
            deleteContact={()=> handleDeleteContact(id)}
          ></ContactItem>
        ))}
      </ul>
    </>
  );
}

export default ContactList;