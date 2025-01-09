<script setup lang="ts">
import { useMenuStore } from '~/stores/menu';
import { menuCategory } from './menu';

// const menuCategory = ref()
const menuStore = useMenuStore()
const router = useRouter()

console.log(menuStore);

const handleClick = (menu: any) => {
  menuStore.setParentMenu(menu)
  router.push(
    `/menus/${menu.SK ? menu.SK : menu.categoryCode.replace('CATEGORY#', '')}`, // path로 직접 정의하거나,
  );
}
const getMenus = async () => {
  const params = {
    category: 'CATEGORY',
    menu: 'CATEGORY#'
  }
  const apiUrl = `https://u0ku04bdx9.execute-api.ap-northeast-2.amazonaws.com/members`;
  try {
    const response = await request.get(apiUrl, { params })
    console.log(response);
    // menuCategory.value = response.data
  } catch (err) {
    console.error(err);
  }
}
onMounted(() => {
  // getMenus()
})
</script>
<template>

  <div class="w-[355px] bg-white shadow-lg rounded-lg">
    <header class="px-4 py-3 flex justify-between items-center">
      <!-- <span class="material-symbols-outlined text-neutral-900">location_on</span>
      <p class="text-neutral-500">우리집 메뉴판</p>
      <span class="material-symbols-outlined text-neutral-900">search</span> -->
      <span class="material-symbols-outlined">
        fork_spoon
      </span>
      <h1 class="text-xl font-title text-neutral-950">Menu</h1>
      <span class="material-symbols-outlined">
        ios_share
      </span>
    </header>
    <!-- <section class="px-4 pb-6 mb-12">
      <div class="grid grid-cols-1 gap-4 mt-3">
        <div class="flex flex-col" v-for="menu in menuCategory" @click="handleClick(menu)">
          <p class="text-neutral-950 text-base mt-2 font-semibold">{{ menu.CategoryName }}</p>
          <img :src="menu.ImageUrl" alt="Moki" class="w-full h-[80px] rounded-md object-cover mb-1" />
          <p class="text-neutral-500 text-xs">{{ menu.Description }}</p>
        </div>
      </div>
    </section> -->
    <section class="px-4 pb-6 mb-12">
      <div class="grid grid-cols-1 gap-4 mt-3">
        <div class="flex flex-col" v-for="menu in menuCategory" @click="handleClick(menu)">
          <p class="text-neutral-950 text-base mt-2 font-semibold">{{ menu.categoryName }}</p>
          <img :src="menu.imageUrl" alt="Moki" class="w-full h-[80px] rounded-md object-cover mb-1" />
          <p class="text-neutral-500 text-xs ">{{ menu.categoryDescription }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<route lang="yaml">
  meta:
    layout: menu
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

#webcrumbs .bottom-0 {
  bottom: 0;
}

#webcrumbs .mt-2 {
  margin-top: 8px;
}

#webcrumbs .mt-3 {
  margin-top: 12px;
}

#webcrumbs .flex {
  display: flex;
}

#webcrumbs .grid {
  display: grid;
}

#webcrumbs .h-16 {
  height: 64px;
}

#webcrumbs .h-\[100px\] {
  height: 100px;
}

#webcrumbs .h-\[80px\] {
  height: 80px;
}

#webcrumbs .w-16 {
  width: 64px;
}

#webcrumbs .w-\[100px\] {
  width: 100px;
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

#webcrumbs .gap-4 {
  gap: 16px;
}

#webcrumbs .rounded-lg {
  border-radius: 24px;
}

#webcrumbs .rounded-md {
  border-radius: 18px;
}

#webcrumbs .border-t {
  border-top-width: 1px;
}

#webcrumbs .bg-primary-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(233 229 255 / var(--tw-bg-opacity));
}

#webcrumbs .bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

#webcrumbs .object-contain {
  object-fit: contain;
}

#webcrumbs .object-cover {
  object-fit: cover;
}

#webcrumbs .px-4 {
  padding-left: 16px;
  padding-right: 16px;
}

#webcrumbs .px-8 {
  padding-left: 32px;
  padding-right: 32px;
}

#webcrumbs .py-3 {
  padding-bottom: 12px;
  padding-top: 12px;
}

#webcrumbs .py-4 {
  padding-bottom: 16px;
  padding-top: 16px;
}

#webcrumbs .pb-6 {
  padding-bottom: 24px;
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

#webcrumbs .text-sm {
  font-size: 14px;
  line-height: 21px;
}

#webcrumbs .text-xl {
  font-size: 20px;
  line-height: 28px;
}

#webcrumbs .text-xs {
  font-size: 12px;
  line-height: 19.200000000000003px;
}

#webcrumbs .font-semibold {
  font-weight: 600;
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

#webcrumbs .shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
    0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

#webcrumbs {
  font-family: Open Sans !important;
  font-size: 16px !important;
}

#webcrumbs :is(.bg-primary-100) {
  color: rgba(0, 0, 0, 0.9) !important;
}
</style>