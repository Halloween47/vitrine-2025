import Ressource from './Ressource';
import styles from './Ressources.module.css';

export default function Ressources() {
    return (
      <section className="
        bg-sky-900 
        w-[40vw] 
        text-center         
        h-[20vh]
        " 
        id={styles.ressources}
      >
        Ressources
        <Ressource />
      </section>
    );
  }
  