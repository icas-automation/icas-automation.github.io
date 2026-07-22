import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: "ICAS",
  description: "Zaawansowane moduły automatyki dla Fibaro HC3",
  themeConfig: {
    // Logo i nawigacja górna
    siteTitle: 'ICAS Smart Home',
    nav: [
      { text: 'Strona Główna', link: '/' },
      { 
        text: 'Moduły', 
        items: [
          { text: 'PV Optimizer (Nadwyżki PV)', link: '/SurplusEnergySwitch/index' },
          // Tutaj w przyszłości dodasz kolejne moduły, np:
          // { text: 'EV Charger Control', link: '/ev-charger/index' }
        ] 
      },
      { text: 'Wsparcie / FAQ', link: '/SurplusEnergySwitch/troubleshooting' }
    ],

    // Menu boczne dla dokumentacji PV Optimizer
    sidebar: {
      '/SurplusEnergySwitch/': [
        {
          text: 'Moduł: PV Optimizer',
          items: [
            { text: '1. Ostrzeżenie i Wstęp', link: '/SurplusEnergySwitch/index' },
            { text: '2. Wymagania i Kompatybilność', link: '/SurplusEnergySwitch/requirements' },
            { text: '3. Szybki Start (Quick Start)', link: '/SurplusEnergySwitch/quick-start' },
            { text: '4. Algorytm i Logika Działania', link: '/SurplusEnergySwitch/algorithm' },
            { text: '5. Konfiguracja Parametrów', link: '/SurplusEnergySwitch/configuration' },
            { text: '6. Scenariusze Użycia (Use Cases)', link: '/SurplusEnergySwitch/use-cases' },
            { text: '7. Rozwiązywanie Problemów', link: '/SurplusEnergySwitch/troubleshooting' },
          ]
        }
      ]
    },

    // Wyszukiwarka na stronie
    search: {
      provider: 'local'
    },

    // Stopka
    footer: {
      message: 'ICAS – Premium Smart Home Solutions',
      copyright: 'Copyright © 2026 ICAS'
    }
  },

  locales: {
    // ----------------------------------------------------
    // JĘZYK POLSKI (Wersja główna / domyślna)
    // ----------------------------------------------------
    root: {
      label: '🇵🇱 Polski',
      lang: 'pl-PL',
      title: "ICAS Automation",
      description: "Dokumentacja modułów Fibaro HC3",
      themeConfig: {
        nav: [
          { text: 'Strona Główna', link: '/' },
          { text: 'Moduły', link: '/SurplusEnergySwitch/' }
        ],
        sidebar: [
          {
            text: 'Moduły ICAS',
            items: [
              { text: 'Surplus Energy Switch', link: '/SurplusEnergySwitch/' },
              { text: 'Irrigation Control', link: '/IrrigationControl/' },
              { text: 'Sofar Inverter', link: '/SofarInverter/' }
            ]
          }
        ]
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
      description: "Fibaro HC3 modules documentation",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Modules', link: '/en/SurplusEnergySwitch/' }
        ],
        sidebar: [
          {
            text: 'ICAS Modules',
            items: [
              { text: 'Surplus Energy Switch', link: '/en/SurplusEnergySwitch/' },
              { text: 'Irrigation Control', link: '/en/IrrigationControl/' },
              { text: 'Sofar Inverter', link: '/en/SofarInverter/' }
            ]
          }
        ]
      }
    }
  }
})