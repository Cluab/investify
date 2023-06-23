import Navbar from "@/components/Navbar";
import StyledComponentsRegistry from "@/lib/registry";
import "src/styles/globals.css";



export default function AuthRootLayout({ children }) {
    return (
        <html lang="en">
            <head />
            <body>
                <StyledComponentsRegistry>
                <Navbar />
                    {children}   
                </StyledComponentsRegistry>
        </body>
        </html>
    )
}