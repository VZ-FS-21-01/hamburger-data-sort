import { useState } from 'react';
import mydata from '../data.json'
import sortData from '../functions/sortData';

const Contacts = () => {
    const [mySortedContacts, setMySortedContacts] = useState(sortData(mydata))

    return (
        <div className="contacts">
            {mySortedContacts && mySortedContacts.map(singleLetter => singleLetter.contacts.length > 0 ? <div key={singleLetter.buchstabe}>
                <h1>{singleLetter.buchstabe}</h1>
                {singleLetter.contacts.map(contact => <div key={contact.id}>
                    <h2>{contact.first_name} {contact.last_name}</h2>
                    <a href={`mailto:${contact.email}`}>Write me</a>
                </div>)}
            </div> : "")}
        </div>
    );
}

export default Contacts;
