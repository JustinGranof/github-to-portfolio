<script setup lang="ts">
import { Moon } from "lucide-vue-next";
import { Sun } from "lucide-vue-next";

const darkMode = useState("isDarkMode", () => true);

watch(darkMode, (isDark) => {
  document.body.style.backgroundColor = isDark ? "#111111" : "#ffffff";
});
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  font-family: "Inter", ui-sans-serif, system-ui, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

body {
  background-color: #111111;
}
</style>

<template>
  <div :class="darkMode && 'dark'">
    <button
      @click="darkMode = !darkMode"
      class="fixed top-4 left-4 z-50 dark:text-white"
    >
      <span v-if="darkMode"><Moon fill="#fff" /></span>
      <span v-if="!darkMode"><Sun fill="#000" /></span>
    </button>
    <NuxtPage />
  </div>
</template>
