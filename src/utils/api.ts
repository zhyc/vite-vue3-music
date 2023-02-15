import http from './http'
import { Ibanner } from '@/models/banner'
import {IsongUrl} from '@/models/songUrl'

export async function useBanner() { 
    const {data} = await http.get<{ banners: Ibanner }>('/banner/getBannerData')
    return data
}

export async function useSongUrl(id:number) { 
    const {data} = await http.get<{ songUrl: IsongUrl }>('/song/getSongUrl')
    return data[0]
}