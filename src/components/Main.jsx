'use client'
import styled from "styled-components"
import FormSearch from "./FormSearch"
import FormGroup from "./FormGroup"

const Section = styled.section `
display: flex;
flex-direction: column;
padding: 6rem;
justify-content: center;

`

const Main = ({data}) => {
    return (
        <Section>
<FormSearch />
<FormGroup data={data}/>
        </Section>
    )
}

export default Main