'use client';

import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Button from './Button';

const icons = { PersonIcon, InfoIcon, WorkspacePremiumIcon };

const SideLink = ({ link }) => {
  const params = useParams();
  const { id } = params;
  const pathname = usePathname();
  const basePath = pathname.split('/')[1]; // Extract the base path from the pathname
  const normalizedLink = link.link.startsWith('/') ? link.link.slice(1) : link.link; // Normalize the link value
  const isActive = basePath === normalizedLink;
  const Icon = icons[link.icon];
  return (
    <Link href={`${link.link}/${id}`}>
      <Button
        text={link.label}
        active={isActive}
        style={{
          display: 'flex',
          padding: '10px 53.5px 10px 20px',
          alignItems: 'center',
          width: '100%',
          gap: '12px',
        }}
      >
        <Icon />
      </Button>
    </Link>
  );
};

export default SideLink;
