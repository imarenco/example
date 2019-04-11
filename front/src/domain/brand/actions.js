import * as actionTypes from '../../action_types';

export const getBrands = name => ({ type: actionTypes.GET_BRANDS.EVENT, name });
export const modifyCreationBrand = payload => ({ type: actionTypes.MODIFY_CREATION_BRAND.SUCCESS, payload });
export const createBrand = (payload, pushRoute) => ({ type: actionTypes.CREATE_BRAND.EVENT, payload, pushRoute });
export const deleteBrand = id => ({ type: actionTypes.DELETE_BRAND.EVENT, id });
export const setEditBrand = payload => ({ type: actionTypes.SET_EDIT_BRAND.EVENT, payload });
export const editBrand = (payload, pushRoute) => ({ type: actionTypes.EDIT_BRAND.EVENT, payload, pushRoute });