import React from 'react';
//import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexLink } from 'react-router'

const Home = () => <h1>Hello from Home!</h1>


const Store = () => <h1>Here is the list of games currently available!</h1>


const NotFound = () => (<h1>404... Page not found</h1>)


const Nav = () => (
  <div>
    <IndexLink activeClassName='active' to='/'>Home</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/store'>Store</IndexLink>
  </div>
)


const Container = (props) => <div>
  <Nav />
  {props.children}
</div>



  class App extends React.Component
  {
    render()
    {
      return (
        <Router history={hashHistory}>
          <Route path='/' component={Container}>
            <IndexRoute component={Home} />
            <Route path='/Store' component={Store} />
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
        
      );
      
    }
  };  


export default App;
