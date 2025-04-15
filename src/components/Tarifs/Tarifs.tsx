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
    <div className="
      bg-sky-400  
      w-[40vw]
      text-center
      flex
      justify-center
      rounded-md
    ">
      <Button onClick={handleClick} className="
      font-bold text-base">
        Mes tarifs
      </Button>
    </div>
  );
};

export default Tarifs;
