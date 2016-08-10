import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './components/App';
import Appliance from './components/appliance/Appliance';
import User from './components/user/User';
import reducers from './reducers/index';
import './components/bundle.scss';
import injectTapEventPlugin from 'react-tap-event-plugin';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Appliance}/>;
        <Route path="/about" component={User}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('bms-root'));
