// import { fetchCards } from './api/cards-api';
const DeckPage = require('../components/DeckPage/index.jsx');
const NewCardPage = require('../components/NewCardPage/index.jsx');
const StudyPage = require('../components/StudyPage/index.jsx');
const ReviewPage = require('../components/ReviewPage/index.jsx');
const MnkGamePage = require('../components/MnkGamePage/index.jsx');

const switchRoutes =  [
  {
    path: '/',
    exact: true,
    component: DeckPage,
    // fetchInitialData: (path = '') => fetchCards(path.split('/').pop()),
  },
  {
    path: '/createCard/:deckID',
    component: NewCardPage,    
  },
  {
    path: '/study',
    component: StudyPage,    
  },
  {
    path: '/review',
    component: ReviewPage,    
  },
  {
    path: '/mnkGame',
    component: MnkGamePage,    
  }
];

export default switchRoutes;