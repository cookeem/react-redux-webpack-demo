/**
 * Created by cookeem on 17/5/11.
 */
const visibilityFilter = (state = 'SHOW_ALL', action) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter;
		default:
			return state
	}
};

export default visibilityFilter