import http from './http'
import { Ibanner } from '@/models/banner'

export async function useBanner() { 
    const banners = await http.get<{ banners: Ibanner }>('/banner/getBannerData')
    return banners
}