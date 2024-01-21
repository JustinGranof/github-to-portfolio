<script setup>
const user = useState("user");
</script>

<template>
  <div class="flex justify-between max-h-fit">
    <div class="flex gap-6 items-center">
      <img class="rounded-full max-w-[170px]" :src="user.avatar_url" />
      <div class="text-xl font-semibold">
        <p>{{ user.name }}</p>
        <p v-if="user.location || user.company" class="font-normal text-base">
          {{ user.company ?? "" }}{{ user.company && user.location ? " • " : ""
          }}{{ user.location ?? "" }}
        </p>
        <p class="mt-4 text-sm font-normal" v-if="user.bio">{{ user.bio }}</p>
      </div>
    </div>
  </div>
</template>
