import {LOGIN,MYPROFILE,HERO} from '../actions/actionTypes.js'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { combineReducers } from 'redux'


function basic(state={},action){
		switch(action.type){
		case LOGIN : 	{ return Object.assign({},state,{loginInfo : action.data});}
		case MYPROFILE : 	{ return Object.assign({},state,{profileInfo : action.data});}
		case HERO : { return Object.assign({},state,{hero : action.data});}
		default : return state;
	}
}

const myApp = combineReducers({
	basic 
})

export default myApp