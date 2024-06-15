import "./search-box.styles.css";

const SearchBox = ({ placeholder, onChangeHandler, className }) => (
  <input
    //className="search-box"
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
    className={`search-box ${className}`}
  />
);

export default SearchBox;
