import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  locales: {
    // ----------------------------------------------------
    // JĘZYK POLSKI (Wersja główna / domyślna)
    // ----------------------------------------------------
    root: {
      label: '🇵🇱 Polski',
      lang: 'pl-PL',
      title: "ICAS Automation",
      description: "ICAS Automation",
      themeConfig: {
        siteTitle: 'ICAS Automation',
        nav: [
          { text: 'Strona Główna', link: '/' },
          {
            text: 'Moduły',
            items: [
              { text: 'Surplus Energy Switch', link: '/SurplusEnergySwitch/index' },
            ]
          },
          { text: 'Pliki do pobrania', link: '/download' },
          { text: 'Kup licencję', link: '/buy' },
          { text: 'Kontakt', link: '/contactUs' },
        ],
        sidebar: {
          '/SurplusEnergySwitch/': [
            {
              text: 'Surplus Energy Switch',
              items: [
                { text: 'One-Pager', link: '/SurplusEnergySwitch/index' },
                { text: 'Wymagania systemowe', link: '/SurplusEnergySwitch/requirements' },
                { text: 'Instalacja i Konfiguracja', link: '/SurplusEnergySwitch/quick-start' },
                { text: 'Parametry', link: '/SurplusEnergySwitch/parameters' },
              ]
            }
          ]
        },
        search: { provider: 'local' },
        footer: {
          message: '<a href="/legal/licence">Licencja</a> | <a href="/legal/disclaimer">Wyłączenie Odpowiedzialności</a> | <a href="/legal/privacy">Polityka Prywatności i Ochrony Danych</a> | <a href="/legal/terms">Wymagania Bezpieczeństwa</a>',
          copyright: 'Copyright © 2026 by ICAS Automation'
        }
      }
    },

    // ----------------------------------------------------
    // JĘZYK ANGIELSKI (Pod kaskadą /en/)
    // ----------------------------------------------------
    en: {
      label: '🇬🇧 English',
      lang: 'en-US',
      link: '/en/',
      title: "ICAS Automation",
      description: "ICAS Automation",
      themeConfig: {
        siteTitle: 'ICAS Automation',
        nav: [
          { text: 'Home Page', link: '/en/' },
          {
            text: 'Modules',
            items: [
              // ZMIANA: Dodano prefix /en/
              { text: 'Surplus Energy Switch', link: '/en/SurplusEnergySwitch/index' },
            ]
          },
          { text: 'Downloads', link: '/en/download' },
          { text: 'Buy a License', link: '/buy' },
          { text: 'Contact Us', link: '/contactUs' },
        ],
        sidebar: {
          // ZMIANA: Dodano prefix /en/ w kluczu i linkach
          '/en/SurplusEnergySwitch/': [
            {
              text: 'Surplus Energy Switch',
              items: [
                { text: 'One-Pager', link: '/en/SurplusEnergySwitch/index' },
                { text: 'System requirements', link: '/en/SurplusEnergySwitch/requirements' },
                { text: 'Installation and Configuration', link: '/en/SurplusEnergySwitch/quick-start' },
                { text: 'Parameters', link: '/en/SurplusEnergySwitch/parameters' },
              ]
            }
          ]
        },
        footer: {
          message: '<a href="/en/legal/licence">Licence</a> | <a href="/en/legal/disclaimer">Liability Disclaimer</a> | <a href="/en/legal/privacy">Privacy & Data Protection Policy</a> | <a href="/en/legal/terms">Critical Systems and Safety Disclaimer</a>',
          copyright: 'Copyright © 2026 by ICAS Automation'
        }
      }
    }
  }
})