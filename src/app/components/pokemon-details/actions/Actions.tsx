'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

import { ButtonText } from '@/app/constants';
import { ButtonTextType } from '@/app/types';

export default function Actions() {
  const [buttonText, setButtonText] = useState<ButtonTextType>(ButtonText.COPY);
  const pathname = usePathname();

  async function copyToClipboard() {
    await navigator.clipboard.writeText(
      `${window.location.origin}/${pathname}`
    );
    setButtonText(ButtonText.COPIED);

    setTimeout(() => {
      setButtonText(ButtonText.COPY);
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
