<script setup lang="ts">

const props = withDefaults(defineProps<{
  menu: {
    item: string
    description: string
    name: string
  }
}>(), {
  menu: () => ({
    item: '',
    description: '',
    name: '',
  })
})
const emit = defineEmits(['close'])

const isOpen = ref(false)

const handleClosePopup = () => {
  isOpen.value = false
  emit('close')
}

watch(() => props.menu.name, (value) => {
  if (props.menu.name) isOpen.value = true
}, {
  deep: true
})
</script>
<template>
  <div v-if="isOpen" class="relative">
    <div class=" fixed inset-0 bg-black/50 flex justify-center items-center z-20">
      <div class="bg-white p-6 rounded-lg shadow-lg w-[300px]">
        <h2 class="text-xl flex justify-center mt-0 font-semibold mb-4">{{ menu.name }}</h2>
        <div class="flex flex-col justify-center">
          <p class="text-[#181411] m-0 text-base font-medium leading-normal line-clamp-1">재료</p>
          <p class="text-[#897261] m-0 text-sm font-normal leading-normal line-clamp-2">{{ menu.item }}</p>
        </div>
        <div class="flex flex-col justify-center mt-2">
          <p class="text-[#181411] m-0 text-base font-medium leading-normal line-clamp-1">만드는 법</p>
          <p class="text-[#897261] m-0 text-sm whitespace-pre-wrap font-normal leading-normal ">{{ menu.description
            }}</p>
        </div>
        <div class="flex justify-end items-end">

          <button @click="handleClosePopup" class=" px-4 py-2 mt-4  bg-blue-500 text-white rounded-md ">
            닫기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
  meta:
    layout: menuDetail
</route>

<style scoped></style>