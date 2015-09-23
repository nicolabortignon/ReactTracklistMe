// Here all the reducer are combined together via the combineReducers class.
import { combineReducers } from 'redux';
import artist from './artist';
import auth from './auth';
import counter from './counter';
import {reducer as form} from 'redux-form';
import info from './info';
import widgets from './widgets';

export default combineReducers({
  artist,
  auth,
  counter,
  form,
  info,
  widgets
});
