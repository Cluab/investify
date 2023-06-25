import CertificationControl from '@/components/CertificationControl';
import { GetForms } from '@/lib/api';

export default async function Certification() {
  const data = await GetForms();

  return (
    <CertificationControl data={data} />
  );
}
