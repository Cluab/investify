import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import IntroCard from "@/components/IntroCard";
import "src/styles/globals.css";
import styled from "styled-components";



export default function AuthRootLayout({ children }) {
    return (
        <html lang="en">
            <head />
            <body>
                <Navbar />
                <Card>
                <IntroCard title={"Custodian Form"} details={"Lorem ipsum dolor sit amet"} search={false}  />
                    <Sidebar />
                    {children}   
                </Card>
        </body>
        </html>
    )
}