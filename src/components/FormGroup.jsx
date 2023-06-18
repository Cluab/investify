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

const FormGroup = ({ data }) => {
    console.log(data)
    return (
      <Container>
        <Upper>
          <Button text={'Approved'} />
          <Button text={'Pending'} />
        </Upper>
        <Lower>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Form Title</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((info) => (
                <tr key={info.id}>
                  <td>{info.id}</td>
                  <td>{info.accountName}</td>
                  <td>{info.date}</td>
                  <td>Action</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Lower>
      </Container>
    );
  };
  
export default FormGroup