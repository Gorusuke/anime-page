export interface AnimeInterface {
  anime: Anime
} 

export interface Anime {
  id: number
  name: string
  russian: string
  image: Image
  url: string
  kind: string
  score: string
  status: string
  episodes: number
  episodes_aired: number
  aired_on: string
  released_on: string
}

type Image = {
  original: string
  preview: string
  x96: string
  x48: string
}