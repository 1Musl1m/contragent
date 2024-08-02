<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Navbar />
  <div class="px-20 bg-slate-100">
    <Search />
    <User />
    <RouterView />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Search from '@/components/view/contragent/SearchCompany.vue'
import User from '@/components/view/contragent/UserComponent.vue'

export default {
  components: {
    Navbar,
    Search,
    User
  }
}
</script>
