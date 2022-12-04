import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const selector = useSelector(getContacts);
  const contact = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = contact.toLowerCase();
    return selector.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  const removeContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(contact => {
        return (
          <li className={css.contactList__item} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={css.contactList__btn}
              type="button"
              onClick={() => removeContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
