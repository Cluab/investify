import Navbar from "@/components/Navbar";
import IntroCard from "@/components/IntroCard";
import "src/styles/globals.css";
import FormEdit from "@/components/FormEdit";
import StyledComponentsRegistry from "@/lib/registry";

export default function AuthRootLayout({ children }) {
    return (
        <html lang="en">
            <head />
            <body>
                <StyledComponentsRegistry>
                <Navbar />
                <FormEdit>
                <IntroCard title={"Custodian Form"} details={"Lorem ipsum dolor sit amet"} search={false}  />
                    {children}        
                </FormEdit>
                </StyledComponentsRegistry>
        </body>
        </html>
    )
}