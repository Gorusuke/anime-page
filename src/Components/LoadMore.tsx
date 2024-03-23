'use client'

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image"
import styles from "@/app/page.module.css";
import AnimeCard from "./AnimeCard";
import { Anime } from "@/lib/interfaces";
import { getAnimeList } from "@/lib/data";


const LoadMore = () => {
  let page = 2
  const [animeList, setAnimeList] = useState<Anime[]>([])
  const observer = useRef<IntersectionObserver | null>(null);

  const lastElement = useCallback((el: HTMLDivElement) => {
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(async entries => {
      if(entries[0].isIntersecting) {
        const result = await getAnimeList(page)
        setAnimeList(prev => [...prev,...result])
        page++
      }
    }, {rootMargin: '0px'})
    if(el) observer.current!.observe(el)
  }, [page])

  return (
    <>
      <section className={styles.animeContainer}>
        {animeList.map((anime, idx) => <AnimeCard key={`${anime.id}${idx}`} anime={anime} /> )}
      </section>
      <div className={styles.spinner} ref={lastElement}>
        <Image src="/spinner.svg" alt="loading" width={35} height={35}/>
      </div>
    </>
  )
}

export default LoadMore