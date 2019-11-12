import React from 'react';
import {store} from '../store';
import {setTechnology} from '../actions';

const ButtonGroup = props => {
	// destructuring the stuff inside props
	const {technologies} = props;

	const dispatchBtnAction = event => {
		// grabbing the value from each button based on the data attribute attached to each one and storing said value inside a variable
		const tech = event.target.dataset.tech;

		store.dispatch(setTechnology(tech));
	}

	return (
		<div className='hello-btns'>
			{technologies.map((tech, index) => {
				return (
					<button
						data-tech={tech} // the data attribute is a way to store some extra information that doesn’t have any visual representation. It makes it slightly easier to grab certain values off of an element
						key={`btn-${index}`}
						className='hello-btn'
						onClick={dispatchBtnAction}
					>
						{tech}
					</button>
				)
			})}
		</div>
	)
}

export default ButtonGroup;
