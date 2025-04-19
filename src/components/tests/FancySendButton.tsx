'use client';

import { useState } from 'react';
import { Check, Send } from 'lucide-react';
import clsx from 'clsx';

export default function FancySendButton() {
  const [sent, setSent] = useState(false);

  const handleClick = () => {
    if (sent) return;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="relative h-[200px] flex items-center justify-center">
      <button
        onClick={handleClick}
        className={clsx(
          "relative w-[250px] h-[50px] bg-[#50d71e] rounded-[10px] text-[18px] font-light tracking-wider border-none focus:outline-none transition duration-500 pl-[58px] flex items-center justify-start",
          sent && "bg-blue-100 text-blue-600"
        )}
      >
        {/* Dot */}
        {/* <span
          className={clsx(
            "absolute bg-gray-300 h-[10px] w-[30px] rounded-full top-[20px] left-[8px] transition-transform duration-500",
            sent && "scale-0 opacity-0"
          )}
        ></span> */}

        {/* Plane icon */}
        <Send
          className={clsx(
            "absolute text-blue-500 h-[34px] left-[12px] top-[8px] transition-all duration-700",
            sent && "opacity-0 -translate-y-4 translate-x-2"
          )}
        />

        {/* Check icon */}
        <Check
          className={clsx(
            "absolute text-blue-500 h-[32px] left-[12px] top-[9px] opacity-0 transition-all duration-500 delay-500",
            sent && "opacity-100 top-[12px]"
          )}
        />

        {/* Text (before click) */}
        <span
          className={clsx(
            "text text-blue-900 transition-opacity duration-500",
            sent && "opacity-0"
          )}
        >
          Envoi email
        </span>

        {/* Text (after click) */}
        <span
          className={clsx(
            "text2 absolute left-[70px] text-blue-600 opacity-0 transition-opacity duration-500 delay-100",
            sent && "opacity-100"
          )}
        >
          Envoyé !
        </span>
      </button>
    </div>
  );
}
