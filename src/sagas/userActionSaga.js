import { put, select, takeLatest } from 'redux-saga/effects'
import { CLICK_ACTION_REQUEST } from '../actions/constants'

import { selectCustomMethods } from '../actions'
import { selectParameters } from '../selectors'

export default function* rootUserActionSaga() {
  yield takeLatest(CLICK_ACTION_REQUEST, clickSaga)
}

function* clickSaga(action) {
  console.log('action', action)
  try {
    const { method, listing, pollID } = action.payload

    // if (votingRights.toNumber(10) < 10) {
    //   console.log('\nNOT ENOUGH VOTING RIGHTS')
    //   return false
    // }
    const parameters = (yield select(selectParameters)).toJS()
    console.log('parameters', parameters)
    const customMethods = ['commitVote']
    yield put(selectCustomMethods({ customMethods, method, listing, pollID }))
  } catch (err) {
    console.log('err', err)
  }
}