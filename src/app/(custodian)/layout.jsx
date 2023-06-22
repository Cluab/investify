import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import IntroCard from "@/components/IntroCard";
import "src/styles/globals.css";
import Main from "@/components/Main";
import FormEdit from "@/components/FormEdit";



export default function AuthRootLayout({ children }) {
    return (
        <html lang="en">
            <head />
            <body>
                <Navbar />
                <FormEdit>
                    {children}
                </FormEdit>
        </body>
        </html>
    )
}