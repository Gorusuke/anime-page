import { AnimeInterface } from "@/lib/interfaces"
import Image from "next/image"
import styles from '@/app/page.module.css'

const AnimeCard = ({ anime }: AnimeInterface) => {
  return (
    <section>
      <div className={styles.imageContainer}>
        <Image
          src={`https://shikimori.one${anime.image.original}`}
          alt={anime.name}
          fill
          sizes="100%"
          className={styles.animeImage}
        />
      </div>
      <div className={styles.animeInfoContainer}>
        <div className={styles.animeInfo}>
          <h2 className={styles.animeTitle}>{anime.name}</h2>
          <p className={styles.animeKind}>{anime.kind}</p>
        </div>
        <div className={styles.animeDetails}>
          <div className={styles.animeEpisodes}>
            <Image
              src="/play.svg"
              alt="episodes"
              width={20}
              height={20}
            />
            <p>{anime.episodes || anime.episodes_aired}</p>
          </div>
          <div className={styles.animeRating}>
            <Image
              src="/star.svg"
              alt="star"
              width={18}
              height={18}
            />
            <p>{anime.score}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnimeCard