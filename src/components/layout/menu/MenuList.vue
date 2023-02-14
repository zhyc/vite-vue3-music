<script setup lang="ts">
import { useMenu } from './useMenu'
import IconPark from '@/components/common/IconPark.vue'
const { menus } = useMenu()
console.log('menus', menus)
</script>
<template>
    <div class="module-menu" v-for="(item, index) in menus" :key="index">
        <div class="title">{{ item.name }}</div>
        <div class="menus" v-for="(menu, i) in item.menus" :key="menu.key">
            <router-link :to="{name:menu.key}">
                <IconPark :icon="menu.icon"/> {{ menu.name }}
            </router-link >
        </div>
    </div>
</template>