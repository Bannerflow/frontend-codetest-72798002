import { useRecoilState } from 'recoil';

import Button from '@/app/components/UI/Button';
import { paginationState } from '@/app/state/atoms';

export default function Pagination() {
  const [page, setPage] = useRecoilState(paginationState);

  const pageHandler = (where: 'next' | 'previous') => {
    if (where === 'next') {
      setPage((prevState) => prevState + 1);
    } else {
      setPage((prevState) => prevState - 1);
    }
  };

  return (
    <div className='flex justify-center gap-4'>
      <Button disabled={page === 1} onClick={() => pageHandler('previous')}>
        Previous
      </Button>
      <Button onClick={() => pageHandler('next')}>Next</Button>
    </div>
  );
}
