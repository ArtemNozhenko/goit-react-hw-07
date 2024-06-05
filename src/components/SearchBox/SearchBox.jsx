import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import {
  changeFilter,
  selectNameFilter,
} from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const onFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.container}>
      <p className={css.text}>Find contacts by name</p>

      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onFilter}
      />
    </div>
  );
}
