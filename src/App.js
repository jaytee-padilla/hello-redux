import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import ButtonGroup from './components/ButtonGroup';
import {store} from './store'; // store houses the state of the application


class App extends Component {
	render() {
		// Whenever a store is created with createStore(), the created store has three exposed methods
		// one of those methods is getState()
		// At any point in time, calling the getState method on the created store will return the current state of the app
		// With React 16, you don’t have to wrap adjacent JSX elements in a div. You can use an array if preferred - but pass in a key prop to each element in the array. 
		return [
			<HelloWorld key={1} tech={store.getState().tech} />,
			<ButtonGroup key={2} technologies={['React', 'Elm', 'React-Redux']} />
		]
  }
}

export default App;
