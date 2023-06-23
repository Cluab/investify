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
  padding: 25px;
`;

const PContainer = styled.div `
flex-direction: column;
`

const Title = styled.h3 `
    font-weight: 600;
    color: rgba(0, 74, 145, 1);
`

const LowerP = styled.p `
    font-size: 15px;
    color: rgba(0, 74, 145, 1);
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 10px;
  width: 100%;
`;

const BoxTitle = styled.h4`

`

const BoxOptions = styled.div`
  
`

const Option = styled.input`
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 30px;
  gap: 20px;
`;

const InformationControl = () => {
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
      <PContainer>
    <Title>Other Information</Title>
    <LowerP>Where do you want to send the following:</LowerP>
      </PContainer>
      <form onSubmit={handleSubmit}>
        <InputContainer>
        </InputContainer>
        <ButtonContainer>
        <Link href={'/home'}>
          <Button text={'Cancel'} style={{ border: '1px solid #004a91', width: '180px'}} /></Link>
          <Button text={'Save'} type="submit" style={{ border: '1px solid #004a91', width: '180px'}} />
        </ButtonContainer>
      </form>
    </Container>
  );
};

export default InformationControl;