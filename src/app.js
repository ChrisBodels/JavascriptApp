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

/*function sortGamesAlphabetically(objA, objB)
{
  var x = a.name.toLowerCase();
  var y = b.name.toLowerCase()
  if(x < y) {return -1;}
  if(x > y) {return 1;}
}*/

function sorterRelease(array)
{
  array.sort(function sortGamesRelease(a, b)
  {
    return parseFloat(a.year) - parseFloat(b.year);
  });
  this.forceUpdate();
}

function sorterAlphabetical(array)
{
  array.sort(function sortGamesAlphabetically(a, b)
  {
    return a.name.localeCompare(b.name);
  });
  this.forceUpdate();
}


class Home extends React.Component
{
  render()
  {
    return(
      <div>
        <h1>Welcome to my online video game store!</h1>
        <p>I made this web app to simulate a simple storefront for selling video games online. Enjoy!</p>
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
            <p>Released: {game.year}</p>
            <Button onClick={this.buttonClicked.bind(this, game)}>Purchase</Button>
          </li>
      )
    })
    return(
      <div>
        <Button onClick={sorterAlphabetical.bind(this, games)}>Sort Alphabetically</Button>
        <Button onClick={sorterRelease.bind(this, games)}>Sort by Release Date</Button>
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
          <p>Released: {game.year}</p>
        </li>
      )
    })
    return(
      <div>
        <Button onClick={sorterAlphabetical.bind(this, ownedGames)}>Sort Alphabetically</Button>
        <Button onClick={sorterRelease.bind(this, ownedGames)}>Sort by Release Date</Button>
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
