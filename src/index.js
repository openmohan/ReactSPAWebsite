import React from 'react';
import ReactDOM from 'react-dom';
import SuperHeroLogin from './src/components/SuperHero/SuperHeroLogin.jsx'
import App from './App'
import SuperHeroOutput from './src/components/SuperHero/SuperHeroOutput.jsx'
import LayoutPage from './components/LayoutPage.jsx';
import { Router, Route, Link, browserHistory, IndexRoute,DefaultRoute,Redirect,IndexRedirect  } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import myApp from '../reducers/reducers'
import {Provider } from 'react-redux'
import configureStore from '../configureStore'
import {createStore} from 'redux'

let store = configureStore();


ReactDOM.render(
	<Provider store={store} >
	<Router history = {browserHistory}>
	<Route path = "/" component = {App}>	
		<Route path="/superhero" component={LayoutPage}>	
			<Route path="/superhero/login" component={SuperHeroLogin}/>
	  		<Route path = "/superhero/output" component = {SuperHeroOutput} />
	  	</Route>
	  	<Route path="*" component={NotFound}/>
	</Route>
	</Router>
	</Provider>
	, document.getElementById('app'));