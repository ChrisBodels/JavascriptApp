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
      <div>
      <h1>Here is the list of games currently available!</h1>
        <ul id="items">
          <li>
            <img src={require("./images/Battlefield1.jpg")} />
            <h3>BattleField 1</h3>
            <p>Battlefield 1 is a game...</p>
            <button>Purchase</button>
          </li>
          <li>
            <img src={require("./images/bloodborne.jpg")} />
            <h3>Bloodborne</h3>
            <p>Bloodborne is a game...</p>
            <button>Purchase</button>
          </li>
          <li>
            <img src={require("./images/Grand-Theft-Auto-5.jpg")} />
            <h3>Grand Theft Auto 5</h3>
            <p>Grand Theft Auto 5 is a game...</p>
            <button>Purchase</button>
          </li>
          <li>
            <img src={require("./images/darksouls.jpg")} />
            <h3>Dark Souls</h3>
            <p>Dark Souls is a game...</p>
            <button>Purchase</button>
          </li>
          <li>
            <img src={require("./images/dark-souls-2.jpg")} />
            <h3>Dark Souls 2</h3>
            <p>Dark Souls 2 is a game...</p>
            <button>Purchase</button>
          </li>
          <li>
            <img src={require("./images/Dark_souls3.jpg")} />
            <h3>Dark Souls 3</h3>
            <p>Dark Souls 3 is a game...</p>
            <button>Purchase</button>          
          </li>
          <li>
            <img src={require("./images/Dishonored.png")} />
            <h3>Dishonored</h3>
            <p>Dishonored is a game...</p>
            <button>Purchase</button>
          </li>
          <li>
            <img src={require("./images/Dishonored_2.jpg")} />
            <h3>Dishonored 2</h3>
            <p>Dishonored 2 is a game...</p>
            <button>Purchase</button>
          </li>
          <li>
            <img src={require("./images/overwatch.jpg")} />
            <h3>Overwatch</h3>
            <p>Overwatch is a game...</p>
            <button>Purchase</button>
          </li>
          <li>
            <img src={require("./images/rise-of-the-tomb-raider.jpg")} />
            <h3>Rise of the Tomb Raider</h3>
            <p>Rise of the Tomb Raider is a game...</p>
            <button>Purchase</button>
          </li>
          <li>
            <img src={require("./images/tomb-raider.jpg")} />
            <h3>Tomb Raider</h3>
            <p>Tomb Raider is a game...</p>
            <button>Purchase</button>
          </li>
          <li>
            <img src={require("./images/star-wars-battlefront.jpg")} />
            <h3>Star Wars Battlefront</h3>
            <p>Star Wars Battlefront...</p>
            <button>Purchase</button>
          </li>
          <li>
            <img src={require("./images/Titanfall2.jpg")} />
            <h3>Titanfall 2</h3>
            <p>Titanfall 2 is a game...</p>
            <button>Purchase</button>
          </li>
          <li>
            <img src={require("./images/watchdogs.jpg")} />
            <h3>Watchdogs</h3>
            <p>Watchdogs is a game...</p>
            <button>Purchase</button>
          </li>
          <li>
            <img src={require("./images/WatchDogs2.jpg")} />
            <h3>Watchdogs 2</h3>
            <p>Watchdogs 2 is a game...</p>
            <button>Purchase</button>
          </li>
          <li>
            <img src={require("./images/Witcher_3.jpg")} />
            <h3>Witcher 3</h3>
            <p>Witcher 3 is a game...</p>
            <button onClick="foo()">Purchase</button>          
          </li>
        </ul>
      </div>
    );
  }
};

/*<script>
function foo(){
  alert('foo')
}
</script>*/

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


/*var Button = require('react-button')

function clicked(event){
  alert("Hello! I am an alert box!!");
}*/



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
