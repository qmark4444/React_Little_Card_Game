import React from 'react';

const {
    withRouter 
} = require('react-router');

const {
    BrowserRouter,
    Route,
    Switch
} = require('react-router-dom');

const Layout = withRouter(require('./components/Layout/index.jsx'));
const DeckPage = require('./components/DeckPage/index.jsx');
const NewCardPage = require('./components/NewCardPage/index.jsx');
const StudyPage = require('./components/StudyPage/index.jsx');
const ReviewPage = require('./components/ReviewPage/index.jsx');

module.exports = (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route path="/" exact component={(props) => <DeckPage {...props}/>} />
                <Route path='/createCard/:deckID' component={(props) => <NewCardPage {...props}/>} />
                <Route path='/study' component={(props) => <StudyPage {...props}/>} />
                <Route path='/review' component={(props) => <ReviewPage {...props}/>} />
            </Switch>
        </Layout>
    </BrowserRouter>
)