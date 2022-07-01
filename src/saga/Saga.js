import { call, put, takeEvery } from "redux-saga/effects";
import {
  DASHBOARD_REQUEST_FAILED,
  GET_DASHBOARD,
  GET_DASHBOARD_REQUEST,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTRATION_FAILED,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
} from "../redux/action/ActionType";
console.log("Saga is ready ");

function* RegisterPage(action) {
  console.log("Saga here", action);
  try {
    yield put({ type: REGISTRATION_SUCCESS, user: action.payload });
  } catch (E) {
    yield put({ type: REGISTRATION_FAILED, error: E.message });
  }
}

function* UserLogin(action) {
  console.log("Login Saga here");

  try {
    yield put({ type: LOGIN_SUCCESS, user: action.payload });
  } catch (E) {
    yield { type: LOGIN_FAILED, error: E.messsage };
  }
}

function* Dashboard() {
  console.log("Dashboard saga here");
  try {
    yield put ({ type: GET_DASHBOARD});
  } catch (E) {
    yield { type:DASHBOARD_REQUEST_FAILED, error:E.error}
  }
}


function* NewUserSaga() {
  yield takeEvery(REGISTRATION_REQUEST, RegisterPage);
  yield takeEvery(LOGIN_REQUEST, UserLogin);
  yield takeEvery(GET_DASHBOARD_REQUEST, Dashboard);
}

export default NewUserSaga;
