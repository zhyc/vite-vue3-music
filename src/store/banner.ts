import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Ibanner } from '@/models/banner'
import { useBanner } from '@/utils/api'

export const useBannerStore = defineStore('banner', () => {
    const banners = ref<Ibanner[]>([])
    const getBanners = async () => {
        if (banners.value.length) return
        banners.value = await useBanner() 
    }
    return {
        banners,
        getBanners
    }
})
