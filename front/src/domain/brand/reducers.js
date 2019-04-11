import { combineReducers } from 'redux';
import * as ActionTypes from '../../action_types';
import { getActionName, DEFAULT_COLLECTION_STATE, genericAllActionTypeHandler, updateObject } from '../../utils/reducers';

const CREATION_STATE = {
  _id: null,
  name: '',
  type: '',
};

function create(state = CREATION_STATE, action) {
  switch (action.type) {
    case ActionTypes.MODIFY_CREATION_BRAND.SUCCESS:
      return updateObject(state, action.payload);
    case ActionTypes.SET_EDIT_BRAND.EVENT:
      return updateObject(state, action.payload);
    case ActionTypes.CREATE_BRAND.CLEAN:
      return CREATION_STATE;
    default:
      return state;
  }
}


function list(state = DEFAULT_COLLECTION_STATE, action) {
  switch (getActionName(action)) {
    case ActionTypes.GET_BRANDS.NAME:
      return genericAllActionTypeHandler(state, action);
    case ActionTypes.DELETE_BRAND.NAME:
      return updateObject(state, { payload: state.payload.filter(brand => brand._id !== action.payload) })
    default:
      return state;
  }
}

export const brands = combineReducers({
  create,
  list,
});
