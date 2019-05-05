import {
  UPDATE_TOTAL_DONATE,
  DONATE_SUCCESS,
  UPDATE_MESSAGE
} from '../actions/actionTypes';

const initState = {
  donations: 0,
  message: '',
};

const init = ( state, action ) => {
  const data = {
    error: null,
  };
  return {...state,...data};
};

const donated = (state, action) => {
  let donations = state.donations && state.donations.replace(/\D/g,'');
  let amount = action.amoun && action.amount.replace(/\D/g,'');
  let donated = parseInt(donations + amount)
  const data = {
    donations: donated,
  };
  return {...state,...data};

};

const showMessage = ( state, action ) => {
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
