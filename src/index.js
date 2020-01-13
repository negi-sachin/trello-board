//Redux is a predictable state container for javascript apps
//View triggers events calleed actions ,then dispatch to reducer and reducer return new state to our store which get reflects into our view.
//Redux handles data flow in an application
//In reactjs ,data flow is uni directional i.e from parent to children
//we cant flow data from children compo to parent compo 
//therefore redux comes into play

//store contains state which is available to all components

//for video explanation watch : https://www.youtube.com/watch?v=tOtGnCBXU3U

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

// import { combineReducers,createStore } from 'redux'

// function defaultreducer(state='',action){
//     if(action.type==='ActionA')
//     return action.payload
//     return state
// }

// function otherreducer(state=[],action){
//     return state
// }

// const allreducer=combineReducers({
//     default:defaultreducer,
//     other:otherreducer
// })
// const store=createStore(allreducer,{},window.devToolsExtension && window.devToolsExtension())
// console.log(store.getState())
// const useraction={
//     type:'ActionA',
//     payload:'First action'
// }
// store.dispatch(useraction)
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
