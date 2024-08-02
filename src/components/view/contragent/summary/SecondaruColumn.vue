<template>
  <div>
        <div class="bg-white p-5 rounded-3xl mb-4">
          <h1 class="text-blue-600 text-2xl font-semibold mb-10">Контактная информация</h1>

          <div class="mb-10">
            <h2 class="text-xl font-semibold mb-5">Телефон</h2>
            <span class="text-lg">+7 (987) 967-86-76</span>
            <app-divider />
            <span class="text-lg">+7 (495) 678-98-98</span>
            <app-divider />
          </div>

          <div class="mb-10">
            <h2 class="text-xl font-semibold mb-5">Электронная почта</h2>
            <span class="text-lg">fhskwlww;@mail.tu</span>
            <app-divider />
            <span class="text-lg">fhskwlww;@mail.tu</span>
            <app-divider />
          </div>

          <div class="overflow-hidden">
            <h2 class="text-xl font-semibold mb-5">Сайт</h2>
            <a href="www/ghgy/gjjghghjnfslshhuuhergifdnjfd"
              ><span class="text-lg">www/ghgy/gjjghghjnfslshhuuhergifdnjfd</span></a
            >
            <app-divider />
          </div>
        </div>

        <div class="bg-white p-5 rounded-3xl mb-4">
          <h1 class="text-blue-600 text-2xl font-semibold mb-10">Связи</h1>
          <p class="mb-10">Выявлено ... действующая и ... ликвидированных связанных организаций</p>

          <div class="mb-20">
            <h2 class="text-xl font-semibold mb-10">Действующие</h2>
            <span class="text-lg">Всего</span>
            <app-divider />
            <span class="text-lg">По адресу</span>
            <app-divider />
            <span class="text-lg">По учредителю</span>
            <app-divider />
            <span class="text-lg">Дочерние</span>
            <app-divider />
          </div>

          <div class="mb-10">
            <h2 class="text-xl font-semibold mb-10">Прошлые</h2>
            <span class="text-lg">Всего</span>
            <app-divider />
            <span class="text-lg">По адресу</span>
            <app-divider />
            <span class="text-lg">По учредителю</span>
            <app-divider />
            <span class="text-lg">Дочерние</span>
            <app-divider />
          </div>

          <button class="bg-blue-600 text-white p-2 rounded-xl">Подробнее</button>
        </div>

        <div class="bg-white p-5 rounded-3xl mb-4">
          <h1 class="text-blue-600 text-2xl font-semibold mb-10">Отчеты и документы</h1>

          <div class="bg-white border border-gray-100 shadow-xl p-3 rounded-xl mb-5">
            <div class="flex gap-5">
              <img src="/file.svg" />
              <h2 class="text-lg">Выписка из ЕГРЮЛ</h2>
            </div>
          </div>

          <div class="bg-white border border-gray-100 shadow-xl p-3 rounded-xl mb-5">
            <div class="flex gap-5">
              <img src="/file.svg" />
              <h2 class="text-lg">Бухгалтерская отчетность</h2>
            </div>
          </div>

          <div class="bg-white border border-gray-100 shadow-xl p-3 rounded-xl mb-5">
            <div class="flex gap-5">
              <img src="/file.svg" />
              <h2 class="text-lg">Отчет о должностной осмотритеотности</h2>
            </div>
          </div>

          <div class="bg-white border border-gray-100 shadow-xl p-3 rounded-xl">
            <div class="flex gap-5">
              <img src="/file.svg" />
              <h2 class="text-lg">Сводный отчет</h2>
            </div>
          </div>
        </div>

        <div class="bg-white p-5 rounded-3xl mb-4">
          <h1 class="text-blue-600 text-2xl font-semibold mb-10">Учредители</h1>

          <h2 class="text-xl mb-16">Учредитель</h2>
          <h2 class="text-xl mb-10">Название компании</h2>
          <h2 class="text-xl">Доля</h2>
          <app-divider />
          <h2 class="text-xl">ИНН</h2>
          <app-divider />
        </div>

        <div class="bg-white p-5 rounded-3xl mb-4">
          <h1 class="text-blue-600 text-2xl font-semibold mb-10">События</h1>

          <div class="mt-10 flex items-start gap-6 mb-10">
            <div class="flex flex-col gap-5">
              <h2 class="">Важные</h2>
              <span class="text-3xl text-blue-600 font-bold">5463</span>

              <h2>Долги</h2>
              <span class="text-3xl text-blue-600 font-bold">5463</span>

              <h2>Банкротство</h2>
              <span class="text-3xl text-blue-600 font-bold">5463</span>
            </div>

            <div class="flex flex-col gap-5">
              <h2>Реестры ФНС</h2>
              <span class="text-3xl text-blue-600 font-bold">5463</span>

              <h2>Арбитражные события</h2>
              <span class="text-3xl text-blue-600 font-bold">5463</span>

              <h2>Изменения ЕГРЮЛ</h2>
              <span class="text-3xl text-blue-600 font-bold">5463</span>
            </div>
          </div>

          <h3 class="mb-4">Последние изменения :</h3>
          <strong class="text-lg">Дата</strong>

          <div class="flex flex-col gap-2 mt-8">
            <p>
              Завершено исполнительное производство от 01.06.2023, № 67585499499сумма требований:
              300 000 руб.
            </p>
            <p>
              Завершено исполнительное производство от 01.06.2023, № 67585499499сумма требований:
              300 000 руб.
            </p>
            <p>
              Завершено исполнительное производство от 01.06.2023, № 67585499499сумма требований:
              300 000 руб.
            </p>
            <p>
              Завершено исполнительное производство от 01.06.2023, № 67585499499сумма требований:
              300 000 руб.
            </p>
          </div>

          <button class="bg-blue-600 text-white p-2 rounded-xl mt-10">Подробнее</button>
        </div>

        <div class="bg-white p-5 rounded-3xl mb-14">
          <h1 class="text-blue-600 text-2xl font-semibold mb-10">Проверки</h1>

          <div class="flex items-center gap-10 mb-10">
            <h2>Общее количество</h2>
            <span class="text-3xl">5463</span>
          </div>

          <div class="flex justify-between mb-10">
            <div class="flex flex-col gap-5">
              <h2>Плановые</h2>
              <span class="text-3xl">5463</span>
              <h2>Выявлены нарушения</h2>
            </div>

            <div class="flex flex-col gap-5">
              <h2>Внеплановые</h2>
              <span class="text-3xl">5463</span>
              <h2>Без нарушений</h2>
            </div>
          </div>

          <div>
            <h2 class="mb-5">Неизвестно</h2>
            <span class="text-3xl">5463</span>
          </div>
          <button class="bg-blue-600 text-white p-2 rounded-xl mt-10">Подробнее</button>
        </div>

        <div class="bg-white p-5 rounded-3xl mb-4">
          <div class="mb-10">
            <h1 class="text-blue-600 text-2xl font-semibold mb-10">Конкуренты</h1>
            <p>
              Список конкурентов составляется в результате анализа участия компании в тендерах и
              гос. закупках.
            </p>
          </div>

          <div class="mb-10">
            <h2>Название компании</h2>
            <h2>Выручка</h2>
          </div>

          <div>
            <h2 class="text-blue-600 hover:underline cursor-pointer">ООО “Глинка”</h2>
            <h2>Выручка :</h2>
            <h2>Госконтракты :</h2>
          </div>
        </div>
      </div>
</template>