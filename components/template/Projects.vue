<script setup>
const repos = useState("repos");
</script>

<template>
  <div class="flex flex-col gap-8">
    <div v-for="repo in repos">
      <div>
        <p>{{ repo.name }}</p>
        <a
          class="underline opacity-30 text-sm"
          :href="repo.html_url"
          target="_blank"
          >{{ repo.full_name }}</a
        >
      </div>
    </div>
  </div>
</template>
