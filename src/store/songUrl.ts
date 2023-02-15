import { defineStore } from 'pinia'
import { ref } from 'vue'
import { IsongUrl } from '@/models/songUrl'
import { useSongUrl } from '@/utils/api'

// export const useSongUrlStore = defineStore()
export const usePlayerStore = defineStore({
    id:'player',
    state:()=>({
        audio: new Audio(),
        isPause: false
    }) ,
    actions:{
        async play(id:number){
            const data = await useSongUrl(id);
            this.audio.src=data.url;
            this.audio.play().then(()=>{
                this.isPause = true
            })
        },
        togglePlay(){
            this.isPause = !this.isPause
            if(this.isPause){
                this.audio.play()
            }else{
                this.audio.pause()
            }
        }
    }
}
    
    //  {
    // 
    // getters: {
    //     useSongUrl() {
    //     return this.count + 10

    //     }
    // },
    // actions: {
    //     useSongUrl() {
    //     }
    // }
) 	 
