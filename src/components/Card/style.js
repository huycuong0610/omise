import styled, { injectGlobal, keyframes } from 'styled-components';

export const Card = styled.div`
  position:relative;
  display: inline-block;
  margin:15px;
  min-width: calc(50% - 30px);
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
  @media(max-width:960px){
    display:block;
    width: calc (100%);
  }
`;

export const Button = styled.button`
    padding: 5px 10px;
    border: solid 1px #0734c5;
    outline: 0;
    background: #fff;
    color: #0734c5;
    border-radius: 4px;
    cursor: pointer;
`;


export const Slide = keyframes`
  100% { left: 0; }
`;

export const FadeIn = keyframes`
  from {
      opacity:0;
  }
  to {
      opacity:1;
  }
`;

export const Overlay = styled.div`
  display: block;
  position: absolute;
  top:0;
  left:100%;
  width: 100%;
  height: 100%;
  opacity:0.85;
  background-color:#fff;
  -webkit-animation: ${Slide} 1s forwards;
  animation: ${Slide} 1s forwards;
  > div:first-child {
    padding: 15% 10%;
    text-align: center;
    cursor: pointer;
    opacity: 1;
    line-height: 32px;
    > p{
       font-style: normal;
       font-size: 20px;
    }
    > button{
      margin-top: 20px;
    }
  }
`;

export const Content = styled.div`
  padding: 25px 15px;
  > Button {
      float: right;
      right: 20px;
      top: 25px;
  }
`;

export const Titles = styled.span`
  padding:0;
  margin:0;
  text-align:left;
  font-size: 14px;
  color: #7c7c7c;
`;

export const Image = styled.div`
  background-image: url(${(props) => props.src ? props.src : ''});
  width: 100%;
  height: 315px;
  border-radius: 4px;
  cursor: pointer;
  @media(max-width:960px){
    display:block;
    width: 100%;
  }
`;


export const Close = styled.div`
    position: absolute;
    top: 3%;
    right: 2%;
    background-image: url(images/close.png);
    background-repeat: no-repeat;
    background-size: 30px 30px;
    background-position: center;
    cursor: pointer;
    width: 30px;
    height: 30px;
`;


