

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import {useBannerStore} from '../../store/banner'
import { storeToRefs } from 'pinia';
// Import Swiper styles
import 'swiper/css';
import { onMounted } from 'vue';

 const {banners} = storeToRefs(useBannerStore())
 const {getBanners} = useBannerStore()

onMounted(async()=>{
   await getBanners()
})

</script>
<template>
    <swiper
      slides-per-view="auto"
      :grab-cursor="true"
      :space-between="50"
    >
      <swiper-slide v-for="(item) in banners" :key="item.targetID">
        <img :src="item.pic" class="banner-image" />
    </swiper-slide>
     
    </swiper>
  </template>