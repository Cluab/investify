'use client'

import styled, { css } from "styled-components";
import { primary } from "@/styles/variables";

const Btn = styled.button`
  background-color: white;
  color: ${primary};
  font-weight: 600;
  font-size: 17px;
  width: auto;
  height: 50px;
  padding: 10px;
  border: none;
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${primary};
    color: white;
  }

  ${(props) =>
    props.active &&
    css`
      background-color: ${primary};
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