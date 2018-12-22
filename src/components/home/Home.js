var React = require("react");
var Link = require("react-router-dom").Link;
const Search = require("../search/Search");
require("./Home.css");

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      location: "" 
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } 

  handleChange(event) {
    let value = event.target.value;

    this.setState(() => {
      return {
        location: value
      };
    });

    console.log('this.state.location');
    this.componentDidUpdate;
  }

  handleSubmit(event) {
    event.preventDefault();
  console.log(this.state.location)
    
  }

  componentDidUpdate() {
    console.log('update');
  }


  render() {
    return (
      <div className="home-container">
        <h1 className="header">Enter a City and State</h1>
        <Search
          location={this.state.location}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}




module.exports = Home;
