import { takeEvery, call, put } from 'redux-saga/effects';
import API from '../../utils/api/api';
import * as actionTypes from '../../action_types';
import ErrorUtil from '../../utils/errors/errors';

function* getBrands(action) {
  try {
    const brands = yield call(API.getBrands, action.name);
    yield put({
      type: actionTypes.GET_BRANDS.SUCCESS,
      payload: { results: brands.data.docs },
    });
  } catch (e) {
    ErrorUtil.handleError(actionTypes.GET_BRANDS.FAILURE, e);
  }
}

function* createBrand(action) {
  try {
    const brand = yield call(API.createBrand, action.payload);
    yield put({
      type: actionTypes.CREATE_BRAND.SUCCESS,
      payload: brand.data,
    });
    
    yield put({ type: actionTypes.CREATE_BRAND.CLEAN });
    action.pushRoute('/');
  } catch (e) {
    ErrorUtil.handleError(actionTypes.CREATE_BRAND.FAILURE, e);
  }
}


function* deleteBrand(action) {
  try {
    yield call(API.deleteBrand, action.id);

    yield put({
      type: actionTypes.DELETE_BRAND.SUCCESS,
      payload: action.id,
    });

  } catch (e) {
    ErrorUtil.handleError(actionTypes.DELETE_BRAND.FAILURE, e);
  }
}


function* editBrand(action) {
  try {
    
    const edit = yield call(API.editBrand, action.payload._id, { name: action.payload.name, type: action.payload.type });
    yield put({
      type: actionTypes.EDIT_BRAND.SUCCESS,
      payload: edit.data,
    });

    yield put({ type: actionTypes.CREATE_BRAND.CLEAN });
    action.pushRoute('/');
  } catch (e) {
    ErrorUtil.handleError(actionTypes.EDIT_BRAND.FAILURE, e);
  }
}

export default function* root() {
  yield [
    yield takeEvery(actionTypes.GET_BRANDS.EVENT, getBrands),
    yield takeEvery(actionTypes.CREATE_BRAND.EVENT, createBrand),
    yield takeEvery(actionTypes.DELETE_BRAND.EVENT, deleteBrand),
    yield takeEvery(actionTypes.EDIT_BRAND.EVENT, editBrand),
  ]
}
