import axios, { AxiosResponse } from 'axios'

export interface Vinyl {
    title: string;
    artist: string;
    coverArtUrl: string | null;
}

export function getVinylWishlist(): Promise<Vinyl[]> {
  return axios
    .get<Vinyl[]>('https://vinyl-b2rzedv7sa-ew.a.run.app/vinyl/wishlist')
    .then((response: AxiosResponse) => {
      console.log(response.data)
      return response.data as Vinyl[]
    })
}
