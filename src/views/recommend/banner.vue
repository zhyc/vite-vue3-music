

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useBannerStore } from '../../store/banner'
import { storeToRefs } from 'pinia';
// Import Swiper styles
import 'swiper/css';
import { onMounted } from 'vue';
import { usePlayerStore } from '@/store/songUrl';

const { data } = storeToRefs(useBannerStore())
const { getBanners } = useBannerStore()
const { play } = usePlayerStore()



function handle(id: number) {
  play(id)
}
onMounted(async () => {
  await getBanners()
})

</script>
<template>
  <swiper slides-per-view="auto" :grab-cursor="true" :space-between="50">
    <swiper-slide v-for="(item) in data" :key="item.targetID">
      <img :src="item.pic" class="banner-image" @click="handle(item.targetID)" />
    </swiper-slide>

  </swiper>
</template>