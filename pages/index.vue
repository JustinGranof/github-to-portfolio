<template>
  <div
    class="relative min-h-[100svh] flex flex-col gap-16 items-center pt-[15%]"
  >
    <div class="text-center dark:text-white">
      <h1 class="text-[4rem] font-bold">Kickstart Your Portfolio</h1>
      <h5 class="mt-5 text-xl font-medium">
        The perfect portfolio template generated with your GitHub projects
      </h5>
    </div>
    <div>
      <button
        class="bg-black text-white dark:text-black dark:bg-white font-medium px-5 py-2 rounded-lg flex items-center gap-3 hover:brightness-90"
      >
        <img
          class="dark:invert"
          width="25"
          src="~/assets/img/github-logo.svg"
        />Continue with GitHub
      </button>
      <button class="text-white mt-6 bg-black w-full rounded-lg px-5 py-2">
        Continue as Guest
      </button>
    </div>
  </div>
</template>
