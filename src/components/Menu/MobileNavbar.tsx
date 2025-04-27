import { Home, Search, User, Settings } from "lucide-react"; // Icônes modernes
import Link from "next/link";

export default function MobileNavbar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md z-50 md:hidden">
      <div className="flex justify-around items-center py-2">
        <Link href="/" className="flex flex-col items-center text-gray-700 hover:text-black text-sm">
          <Home className="w-6 h-6" />
          <span>Accueil</span>
        </Link>
        <Link href="/" className="flex flex-col items-center text-gray-700 hover:text-black text-sm">
          <Search className="w-6 h-6" />
          <span>Recherche</span>
        </Link>
        <Link href="/" className="flex flex-col items-center text-gray-700 hover:text-black text-sm">
          <User className="w-6 h-6" />
          <span>Profil</span>
        </Link>
        <Link href="/" className="flex flex-col items-center text-gray-700 hover:text-black text-sm">
          <Settings className="w-6 h-6" />
          <span>Paramètres</span>
        </Link>
      </div>
    </nav>
  );
}
