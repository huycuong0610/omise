import styled, { injectGlobal, keyframes } from 'styled-components';


export const Messages = styled.div`
        color: 'red',
        margin: '1em 0',
        fontWeight: 'bold',
        fontSize: '16px',
        textAlign: 'center',
`;

export const Container = styled.div`
  position:relative;
  max-width: 1200px;
  @media(max-width: 1000px){
    width: 100%;
    margin: 0;
  }
`;


export const Radio =  styled.input`
  text-align: left;
  font-size: 14px;
  width: 14px;
  height: 14px;
  margin-left: 10px;
  cursor: pointer;
`;


