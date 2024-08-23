import React from 'react';
import styles from './ContactItem.module.css';

function ContactItem({ contact, onDelete }) {
  const { name, number } = contact;

  return (
    <li className={styles.contactItem}>
      {name} : {number}
      <button
        type="button"
        onClick={onDelete}
        className={styles.deleteBtn}
      >
        Delete
      </button>
    </li>
  );
}

export default ContactItem;

