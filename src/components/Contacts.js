import React from 'react';
import Contact from './Contact';
import uuid from 'uuid';

const contactList = (props) => {
    return props.contacts.map( ( contact, index ) => {
         return <Contact
            key={contact.general.id}
            id={contact.general.id}
            clicked={() => props.clicked( contact.general.id )}
            firstName={contact.general.firstName}
            lastName={contact.general.lastName}
            avatar={contact.general.avatar}
            company={contact.job.company}
            />
        } );
}
  
export default contactList;


