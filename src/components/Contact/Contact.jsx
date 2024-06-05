import { HiUser, HiPhone } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps.js";
import css from "./Contact.module.css";

export default function Contact({
  data: { name, number, id },
}) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <div className={css.user}>
        <p className={css.span}>
          <HiUser size="24" /> {name}
        </p>
        <p className={css.span}>
          <HiPhone size="24" /> {number}
        </p>
      </div>

      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
