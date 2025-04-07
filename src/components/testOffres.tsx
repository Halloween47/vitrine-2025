import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";

export default function OffreValeurAjoutee() {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Offre et Valeur Ajoutée</h2>
      <p className="text-lg mb-8">Vous avez un projet ? Je crée des interfaces engageantes qui convertissent.</p>
      
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {/* Avant */}
        <Card className="max-w-md shadow-lg">
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold mb-2">Avant</h3>
            <Image 
              src="/images/avant-projet.jpg" 
              alt="Interface avant l'amélioration"
              width={500}
              height={300}
              className="rounded-lg shadow"
            />
          </CardContent>
        </Card>
        
        {/* Après */}
        <Card className="max-w-md shadow-lg border border-green-500">
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold text-green-600 mb-2">Après</h3>
            <Image 
              src="/images/apres-projet.jpg" 
              alt="Interface après l'amélioration"
              width={500}
              height={300}
              className="rounded-lg shadow-lg border border-green-500"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
