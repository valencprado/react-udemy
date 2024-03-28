/* eslint-disable react/react-in-jsx-scope */
import "./styles.css";
import p from 'prop-types';

export const TextInput = ({searchValue, handleChange}) => {
  return <input type="search" className="text-input"
    onChange={handleChange}
    value={searchValue}
    placeholder="type here"
  />
}

TextInput.propTypes = {
  searchValue: p.string.isRequired,
  handleChange: p.func.isRequired
}
