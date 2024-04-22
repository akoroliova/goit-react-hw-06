import { setFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const searchBoxData = useSelector((state) => {
    state.filters.name;
  });
  const dispatch = useDispatch();

  return (
    <div className={css.searchBoxContainer}>
      <p className={css.searchBoxLabel}>Find contacts by name:</p>
      <input
        type="text"
        value={searchBoxData}
        onChange={(event) => {
          const userInput = event.target.value;
          dispatch(setFilter(userInput));
        }}
      />
    </div>
  );
};

export default SearchBox;
