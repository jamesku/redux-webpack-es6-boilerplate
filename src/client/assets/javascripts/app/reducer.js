import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import reducers from './reducers';
import friends, { NAME as friendsName } from 'features/friends';

export default combineReducers({
  reducers,
  routing,
  [friendsName]: friends
});
