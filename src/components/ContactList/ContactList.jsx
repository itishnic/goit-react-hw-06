import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { getTasks, } from "../../redux/selectors";


const ContactList = ({ contacts, onDelete }) => {
    const tasks = useSelector(getTasks);
  return (
    <div>
      <ul className={css.list}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact
              data={contact}
              name={contact.name}
              number={contact.number}
              onDelete={onDelete}
              task={task}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
