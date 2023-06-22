import Main from "./Main"
import IntroCard from "./IntroCard"
import FormSelector from "./FormSelector"


const FormEdit = ({children}) => {
    return(
        <Main>
            <IntroCard title={"Custodian Form"} details={"Lorem ipsum dolor sit amet"} search={false}  />
           <FormSelector>
            {children}
            
           </FormSelector>
        </Main>
    )
}
export default FormEdit;