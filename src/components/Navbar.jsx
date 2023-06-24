'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Button from './Button';
import vector from '@/assets/img/Vector.svg';
import notification from '@/assets/img/Notification.svg';
import arrow from '@/assets/img/Arrow - Down 2.svg';
import { primary } from '@/styles/variables';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    width: 100%;
    justify-content: flex-end;
    gap: 20px;
    align-items: center;
`;

const LanguageContainer = styled.div`
    width: 83px;
    height: 34.58px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(42, 37, 34, 1);
    padding: 3px;
    border-radius: 10px;
`;

const OptionOne = styled.button`
    color:white;
    background-color: rgba(42, 37, 34, 1);
    padding: 4px;
    width: 37px;
    height: auto;
    font-size: 16px;
    border-radius: 10px;
`;
const OptionTwo = styled.button`
    color:white;
    background-color: rgba(220, 172, 0, 1);
    padding: 4px;
    padding-bottom: 3px;
    width: 37px;
    height: 27px;
    font-size: 14px;
    border-radius: 10px;
`;

const AccountContainer = styled.div`
display: flex;
flex-direction: row;
border:1px solid rgba(0, 74, 145, 0.35);
padding: 8px;
gap: 14px;
border-radius: 8px;
align-items: center;
`;

const AccountSymbol = styled.h1`
    height: 32px;
    width: 32px;
    color:white;
    background-color: ${primary};
    padding: 3px;
    font-size: 15px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PContainer = styled.div`
    display: flex;
    flex-direction: column;

`;

const UpperP = styled.p`
    font-size: 13px;
`;

const LowerP = styled.p`
    font-size: 14px;
`;

const Navbar = () => (
  <Container>
    <Button text="Individual Investor" style={{ borderRadius: '5%' }} active />
    <Image
      src={vector}
      width={40}
      height={30}
      alt="vector"
    />

    <Image
      src={notification}
      width={40}
      height={30}
      alt="notification"
    />
    <LanguageContainer>
      <OptionOne>
        EN
      </OptionOne>
      <OptionTwo>
        ع
      </OptionTwo>
    </LanguageContainer>
    <AccountContainer>
      <AccountSymbol>
        EB
      </AccountSymbol>
      <PContainer>
        <UpperP>
          Welcome!
        </UpperP>
        <LowerP>
          Ebrahim Suhail
        </LowerP>
      </PContainer>
      <Image
        src={arrow}
        width={40}
        height={30}
        alt="vector"
      />

    </AccountContainer>
  </Container>
);

export default Navbar;
