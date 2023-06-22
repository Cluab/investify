'use client'

import styled from "styled-components";
import SideLink from "./SideLink";

const links = [
    { id: 0, label: "PersonIcon", icon: "PersonIcon", link: "/details" },
    {
        id: 1,
        label: "InfoIcon",
        icon: "InfoIcon",
        link: "/information",
    },
    {
        id: 2, 
        label: "WorkspacePremiumIcon",
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
                <SideLink link={link}/>
            ))}
        </Container>
    );
};

export default Sidebar;