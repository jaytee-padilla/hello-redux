// This file is where the action creators go
// Action Creators are simply functions that help you create actions
// When an action creator is invoked, it returns an action object that can be passed into a reducer
// Actions Creators help make code DRY

export const setTechnology = text => {
	return {
		type: 'SET_TECHNOLOGY',
		payload: text
	}
}