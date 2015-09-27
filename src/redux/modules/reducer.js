import { combineReducers } from 'redux';

import auth from './auth';
import counter from './counter';
import {reducer as form} from 'redux-form';
import info from './info';
import track from './track';
import widgets from './widgets';

export default combineReducers({
  auth,
  counter,
  form,
  info,
  widgets,
  track
});
