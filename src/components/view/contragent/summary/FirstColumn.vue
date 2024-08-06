<template>
  <div class="col-span-2" v-if="selectedCompany">
    <div class="bg-white p-5 rounded-3xl mb-4">
      <h1 class="text-blue-600 text-2xl font-semibold mb-10">Основная информация</h1>
      <div class="flex flex-col gap-10">
        <div>
          <h2 class="text-lg font-bold mb-4">Основной вид деятельности</h2>
          <p>{{ selectedCompany.okved.name }}</p>
        </div>
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-lg font-bold mb-2">ИНН</h2>
            <span>{{ selectedCompany.inn }}</span>
          </div>
          <div>
            <h2 class="text-lg font-bold mb-2">КПП</h2>
            <span>{{ selectedCompany.kpp }}</span>
          </div>
          <div>
            <h2 class="text-lg font-bold mb-2">ОГРН</h2>
            <span>{{ selectedCompany.ogrn }}</span>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-lg font-bold mb-2">Дата регистрации</h2>
            <span>{{ selectedCompany.registration_date }}</span>
          </div>
          <div>
            <h2 class="text-lg font-bold mb-2">Уставный капитал</h2>
            <span>{{
              selectedCompany.share_capital === null
                ? 'Нет данных'
                : selectedCompany.share_capital.total
            }}</span>
          </div>
        </div>
        <div>
          <h2 class="text-lg font-bold mb-2">Юридический адрес</h2>
          <span>{{ selectedCompany.legal_adress.adress }}</span>
        </div>
        <div v-for="founder in selectedCompany.directors" :key="founder.id">
          <h2 class="text-lg font-bold mb-2">Руководитель</h2>
          <span>{{ founder.fio || 'Нет данных' }}</span>
        </div>
        <div>
          <h2 class="text-lg font-bold mb-2">Держатель реестров акционеров</h2>
          <span>{{ selectedCompany.taxAuthority.name || 'Нет данных' }}</span>
        </div>
        <div>
          <h2 class="text-lg font-bold mb-2">Среднесписочная численность</h2>
          <span>{{ selectedCompany.sanctions || 'Нет данных' }}</span>
        </div>
        <div>
          <h2 class="text-lg font-bold mb-2">Специальный налоговый режим</h2>
          <span>{{ selectedCompany.nalog || 'Нет данных' }}</span>
        </div>
        <div class="flex items-center gap-10">
          <div>
            <h2 class="text-lg font-bold mb-2">Реестр МСП</h2>
            <span>{{ selectedCompany.reestr || 'Нет данных' }}</span>
          </div>
          <div>
            <h2 class="text-lg font-bold mb-2">Место в отрасли</h2>
            <span>{{ selectedCompany.place || 'Нет данных' }}</span>
          </div>
        </div>
        <div>
          <h2 class="text-lg font-bold mb-2">Налоговый орган</h2>
          <span>{{ selectedCompany.organ || 'Нет данных' }}</span>
        </div>
        <div>
          <h2 class="text-lg font-bold mb-2">Коды статистики</h2>
          <span>{{ selectedCompany.code || 'Нет данных' }}</span>
        </div>
        <app-divider />
        <p>По организации доступны исторические сведения</p>
        <a href="/" class="text-blue-600 text-lg mb-10 hover:underline">Это ваша компания?</a>
      </div>
    </div>

    <div class="bg-white p-5 rounded-3xl mb-4">
      <h1 class="text-blue-600 text-2xl font-semibold mb-10">Финансы</h1>
      <div class="px-5" v-for="item in companyFinances" :key="item.id">
        <div class="flex items-center justify-between mb-10">
          <div class="flex flex-col items-center gap-3">
            <h2 class="text-lg font-bold">Выручка</h2>
            <span>{{ item }}</span>
            <!-- <span class="text-xl text-blue-600 font-semibold">35000</span> -->
            <span>+ 17 %</span>
          </div>

          <div class="flex flex-col items-center gap-3">
            <h2 class="text-lg font-bold">Себестоимость</h2>
            <span class="text-xl text-blue-600 font-semibold">35000</span>
            <span>- 35 %</span>
          </div>

          <div class="flex flex-col items-center gap-3">
            <h2 class="text-lg font-bold">Прибыль</h2>
            <span class="text-xl text-blue-600 font-semibold">35000</span>
            <!-- <span class="text-xl text-blue-600 font-semibold">{{ companyFinances }}</span> -->
            <span>+ 35 %</span>
          </div>
        </div>

        <div>
          <chart :data="formattedData"/>
          <!-- <img src="@/assets/image/grafic.png" class="w-full" /> -->
          <h1 class="text-blue-600 text-center text-lg font-semibold mb-10">
            Посмотреть детальный анализ финансовых показателей
          </h1>
        </div>

        <div>
          <h2 class="text-lg font-bold mb-4">Финансовое состояние</h2>
          <div class="mt-10">
            <div class="flex items-center justify-between">
              <h3 class="text-lg">Финансовая устойчивость</h3>
              <span class="text-green-500 text-lg">Положительная</span>
            </div>
            <app-divider />

            <div class="flex items-center justify-between">
              <h3 class="text-lg">Платежеспособность</h3>
              <span class="text-orange-500 text-lg">Требует внимания</span>
            </div>
            <app-divider />

            <div class="flex items-center justify-between">
              <h3 class="text-lg">Эффективность</h3>
              <span class="text-red-500 text-lg">Отрицательная</span>
            </div>
          </div>
          <h3 class="mt-10 text-lg text-end">Основные показатель на 2023 год</h3>
        </div>
      </div>
    </div>

    <div class="bg-white p-5 rounded-3xl mb-4">
      <h1 class="text-blue-600 text-2xl font-semibold mb-10">Долги</h1>
      <p class="text-xl">Сведения о наличии исполнительных производств в отношении</p>

      <div class="mt-20">
        <div class="flex items-center justify-between">
          <div class="flex items-start gap-20">
            <h2 class="text-lg font-bold mb-4">Производств</h2>
            <!-- <span class="text-blue-600 text-2xl font-semibold">{{ selectedCompany }}</span> -->
            <span class="text-blue-600 text-2xl font-semibold">5463</span>
          </div>

          <div class="flex items-start gap-20">
            <h2 class="text-lg font-bold mb-4">На сумму</h2>
            <span class="text-blue-600 text-2xl font-semibold">5463</span>
          </div>
        </div>

        <div class="mt-10 px-10 mb-10">
          <div class="flex items-center justify-between mb-5">
            <h2 class="text-xl">Штрафы :</h2>
            <h2 class="text-xl">Остаток задолженности</h2>
          </div>

          <div class="flex items-center justify-between">
            <h2 class="text-xl">Госпошлина :</h2>
            <h2 class="text-xl">Прочее :</h2>
          </div>
        </div>

        <button class="bg-blue-600 text-white p-2 rounded-xl">Подробнее</button>
      </div>
    </div>

    <div class="bg-white p-5 rounded-3xl mb-4">
      <h1 class="text-blue-600 text-2xl font-semibold mb-10">Лицензии</h1>
      <p class="text-xl">
        Организация имеет 6639 лицензий по 29 видам <br />
        лицензируемой деятельности.
      </p>

      <div class="mt-10 flex items-start justify-around mb-10">
        <div class="flex flex-col gap-5">
          <h2 class="text-xl">Всего</h2>
          <!-- <span class="text-4xl">{{ companyFinances }}</span> -->
          <span class="text-4xl">5463</span>

          <h2 class="text-xl">Росалкогольрегулирование</h2>
          <span class="text-4xl">5463</span>

          <h2 class="text-xl">Роскомнадзор (Связь)</h2>
          <span class="text-4xl">5463</span>

          <h2 class="text-xl">Рособрнадзор</h2>
          <span class="text-4xl">5463</span>
        </div>

        <div class="flex flex-col gap-5">
          <h2 class="text-xl">ЕГРЮЛ</h2>
          <span class="text-4xl">5463</span>

          <h2 class="text-xl">Росздравнадзор</h2>
          <span class="text-4xl">5463</span>

          <h2 class="text-xl">ФСТЭК (ТЗКИ)</h2>
          <span class="text-4xl">5463</span>
        </div>
      </div>

      <button class="bg-blue-600 text-white p-2 rounded-xl">Подробнее</button>
    </div>

    <div class="bg-white p-5 rounded-3xl px-10 mb-20">
      <h1 class="text-blue-600 text-2xl font-semibold mb-10">
        Филиалы и<br />
        представительства
      </h1>

      <div class="mt-10 flex items-start gap-48 mb-10">
        <div class="flex flex-col gap-5">
          <h2 class="text-xl">Всего</h2>
          <!-- <span class="text-4xl">{{ selectedCompany }}</span> -->
          <span class="text-4xl">5463</span>

          <h2 class="text-xl">Представительство</h2>
          <span class="text-4xl">5463</span>
        </div>

        <div class="flex flex-col gap-5">
          <h2 class="text-xl">Филиал</h2>
          <span class="text-4xl">5463</span>

          <h2 class="text-xl">За рубежом</h2>
          <span class="text-4xl">5463</span>
        </div>
      </div>

      <button class="bg-blue-600 text-white p-2 rounded-xl">Подробнее</button>
    </div>

    <div class="bg-white p-5 rounded-3xl px-10">
      <h1 class="text-blue-600 text-2xl font-semibold mb-5">Похожие организации</h1>
      <p class="text-xl mb-20">
        Похожие организации подбираются на основе совпадения основного вида деятельности и региона
        ведения бизнеса:
      </p>

      <div class="flex flex-col gap-3">
        <a href="#" class="text-xl text-blue-600 hover:underline">ООО Зевака</a>
        <a href="#" class="text-xl text-blue-600 hover:underline">ООО Ромашка</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import Chart from './Chart.vue';
import { computed } from 'vue'
import { useCompanyStore } from '@/stores/companyStore'

const store = useCompanyStore()
const selectedCompany = computed(() => store.selectedCompany)
const companyFinances = computed(() => store.companyFinances)

const formattedData = computed(() => {
  return companyFinances.value.finances_years.map(item => ({
    year: item.year,
    amount: item.amount.map(amount => parseFloat(amount))
  }));
});
</script>
