<template>
    <div class="module-player">
      <div class="felx-1">
        <PlayerSong />
      </div>
      <div class="felx-1">
        <PlayerControl />
      </div>
      <div class="felx-1"></div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PlayerSong from './PlayerSong.vue'
import PlayerControl from './PlayerControl.vue'
 
</script>

<style scoped>
.felx-1{
    flex: 1;
}
</style>