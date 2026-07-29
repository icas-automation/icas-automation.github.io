import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { h } from 'vue'
import CustomText from './CustomText.vue' // <--- Importujemy nasz nowy plik

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // Wrzucamy nasz komponent w lukę między Hero a Features
      'home-hero-after': () => h(CustomText)
    })
  }
}