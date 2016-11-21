import React from 'react';
import { Router, Route, Link, IndexRoute, browserHistory, IndexLink } from 'react-router';
import Button from 'react-button';
import Games from './gameList.js';

var games = Games;
var ownedGames = [];

function containsObject(obj, array)
{
  var i;
  for (i=0; i < array.length; ++i)
  {
    if(array[i] === obj)
    {
      return true;
    }
  }
  return false;
}


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
   buttonClicked(game)
  {
    if(containsObject(game, ownedGames) === true)
    {
      alert("You already own this game, you cannot purchase it again.");
    }
    else
    {
      var result = confirm("Are you sure you want to buy this game?");
      if(result == true)
      {
        ownedGames.push(game);
        alert("Game purchased! You should now see it in your library.");
      }
      else
      {
    
      }
    }
  }
  render()
  {
    const gamesList = games.map(game =>{
      return(
          <li key={game.id}>
            <img src={require(game.img)}/>
            <h3><Link to={game.link}>{game.name}</Link></h3>
            <p>{game.desc}</p>
            <Button onClick={this.buttonClicked.bind(this, game)}>Purchase</Button>
          </li>
      )
    })
    return(
      <div>
        <h1>Here are all the games that are currently available</h1>
        <ul id="items">
          {gamesList}
        </ul>
      </div>
    )
  }
};



class Library extends React.Component
{
  render()
  {
    const gamesList = ownedGames.map(game =>{
      return(
        <li key={game.id}>
          <img src={require(game.img)}/>
          <h3><Link to={game.link}>{game.name}</Link></h3>
          <p>{game.desc}</p>
        </li>
      )
    })
    return(
      <div>
        <h1>Here are all the games you currently own!</h1>
        <ul id="items">
          {gamesList}
        </ul>
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
            <Route path='/Store' component={Store}/>
            <Route path='/Library' component={Library} />
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
      );
    }
  };  


export default App;
