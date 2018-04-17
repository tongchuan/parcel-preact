import { testTypes as Types } from '../Types'
import initStore from '../initStore'
export default function(state=initStore.testState, action) {
  switch (action.type) {
    case Types.TEST_UPDATE:
      state = Object.assign(state, action.data)
      break;
    default:
      state = Object.assign(state, action.data)
      break;
  }
  return state;
}