import * as actionTypes from '../../action_types';

export const getCategories = name => ({ type: actionTypes.GET_CATEGORIES.EVENT, name });
export const modifyCreationCategory = payload => ({ type: actionTypes.MODIFY_CREATION_CATEGORY.SUCCESS, payload });
export const createCategory = (payload, pushRoute) => ({ type: actionTypes.CREATE_CATEGORY.EVENT, payload, pushRoute });
export const deleteCategory = id => ({ type: actionTypes.DELETE_CATEGORY.EVENT, id });
export const setEditCategory = payload => ({ type: actionTypes.SET_EDIT_CATEGORY.EVENT, payload });
export const editCategory = (payload, pushRoute) => ({ type: actionTypes.EDIT_CATEGORY.EVENT, payload, pushRoute });