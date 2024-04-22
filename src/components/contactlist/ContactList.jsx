import css from "./ContactList.module.css";
import Contact from "../contact/Contact.jsx";
import { useSelector } from "react-redux";

const ContactList = () => {
  const allContactsData = useSelector((state) =>
    state.contactList.contacts.items.filter((item) =>
      item.name
        .toLowerCase()
        .includes(state.contactList.filters.name.toLowerCase())
    )
  );

  return (
    <div className={css.contactListContainer}>
      <ul className={css.contactListListElement}>
        {allContactsData.map((eachItem) => {
          const { id, name = "N/A", number = "N/A" } = eachItem;
          return (
            <li key={id} className={css.contactListItemElement}>
              <Contact contactId={id} name={name} number={number} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
