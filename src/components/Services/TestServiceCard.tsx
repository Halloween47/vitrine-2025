// components/ServiceCard.tsx
export default function ServiceCard() {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md border border-gray-200">
        <h2 className="text-xl font-bold mb-2 text-gray-800">Landing page sur-mesure</h2>
        <p className="text-gray-600 mb-4">
          Une page unique, moderne et optimisée pour convertir vos visiteurs en clients.
        </p>
        <ul className="mb-4 space-y-2 text-sm text-gray-700">
          <li>✅ Design responsive</li>
          <li>✅ Développement rapide (Next.js + Tailwind)</li>
          <li>✅ Intégration formulaire de contact ou CTA</li>
          <li>✅ Optimisation performance</li>
          <li>✅ Livraison en 5 jours</li>
          <li>🎁 1 retouche offerte après livraison</li>
        </ul>
        <div className="text-2xl font-bold mb-4 text-gray-700">350 €</div>
        <button className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-900 transition">
          Me contacter
        </button>
      </div>
    );
  }
  