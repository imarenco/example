import { put } from 'redux-saga/effects';

export const REDIRECT_ERROR = 'redirect';

function redirect(url) {
  window.location = `/#/${url}`;
}

function* handleError(actionType, error, props = {}) {
  if (error.__CANCEL__) {
    return;
  }

  if (error.response && error.response.status >= 500) {
    return yield redirect('error/unexpected-error')
  }

  if (error.response && error.response.status === 404) {
    return yield redirect('error/not-found');
  }

  if (error.response && error.response.status === 400) {
    return yield redirect('error/forbidden');
  }

  const { message, ...otherProps } = props;
  yield put({ type: actionType, error: message || error.message, ...otherProps });
}

const SagasUtils = {
  handleError,
};

export default SagasUtils;