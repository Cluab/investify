'use client'
import styled from "styled-components"
import Button from "./Button"
import Image from 'next/image'
import vector from "@/assets/img/Vector.svg"
import notification from "@/assets/img/Notification.svg"
import arrow from "@/assets/img/Arrow - Down 2.svg"

const Container = styled.div `
    display: flex;
    flex-direction: row;
    padding: 20px;
    width: 100%;
    justify-content: flex-end;
    gap: 20px;
    align-items: center;
`


const LanguageContainer = styled.div `
    
`

const OptionOne = styled.button `
    
`
const OptionTwo = styled.button `
    
`

const AccountContainer = styled.div `
display: flex;
flex-direction: row;

`

const AccountSymbol = styled.h1 `
    height: 30px;
    width: auto;
`

const PContainer = styled.div `
    display: flex;
    flex-direction: column;
`

const UpperP = styled.p `
    font-size: 10px;
`

const LowerP = styled.p `
    font-size: 15px;
`



const Navbar = () => {
    return (
<Container>
<Button text={'Individual Investor'} style={{ borderRadius: "5%" }}/>
<Image src={vector}  width={40}
      height={30} alt="vector"/>

<Image src={notification}  width={40}
      height={30} alt="notification"/>
    <LanguageContainer>
        <OptionOne>
            EN
        </OptionOne>
        <OptionTwo>
            ع
        </OptionTwo>
    </LanguageContainer>
    <AccountContainer>
        <AccountSymbol>
            EB
        </AccountSymbol>
        <PContainer>
        <UpperP>

        </UpperP>
        <LowerP>

        </LowerP>
        </PContainer>
        <Image src={arrow}  width={40}
      height={30} alt="vector"/>

    </AccountContainer>
</Container>
    )
}

export default Navbar