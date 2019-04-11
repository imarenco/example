import { takeEvery, call, put } from 'redux-saga/effects';
import API from '../../utils/api/api';
import * as actionTypes from '../../action_types';
import ErrorUtil from '../../utils/errors/errors';

function* getCategories(action) {
  try {
    const categories = yield call(API.getCategories, action.name);
    yield put({
      type: actionTypes.GET_CATEGORIES.SUCCESS,
      payload: { results: categories.data.docs },
    });
  } catch (e) {
    ErrorUtil.handleError(actionTypes.GET_CATEGORIES.FAILURE, e);
  }
}

function* createCategory(action) {
  try {
    const brand = yield call(API.createCategory, action.payload);
    yield put({
      type: actionTypes.CREATE_CATEGORY.SUCCESS,
      payload: brand.data,
    });

    yield put({ type: actionTypes.CREATE_CATEGORY.CLEAN });
    action.pushRoute('/category');
  } catch (e) {
    ErrorUtil.handleError(actionTypes.CREATE_CATEGORY.FAILURE, e);
  }
}


function* deleteCategory(action) {
  try {
    yield call(API.deleteCategory, action.id);

    yield put({
      type: actionTypes.DELETE_CATEGORY.SUCCESS,
      payload: action.id,
    });

  } catch (e) {
    ErrorUtil.handleError(actionTypes.DELETE_CATEGORY.FAILURE, e);
  }
}


function* editCategory(action) {
  try {
    const edit = yield call(API.editCategory, action.payload._id, { value: action.payload.value, label: action.payload.label });
    yield put({
      type: actionTypes.EDIT_CATEGORY.SUCCESS,
      payload: edit.data,
    });

    yield put({ type: actionTypes.CREATE_CATEGORY.CLEAN });
    action.pushRoute('/category');
  } catch (e) {
    ErrorUtil.handleError(actionTypes.DELETE_CATEGORY.FAILURE, e);
  }
}


export default function* root() {
  yield [
    yield takeEvery(actionTypes.GET_CATEGORIES.EVENT, getCategories),
    yield takeEvery(actionTypes.CREATE_CATEGORY.EVENT, createCategory),
    yield takeEvery(actionTypes.DELETE_CATEGORY.EVENT, deleteCategory),
    yield takeEvery(actionTypes.EDIT_CATEGORY.EVENT, editCategory),
  ];
}
