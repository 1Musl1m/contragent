<template>
  <div>
    <Navbar/>
    <div>
      <Search />
      <div class="bg-white rounded-3xl pt-20 -z-30">
        <div class="">
          <h1 class="text-center text-4xl text-blue-500 font-bold">
            ВАШ НАДЕЖНЫЙ КОМПАС В МИРЕ БИЗНЕСА
          </h1>
          <img src="@/assets/image/yy.png" class="mx-auto mt-10" width="1100" />
        </div>
        <Possibilities />
        <OficialInformation />
        <ProjectInf />
        <RatePay />
        <Requisites />
        <h1 class="text-4xl text-blue-500 font-bold p-20">Остались вопросы ?</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Possibilities from '@/components/view/Possibilities.vue'
import Search from '@/components/view/Search.vue'
import OficialInformation from '@/components/view/OficialInformation.vue'
import ProjectInf from '@/components/view/ProjectInf.vue'
import RatePay from '@/components/view/RatePay.vue'
import Requisites from '@/components/view/Requisites.vue'

export default {
  components: {
    Navbar,
    Search,
    Possibilities,
    OficialInformation,
    ProjectInf,
    RatePay,
    Requisites
  }
}
</script>
