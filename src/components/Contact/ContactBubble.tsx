// // components/ContactBubble.tsx
// 'use client'

// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Mail, Phone, Linkedin, Github, Handshake } from 'lucide-react'
// import { Button } from '@mui/material'

// export default function ContactBubble() {
//   const [open, setOpen] = useState(false)

//   const toggleBubble = () => setOpen(!open)

//   const links = [
//     {
//       label: 'Malt',
//       href: 'https://www.malt.fr/profile/thomasleconte2',
//       icon: <Handshake size={18} />,
//     },
//     {
//       label: 'LinkedIn',
//       href: 'https://www.linkedin.com/in/thomaslecontedeveloppeur',
//       icon: <Linkedin size={18} />,
//     },
//     {
//       label: 'Téléphone',
//       href: 'tel:+33611306412',
//       icon: <Phone size={18} />,
//     },
//     {
//       label: 'Email',
//       href: 'mailto:lecontethomas.contact@proton.me',
//       icon: <Mail size={18} />,
//     },
//     {
//         label: 'GitHub',
//         href: 'https://github.com/Halloween47',
//         icon: <Github size={18} />,
//       },
//   ]

//   return (
//     <div className="fixed bottom-19 right-6 z-50">
//       <div className="relative">
//         {/* <button */}
//         <Button
//          variant="contained"
//           onClick={toggleBubble}
//           className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2 shadow-lg transition-colors"
//         >
//           {/* Contact */}
//           Une Question ?
//         {/* </button> */}
//         </Button>

//         <AnimatePresence>
//           {open && (
//             <motion.ul
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 10 }}
//               transition={{ duration: 0.2 }}
//               className="absolute bottom-full right-0 mb-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
//             >
//               {links.map((link) => (
//                 <li key={link.label}>
//                   <a
//                     href={link.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 text-sm text-gray-800"
//                   >
//                     {link.icon}
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </motion.ul>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   )
// }
/////////////////////////////////////////////
'use client'
import { useRef, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from '@mui/material';

import { Mail, Phone, Linkedin, Github, Handshake } from 'lucide-react'

export default function FloatingButton() {
  const [open, setOpen] = useState(false);
  const bubbleRef = useRef<HTMLDivElement>(null);

  const toggleBubble = () => {
    setOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (bubbleRef.current && !bubbleRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // const links = [
  //   { label: "Email", href: "mailto:test@example.com", icon: "✉️" },
  //   { label: "Téléphone", href: "tel:+33123456789", icon: "📞" },
  //   { label: "FAQ", href: "/faq", icon: "❓" },
  // ];
    const links = [
    {
      label: 'Malt',
      href: 'https://www.malt.fr/profile/thomasleconte2',
      icon: <Handshake size={18} />,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/thomaslecontedeveloppeur',
      icon: <Linkedin size={18} />,
    },
    {
      label: 'Téléphone',
      href: 'tel:+33611306412',
      icon: <Phone size={18} />,
    },
    {
      label: 'Email',
      href: 'mailto:lecontethomas.contact@proton.me',
      icon: <Mail size={18} />,
    },
    {
        label: 'GitHub',
        href: 'https://github.com/Halloween47',
        icon: <Github size={18} />,
      },
  ]

  return (
    <div ref={bubbleRef} className="fixed bottom-19 right-6 z-50">
      <div className="relative">
        <Button
          variant="contained"
          onClick={toggleBubble}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2 shadow-lg transition-colors"
        >
          Une Question ?
        </Button>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full right-0 mb-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
            >
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 text-sm text-gray-800"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
