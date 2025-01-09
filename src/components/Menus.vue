<script setup lang="ts">

const props = withDefaults(defineProps<{
  menus: [{ name: string, children: [] }],
  title?: string
}>(), {
  menus: () => [{
    name: '',
    children: []
  }],
  title: ''
})
const currentPage = ref(1)
const currentMenu = ref('')
const currentMenus = ref([{ name: '', children: [] }])

const handleInitMenus = () => {
  currentMenu.value = ''
  currentPage.value = 1
  currentMenus.value = props.menus
}
const handleClickMenu = (menu: { name: string, children: any[] }) => {
  if (menu.children?.length) {
    currentPage.value = 1
    currentMenu.value = menu.name
    currentMenus.value = menu.children
  }
}

const handleClickPage = (page: number) => {
  currentPage.value = page
}

const totalPage = computed(() => {
  return Math.ceil(currentMenus.value.length / 5)
})

onMounted(() => {
  currentMenus.value = props.menus
})
</script>

<template>
  <div class="w-full mx-4 flex flex-col items-center border-solid	border-indigo-300	rounded-lg">
    <p class="font-bold text-lg">{{ title }}</p>
    <div class="flex w-full  flex-col items-start">
      <p class="cursor-pointer font-semibold" @click="handleInitMenus">
        {{ currentMenu }}
      </p>
      <ul class="w-full ml-1 list-none	cursor-pointer">
        <li v-for="ko in currentMenus.slice((currentPage - 1) * 5, currentPage * 5)" class="mb-2"
          @click="handleClickMenu(ko)">
          {{ ko.name }}
        </li>
      </ul>
    </div>
    <div class="flex justify-center">
      <p v-for="page in totalPage" class="mx-2 cursor-pointer" :class="page === currentPage ? 'font-bold' : ''"
        @click="handleClickPage(page)">
        {{ page }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
