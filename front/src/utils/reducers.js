import * as ActionTypes from '../action_types';


function cloneObject(object) {
  return JSON.parse(JSON.stringify(object));
}

/**
 * Encapsulate the idea of passing a new object as the first parameter
 * to Object.assign to ensure we correctly copy data instead of mutating
 * @param {*} oldObject
 * @param {*} newValues
 */
export function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

/**
 * Since we only want to update one item, preserve all others as they are now
 * @param {*} array
 * @param {*} itemId
 * @param {*} updateItemCallback
 */
export function updateItemInArray(array, itemId, updateItemCallback) {
  const updatedItems = array.map((item) => {
    if (item.id !== itemId) {
      return item;
    }
    // Use the provided callback to create an updated item
    const updatedItem = updateItemCallback(item);
    return updatedItem;
  });
  return updatedItems;
}

/**
 * Extracts the base name of an ActionType
 * @param {Redux Action} action
 */
export function getActionName(action) {
  return action.type.substring(0, action.type.lastIndexOf('_'));
}

/**
 * Extracts the event of an ActionType
 * @param {Redux Action} action
 */
export function getActionEventName(action) {
  return action.type.substring(action.type.lastIndexOf('_') + 1, action.type.length);
}

/**
 * Default generic reducer state
 */
export const DEFAULT_GENERIC_STATE = {
  isLoading: false,
  isFailed: false,
  isReady: false,
  message: '',
  error: undefined,
  payload: {},
  processes: {},
};

/**
 * Generic action type handler for EVENT,SUCCESS,FAILURE AND CLEAN events
 * @param {Redux State} state
 * @param {Redux Action} action
 */
export function genericActionTypeHandler(state = DEFAULT_GENERIC_STATE, action,
  defaultState = DEFAULT_GENERIC_STATE) {

  switch (getActionEventName(action)) {
    case ActionTypes.BASE_ACTION.EVENT:
      return updateObject(state, {
        isLoading: true,
        isReady: false,
        isFailed: false,
        message: '',
        error: undefined,
      });
    case ActionTypes.BASE_ACTION.SUCCESS:
      return updateObject(state, {
        payload: action.payload,
        isLoading: false,
        isFailed: false,
        isReady: true,
      });
    case ActionTypes.BASE_ACTION.FAILURE:
      return updateObject(state, {
        isLoading: false,
        isFailed: true,
        message: `Failure with ${action.type}`,
        payload: action.payload,
        error: action.error,
      });
    case ActionTypes.BASE_ACTION.CLEAN:
      return updateObject(state, cloneObject(defaultState));
    default:
      return state;
  }
}

export const DEFAULT_COLLECTION_STATE = {
  payload: [],
  pageNumber: 1,
  pageSize: 30,
  total: 0,
  isLoading: false,
  isFailed: false,
  isReady: false,
  message: '',
};

export function genericAllActionTypeHandler(state = DEFAULT_COLLECTION_STATE, action,
  defaultState = DEFAULT_COLLECTION_STATE) {
  switch (getActionEventName(action)) {
    case ActionTypes.BASE_ACTION.EVENT:
      return updateObject(state, {
        isLoading: true,
        isReady: action.isReady || false,
        pageNumber: action.isReady ? state.pageNumber : 1,
      });
    case ActionTypes.BASE_ACTION.SUCCESS:
     const { results, page, ...otherProps} = action.payload;
      return updateObject(state, {
        payload: results,
        isLoading: false,
        isFailed: false,
        isReady: true,
        pageNumber: page ? page.number || page.page || 1 : 1,
        ... otherProps,
      });
    case ActionTypes.BASE_ACTION.FAILURE:
      return updateObject(state, {
        isLoading: false,
        isFailed: true,
        isReady: false,
        message: `Failure with ${action.type}`,
      });
    case ActionTypes.BASE_ACTION.CLEAN:
      return updateObject(state, cloneObject(defaultState));
    default:
      return state;
  }
}

export function genericAllNextPageActionTypeHandler(state = DEFAULT_COLLECTION_STATE, action) {
  switch (getActionEventName(action)) {
    case ActionTypes.BASE_ACTION_NEXT_PAGE.CLEAN:
      return updateObject(state, { pageNumber: 1 });
    case ActionTypes.BASE_ACTION_NEXT_PAGE.SUCCESS:
      return updateObject(state, { isLoading: action.isLoading !== undefined ? action.isLoading : state.isLoading,
        pageNumber: action.page || state.pageNumber });
    case ActionTypes.BASE_ACTION_NEXT_PAGE.FAILURE:
      return updateObject(state, { isLoading: false });
    default:
      return state;
  }
}


export const DEFAULT_LIST_SEARCH_STATE = {
  query: '',
  filters: {
  },
};

export function genericSearchActionTypeHandler(state = DEFAULT_LIST_SEARCH_STATE,
  action, defaultState = DEFAULT_LIST_SEARCH_STATE) {
  switch (getActionEventName(action)) {
    case ActionTypes.BASE_ACTION_LIST_SEARCH.EVENT:
    {
      const baseState = action.clear ? defaultState : state;
      return updateObject(baseState, {
        filters: action.filters || baseState.filters,
        query: action.query !== undefined ? action.query : baseState.query,
      });
    }
    case ActionTypes.BASE_ACTION_LIST_SEARCH.CLEAN:

      return updateObject(state, cloneObject(defaultState));
    default:
      return state;
  }
}