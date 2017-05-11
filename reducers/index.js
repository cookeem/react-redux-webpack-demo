/**
 * Created by cookeem on 17/5/11.
 */
import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
	todos,
	visibilityFilter
});

export default todoApp;