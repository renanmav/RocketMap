/**
 * Types
 */
export const Types = {
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_FAILURE: 'users/ADD_FAILURE',
  REMOVE: 'users/REMOVE',
};

/**
 * Reducers
 */
const INITIAL_STATE = [];

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_SUCCESS:
      return [...state, action.payload.data];
    case Types.ADD_FAILURE:
      return state;
    case Types.REMOVE:
      return state.filter(user => user.id !== action.payload.id);
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  addUserRequest: (latitude, longitude, login) => ({
    type: Types.ADD_REQUEST,
    payload: { latitude, longitude, login },
  }),

  addUserSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addUserFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),

  removeUser: id => ({
    type: Types.REMOVE,
    payload: { id },
  }),
};
