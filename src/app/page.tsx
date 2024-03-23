import Image from "next/image";
import { getAnimeList } from "@/lib/data";
import AnimeCard from "@/Components/AnimeCard";
import { Anime } from "@/lib/interfaces";
import LoadMore from "@/Components/LoadMore";
import styles from "./page.module.css";

export default async function Home() {
  const animeList: Anime[] = await getAnimeList(1)
  
  return (
    <main className={styles.homeMain}>
      <h2 className={styles.homeTitle}>Explore Anime</h2>
      <section className={styles.animeContainer}>
        {animeList.map(anime => <AnimeCard key={`${anime.id}${anime.url}`} anime={anime} /> )}
      </section>
      <LoadMore />
    </main>
  );
}