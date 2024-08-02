<template>
  <div class="bg-zinc-800 mt-32 rounded-3xl p-20 flex flex-col gap-20">
    <h1 class="text-blue-500 text-4xl font-semibold">Выберите тариф</h1>
    <h2 class="text-center text-white text-3xl">Ежемесячно / Ежегодно</h2>

    <div class="flex gap-20 w-full">
      <div
        class="w-1/2 p-4 flex flex-col justify-between items-center bg-white border border-gray-200 rounded-3xl shadow sm:p-8"
      >
          <h5 class="mb-12 text-3xl">Базовый</h5>
          <h6 class="text-5xl font-bold">290 Р</h6>
        <app-divider />
        <ul class="space-y-5 my-7">
          <li class="flex items-center">
            <svg
              class="flex-shrink-0 w-4 h-4 text-blue-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span class="text-xl font-normal leading-tight ms-3"
              >Ежедневное обновление данных о компаниях</span
            >
          </li>
          <li class="flex">
            <svg
              class="flex-shrink-0 w-4 h-4 text-blue-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span class="text-xl font-normal leading-tight ms-3"
              >Выявление сложных цепочек связей контрагентов</span
            >
          </li>
          <li class="flex">
            <svg
              class="flex-shrink-0 w-4 h-4 text-blue-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span class="text-xl font-normal leading-tight ms-3"
              >Проверка сведений о руководителях и учредителях</span
            >
          </li>
          <li class="flex">
            <svg
              class="flex-shrink-0 w-4 h-4 text-blue-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span class="text-xl font-normal leading-tight ms-3"
              >Оценка финансовых показателей</span
            >
          </li>
          <li class="flex">
            <svg
              class="flex-shrink-0 w-4 h-4 text-blue-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span class="text-xl font-normal leading-tight ms-3"
              >Данные о физлицах из ЕГРЮЛ, ЕГРИП</span
            >
          </li>
        </ul>
        <button
          type="button"
          class="mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-1/2"
        >
          Начать сейчас
        </button>
      </div>

      <div
        class="w-1/2 p-4 flex flex-col justify-between items-center bg-white border border-gray-200 rounded-3xl shadow sm:p-8"
      >
          <h5 class="mb-12 text-3xl">Оптимальный</h5>
          <h6 class="text-5xl font-bold">390 Р</h6>
        <app-divider />
        <ul class="space-y-5 my-7">
          <li class="flex items-center">
            <svg
              class="flex-shrink-0 w-4 h-4 text-blue-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span class="text-xl font-normal leading-tight ms-3"
              >Ежедневное обновление данных о компаниях</span
            >
          </li>
          <li class="flex">
            <svg
              class="flex-shrink-0 w-4 h-4 text-blue-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span class="text-xl font-normal leading-tight ms-3"
              >Выявление сложных цепочек связей контрагентов</span
            >
          </li>
          <li class="flex">
            <svg
              class="flex-shrink-0 w-4 h-4 text-blue-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span class="text-xl font-normal leading-tight ms-3"
              >Проверка сведений о руководителях и учредителях</span
            >
          </li>
          <li class="flex">
            <svg
              class="flex-shrink-0 w-4 h-4 text-blue-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span class="text-xl font-normal leading-tight ms-3"
              >Оценка финансовых показателей</span
            >
          </li>
          <li class="flex">
            <svg
              class="flex-shrink-0 w-4 h-4 text-blue-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span class="text-xl font-normal leading-tight ms-3"
              >Данные о физлицах из ЕГРЮЛ, ЕГРИП</span
            >
          </li>
          <li class="flex">
            <svg
              class="flex-shrink-0 w-4 h-4 text-blue-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span class="text-xl font-normal leading-tight ms-3"
              >Доступ к маркетплейсу</span
            >
          </li>
        </ul>
        <button
          type="button"
          class="mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-1/2"
        >
          Начать сейчас
        </button>
      </div>
    </div>
  </div>
</template>
