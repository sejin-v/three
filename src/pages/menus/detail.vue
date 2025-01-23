<script setup lang="ts">

withDefaults(defineProps<{
  value: string
}>(), {
  value: ''
})

const isOpen = ref(true)

</script>
<template>
  <div class="relative">
    <!-- 팝업 오버레이 -->
    <div class=" fixed inset-0 bg-black/50 flex justify-center items-center z-20">
      <div class="bg-white p-6 rounded-lg shadow-lg w-[300px]">
        <h2 class="text-xl font-semibold mb-4">팝업 제목</h2>
        <p class="mb-4">이곳은 팝업 내용입니다. 이곳에 중요한 메시지를 삽입할 수 있습니다.</p>
        <button @click="isOpen = false" class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
          닫기
        </button>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
  meta:
    layout: menuDetail
</route>

<style scoped></style>