const React = require("react");
const Link = require("react-router-dom").Link;
const api = require("../../api/api");
require("./Search.css");



const Search = props => {
  return (
    <form >
      <input
        type="text"
        id="location"
        size="25"
        onChange={props.handleChange}
      />
      <button 
      id="forecastBtn" 
      type="submit" 
      onClick={props.handleSubmit}>
        Get Weather
      </button>
    </form>
  );
};



module.exports = Search;
