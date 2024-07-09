import { BsTelephone } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteTask } from '../../redux/contactsSlice'






const Contact = ({ data: { id, name, number }, }) => {
    const dispatch = useDispatch();
const handleDelete = () => {
  
  const taskExists = Contact.some((contact) => contact.id === id);
  if (taskExists) {
    dispatch(deleteTask(id));
  } else {
    console.error(`Task with id ${id} not found.`);
  }
};
  
  return (
    <>
      <div className={css.contactButton}>
        <div>
          <p className={css.contactItem}>
            <IoPersonOutline size={20} />
            {name}
          </p>
          <p className={css.contactItem}>
            <BsTelephone size={20} />
            {number}
          </p>
        </div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
};

export default Contact;
