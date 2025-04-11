import { Button } from '@mui/material'
import React from 'react'

export const Details = () => {
  return (
    <div className="bg-[#ffffff] p-2 text-xl w-full flex flex-col  items-center">
    <p className=' py-2 text-black font-bold text-sm text-center'>Site Vitrine Professionnel Responsive – Prêt en 7 jours</p>
    <p className='text-lg py-2 text-black text-xs font-medium'>À partir de 600 € ou Pack complet : 950 € TTC</p>
    {/* <div className="formules text-sm ">
    <div className="starter">
    <p className='text-xl'>Starter (one-page simple)</p>
    <div className='details'>
    <li className="formule py-1">Design 100 % responsive</li>
    <li className="formule py-1">Intégration à partir de maquette ou création from scratch</li>
    <li className="formule py-1">Formulaire de contact fonctionnel</li>
    <li className="formule py-1">Optimisation SEO technique</li>
    <li className="formule py-1">Livraison clé en main + support 1 semaine</li>
    </div>
    </div>
    <div className="standard">
    <p className='text-xl'>Standard (multi-sections + formulaire)</p>
    <div className='details'>
    <li className="formule py-1">Design 100 % responsive</li>
    <li className="formule py-1">Intégration à partir de maquette ou création from scratch</li>
    <li className="formule py-1">Formulaire de contact fonctionnel</li>
    <li className="formule py-1">Optimisation SEO technique</li>
    <li className="formule py-1">Livraison clé en main + support 1 semaine</li>
    </div>
    </div><div className="premium">
    <p className='text-xl'>Premium (animations, CMS, SEO technique inclus)</p>
    <div className='details'>
    <li className="formule py-1">Design 100 % responsive</li>
    <li className="formule py-1">Intégration à partir de maquette ou création from scratch</li>
    <li className="formule py-1">Formulaire de contact fonctionnel</li>
    <li className="formule py-1">Optimisation SEO technique</li>
    <li className="formule py-1">Livraison clé en main + support 1 semaine</li>
    </div>
    </div>
    </div> */}
    <div className="methodes">
      <p className='text-sm font-semibold text-black'>Ta méthode de travail</p>
      <div className='details'>
        <li className="formule text-sm py-1 text-black list-non ml-5">Brief rapide (appel ou formulaire)</li>
        <li className="formule text-sm py-1 text-black list-non ml-5">Proposition visuelle + validation</li>
        <li className="formule text-sm py-1 text-black list-non ml-5">Développement (avec points d&rsquo;étapes)</li>
        <li className="formule text-sm py-1 text-black list-non ml-5">Livraison & accompagnement</li>
      </div>
    </div>
    <div className="delais text-sm ">
      <p className='text-sm font-semibold text-black'>Délais</p>
      <div className='details'>
        <li className="formule text-sm py-1 text-black list-non ml-5">Livraison en 5 à 10 jours ouvrés selon la complexité</li>
      </div>
    </div>
    <div>
      <h2> Démo ou visuel</h2>
      <li className='formule text-sm py-1 text-black list-non ml-5'>Une image ou mockup de site vitrine déjà fait</li>
      <li className='formule text-sm py-1 text-black list-non ml-5'>Ou un Before/After (ex : refonte d’un site)</li>
    </div>
    <div>
    <p className='text-base text-center mt-5 font-semibold text-black'>Dispo pour discuter de votre projet</p>
    <Button
          className=" z-10 p-2 mt-5 text-center w-full"
          variant="contained"
        >
           → Contactez-moi ici
        </Button>
    </div>
    </div>
  )
}
