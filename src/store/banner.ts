import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Ibanner } from '@/models/banner'
import { useBanner } from '@/utils/api'

export const useBannerStore = defineStore('banner', () => {
    const data = ref<Ibanner[]>([])
    const getBanners = async () => {
        if (data.value.length) return
        data.value = await useBanner() 

    }
    
    return {
        data,
        getBanners
    }
})
