'use client';

import styled from 'styled-components';
import FormSearch from './IntroCard';
import FormGroup from './FormGroup';
import IntroCard from './IntroCard';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    padding: 6rem;
    justify-content: center;
    align-items: center;
    gap: 10px;

`;

const Main = ({ children }) => (
  <Section>
    {children}
  </Section>
);

export default Main;
