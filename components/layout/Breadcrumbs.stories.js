import Breadcrumbs from './Breadcrumbs'
import vuetify from '@/plugins/vuetify'

export default {
  component: Breadcrumbs,
  title: 'layout/Breadcrumbs',
  argTypes: {
    // click: { action: 'click ' },
  },
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template = (args, { argTypes }) => ({
  components: { Breadcrumbs },
  props: Object.keys(argTypes),
  // vuetifyインスタンスを登録する
  vuetify,
  template: '<v-app><Breadcrumbs v-bind="$props" @click="click" /></v-app>',
})

export const Default = Template.bind({})
Default.args = {
  items: [
    {
      text: 'トップ',
      disabled: false,
      to: {},
      exact: true,
    },
    {
      text: '検索',
    },
  ],
}
