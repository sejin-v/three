<script setup lang="ts">

withDefaults(defineProps<{
  value: string
}>(), {
  value: ''
})
const emit = defineEmits(['update:value'])


const handleInput = (e: Event) => {
  const input = e.target as HTMLInputElement;

  // 10자 이상 입력을 방지
  if (input.value.length > 10) {
    input.value = input.value.slice(0, 10); // 10자 이상을 잘라냄
    return
  }
  emit('update:value', input.value)

}
</script>

<template>
  <div class="">

    <div class="flex justify-center " style="height: 30px">
      <input type="text" :value="value" maxlength="10" @input="handleInput">
    </div>
  </div>
</template>

<style scoped></style>
