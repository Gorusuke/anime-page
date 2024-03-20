export const getAnimeList = async () => {
  const allAnimes =  await fetch(`https://shikimori.one/api/animes?page=${1}&limit=${8}&order=popularity`)
  const animeList = allAnimes.json()
  return animeList 
}