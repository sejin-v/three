<script setup lang="ts">
import Menus from "~/components/Menus.vue";
import { menus } from "./menu";
import { useMenuStore } from '~/stores/menu';
const menuStore = useMenuStore()

const route = useRoute()
const router = useRouter()

const menu = menus[(route.params as { menu: string }).menu]
const parentMenu = menuStore.parentMenu
const currentMenuList = ref(menu.menus[0].children)
const currentMenu = ref()
const currentMenuName = ref(menu.menus[0].name)

const getMenuDetail = async () => {
  const params = {
    category: `CATEGORY#${(route.params as { menu: string }).menu
      }`,
    menu: 'MENU#'
  }
  const apiUrl = `https://u0ku04bdx9.execute-api.ap-northeast-2.amazonaws.com/members`;
  try {
    const response = await request.get(apiUrl, { params })
    console.log(response);
  } catch (err) {
    console.error(err);
  }
}
const handleClickMenu = (target: any) => {
  currentMenuList.value = target.children
  currentMenuName.value = target.name
}
const handleBackMenu = () => {
  console.log(">>>");

  router.push('/menus')
}
// getMenuDetail()

const handleClickMenuRecipe = (menu: {
  name: string
  item: string
  description: string
}) => {
  currentMenu.value = menu
}

const closeMenuPopup = () => {
  currentMenu.value = {
    name: '',
    item: '',
    description: ''
  }
}
</script>

<template>
  <button class="sticky z-20" @click="handleBackMenu"> <- </button>
      <div class="w-[355px] bg-white rounded-lg overflow-hidden">
        <img :src="parentMenu.imageUrl" alt="Background" class="w-full h-[200px] object-cover" />

        <div class="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-black/70 to-transparent"></div>

        <div class="absolute top-0 left-0 p-4 z-10 w-full flex flex-col gap-2 items-center text-center">
          <h1 class="text-2xl font-title text-gray-200">{{ parentMenu.name ? parentMenu.name : parentMenu.MenuName }}
          </h1>
          <p class="text-gray-300 text-sm">{{ parentMenu.description }}</p>
        </div>

        <!-- Fixed nav -->
        <div class="bg-white px-4 pt-10 ">
          <nav class="flex justify-between items-center text-neutral-500 text-sm border-b sticky top-0 bg-white z-10">
            <button
              :class="{ '!font-bold': menu.name ? menu.name === currentMenuName : menu.MenuName === currentMenuName }"
              v-for="menu in menu.menus" @click="handleClickMenu(menu)">
              {{ menu.name ? menu.name : menu.MenuName }}
            </button>
          </nav>
        </div>

        <!-- Scrollable content -->
        <div class="bg-white px-4 pt-4  overflow-y-auto h-[calc(100vh-355px)]">
          <!-- 200px for image height + 56px for nav height -->
          <div class="grid grid-cols-2 gap-2">
            <div v-for="menu in currentMenuList" class="shadow rounded-md flex flex-col p-2"
              @click="handleClickMenuRecipe(menu)">
              <p class="text-neutral-950 text-sm mt-2 font-semibold">{{ menu.name ? menu.name : menu.MenuName }}</p>
              <p
                class="clamped-text text-neutral-500 text-xs mb-1 whitespace-pre-wrap h-12 overflow-hidden truncate w-full">
                {{ menu.item }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Menus :menu="currentMenu" @close="closeMenuPopup" />
</template>

<route lang="yaml">
  meta:
    layout: menu
    name: menuDetail
</route>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200);

@import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);

@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);

@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200);

/*! tailwindcss v3.4.11 | MIT License | https://tailwindcss.com*/
*,
:after,
:before {
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
}

:after,
:before {
  --tw-content: "";
}

:host,
html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  font-family:
    Open Sans,
    ui-sans-serif,
    system-ui,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
  font-feature-settings: normal;
  font-variation-settings: normal;
  -moz-tab-size: 4;
  tab-size: 4;
  -webkit-tap-highlight-color: transparent;
}

body {
  line-height: inherit;
  margin: 0;
}

hr {
  border-top-width: 1px;
  color: inherit;
  height: 0;
}

abbr:where([title]) {
  text-decoration: underline dotted;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

a {
  color: inherit;
  text-decoration: inherit;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
pre,
samp {
  font-family:
    ui-monospace,
    SFMono-Regular,
    Menlo,
    Monaco,
    Consolas,
    Liberation Mono,
    Courier New,
    monospace;
  font-feature-settings: normal;
  font-size: 1em;
  font-variation-settings: normal;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

table {
  border-collapse: collapse;
  border-color: inherit;
  text-indent: 0;
}

button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font-family: inherit;
  font-feature-settings: inherit;
  font-size: 100%;
  font-variation-settings: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  margin: 0;
  padding: 0;
}

button,
select {
  text-transform: none;
}

button,
input:where([type="button"]),
input:where([type="reset"]),
input:where([type="submit"]) {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
}

:-moz-focusring {
  outline: auto;
}

:-moz-ui-invalid {
  box-shadow: none;
}

progress {
  vertical-align: baseline;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

summary {
  display: list-item;
}

blockquote,
dd,
dl,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
}

fieldset,
legend {
  padding: 0;
}

menu,
ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

dialog {
  padding: 0;
}

textarea {
  resize: vertical;
}

input::placeholder,
textarea::placeholder {
  color: #9ca3af;
  opacity: 1;
}

[role="button"],
button {
  cursor: pointer;
}

:disabled {
  cursor: default;
}

audio,
canvas,
embed,
iframe,
img,
object,
svg,
video {
  display: block;
  vertical-align: middle;
}

img,
video {
  height: auto;
  max-width: 100%;
}

[hidden] {
  display: none;
}

*,
:after,
:before {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: ;
  --tw-pan-y: ;
  --tw-pinch-zoom: ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position: ;
  --tw-gradient-via-position: ;
  --tw-gradient-to-position: ;
  --tw-ordinal: ;
  --tw-slashed-zero: ;
  --tw-numeric-figure: ;
  --tw-numeric-spacing: ;
  --tw-numeric-fraction: ;
  --tw-ring-inset: ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur: ;
  --tw-brightness: ;
  --tw-contrast: ;
  --tw-grayscale: ;
  --tw-hue-rotate: ;
  --tw-invert: ;
  --tw-saturate: ;
  --tw-sepia: ;
  --tw-drop-shadow: ;
  --tw-backdrop-blur: ;
  --tw-backdrop-brightness: ;
  --tw-backdrop-contrast: ;
  --tw-backdrop-grayscale: ;
  --tw-backdrop-hue-rotate: ;
  --tw-backdrop-invert: ;
  --tw-backdrop-opacity: ;
  --tw-backdrop-saturate: ;
  --tw-backdrop-sepia: ;
  --tw-contain-size: ;
  --tw-contain-layout: ;
  --tw-contain-paint: ;
  --tw-contain-style: ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: ;
  --tw-pan-y: ;
  --tw-pinch-zoom: ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position: ;
  --tw-gradient-via-position: ;
  --tw-gradient-to-position: ;
  --tw-ordinal: ;
  --tw-slashed-zero: ;
  --tw-numeric-figure: ;
  --tw-numeric-spacing: ;
  --tw-numeric-fraction: ;
  --tw-ring-inset: ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur: ;
  --tw-brightness: ;
  --tw-contrast: ;
  --tw-grayscale: ;
  --tw-hue-rotate: ;
  --tw-invert: ;
  --tw-saturate: ;
  --tw-sepia: ;
  --tw-drop-shadow: ;
  --tw-backdrop-blur: ;
  --tw-backdrop-brightness: ;
  --tw-backdrop-contrast: ;
  --tw-backdrop-grayscale: ;
  --tw-backdrop-hue-rotate: ;
  --tw-backdrop-invert: ;
  --tw-backdrop-opacity: ;
  --tw-backdrop-saturate: ;
  --tw-backdrop-sepia: ;
  --tw-contain-size: ;
  --tw-contain-layout: ;
  --tw-contain-paint: ;
  --tw-contain-style: ;
}

#webcrumbs .fixed {
  position: fixed;
}

#webcrumbs .absolute {
  position: absolute;
}

#webcrumbs .bottom-0 {
  bottom: 0;
}

#webcrumbs .left-0 {
  left: 0;
}

#webcrumbs .top-0 {
  top: 0;
}

#webcrumbs .z-10 {
  z-index: 10;
}

#webcrumbs .mb-1 {
  margin-bottom: 4px;
}

#webcrumbs .mb-4 {
  margin-bottom: 16px;
}

#webcrumbs .mt-2 {
  margin-top: 8px;
}

#webcrumbs .flex {
  display: flex;
}

#webcrumbs .grid {
  display: grid;
}

#webcrumbs .h-8 {
  height: 32px;
}

#webcrumbs .h-\[100px\] {
  height: 100px;
}

#webcrumbs .h-\[200px\] {
  height: 200px;
}

#webcrumbs .h-\[36px\] {
  height: 36px;
}

#webcrumbs .w-\[36px\] {
  width: 36px;
}

#webcrumbs .w-\[414px\] {
  width: 414px;
}

#webcrumbs .w-full {
  width: 100%;
}

#webcrumbs .grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

#webcrumbs .flex-row {
  flex-direction: row;
}

#webcrumbs .flex-col {
  flex-direction: column;
}

#webcrumbs .items-center {
  align-items: center;
}

#webcrumbs .justify-center {
  justify-content: center;
}

#webcrumbs .justify-between {
  justify-content: space-between;
}

#webcrumbs .gap-2 {
  gap: 8px;
}

#webcrumbs .gap-3 {
  gap: 12px;
}

#webcrumbs .gap-4 {
  gap: 16px;
}

#webcrumbs .overflow-hidden {
  overflow: hidden;
}

#webcrumbs .rounded-full {
  border-radius: 9999px;
}

#webcrumbs .rounded-lg {
  border-radius: 24px;
}

#webcrumbs .rounded-md {
  border-radius: 18px;
}

#webcrumbs .border-b {
  border-bottom-width: 1px;
}

#webcrumbs .border-b-2 {
  border-bottom-width: 2px;
}

#webcrumbs .border-t {
  border-top-width: 1px;
}

#webcrumbs .border-primary-500 {
  --tw-border-opacity: 1;
  border-color: rgb(115 65 255 / var(--tw-border-opacity));
}

#webcrumbs .bg-primary-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(115 65 255 / var(--tw-bg-opacity));
}

#webcrumbs .bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

#webcrumbs .bg-gradient-to-b {
  background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
}

#webcrumbs .from-black\/70 {
  --tw-gradient-from: rgba(0, 0, 0, 0.7) var(--tw-gradient-from-position);
  --tw-gradient-to: transparent var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

#webcrumbs .to-transparent {
  --tw-gradient-to: transparent var(--tw-gradient-to-position);
}

#webcrumbs .object-cover {
  object-fit: cover;
}

#webcrumbs .p-2 {
  padding: 8px;
}

#webcrumbs .p-4 {
  padding: 16px;
}

#webcrumbs .px-4 {
  padding-left: 16px;
  padding-right: 16px;
}

#webcrumbs .px-8 {
  padding-left: 32px;
  padding-right: 32px;
}

#webcrumbs .py-4 {
  padding-bottom: 16px;
  padding-top: 16px;
}

#webcrumbs .pb-3 {
  padding-bottom: 12px;
}

#webcrumbs .pb-6 {
  padding-bottom: 24px;
}

#webcrumbs .pb-\[2px\] {
  padding-bottom: 2px;
}

#webcrumbs .pt-10 {
  padding-top: 40px;
}

#webcrumbs .text-center {
  text-align: center;
}

#webcrumbs .font-title {
  font-family:
    Lato,
    ui-sans-serif,
    system-ui,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
}

#webcrumbs .text-2xl {
  font-size: 24px;
  line-height: 31.200000000000003px;
}

#webcrumbs .text-sm {
  font-size: 14px;
  line-height: 21px;
}

#webcrumbs .text-xs {
  font-size: 12px;
  line-height: 19.200000000000003px;
}

#webcrumbs .font-semibold {
  font-weight: 600;
}

#webcrumbs .text-neutral-200 {
  --tw-text-opacity: 1;
  color: rgb(224 224 224 / var(--tw-text-opacity));
}

#webcrumbs .text-neutral-500 {
  --tw-text-opacity: 1;
  color: rgb(153 153 153 / var(--tw-text-opacity));
}

#webcrumbs .text-neutral-900 {
  --tw-text-opacity: 1;
  color: rgb(70 70 70 / var(--tw-text-opacity));
}

#webcrumbs .text-neutral-950 {
  --tw-text-opacity: 1;
  color: rgb(40 40 40 / var(--tw-text-opacity));
}

#webcrumbs .text-primary-500 {
  --tw-text-opacity: 1;
  color: rgb(115 65 255 / var(--tw-text-opacity));
}

#webcrumbs .text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

#webcrumbs .shadow {
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color),
    0 1px 2px -1px var(--tw-shadow-color);
}

#webcrumbs .shadow,
#webcrumbs .shadow-lg {
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

#webcrumbs .shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
    0 4px 6px -4px var(--tw-shadow-color);
}

#webcrumbs {
  font-family: Open Sans !important;
  font-size: 16px !important;
}

#webcrumbs :is(.bg-primary-500) {
  color: hsla(0, 0%, 100%, 0.9) !important;
}

.clamped-text {
  display: -webkit-box;
  /* 플렉스박스 */
  -webkit-line-clamp: 3;
  /* 줄 수 제한 */
  -webkit-box-orient: vertical;
  /* 수직 방향 설정 */
  overflow: hidden;
  /* 넘치는 내용 숨기기 */
  text-overflow: ellipsis;
  /* 생략 표시 */
  white-space: pre-wrap;
  /* 줄바꿈 유지 */
}
</style>