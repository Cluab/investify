import CustodianDetails from '@/components/CustodianDetails';
import { GetForms } from '@/lib/api';

export default async function Details() {
  const data = await GetForms();

  return (
    <CustodianDetails data={data} />
  );
}
