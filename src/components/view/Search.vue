<script setup>
</script>

<template>
    <div class="max-w-6xl mx-auto pt-20 ">
        <div class="flex flex-col gap-5 bg-blue-500 p-14 rounded-[40px]">
            <h1 class="text-white text-5xl font-bold mb-2">
                ОТКРОЙТЕ ДЛЯ СЕБЯ МИР ПРОЗРАЧНОГО БИЗНЕСА
            </h1>
            <p class="text-white text-3xl mb-4">Проверить контрагента</p>
            <div class="flex items-center mb-10">
                <form class="w-full">
                    <div class="flex">
                        <div class="relative w-full">
                            <app-input type="search" size="large" class="w-full"/>
                            <button
                                type="submit"
                                class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full rounded-e-lg"
                            >
                                <img src="/public/search.svg" alt="search"/>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <p class="text-white text-2xl">
                Находите всю информацию по вашим контрагентам, добавляйте их в
                друзья, отслеживайте события
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchBar",
};
</script>
