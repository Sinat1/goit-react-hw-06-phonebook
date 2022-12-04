import css from './App.module.css';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

export const App = () => {
  return (
    <div className={css.app}>
      <h1 className={css.pageTitle}>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <div className={css.wrapper}>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
