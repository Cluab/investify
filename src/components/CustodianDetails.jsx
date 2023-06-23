'use client'
import { useState } from "react";
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Button from "./Button";
import { updateForm } from "@/lib/api";
import { useParams } from "next/navigation";
import Link from "next/link";

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
  const params = useParams();
  const id = params.id;
  const [form, setForm] = useState({
    name: '',
    accountName: '',
    correspondenceAddress: '',
    accountNumber: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Get the updated values from the form inputs
    const updatedName = event.target.elements.name.value;
    const updatedCorrespondenceAddress = event.target.elements.correspondenceAddress.value;
    const updatedAccountName = event.target.elements.accountName.value;
    const updatedAccountNumber = event.target.elements.accountNumber.value;

    // Update the corresponding fields in the form data
    setForm({
      name: updatedName,
      correspondenceAddress: updatedCorrespondenceAddress,
      accountName: updatedAccountName,
      accountNumber: updatedAccountNumber,
    });

    // Call the updateForm function here passing the updated form data (form) to update the API
    updateForm(id, form);
  };

  return (
    <Container>
      <Title>Custodian Details</Title>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <Row>
            <TextField required label="Name" variant="outlined" sx={{ m: 1, width: '50ch' }} name="name" />
            <TextField
              required
              label="Address of Correspondence"
              variant="outlined"
              sx={{ m: 1, width: '50ch' }}
              name="correspondenceAddress"
            />
          </Row>
          <Row>
            <TextField required label="Account Name" variant="outlined" sx={{ m: 1, width: '50ch' }} name="accountName" />
            <TextField
              required
              label="Account Number"
              variant="outlined"
              sx={{ m: 1, width: '50ch' }}
              name="accountNumber"
            />
          </Row>
        </InputContainer>
        <ButtonContainer>
        <Link href={'/home'}>
          <Button text={'Cancel'} /></Link>
          <Button text={'Save'} type="submit" />
        </ButtonContainer>
      </form>
    </Container>
  );
};

export default CustodianDetails;