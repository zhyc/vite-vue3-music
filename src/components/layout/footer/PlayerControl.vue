<template>
    <div class="player-controller">
        <IconPark :icon="GoStart" />
        <IconPark :icon="isPause?PauseOne:Play" size="45" theme="filled" class="player-btn" @click="togglePlay" />
        <IconPark :icon="GoEnd" />
    </div>
</template>

<script setup lang="ts">
import IconPark from '@/components/common/IconPark.vue'
import { toRefs } from 'vue'
import { GoEnd, GoStart, Play, PauseOne } from '@icon-park/vue-next';
import { usePlayerStore } from '@/store/songUrl';
const { isPause, togglePlay } = toRefs(usePlayerStore())

</script>

<style scoped>

</style>