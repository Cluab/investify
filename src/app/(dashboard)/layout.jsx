import Navbar from "@/components/Navbar";
import "src/styles/globals.css";



export default function AuthRootLayout({ children }) {
    return (
        <html lang="en">
            <head />
            <body>
                <Navbar />
                    {children}   
        </body>
        </html>
    )
}