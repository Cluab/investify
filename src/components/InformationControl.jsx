'use client';

import { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FormControlLabel, Checkbox } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { updateForm } from '@/lib/api';
import Button from './Button';
import { primary } from '@/styles/variables';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 78%;
  padding: 25px 0;
`;

const PContainer = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`;

const Title = styled.h3`
    font-weight: 600;
    color: ${primary};
`;

const LowerP = styled.p`
    font-size: 15px;
    color: black;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 10px;
  width: 100%;
  padding: 20px 0;
  padding-right: 0;
`;

const BoxTitle = styled.h4`

`;

const BoxOptions = styled.div`
  display: flex;
  flex-direction: row;
`;
const InputBox = styled.div`
padding-top: 10px;

`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 30px;
  gap: 20px;
`;

const InformationControl = () => (
  <Container>
    <PContainer>
      <Title>Other Information</Title>
      <LowerP>Where do you want to send the following:</LowerP>
    </PContainer>
    <form onSubmit={handleSubmit}>
      <InputContainer>
        <Box>
          <BoxTitle>Certificates</BoxTitle>
          <BoxOptions>
            <FormControlLabel
              control={(
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<RadioButtonCheckedIcon />}
                />
)}
              label="Client"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<RadioButtonCheckedIcon />}
                />
)}
              label="Custodian"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<RadioButtonCheckedIcon />}
                />
)}
              label="Other Entity"
            />
          </BoxOptions>
        </Box>
        <Box>
          <BoxTitle>Profits or any other Income</BoxTitle>
          {' '}
          <BoxOptions>
            <FormControlLabel
              control={(
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<RadioButtonCheckedIcon />}
                />
)}
              label="Client"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<RadioButtonCheckedIcon />}
                />
)}
              label="Custodian"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<RadioButtonCheckedIcon />}
                />
)}
              label="Other Entity"
            />
          </BoxOptions>
        </Box>
        <Box>
          <BoxTitle>Sales Outcomes</BoxTitle>
          {' '}
          <BoxOptions>
            <FormControlLabel
              control={(
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<RadioButtonCheckedIcon />}
                />
)}
              label="Client"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<RadioButtonCheckedIcon />}
                />
)}
              label="Custodian"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<RadioButtonCheckedIcon />}
                />
)}
              label="Other Entity"
            />
          </BoxOptions>
        </Box>
      </InputContainer>
      <InputBox>
        <TextField label="Other Entity" variant="outlined" sx={{ m: 1, width: '50ch' }} name="Other Entity" />
      </InputBox>
      <ButtonContainer>
        <Link href="/home">
          <Button text="Cancel" style={{ border: '1px solid #004a91', width: '180px' }} />
        </Link>
        <Button text="Save" type="submit" style={{ border: '1px solid #004a91', width: '180px' }} />
      </ButtonContainer>
    </form>
  </Container>
);

export default InformationControl;
