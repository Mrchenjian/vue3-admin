<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import {useCounterStore} from "@/stores/counter"
const counterStore = useCounterStore()
</script>

<style scoped></style>
