'use client'
import Sidebar from "./Sidebar";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: white;
    justify-content: space-between;

`

const FormSelector = ({children}) => {
    return(
    <Container>
        <Sidebar />
        {children}
    </Container>
    )
}
export default FormSelector;