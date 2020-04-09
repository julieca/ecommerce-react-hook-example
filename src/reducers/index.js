import {
  combineReducers
} from 'redux'
import {
  GET_DATA,
  PURCHASE
} from '../enums/mutations'

function histories(state = [], action) {
  console.log(action)
  const {
    type,
    payload
  } = action
  switch (type) {
    case PURCHASE:
      console.log(payload)
      return [...state, payload];
    default:
      return state
  }
}
function data(state = {}, action) {
  console.log(action)
  const {
    type,
    payload
  } = action
  switch (type) {
    case GET_DATA:
      state = payload
      return state;
    default:
      return state
  }
}
const rootReducer = combineReducers({
  data,
  histories
})
export default rootReducer
