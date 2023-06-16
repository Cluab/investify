import Navbar from "@/components/Navbar";
import "@/styles/global.css";


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