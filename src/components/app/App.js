const React = require("react");
const ReactRouter = require("react-router-dom");
const Home = require("../home/Home");
const Header = require('../header/Header.js');
const Results = require('../results/Results.js');
const Switch = ReactRouter.Switch;
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
require('./App.css')
 
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/results' component={Results} />
            <Route
              render={function() {
                return <p>Not found</p>;
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

module.exports = App;
