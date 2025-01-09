<script setup lang="ts">
import layoutFooter from '~/components/layouts/Footer.vue'
</script>

<template>
  <main class="layout">
    <div class="content">
      <router-view />
      <layout-footer></layout-footer>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
