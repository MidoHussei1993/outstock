import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup' //optional for column grouping
import Row from 'primevue/row'
import Paginator from 'primevue/paginator'
import Tooltip from 'primevue/tooltip'
import Panel from 'primevue/panel'
import MultiSelect from 'primevue/multiselect'
import Dropdown from 'primevue/dropdown'
import ToastService from 'primevue/toastservice'
import ProgressSpinner from 'primevue/progressspinner'
import Menu from 'primevue/menu'
import Checkbox from 'primevue/checkbox'
import InputText from 'primevue/inputtext'
import Avatar from 'primevue/avatar'
import Dialog from 'primevue/dialog'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true })
  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('DataTable', DataTable)
  nuxtApp.vueApp.component('Column', Column)
  nuxtApp.vueApp.component('ColumnGroup', ColumnGroup)
  nuxtApp.vueApp.component('Row', Row)
  nuxtApp.vueApp.component('Paginator', Paginator)
  nuxtApp.vueApp.component('Panel', Panel)
  nuxtApp.vueApp.component('Checkbox', Checkbox)
  nuxtApp.vueApp.component('InputText', InputText)
  nuxtApp.vueApp.component('MultiSelect', MultiSelect)
  nuxtApp.vueApp.component('Dropdown', Dropdown)
  nuxtApp.vueApp.component('ProgressSpinner', ProgressSpinner)
  nuxtApp.vueApp.component('Menu', Menu)
  nuxtApp.vueApp.component('Avatar', Avatar)
  nuxtApp.vueApp.component('Dialog', Dialog)
  nuxtApp.vueApp.directive('tooltip', Tooltip)
  nuxtApp.vueApp.use(ToastService)
})
