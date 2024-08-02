<template>
  <div class="px-20 mt-10">
      <h1>
        Анализ арбитражных производств позволит больше узнать о возможных проблемах с контрагентами
        или государственными органами. Обратите особое внимание на дела, где организация является
        ответчиком и сумма исковых требований велика.
      </h1>

      <div class="mt-10 flex items-center gap-20">
        <div class="border border-gray-100 rounded-3xl p-3 px-10 flex items-center gap-10 shadow">
          <h2 class="text-lg">Поиск</h2>
          <div class="relative">
            <span class="absolute inset-y-0 right-3 flex items-center pl-3 text-gray-500">
              <i class="pi pi-search"></i>
            </span>
            <app-input placeholder="Номер дела или ИНН" class="pl-10" />
          </div>
        </div>

        <div class="border border-gray-100 rounded-3xl p-3 px-10 flex items-center gap-10 shadow">
          <h2 class="text-lg">Период</h2>
          <app-calendar
            v-model="date"
            dateFormat="dd/mm/yy"
            placeholder="15.01.1999 - 15.01.2024"
            showIcon
            iconDisplay="input"
          />
        </div>
      </div>

      <div class="mt-20">
        <div class="border border-gray-100 p-5 rounded-2xl shadow">
          <h1 class="font-bold text-2xl">Дело № О60-57392005/2022</h1>

          <div class="mt-5">
            <div class="flex items-center gap-10">
              <h2 class="text-gray-400">Дата регистрации</h2>
              <strong class="text-2xl">15.01.1999</strong>
            </div>

            <div class="flex items-center gap-10">
              <div class="flex items-center gap-10">
                <h2 class="text-gray-400">Истец</h2>
                <strong class="text-2xl">ОАО”ТАНДРА”</strong>
              </div>

              <div class="flex items-center gap-10">
                <h2 class="text-gray-400">Ответчик</h2>
                <strong class="text-2xl">ОАО”ТАНДРА”</strong>
              </div>

              <div class="flex items-center gap-10">
                <h2 class="text-gray-400">Иное лицо</h2>
                <strong class="text-2xl">ОАО”ТАНДРА”</strong>
              </div>
            </div>

            <div class="flex items-center gap-10">
              <h2 class="text-gray-400">Сумма</h2>
              <strong class="text-2xl">2020202020 р.</strong>
            </div>

            <div class="flex items-center gap-10">
              <h2 class="text-gray-400">Категория</h2>
              <strong class="text-2xl">Договоры возмездного оказания услуг</strong>
            </div>

            <div class="flex items-center gap-10">
              <h2 class="text-gray-400">Тип</h2>
              <strong class="text-2xl">Договоры возмездного оказания услуг</strong>
            </div>

            <div class="flex items-center gap-10">
              <h2 class="text-gray-400">Статус</h2>
              <strong class="text-2xl">Завершен</strong>
            </div>

            <div class="flex items-center gap-10">
              <h2 class="text-gray-400">Исход</h2>
              <strong class="text-2xl">Проиграно</strong>
            </div>
          </div>

          <div class="mt-32">
            <h2 class="font-bold text-2xl">Первая инстанция</h2>

            <div class="mt-5">
              <div class="flex items-center gap-14">
              <h2 class="text-gray-400">15.01.1999 </h2>
              <div class="flex items-center gap-7">
                <img src="/file.svg" alt="">
                <strong class="text-2xl">О принятии исходного дела</strong>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      date: null
    }
  }
}
</script>