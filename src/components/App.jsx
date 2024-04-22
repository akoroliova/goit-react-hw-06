import ContactForm from "./contactform/ContactForm.jsx";
import SearchBox from "./searchbox/SearchBox.jsx";
import ContactList from "./contactlist/ContactList.jsx";
import { useState, useEffect } from "react";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedFeedbackObject = window.localStorage.getItem(
      "saved-contacts-object"
    );
    if (savedFeedbackObject !== null) {
      return JSON.parse(savedFeedbackObject);
    }
    return [];
  });

  useEffect(() => {
    window.localStorage.setItem(
      "saved-contacts-object",
      JSON.stringify(contacts)
    );
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
