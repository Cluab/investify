import "src/styles/globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import Navbar from "@/components/Navbar";
import FormEdit from "@/components/FormEdit";

export default function AuthRootLayout({ children }) {
    
    return (
        <html lang="en">
            <head />
            <body>
                <StyledComponentsRegistry>
                <Navbar />
                <FormEdit >
                    {children}        
                </FormEdit>
                </StyledComponentsRegistry>
        </body>
        </html>
    )
}