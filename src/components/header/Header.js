const React = require("react");
const Search = require('../search/Search');
require("./Header.css");

class Home extends React.Component {
  render() {
    return (
      <div className="header row">
        <h2 className="title">Title</h2>
        <Search />
      </div>
    );
  }
}

module.exports = Home;
