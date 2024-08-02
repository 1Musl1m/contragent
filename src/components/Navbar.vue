<template>
  <nav class="flex items-center justify-between py-5 px-20 border">
    <img src="/logo.svg" alt="" />
    <ul class="flex gap-10 text-black">
      <li class="text-xl"><a href="/" class="hover:underline">Главная</a></li>
      <li class="text-xl"><a href="/contragent/" class="hover:underline">Маркетплейс</a></li>
      <li class="text-xl"><a href="/" class="hover:underline">Тарифы</a></li>
      <li class="text-xl"><a href="/" class="hover:underline">о Проекте</a></li>
      <li class="text-xl"><a href="/" class="hover:underline">Реквизиты</a></li>
    </ul>
    <router-link to="/dashboard/summary" class="flex items-center gap-4">
        <span class="text-black">Личный кабинет</span>
        <img src="/user.svg" width="30px" />
    </router-link>
  </nav>
</template>
