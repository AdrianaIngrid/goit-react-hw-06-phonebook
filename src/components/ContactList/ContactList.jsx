import ContactItem from './ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../Redux/contactsSlice';
import { getFilteredContacts } from '../../Redux/selectors';
function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  console.log(contacts);
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
            deleteContact={()=> handleDeleteContact(contact.id)}
          ></ContactItem>
        ))}
      </ul>
    </>
  );
}

export default ContactList;