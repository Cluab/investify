'use client'
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const Title = styled.h3`
  color: #004a91;
  font-size: 18px;
  font-weight: 600;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const CustodianDetails = () => {
  return (
    <Container>
      <Title>Custodian Details</Title>
      <InputContainer>
        <Row>
          <Label>Input 1:</Label>
          <Input type="text" required />
          <Label>Input 2:</Label>
          <Input type="text" required />
        </Row>
        <Row>
          <Label>Input 3:</Label>
          <Input type="text" required />
          <Label>Input 4:</Label>
          <Input type="text" required />
        </Row>
      </InputContainer>
      <ButtonContainer>
        <Button text={"Cancel"} />
        <Button text={"Save"} />
      </ButtonContainer>
    </Container>
  );
};

export default CustodianDetails;
