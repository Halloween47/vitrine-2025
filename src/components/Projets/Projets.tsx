import WorkIcon from '@mui/icons-material/Work';

export default function Projets() {
    return (
      <section className="
        flex 
        flex-col 
        justify-center 
        min-h-20 
        bg-[#49111C]
        text-white 
        rounded-md
        gap-5
        w-[40vw]
        h-[13vh]
        relative
      ">
        <WorkIcon className='absolute right-2 top-2' />
        <h2 className="text-base font-bold leading-tight w-[60%] pl-3">
            Projets en cours
        </h2>
      </section>
    );
  }
  