'use client'
import { useState } from "react";
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Button from "./Button";
import { updateForm } from "@/lib/api";
import { useParams } from "next/navigation";
import Link from "next/link";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material"
import { primary } from "@/styles/variables";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 78%;
  padding: 25px;
`;

const Title = styled.h3`
  color: ${primary};
  font-size: 18px;
  font-weight: 600;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 30px;
`;


const PContainer = styled.div `
display: flex;
flex-direction: column;
gap: 10px;
`

const UpperP = styled.h3 `
    font-weight: 600;
    color: ${primary};
`

const LowerP = styled.p `
    font-size: 15px;
    color: ${primary};
    width: 80%;
`

const ButtonBox = styled.div`
padding-top: 50px;

`


const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 30px;
  gap: 20px;
`;

const CertificationControl = ({data}) => {
  const params = useParams();
  const id = params.id;
  let certification = data.find((form) => form.id === parseInt(id));
  certification = certification.certification
  const [form, setForm] = useState({
    certification: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Get the updated values from the form inputs
    const updatedCertification = event.target.elements.certification.value;

    // Update the corresponding fields in the form data
    setForm({
        certification: updatedCertification,
    });

    // Call the updateForm function here passing the updated form data (form) to update the API
    updateForm(id, form);
  };

  return (
    <Container>
      <Title>Certification</Title>
      <form onSubmit={handleSubmit}>
        <InputContainer>
        
        <TextField required id="filled-basic" variant="filled" defaultValue={certification} sx={{ m: 1, width: '100ch'}} multiline rows={13} name="certification"  />
            <FormControlLabel  required control={<Checkbox />} label="Please tick the box to certify." color="primary" />
        </InputContainer>
        <PContainer>
    <UpperP>Digitally Certify Document</UpperP>
    <LowerP>You can click on the below button it will redirect to a platform where you can E-Sign the document to certify the details and the contract with XYZ.Capital</LowerP>
      </PContainer>
      <ButtonBox>
        <Button text={'E-Sign Document'} active={true} type="button"/>
      </ButtonBox>
        <ButtonContainer>
        <Link href={'/home'}>
          <Button text={'Cancel'} style={{ border: '1px solid ${primary}', width: '180px'}} /></Link>
          <Button text={'Save'} type="submit" style={{ border: '1px solid ${primary}', width: '180px'}} />
        </ButtonContainer>
      </form>
    </Container>
  );
};

export default CertificationControl;