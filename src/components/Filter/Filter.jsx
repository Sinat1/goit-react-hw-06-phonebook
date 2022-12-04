import css from './Filter.module.css';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterChangeHandler = event => {
    const { value } = event.target;
    dispatch(changeFilter(value));
  };

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        value={filter.value}
        onChange={filterChangeHandler}
      />
    </label>
  );
};

export default Filter;
