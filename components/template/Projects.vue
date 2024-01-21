<script setup>
const repos = useState("repos");
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="bg-neutral-800 px-6 py-3 rounded" v-for="repo in repos">
      <div>
        <div class="flex justify-between items-center">
          <p>
            {{ repo.name }}
            <span class="text-sm opacity-70" v-if="repo.language">{{
              repo.language
            }}</span>
          </p>
          <p class="text-sm">
            {{ new Date(repo.created_at).getUTCFullYear() }}
          </p>
        </div>
        <a
          class="underline opacity-30 text-sm break-all"
          :href="repo.html_url"
          target="_blank"
          >{{ repo.html_url }}</a
        >
        <p v-if="repo.description" class="mt-4 mb-6">{{ repo.description }}</p>
      </div>
    </div>
  </div>
</template>
