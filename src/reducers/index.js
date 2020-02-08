import {combineReducers} from 'redux';
// import searchReducer from './searchReducer';
import mapNavigation from './reducers'
export default combineReducers({
  pharmacies: searchReducer, mapNavigation
});
