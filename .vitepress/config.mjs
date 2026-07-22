import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/icas/',
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
  }
})