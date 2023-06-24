'use client';

import styled from 'styled-components';
import Main from './Main';
import IntroCard from './IntroCard';
import Sidebar from './Sidebar';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: white;
    gap: 20px;
    
`;

const FormEdit = ({ children }) => (
  <Main>
    <IntroCard title="Custodian Form" details="Lorem ipsum dolor sit amet" search={false} />
    <Container>
      <Sidebar />
      {children}
    </Container>
  </Main>
);
export default FormEdit;
