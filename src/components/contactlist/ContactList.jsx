import css from "./ContactList.module.css";
import Contact from "../contact/Contact.jsx";
import { useSelector } from "react-redux";

const ContactList = ({ onDelete }) => {
  const contactsData = useSelector((state) => state.contactList.contacts.items);

  return (
    <div className={css.contactListContainer}>
      <ul className={css.contactListListElement}>
        {contactsData.map((eachItem) => {
          const { id, name = "N/A", number = "N/A" } = eachItem;
          return (
            <li key={id} className={css.contactListItemElement}>
              <Contact
                contactId={id}
                name={name}
                number={number}
                onDelete={onDelete}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
