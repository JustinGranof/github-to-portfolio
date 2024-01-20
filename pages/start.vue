<script setup>
import { Loader2 } from "lucide-vue-next";

// get the code from query parameters
const { code } = useRoute().query;

let { data, pending, error } = await useLazyFetch(`/api/user?code=${code}`);
</script>

<template>
  <div
    v-if="pending || error"
    class="min-h-[100svh] flex flex-col items-center justify-center"
  >
    <!-- Loading -->
    <div
      class="text-center flex flex-col justify-center items-center"
      v-if="pending"
    >
      <h1 class="text-lg font-medium mb-6">Getting your GitHub profile...</h1>
      <Loader2 size="40" class="animate-spin" />
      <p class="text-sm opacity-50 mt-6 font-medium">
        Please do not close this page
      </p>
    </div>
    <!-- Error -->
    <div class="text-red-500 text-center" v-if="error">{{ error }}</div>
  </div>
  <!-- Loaded -->
  <div v-if="!pending && data">
    <div>
      <pre>{{ JSON.stringify(data, null, 4) }}</pre>
    </div>
  </div>
</template>
