// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Add Google font
  head.link.push ({
    rel: 'stylesheet preconnect',
    href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap'
  })
}
