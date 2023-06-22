'use client'

import styled from "styled-components";
import SideLink from "./SideLink";

const links = [
    { id: 0, label: "Custodian Details", icon: "PersonIcon", link: "/details" },
    {
        id: 1,
        label: "Other Information",
        icon: "InfoIcon",
        link: "/information",
    },
    {
        id: 2, 
        label: "Certification",
        icon: "WorkspacePremiumIcon",
        link: "/certification",
    },
];

const Container = styled.div`

`

const Sidebar = () => {
    return (
        <Container>
            {links.map((link) => (
                <div key={link.id}>
                <SideLink link={link}/>
                </div>
            ))}
        </Container>
    );
};

export default Sidebar;