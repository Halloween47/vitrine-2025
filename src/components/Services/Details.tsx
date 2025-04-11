import { Button } from '@mui/material'
import React from 'react'

export const Details = () => {
  return (
    <div className="bg-[#d52a34] p-2 text-xl w-full flex flex-col  items-center">
    <p className='text-md py-2'>Site Vitrine Professionnel Responsive – Prêt en 7 jours</p>
    <p className='text-lg py-2'>À partir de 600 € ou Pack complet : 950 € TTC</p>
    <div className="formules text-sm ">
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
    </div>
    <div className="methodes text-sm ">
    <div className="starter">
    <p className='text-xl'>Ta méthode de travail</p>
    <div className='details'>
    <li className="formule py-1">Brief rapide (appel ou formulaire)</li>
    <li className="formule py-1">Proposition visuelle + validation</li>
    <li className="formule py-1">Développement (avec points d&rsquo;étapes)</li>
    <li className="formule py-1">Livraison & accompagnement</li>
    </div>
    </div>
    </div>
    <div className="delais text-sm ">
    <div className="starter">
    <p className='text-xl'>Délais</p>
    <div className='details'>
    <li className="formule py-1">Livraison en 5 à 10 jours ouvrés selon la complexité</li>
    </div>
    </div>
    </div>
    <div>
      <h2> Démo ou visuel</h2>
      <li>Une image ou mockup de site vitrine déjà fait</li>
      <li>Ou un Before/After (ex : refonte d’un site)</li>
    </div>
    <div>
    <Button
          className=" z-10 p-2 w-full m-3"
          variant="contained"
        >
          Dispo pour discuter de votre projet → Contactez-moi ici
        </Button>
    </div>
    </div>
  )
}
