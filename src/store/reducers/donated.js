import {
  UPDATE_TOTAL_DONATE,
  DONATE_SUCCESS,
  UPDATE_MESSAGE
} from '../actions/actionTypes';
import { toast } from 'react-toastify';
const initState = {
  donations: 0,
  message: '',
};


const donated = (state, action) => {
  let donations = state.donations;
  let amount = action.amount;
  let donated = parseInt(donations + amount)
  const data = {
    donations: donated,
  };
  return {...state,...data};
};

const showMessage = ( state, action ) => {
  toast.success(action.message)
  return {...state,...{ message: action.message }};
};

const reducer = ( state = initState, action ) => {
  switch ( action.type ) {
    case UPDATE_TOTAL_DONATE: 
      return donated(state, action);
    case DONATE_SUCCESS: 
      return donated(state, action);
    case UPDATE_MESSAGE: 
      return showMessage(state, action);
    default:
      return state;
  }
};

export default reducer;
