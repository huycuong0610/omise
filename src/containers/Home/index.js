import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import * as actions from '../../store/actions';
import Card from '../../components/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Messages,
  Container,
  Radio,
}
  from './style';
const SelectValue = [10, 20, 50, 100, 500];
class Home extends Component {
  state = {
    charities: [],
    selectedAmount: 10,
    toogle:'',
  };

  async componentWillMount() {
    const self = this;
    const { updateDonation } = self.props;

    await fetch('http://localhost:3001/charities')
      .then(function(resp) { return resp.json(); })
      .then(function(data) {
        self.setState({ charities: data }) });

    const data = await fetch('http://localhost:3001/payments')
      .then(function(resp) { return resp.json() })
      .then(function(data) {
        return data;
      });
    updateDonation(data);
  }

  showPaymentFunction = (id) => {
    this.setState({toogle: id});
  };

  close = () => {
    this.setState({toogle:''});
  };

  render() {
    const _this = this;
    let cards = this.state.charities.map(function(item, index) {
      let radio = SelectValue.map((number, numberIndex) => (
        <label key={numberIndex}>
          <Radio
            type="radio"
            name="payment"
            onClick={function() {
              _this.setState({ selectedAmount: number })
            }} /> {number}
        </label>
      ));

      return (
        <Card
          image={'/images/'+ item.image}
          id={item.id}
          name={item.name}
          showPaymentFunction={_this.showPaymentFunction}
          toogle={_this.state.toogle}
          radio={radio}
          handlePayment={_this.props.handlePayment}
          close={_this.close}
          selectedAmount={_this.state.selectedAmount}
          currency={item.currency}
        />
      );
    });

    return (
      <div>
        <h2>OMISE React</h2>
        <p>All donations: { this.props.donate }$</p>
        <Messages >
        </Messages>
        <Container>
          { cards }
        </Container>
        <ToastContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    donate: state.donations,
    message: state.message,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateDonation:(data) => dispatch(actions.calDonate(data)),
    handlePayment: ( id, selectedAmount, currency) => {dispatch(actions.handlePay( id, selectedAmount, currency),
     )},
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
