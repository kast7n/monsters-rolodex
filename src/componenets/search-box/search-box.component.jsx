import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    const { placeholder, onChangeHandler, className } = this.props;
    return (
      <input
        //className="search-box"
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
        className={`search-box ${className}`}
      />
    );
  }
}

export default SearchBox;
