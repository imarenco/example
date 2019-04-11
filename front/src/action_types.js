function createBaseRequestActionType(actionName) {
  if (actionName === '') {
    return {
      NAME: 'BASE_ACTION_TYPE',
      EVENT: 'EVENT',
      SUCCESS: 'SUCCESS',
      FAILURE: 'FAILURE',
      LOADING: 'LOADING',
      CLEAN: 'CLEAN',
    };
  }
  return {
    NAME: actionName,
    EVENT: `${actionName}_EVENT`,
    SUCCESS: `${actionName}_SUCCESS`,
    FAILURE: `${actionName}_FAILURE`,
    LOADING: `${actionName}_LOADING`,
    CLEAN: `${actionName}_CLEAN`,
  };
}


export const BASE_ACTION = createBaseRequestActionType('');
export const BASE_ACTION_NEXT_PAGE = createBaseRequestActionType('');
export const BASE_ACTION_LIST_SEARCH = createBaseRequestActionType('');


// brands
export const GET_BRANDS = createBaseRequestActionType('GET_BRANDS');
export const MODIFY_CREATION_BRAND = createBaseRequestActionType('MODIFY_CREATION_BRAND');
export const CREATE_BRAND = createBaseRequestActionType('CREATE_BRAND');
export const DELETE_BRAND = createBaseRequestActionType('DELETE_BRAND');
export const SET_EDIT_BRAND = createBaseRequestActionType('SET_EDIT_BRAND');
export const EDIT_BRAND = createBaseRequestActionType('EDIT_BRAND');


// categories
export const GET_CATEGORIES = createBaseRequestActionType('GET_CATEGORIES');
export const MODIFY_CREATION_CATEGORY = createBaseRequestActionType('MODIFY_CREATION_CATEGORY');
export const CREATE_CATEGORY = createBaseRequestActionType('CREATE_CATEGORY');
export const DELETE_CATEGORY = createBaseRequestActionType('DELETE_CATEGORY');
export const SET_EDIT_CATEGORY = createBaseRequestActionType('SET_EDIT_CATEGORY');
export const EDIT_CATEGORY = createBaseRequestActionType('EDIT_CATEGORY');
