import * as actionTypes from './actionTypes';
import fetch from 'isomorphic-fetch';
import {summaryDonations} from '../../helpers';

export const calDonate = (data) => {
  return {
    type: actionTypes.UPDATE_TOTAL_DONATE,
    amount: summaryDonations(data.map((item) => (item.amount))),
  }
};

export const donated = (amount) => {
  return {
    type: actionTypes.DONATE_SUCCESS,
    amount,
  };
};

export const showMessage = (message) => {
  return {
    type: actionTypes.UPDATE_MESSAGE,
    message,
  };
};

export const handlePay = (id, amount, currency) => {
  return dispatch => {
    const url = 'http://localhost:3001/payments'
    const headers = {
      'Content-Type': 'application/json',
    };
    fetch(url, {
      method: 'POST',
      headers,
      body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
    }).then(resp => { return resp.json(); })
      .then( res => {
        dispatch(donated(amount));
        dispatch(showMessage(`Thanks for donate $${amount}`));
        setTimeout(function() {
          dispatch(showMessage());
        }, 2000);
      } )
      .catch( err => {
        dispatch(showMessage(`Error ${err}`));
      } );
  };
};
