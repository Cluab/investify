'use client'

import styled from "styled-components";

const CardSec = styled.section`
    display: flex;
    flex-direction: row;
    padding: 6rem;
    justify-content: center;
    
`

const Card = ({children}) => {
    return <CardSec>{children}</CardSec>
};

export default Card;