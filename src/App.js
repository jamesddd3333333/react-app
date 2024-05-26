// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import styled, { css } from 'styled-components'


const Button = styled.a`
  background-color: ${props => props.primary ? 'blue' : 'grey'};
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  span{
    color:red
  }
  &:hover{
    color:green
  }
  ${props => props.disabled && css`
    color:#777;
    border:1px solid #777;
    cursor:not-allowed;
    background: #ee3;
    `}
`;

const BigButton = styled(Button)`
  width: 200px;
  height: 200px;
`


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>hello
          <span>t</span>
        </Button>
        <Button disabled>btn</Button>
        <BigButton disabled>BigButton</BigButton>

      </header>
    </div>
  );
}

export default App;
