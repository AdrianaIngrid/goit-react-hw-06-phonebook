import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import styles from './ContactForm/ContactForm.module.css';
import {  useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from '../Redux/selectors';


function App() {
   const contacts = useSelector(getContacts);
  // Aici salvam contactele cand se face update la ele
  useEffect(() => {
    console.log('Component did update, saving contacts to localStorage');
     localStorage.setItem('contacts', JSON.stringify(contacts));
   }, [contacts]);
    
  return (
    <div className={styles.box}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />

      <h2 className={styles.titleContact}>Contacts</h2>
      <Filter/>
      <ContactList/>
    </div>
  );
}

export default App;
