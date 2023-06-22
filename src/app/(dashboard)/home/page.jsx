import Main from "@/components/Main";
import { GetForms } from "@/lib/api";
import IntroCard from "@/components/IntroCard";
import FormGroup from "@/components/FormGroup";

export default async function Home() {
 const data = await GetForms()

    return(
        <Main>
            <IntroCard title={"Forms"} details={"All the compulsory forms are available here"} search={true}  />
            <FormGroup data={data}/>
        </Main>
    )
};