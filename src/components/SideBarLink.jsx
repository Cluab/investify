"use client";
import Link from "next/link";"react-feather";
import { usePathname } from "next/navigation";
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const icons = { PersonIcon, InfoIcon,WorkspacePremiumIcon };

const SidebarLink = ({ link }) => {
    const pathname = usePathname();
    let isActive = false;

    if (pathname === link.link) {
        isActive = true;
    }

    const Icon = icons[link.icon];
    return (
        <Link href={link.link}>
            <Icon/>
        </Link>
    );
};

export default SidebarLink;