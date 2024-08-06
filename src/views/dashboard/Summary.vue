<template>
  <div class="pb-10">
    <RouterView/>
    <div class="grid grid-cols-4 gap-4">
      <FirstColumn />
      <SecondaruColumn />
      <ThreeColumn/>
    </div>
  </div>
</template>

<script>
import FirstColumn from '@/components/view/contragent/summary/FirstColumn.vue'
import SecondaruColumn from '@/components/view/contragent/summary/SecondaruColumn.vue'
import ThreeColumn from '@/components/view/contragent/summary/ThreeColumn.vue'

export default {
  components: {
    FirstColumn,
    SecondaruColumn,
    ThreeColumn
  }
}
</script>
