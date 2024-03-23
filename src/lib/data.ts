export const getAnimeList = async (page: number) => {
  const allAnimes =  await fetch(`https://shikimori.one/api/animes?page=${page}&limit=${8}&order=popularity`)
  const animeList = await allAnimes.json()
  return animeList 
}