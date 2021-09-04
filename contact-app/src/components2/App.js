
import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactDetail from './ContactDetail';
import api from '../api/contacts';
import EditContact from './EditContact';


// import ContactList from './ContactList';
// import Contactcard from './Contactcard';


function App() {

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // Retrive Contacts Function

  const retriveContacts = async () => {

    const response = await api.get("/contacts");
    return response.data;

  }

  const addContactHandler = async (contact) => {

    console.log(contact);

    const request = {

      id: uuid(),
      ...contact

    }

    const response = await api.post('/contacts', request);

    setContacts([...contacts, response.data]);
  }

  const updateContactHandler = async (contact) => {

    const response = await api.put(`./contacts/${contact.id}`, contact);
    console.log(response.data);

    const { id, name, phone } = response.data;
    setContacts(

      contacts.map((contact) => {

        return contact.id === id ? { ...response.data } : contact

      })

    )

  }

  const searchHandler = (searchTerm) => {

    setsearchTerm(searchTerm);
    if (searchTerm !== "") {

      const newContactList = contacts.filter((contact) => {
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
      })
      setSearchResults(newContactList);
    }
    else {
      setSearchResults(contacts);
    }

  }


  const removeContactHandler = async (id) => {

    await api.delete(`/contacts/${id}`);
    const contactCopy = contacts.filter((contact) => {

      return contact.id !== id;

    });

    setContacts(contactCopy);

  }

  useEffect(() => {

    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  useEffect(() => {

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));


  }, [contacts]);


  return (
    <div className='ui container center'>

      <Router>
        <Header />


        <Switch>
          <Route path="/" exact

            render={(props) => (
              <ContactList
                {...props}
                contacts={searchTerm.length < 1 ? contacts : searchResults}
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            )} />

          <Route path="/add"
            render={(props) => (
              <AddContact
                {...props}
                addContactHandler={addContactHandler}
              />
            )}
          />

          <Route path="/edit"
            render={(props) => (
              <EditContact
                {...props}
                updateContactHandler={updateContactHandler}
              />
            )}
          />

          <Route path="/contact/:id" component={ContactDetail} />

        </Switch>
      </Router>

    </div>
  );
}

export default App;
