import Image from "next/image";
import styles from '@/app/page.module.css'

function Hero() {
  return (
    <header className={styles.heroHeader}>
      <h1 className={styles.heroTitle}>
        Explore The <br />
        <span className={styles.heroHighlight}>Diverse Realms</span> of
        Anime Magic
      </h1>
      <div className={styles.heroImageContainer}>
        <Image src='/anime.png' alt="anime" fill className={styles.heroImage} />
      </div>
    </header>
  );
}

export default Hero;