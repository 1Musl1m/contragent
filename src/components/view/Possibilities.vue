<template>
  <div class="mt-20 w-full">
    <button class="flex justify-center mx-auto hover:scale-125 transition duration-300">
      <img src="/public/button-bottom.svg" />
    </button>
    <div class="relative">
      <img src="@/assets/image/possibilities.png" class="w-full -mt-7" />
      <div class="absolute top-36 left-[10%] text-white">
        <h1 class="text-4xl font-semibold">КАКИЕ ВОЗМОЖНОСТИ <br/>МЫ ПРЕДЛАГАЕМ ?</h1>
        <div class="mt-20 flex items-center flex-wrap gap-5">
          <a href="#" class="flex flex-col gap-3 w-[400px] p-10 bg-blue-500 rounded-tl-3xl hover:scale-95 transition duration-300">
            <img src="@/assets/image/card-logo/user.svg" width="100px">
            <h5 class="mb-2 text-xl tracking-tight text-white">Быстрая поддержка</h5>
          </a>

          <a href="#" class="flex flex-col gap-10 w-[400px] p-10 bg-blue-500 hover:scale-95 transition duration-300">
            <img src="@/assets/image/card-logo/users.svg" width="100px">
            <h5 class="mb-2 text-xl tracking-tight text-white">Экспресс-анализ надежности</h5>
          </a>

          <a href="#" class="flex flex-col gap-14 w-[400px] p-10 bg-blue-500 rounded-tr-3xl hover:scale-95 transition duration-300">
            <img src="@/assets/image/card-logo/nice-check.svg" width="100px">
            <h5 class="mb-2 text-xl tracking-tight text-white">История изменений</h5>
          </a>

          <a href="#" class="flex flex-col gap-14 w-[400px] p-10 bg-blue-500 hover:scale-95 transition duration-300">
            <img src="@/assets/image/card-logo/plus.svg" width="100px">
            <h5 class="mb-2 text-xl tracking-tight text-white">Добавить контрагента в друзья</h5>
          </a>

          <a href="#" class="flex flex-col gap-14 w-[400px] p-10 bg-blue-500 hover:scale-95 transition duration-300">
            <img src="@/assets/image/card-logo/file.svg" width="100px">
            <h5 class="mb-2 text-xl tracking-tight text-white">Специальные реестры</h5>
          </a>

          <a href="#" class="flex flex-col gap-14 w-[400px] p-10 bg-blue-500 hover:scale-95 transition duration-300">
            <img src="@/assets/image/card-logo/history.svg" width="100px">
            <h5 class="mb-2 text-xl tracking-tight text-white">Отслеживание изменений</h5>
          </a>

          <a href="#" class="flex flex-col gap-14 w-[400px] p-10 bg-blue-500 rounded-bl-3xl hover:scale-95 transition duration-300">
            <img src="@/assets/image/card-logo/search.svg" width="100px">
            <h5 class="mb-2 text-xl tracking-tight text-white">Новый поисковой движок</h5>
          </a>

          <a href="#" class="flex flex-col gap-14 w-[400px] p-10 bg-blue-500 hover:scale-95 transition duration-300">
            <img src="@/assets/image/card-logo/communications.svg" width="100px">
            <h5 class="mb-2 text-xl tracking-tight text-white">Связи и аффилированость</h5>
          </a>

          <a href="#" class="flex flex-col gap-14 w-[400px] p-10 bg-blue-500 rounded-br-3xl hover:scale-95 transition duration-300">
            <img src="@/assets/image/card-logo/case.svg" width="100px">
            <h5 class="mb-2 text-xl tracking-tight text-white">Арбитражные дела</h5>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CenteredButtonWithImage'
}
</script>
