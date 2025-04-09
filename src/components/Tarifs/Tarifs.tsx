'use client'
import { Button } from "@tremor/react";
import { useRouter } from "next/navigation";

const Tarifs = () => {
  const router = useRouter();

  const handleClick = () => {
    // alert("Voici vos tarifs !");
    router.push('/services')
  };

  return (
    <div className="bg-sky-400 max-w-sm mx-auto mt-6 p-6 text-center">
      <Button onClick={handleClick}>
        Mes tarifs
      </Button>
    </div>
  );
};

export default Tarifs;
