'use client'
import styled from "styled-components"
import Image from 'next/image'
import group from "@/assets/img/Group.svg"
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div `
    display: flex;
 flex-direction: row;
 justify-content: space-between;
`
const Left = styled.div `
display: flex;
flex-direction: row;
`
const FormIconCircle = styled.div `
border-radius: 50%;
height: auto;
padding: 10px;
background-color: rgba(0, 74, 145, 1);
`


const PContainer = styled.div `
flex-direction: column;
`

const UpperP = styled.h3 `
    font-weight: 600;
`

const lowerP = styled.p `
    font-size: 15px;
`

const Right = styled.div `

`


const FormSearch = () => {
    return(
        <Container>
            <Left>
            <FormIconCircle>
            <Image src={group}  width={40}
                    height={30} alt="vector"/>
            </FormIconCircle>
                    <PContainer>
                        <UpperP>
                            Welcome
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
            label="Search"
            
          />
        </Right>

            
        </Container>

    )
} 

export default FormSearch