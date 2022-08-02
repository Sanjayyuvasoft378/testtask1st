import { call, put, takeEvery } from "redux-saga/effects";
import {
  EDIT_USER,
  EDIT_USER_UP,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTRATION_FAILED,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  UPDATE_FAILED,
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
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
function* Edituser(action) { 
  debugger
  yield put({
    type:EDIT_USER_UP,
    payload: action.payload,
  });
}

function* UpdatePage(action) {
  console.log("first",action)
  try{
    yield put ({type:UPDATE_SUCCESS, user:action.payload})
  } catch (E) {
    yield put({type: UPDATE_FAILED, error: E.messsage})
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
function* NewUserSaga() {
  yield takeEvery(REGISTRATION_REQUEST, RegisterPage);
  yield takeEvery(LOGIN_REQUEST, UserLogin);
  yield takeEvery(UPDATE_REQUEST, UpdatePage)
  yield takeEvery(EDIT_USER, Edituser)
}

export default NewUserSaga;
