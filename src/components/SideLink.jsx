"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const icons = { PersonIcon, InfoIcon,WorkspacePremiumIcon };

const SideLink = ({ link, key }) => {
    const pathname = usePathname();
    let isActive = false;

    if (pathname === link.link) {
        isActive = true;
    }

    const Icon = icons[link.icon];
    
    return (
        <Link href={link.link} key={key}>
            <Icon/>
        </Link>
    );
};

export default SideLink;