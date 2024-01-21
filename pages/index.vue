<template>
  <div
    class="px-3 relative min-h-[100svh] flex flex-col gap-16 items-center pt-[25vh]"
  >
    <div class="text-center text-white">
      <h1 class="text-4xl md:text-[4rem] font-bold">
        Visualize your Portfolio
      </h1>
      <h5 class="mt-5 md:mt-8 text-lg md:text-xl font-medium">
        The perfect portfolio template generated with your GitHub projects
      </h5>
    </div>
    <div class="text-sm">
      <a
        :href="`https://github.com/login/oauth/authorize?allow_signup=false&client_id=${
          useRuntimeConfig().public.githubClientId
        }`"
      >
        <button
          class="text-black bg-white font-medium px-5 py-2 rounded-lg flex items-center gap-3 hover:brightness-90"
        >
          <img
            class="invert"
            width="20"
            src="~/assets/img/github-logo.svg"
          />Continue with GitHub
        </button>
      </a>
      <NuxtLink to="/template">
        <button
          class="text-white mt-6 w-full rounded-lg px-5 py-2 border border-white/20"
        >
          View Example
        </button>
      </NuxtLink>
    </div>
  </div>
</template>
