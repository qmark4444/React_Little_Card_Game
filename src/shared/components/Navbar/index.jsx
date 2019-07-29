import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar () {
  const decks = [{
    name: 'All',
    deckID: 'all'
  }, {
    name: 'JavaScript',
    deckID: 'javascript',
  }, {
    name: 'Ruby',
    deckID: 'ruby',
  }, {
    name: 'Python',
    deckID: 'python',
  }, {
    name: 'Java',
    deckID: 'java',
  }];

  return (
    <ul>
      {decks.map(({ name, deckID }) => (
        <li key={deckID}>
          <NavLink activeStyle={{fontWeight: 'bold'}} to={`/deck/${deckID}`}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}