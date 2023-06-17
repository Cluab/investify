"use client"
import styled from "styled-components"
import Button from "./Button"


const Container = styled.div `
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`
const Upper = styled.div `
    flex-direction: column;
`

const Lower = styled.div `
    
`
const Table = styled.table `

`

const FormGroup = () => {
    return(
        <Container>
            <Upper>
                <Button text={'Approved'} />
                <Button text={'Pending'}/>
            </Upper>
        <Lower>
            <Table>
                <tr>
                    <th>ID</th>
                    <th>Form Title</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </Table>
        </Lower>
        </Container>
    )
}

export default FormGroup