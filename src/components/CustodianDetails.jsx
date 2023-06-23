'use client'
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Button from "./Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 78%;
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
  width: 100%;
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
      <form>
      <InputContainer>
        <Row>
        <TextField  required label="Name" variant="outlined" sx={{ m: 1, width: '50ch' }} />
        <TextField  required label="Address of Correspondence" variant="outlined" sx={{ m: 1, width: '50ch' }} />
        </Row>
        <Row>
        <TextField  required label="Account Name" variant="outlined" sx={{ m: 1, width: '50ch' }} />
        <TextField  required label="Account Number" variant="outlined" sx={{ m: 1, width: '50ch' }} />
        </Row>
      </InputContainer>
      <ButtonContainer>
        <Button text={"Cancel"} />
        <Button text={"Save"}/>
      </ButtonContainer>
      </form>
    </Container>
  );
};

export default CustodianDetails;
