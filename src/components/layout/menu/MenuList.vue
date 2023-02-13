<script setup lang="ts">
import { useMenu } from './useMenu'
const { menus } = useMenu()
console.log('menus', menus)
</script>
<template>
    <div class="module-menu" v-for="(item, index) in menus" :key="index">
        <div class="title">{{ item.name }}</div>
        <div class="menus" v-for="(menu, i) in item.menus" :key="menu.key">
            <router-link :to="{name:menu.key}">{{ menu.name }}</router-link >
        </div>
    </div>
</template>
<style scoped>

</style>