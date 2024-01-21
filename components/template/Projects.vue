<script setup>
const repos = useState("repos");
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="bg-neutral-800 px-6 py-3 rounded" v-for="repo in repos">
      <div>
        <div class="flex justify-between items-center">
          <p>{{ repo.name }}</p>
          <p class="text-sm">
            {{ new Date(repo.created_at).getUTCFullYear() }}
          </p>
        </div>
        <a
          class="underline opacity-30 text-sm"
          :href="repo.html_url"
          target="_blank"
          >{{ repo.full_name }}</a
        >
        <p class="mt-4 mb-6">{{ repo.description }}</p>
        <p class="text-sm">
          {{ repo.language }}
        </p>
      </div>
    </div>
  </div>
</template>
