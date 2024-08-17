import React from "react";
import styles from './ContactItem.module.css';
import { useDispatch } from "react-redux";
import { deleteContact } from "../../Redux/contactsSlice";


function ContactItem({id, name, number}) {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };
      return (
    <div>
    
        <li key= {id} className={styles.contactItem}>
              {name} : {number}
                  <button type="submit" onClick={handleDeleteContact} className={styles.deleteBtn}>Delete</button>
        </li>
      
    </div>
  );
    }


export default ContactItem;