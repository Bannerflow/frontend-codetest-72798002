import { useState } from 'react';
import { usePathname } from 'next/navigation';

import Button from '@/app/components/UI/Button';

export default function Actions() {
  const [buttonText, setButtonText] = useState<'Copy link' | 'Copied!'>(
    'Copy link'
  );
  const pathname = usePathname();

  async function copyToClipboard() {
    await navigator.clipboard.writeText(
      `${window.location.origin}/${pathname}`
    );
    setButtonText('Copied!');

    setTimeout(() => {
      setButtonText('Copy link');
    }, 2000);
  }

  return (
    <div className='w-full'>
      <Button onClick={copyToClipboard}>{buttonText}</Button>
    </div>
  );
}
