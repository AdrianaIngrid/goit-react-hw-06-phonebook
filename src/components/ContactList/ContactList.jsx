import ContactItem from './ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../Redux/contactsSlice';
import { getFilteredContacts } from '../../Redux/selectors';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ul>
        {contacts?.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDelete={() => handleDeleteContact(contact.id)}
          />
        ))}
      </ul>
    </>
  );
}

export default ContactList;
