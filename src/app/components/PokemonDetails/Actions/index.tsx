'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

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
      <span
        className='text-[#0058ff] text-base font-medium cursor-pointer'
        onClick={copyToClipboard}
      >
        {buttonText}
      </span>
    </div>
  );
}
