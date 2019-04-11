import { combineReducers } from 'redux';
import * as ActionTypes from '../../action_types';
import { getActionName, DEFAULT_COLLECTION_STATE, genericAllActionTypeHandler, updateObject } from '../../utils/reducers';

const CREATION_STATE = {
  _id: null,
  label: '',
  value: '',
};

function create(state = CREATION_STATE, action) {
  switch (action.type) {
    case ActionTypes.MODIFY_CREATION_CATEGORY.SUCCESS:
      return updateObject(state, action.payload);
    case ActionTypes.SET_EDIT_CATEGORY.EVENT:
      return updateObject(state, action.payload);
    case ActionTypes.CREATE_CATEGORY.CLEAN:
      return CREATION_STATE;
    default:
      return state;
  }
}


function list(state = DEFAULT_COLLECTION_STATE, action) {
  switch (getActionName(action)) {
    case ActionTypes.GET_CATEGORIES.NAME:
      return genericAllActionTypeHandler(state, action);
    case ActionTypes.DELETE_CATEGORY.NAME:
      return updateObject(state, { payload: state.payload.filter(category => category._id !== action.payload) })
    default:
      return state;
  }
}

export const categories = combineReducers({
  create,
  list,
});
