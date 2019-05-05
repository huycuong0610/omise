import React from 'react';

import {
  Card,
  Button,
  Overlay,
  Content,
  Titles,
  Image,
  Close,
}
  from './style';

const Cards = ( props ) => {

  const {
    image,
    name,
    id,
    radio,
    handlePayment,
    close,
    toogle,
    selectedAmount,
    showPaymentFunction,
    currency,
  } = props;

  return (

    <Card key={id}>
      <Image onClick={() => showPaymentFunction(id)} src={ image } />
      <Content>
        <Titles>{name}</Titles>
          <Button onClick={() => showPaymentFunction(id)}> Donate </Button>
      </Content>
      {toogle === id && 
        <Overlay>
        <div>
          <p> Select the amount to donate (USD) </p>
          <p>{radio}</p>
          <p>
            <Button
              onClick={() => {
                handlePayment(id, selectedAmount, currency);
                setTimeout(function(){close()},1000)
              }}
              type="payment"
            >Pay
            </Button>
            </p>
        </div>
        <Close onClick={() => close()} />
      </Overlay>
      }
    
    </Card>
  );

};
export default Cards;
