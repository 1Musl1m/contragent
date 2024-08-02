import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import router from './router'
import InputText from 'primevue/inputtext'
import Divider from 'primevue/divider'
import Message from 'primevue/message'
import TieredMenu from 'primevue/tieredmenu'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import DatePicker from 'primevue/datepicker'
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import MultiSelect from 'primevue/multiselect';
import Checkbox from 'primevue/checkbox';

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: 'light',
      cssLayer: false
    }
  }
})
app.use(router)
app.component('app-input', InputText)
app.component('app-divider', Divider)
app.component('app-message', Message)
app.component('app-menu', TieredMenu)
app.component('app-table', DataTable)
app.component('app-column', Column)
app.component('app-calendar', DatePicker)
app.component('app-checkbox', Checkbox)
app.component('app-select', MultiSelect)
app.component('app-accordion', Accordion)
app.component('accordion-panel', AccordionPanel)
app.component('accordion-header', AccordionHeader)
app.component('accordion-content', AccordionContent)

app.mount('#app')
