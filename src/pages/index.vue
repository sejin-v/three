<script setup lang="ts">
const router = useRouter()
const handleClickMenu = () => {
  router.push(`/menus`)
}
</script>

<template>
  <div class="">
    index
    <div class="flex justify-center " style="height: 30px">
      <img class="" src="/public/icon/menus.png" alt="menus" style="height: 30px">
    </div>
    <button @click="handleClickMenu">메뉴
    </button>
  </div>
</template>

<style scoped></style>
