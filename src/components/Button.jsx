'use client'

import styled from "styled-components";

const Btn = styled.button`
  background-color: white;
  color: rgba(0, 74, 145, 1);
  font-weight: 600;
  font-size: 17px;
  width: 100px;
  padding: 10px;
  border: none;
  cursor: pointer;

  &:active {
    background-color:  rgba(0, 74, 145, 1);
    color: white;
  }
`;

const Button = ({text}) => {
    return(
    <Btn>{text}</Btn>)
}

export default Button;