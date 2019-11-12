import {createStore} from 'redux'; // in order to create a redux store, we need to import the createStore function from redux
import reducer from '../reducers'; // reducer is just a function being exported from the index.js file in the reducers folder

// initialState is the state that is used to initialize the redux store
const initialState = {
	tech: 'React'
};

// The reducer parameter is what tracks the state in our app
// the reducer and the redux store will always remain in sync
// initialState is passed into the imported reducer function as an argument
// This store variable can now be imported into any component of the app
export const store = createStore(reducer, initialState);