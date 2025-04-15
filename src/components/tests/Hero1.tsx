
'use client'

import { useState, useEffect } from 'react';
import { JSX } from 'react/jsx-runtime';


const texts: string[] = [
  'Je conçois.',
  'Je développe.',
  'Je rends les interfaces inoubliables.'
]

export default function Hero1(): JSX.Element {
  const [index, setIndex] = useState<number>(0)
  const [displayText, setDisplayText] = useState<string>('')
  const [isDeleting, setIsDeleting] = useState<boolean>(false)

  useEffect(() => {
    const fullText = texts[index % texts.length]
    const delay: number = isDeleting ? 50 : 100

    const timeout: NodeJS.Timeout = setTimeout(() => {
      setDisplayText((prev: string) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      )

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setIndex((prev: number) => prev + 1)
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, index])

  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-6 py-12 bg-gradient-to-br from-slate-900 to-gray-800 text-white">
      <h1 className="text-3xl font-bold leading-snug sm:text-4xl">
        {displayText}
        <span className="border-r-2 border-white ml-1 animate-pulse" />
      </h1>
      <p className="mt-4 text-base text-gray-300 max-w-sm">
        Je transforme vos idées en interfaces impactantes.
      </p>
      <button className="mt-6 bg-white text-slate-900 font-semibold px-5 py-2 rounded-xl shadow-md hover:bg-slate-100 transition">
        Voir mon travail
      </button>
    </section>
  )
}
