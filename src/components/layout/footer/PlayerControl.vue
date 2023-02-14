<template>
    <div class="player-controller">
        <IconPark :icon="GoStart"/>
        <IconPark :icon="Play" size="45" theme="filled" class="player-btn"/>
        <IconPark :icon="GoEnd"/>
    </div>
</template>

<script setup lang="ts">
import IconPark from '@/components/common/IconPark.vue'
import { GoEnd, GoStart, Play } from '@icon-park/vue-next';


</script>

<style scoped>

</style>