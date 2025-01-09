import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useMenuStore = defineStore(
  'menu',
  () => {
    const parentMenu = ref();
    function setParentMenu(menu: any) {
      parentMenu.value = menu;
    }

    return { parentMenu, setParentMenu };
  },
  {
    persist: true,
  }
);
