import Image from "next/image";
import { getAnimeList } from "@/lib/data";
import styles from "./page.module.css";
import AnimeCard from "@/Components/AnimeCard";
import { Anime } from "@/lib/interfaces";

export default async function Home() {
  const animeList: Anime[] = await getAnimeList()
  
  return (
    <main className={styles.homeMain}>
      <h2 className={styles.homeTitle}>Explore Anime</h2>
      <section className={styles.animeContainer}>
        {animeList.map(anime => <AnimeCard key={anime.id} anime={anime} /> )}
      </section>
      <div className={styles.spinner}>
        <Image src="/spinner.svg" alt="loading" width={35} height={35}/>
      </div>
    </main>
  );
}
