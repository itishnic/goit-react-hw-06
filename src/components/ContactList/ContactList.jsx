import { deleteContact } from "../../redux/contactsSlice";
import { getContacts, getFilters } from "../../redux/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";







const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filters = useSelector(getFilters) || "";
 



const getVisibleContacts = contacts && Array.isArray(contacts)
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filters.toLowerCase())
      )
    : [];



  const dispatch = useDispatch();
  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <ul className={css.list}>
        {getVisibleContacts.map((contact) => (
          <li key={contact.id}>
            <Contact
              data={contact}
              name={contact.name}
              number={contact.number}
              onDelete={() => handleDeleteContact(contact.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
