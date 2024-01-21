<script setup>
import { Loader2 } from "lucide-vue-next";
import testData from "~/assets/test_data.json";

const user = useState("user");
const repos = useState("repos");

// get the code from query parameters
const { code } = useRoute().query;

let { pending, error } = await useLazyAsyncData(
  "getUser",
  async () => {
    let data = null;
    if (!code) data = testData;
    else data = await $fetch(`/api/user?code=${code}`);
    user.value = data.user;
    repos.value = data.repos;
  },
  { server: false }
);
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
    <div class="text-lg font-medium text-center" v-else-if="error">
      <h3>Something went wrong fetching your GitHub 🙁</h3>
      <NuxtLink to="/"
        ><button
          class="text-white mt-6 text-base rounded-lg px-5 py-2 border border-white/20 w-fit"
        >
          Return home
        </button></NuxtLink
      >
    </div>
  </div>
  <!-- Loaded -->
  <div v-if="!pending && !error && user && repos">
    <TemplateWrapper />
  </div>
</template>
