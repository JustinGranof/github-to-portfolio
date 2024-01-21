<script setup>
import { Download } from "lucide-vue-next";

let { data, pending, error, execute } = useAsyncData(
  async () => {
    let res = await $fetch("/api/export");
    console.log(res);
  },
  {
    immediate: false,
  }
);
</script>

<template>
  <div class="fixed z-50 bottom-16 left-1/2 -translate-x-[50%]">
    <button
      @click="execute()"
      class="flex items-center gap-3 px-8 py-3 rounded-lg border font-semibold text-sm bg-white text-black"
    >
      <Download size="20" /> Download Code as Zip
    </button>
  </div>
</template>
