import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexLink } from 'react-router'


class Home extends React.Component
{
  render()
  {
    return(
      <div>
        <h1>Hello from home!</h1>
      </div>
    );
  }
};


class Store extends React.Component
{
  render()
  {
    return(
      <h1>Here is the list of games currently available!</h1>
    );
  }
};


class Library extends React.Component
{
  render()
  {
    return(
      <div>
        <h1>Here are all the games you currently own!</h1>
        <p>Test</p>
      </div>
    );  
  }
};


class NotFound extends React.Component
{
  render()
  {
    return(
      <div>
        <h1>404... Page not found</h1>
      </div>
    );
  }
};


var Nav = React.createClass(
{
  render: function()
  {
    return(
      <div id="Nav">
        <ul id="nav">
          <li><IndexLink activeClassName="active" to='/'>Home</IndexLink>&nbsp;</li>
          <li><IndexLink activeClassName="active" to='/store'>Store</IndexLink>&nbsp;</li>
          <li><IndexLink activeClassName="active" to='/library'>Your Library</IndexLink>&nbsp;</li>
        </ul>
      </div>
    );
  }
});


var Container = (props) => <div>
  <Nav />
  {props.children}
</div>



  class App extends React.Component
  {
    render()
    {
      return (
        <Router history={browserHistory}>
          <Route path='/' component={Container}>
            <IndexRoute component={Home} />
            <Route path='/Store' component={Store} />
            <Route path='/Library' component={Library} />
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
      );
      
    }
  };  


export default App;
