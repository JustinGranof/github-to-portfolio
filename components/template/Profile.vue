<script setup>
const user = useState("user");
const repos = useState("repos");

let languages = computed(() => {
  let languages = [];
  if (repos.value) {
    repos.value.forEach((repo) => {
      if (repo.language && !languages.includes(repo.language))
        languages.push(repo.language);
    });
  }
  return languages;
});
</script>

<template>
  <div class="flex justify-between max-h-fit">
    <div
      class="text-center sm:text-left w-full flex flex-col sm:flex-row gap-6 items-center"
    >
      <NuxtImg
        class="mx-auto sm:mx-0 rounded-full max-w-[170px]"
        :src="user.avatar_url"
      />
      <div class="">
        <p class="text-xl font-semibold">{{ user.name }}</p>
        <p v-if="user.location || user.company" class="font-normal text-base">
          {{ user.company ?? "" }}{{ user.company && user.location ? " • " : ""
          }}{{ user.location ?? "" }}
        </p>
        <p class="mt-4 text-sm font-normal" v-if="user.bio">{{ user.bio }}</p>
        <!-- Languages -->
        <div
          v-if="languages.length > 0"
          class="flex justify-center sm:justify-start items-center flex-wrap gap-4 mt-4"
        >
          <div
            class="bg-white/20 rounded-full px-4 py-1 text-sm font-medium"
            v-for="language in languages"
          >
            {{ language }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
