<script setup>
import { Loader2 } from "lucide-vue-next";

// get the code
const { code } = useRoute().query;

let { data, error } = await useFetch(`/api/user?code=${code}`);

console.log(data.value, error.value);
</script>

<template>
  <div class="min-h-[100svh] flex flex-col items-center justify-center">
    <div>This is some more content!</div>
    <div v-if="data">
      <pre>{{ JSON.stringify(data, null, 4) }}</pre>
    </div>
  </div>
</template>
