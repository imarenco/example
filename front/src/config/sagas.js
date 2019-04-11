import { fork } from 'redux-saga/effects';
import category from '../domain/category/sagas';
import brands from '../domain/brand/sagas';

export default function* root() {
  yield fork(brands);
  yield fork(category);
}
