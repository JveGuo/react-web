import * as type from '../actions/types';
import storgeTool from '../../utils/storage'

const INITIAL_INFO = {
  info: JSON.parse(storgeTool.getStore('info')) || {}
};

const logInData =  (state = INITIAL_INFO, action) => {
  switch (action.type) {
    case type.LOG_IN:
      return {
        ...state,
        info: action.data
      }
    default:
      return {...state}
  }
}


export default logInData