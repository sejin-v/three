<script setup lang="ts">

const handleClick = () => {
  console.log("click");
}
handleClick()
</script>
<template>
  <div class="w-[355px] bg-white shadow-lg rounded-lg">
    <section class="pb-6">
      <footer class="fixed bottom-0 bg-white w-full py-4 px-8 flex justify-between items-center border-t"> <button
          class="flex flex-col items-center"> <span class="material-symbols-outlined text-primary-500"> home </span>
          <span class="text-primary-500 text-xs">Discover</span> </button> <button class="flex flex-col items-center">
          <span class="material-symbols-outlined text-neutral-500"> search </span> <span
            class="text-neutral-500 text-xs">Search</span> </button> <button class="flex flex-col items-center"> <span
            class="material-symbols-outlined text-neutral-500"> receipt </span> <span
            class="text-neutral-500 text-xs">Orders</span> </button> <button class="flex flex-col items-center"> <span
            class="material-symbols-outlined text-neutral-500"> more_horiz </span> <span
            class="text-neutral-500 text-xs">More</span> </button> </footer>
    </section>
  </div>
</template>
<style scoped>
/*! tailwindcss v3.4.11 | MIT License | https://tailwindcss.com*/
*,
:after,
:before {
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
}

button {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
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