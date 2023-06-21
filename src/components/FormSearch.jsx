'use client'
import { useState } from "react"
import styled from "styled-components"
import Image from 'next/image'
import group from "@/assets/img/Group.svg"
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Container = styled.div `
    display: flex;
 flex-direction: row;
 justify-content: space-between;
 background-color: white;
 padding: 20px;
`
const Left = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
gap: 15px;
`
const FormIconCircle = styled.div `
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
height: 64px;
padding: 10px;
background-color: rgba(0, 74, 145, 1);
`


const PContainer = styled.div `
flex-direction: column;
`

const UpperP = styled.h3 `
    font-weight: 600;
    color: rgba(0, 74, 145, 1);
`

const lowerP = styled.p `
    font-size: 15px;
    color: rgba(0, 74, 145, 1);
`

const Right = styled.div `
display: flex;
justify-content: center;
`


const FormSearch = () => {

    const [order, setOrder] = useState('');

    const handleChange = (e) => {
      setOrder(e.target.value);
    };
    return(
        <Container>
            <Left>
            <FormIconCircle>
            <Image src={group}  width={40}
                    height={35} alt="vector"/>
            </FormIconCircle>
                    <PContainer>
                        <UpperP>
                            Forms
                        </UpperP>
                        <lowerP>
                        All the compulsory forms are available here
                        </lowerP>
                    </PContainer>
            </Left>
        <Right>
        <OutlinedInput
            type='text'
            endAdornment={
              <InputAdornment position="end">
                 <SearchIcon /> 
              </InputAdornment>
            }
          />
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
    value={order}
    onChange={handleChange}
    displayEmpty
    inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={10}>Recent Action</MenuItem>
          <MenuItem value={20}>Latest Action</MenuItem>
        </Select>
      </FormControl>

        </Right>

            
        </Container>

    )
} 

export default FormSearch