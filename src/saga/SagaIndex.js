import  { all } from 'redux-saga/effects'
import NewUserSaga from './Saga'
export default function* RootSaga() {
    yield all([
        NewUserSaga()
    ])
}