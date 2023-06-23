'use client'

import styled, { css } from "styled-components";
import variables from "@/styles/variables";

const Btn = styled.button`
  background-color: white;
  color: rgba(0, 74, 145, 1);
  font-weight: 600;
  font-size: 17px;
  width: auto;
  height: 50px;
  padding: 10px;
  border: none;
  cursor: pointer;

  &:active {
    background-color:  rgba(0, 74, 145, 1);
    color: white;
  }

  ${(props) =>
    props.active &&
    css`
      background-color: rgba(0, 74, 145, 1);
      color: white;
    `}
`;

const Button = ({ text, style, onClick, active, children = null, type = 'button'}) => {
  return (
    <Btn style={style} active={active} onClick={onClick}>
      {children}
      {text}
    </Btn>
  );
};

export default Button;