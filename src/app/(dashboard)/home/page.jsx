import Main from "@/components/Main";
import { GetForms } from "@/lib/api";

export default async function Home() {
 const data = await GetForms()

    return(
        <Main data={data}/>
    )
};