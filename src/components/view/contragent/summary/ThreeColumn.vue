<template>
  <div v-if="selectedCompany">
    <div class="bg-white p-5 rounded-3xl mb-4 relative">
      <div>
        <h1 class="text-blue-600 text-2xl font-semibold mb-10">Анализ надежности</h1>
        <span
          class="absolute top-8 right-2 items-center bg-green-100 text-green-400 text-xs font-medium px-2.5 py-0.5 rounded-full"
        >
          Высокий
        </span>
      </div>
      <img src="@/assets/image/indicator.png" />
      <div class="mt-10">
        <div class="flex items-center justify-between">
          <h3 class="text-green-500 text-lg">Положительная</h3>
          <span class="text-xl">15</span>
        </div>
        <app-divider />

        <div class="flex items-center justify-between">
          <h3 class="text-orange-500 text-lg">Требует внимания</h3>
          <span class="text-xl">2</span>
        </div>
        <app-divider />

        <div class="flex items-center justify-between">
          <h3 class="text-red-500 text-lg">Отрицательная</h3>
          <span class="text-xl">0</span>
        </div>
      </div>
    </div>

    <div class="bg-white p-5 rounded-3xl mb-4 relative">
      <h1 class="text-blue-600 text-2xl font-semibold mb-10">Арбитражные дела</h1>
      <h2 class="mb-10">Арбитражные дела с участием</h2>

      <div class="mb-10">
        <h3 class="text-lg font-semibold mb-5">Истец</h3>
        <div>
          <div class="mb-5 flex items-center justify-between">
            <h4 class="text-lg">Текущие</h4>
            <span class="text-3xl font-semibold text-blue-600">5463</span>
          </div>

          <div class="mb-5 flex items-center justify-between">
            <h4 class="text-lg">За все время</h4>
            <span class="text-3xl font-semibold text-blue-600">12450</span>
          </div>
        </div>
      </div>

      <div class="mb-10">
        <h3 class="text-lg font-semibold mb-5">Ответчик</h3>
        <div>
          <div class="mb-5 flex items-center justify-between">
            <h4 class="text-lg">Текущие</h4>
          </div>

          <div class="mb-5 flex items-center justify-between">
            <h4 class="text-lg">За все время</h4>
          </div>
        </div>
      </div>

      <div class="mb-10">
        <h3 class="text-lg font-semibold mb-5">Инное лицо</h3>
        <div>
          <div class="mb-5 flex items-center justify-between">
            <h4 class="text-lg">Текущие</h4>
          </div>

          <div class="mb-5 flex items-center justify-between">
            <h4 class="text-lg">За все время</h4>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-lg text-blue-600 mb-10">Динамика</h3>
        <img src="@/assets/image/grafic2.png" />
        <p class="my-10">Есть данные о ( количество) спорах о договорных правоотношениях. </p>
        <button class="bg-blue-600 text-white p-2 rounded-xl">Подробнее</button>
      </div>
    </div>

    <div class="bg-white p-5 rounded-3xl mb-4 relative">
      <h1 class="text-blue-600 text-2xl font-semibold mb-10">Реестры ФНС</h1>

      <div>
        <div class="flex items-center justify-between">
          <h2 class="text-sm">Недобросовестные поставщики</h2>
          <span class="text-blue-600">Да/Нет</span>
        </div>

        <div class="flex items-center justify-between">
          <h2 class="text-sm">Дисквалифицированные лица</h2>
          <span class="text-blue-600">Состоит</span>
        </div>

        <div class="flex items-center justify-between">
          <h2 class="text-sm">Массовый руководитель</h2>
          <span class="text-blue-600">Не состоит</span>
        </div>

        <div class="flex items-center justify-between">
          <h2 class="text-sm">Налоговая задолженность</h2>
        </div>

        <div class="flex items-center justify-between">
          <h2 class="text-sm">Недостоверность руководителя</h2>
        </div>

        <div class="flex items-center justify-between">
          <h2 class="text-sm">Недостоверность учредителя</h2>
        </div>

        <div class="flex items-center justify-between">
          <h2 class="text-sm">Недостоверность адреса</h2>
        </div>
      </div>

      <!-- <div class="grid grid-cols-2 gap-44">
            <div>
              <h2>Недобросовестные поставщики</h2>
              <h2>Дисквалифицированные лица</h2>
              <h2>Массовый руководитель</h2>
              <h2>Налоговая задолженность</h2>
              <h2>Недостоверность руководителя</h2>
              <h2>Недостоверность учредителя</h2>
              <h2>Недостоверность адреса</h2>
            </div>

            <div>
              <h2>Да/Нет</h2>
              <h2>Состоит</h2>
              <h2>Не состоит</h2>
            </div>
          </div> -->
    </div>

    <div class="bg-white p-5 rounded-3xl mb-4 relative">
      <h1 class="text-blue-600 text-2xl font-semibold mb-10">Риски сотрудничества</h1>

      <div class="shadow-xl border border-gray-100 rounded-xl p-3 mb-5">
        <h2 class="text-lg font-semibold mb-5">Банкротство</h2>
        <p class="mb-5">Проверьте наличие сведений о банкротстве юридического лица</p>
        <button class="bg-blue-600 text-white p-1 rounded-xl">Подробнее</button>
      </div>

      <div class="shadow-xl border border-gray-100 rounded-xl p-3 mb-5">
        <h2 class="text-lg font-semibold mb-5">Банковские счета</h2>
        <p class="mb-5">
          Проверить наличие решений о блокировке банковских счетов налоговыми органами
        </p>
        <button class="bg-blue-600 text-white p-1 rounded-xl">Подробнее</button>
      </div>

      <div class="shadow-xl border border-gray-100 rounded-xl p-3 mb-5">
        <h2 class="text-lg font-semibold mb-5">Обеспечительные меры</h2>
        <p class="mb-5">
          Применяются ли обеспечительные меры в отношении организации за налоговые правонарушения?
        </p>
        <button class="bg-blue-600 text-white p-1 rounded-xl">Подробнее</button>
      </div>

      <div class="shadow-xl border border-gray-100 rounded-xl p-3 mb-5">
        <h2 class="text-lg font-semibold mb-5">Санкционные списки</h2>
        <p class="mb-5">
          Проверка нахождения организации и связанных с ней физических и юридических лиц в
          санкционных списках
        </p>
        <button class="bg-blue-600 text-white p-1 rounded-xl">Подробнее</button>
      </div>

      <div class="shadow-xl border border-gray-100 rounded-xl p-3">
        <h2 class="text-lg font-semibold mb-5">Документы для госрегистрации</h2>
        <p class="mb-5">
          Сведения о заявлениях о ликвидации, реорганизации, смене адреса, руководителя или
          уставного капитала
        </p>
        <button class="bg-blue-600 text-white p-1 rounded-xl">Подробнее</button>
      </div>
    </div>

    <div class="bg-white p-5 rounded-3xl mb-4 relative">
      <h1 class="text-blue-600 text-2xl font-semibold mb-10">Госзакупки</h1>
      <h2 class="mb-5">Название компании</h2>
      <h2 class="mb-5">Количество контрактов на сумму</h2>

      <div v-for="items in 3" class="mb-3">
        <h3 class="text-blue-600">ООО “Глинка”</h3>
        <h2>5 контрактов на сумму 5386 млр. р.</h2>
      </div>
      <button class="bg-blue-600 text-white p-1 rounded-xl">Все заказчики</button>
    </div>

    <div class="bg-white p-5 rounded-3xl mb-4 relative">
      <h1 class="text-blue-600 text-2xl font-semibold mb-10">Краткая сводка</h1>
      <p>
        Торговый Дом "Спорт" город Пермь, Комсомольский пр-кт, д.55 зарегистрирована 18.09.2002
        регистратором МЕЖРАЙОННАЯ ИНСПЕКЦИЯ ФЕДЕРАЛЬНОЙ НАЛОГОВОЙ СЛУЖБЫ № 17 ПО ПЕРМСКОМУ КРАЮ.
        Руководитель организации: директор Садартинов Сергей Геннадьевич.  Основным видом
        деятельности является  зарегистрированы 2 дополнительных вида деятельности. Организации
        ТОВАРИЩЕСТВО НА ВЕРЕ "ТОРГОВЫЙ ДОМ "СПОРТ" САДАРТИНОВ И К" присвоены ИНН 5904011340, ОГРН
        1025900890927, ОКПО 24061443.  Телефон, адрес электронной почты, адрес официального сайта и
        другие контактные данные Торговый Дом "Спорт" отсутствуют в ЕГРЮЛ и могут быть добавлены
        представителем организации.
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCompanyStore } from '@/stores/companyStore'

const store = useCompanyStore()

const selectedCompany = computed(() => store.selectedCompany)
</script>
