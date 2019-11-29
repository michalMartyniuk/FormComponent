import { combineReducers } from "redux";
import formReducer from '../reducers/formReducer';

export default combineReducers({
  form: formReducer
});
