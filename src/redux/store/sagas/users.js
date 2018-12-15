import { call, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { Creators as UserActions } from '../ducks/users';

export function* addUser(action) {
  const { data } = yield call(api.get, `/users/${action.payload.login}`);

  data.latitude = action.payload.latitude;
  data.longitude = action.payload.longitude;

  yield put(UserActions.addUserSuccess(data));
}
