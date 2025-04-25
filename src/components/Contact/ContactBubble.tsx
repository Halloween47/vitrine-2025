// components/ContactBubble.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, Linkedin, ExternalLink } from 'lucide-react'

export default function ContactBubble() {
  const [open, setOpen] = useState(false)

  const toggleBubble = () => setOpen(!open)

  const links = [
    {
      label: 'Malt',
      href: 'https://www.malt.fr/profile/tonprofil',
      icon: <ExternalLink size={18} />,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/tonprofil/',
      icon: <Linkedin size={18} />,
    },
    {
      label: 'Téléphone',
      href: 'tel:+33600000000',
      icon: <Phone size={18} />,
    },
    {
      label: 'Email',
      href: 'mailto:contact@tonmail.com',
      icon: <Mail size={18} />,
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <button
          onClick={toggleBubble}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2 shadow-lg transition-colors"
        >
          Contact
        </button>

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
  )
}
