import React from "react";
import styles from './ContactItem.module.css';
function ContactItem ({ id, name, number, deleteContact}) {
      return (
    <div>
    
        <li key= {id} className={styles.contactItem}>
              {name} : {number}
                  <button type="submit" onClick={()=> deleteContact(id)} className={styles.deleteBtn}>Delete</button>
        </li>
      
    </div>
  );
    }


export default ContactItem;