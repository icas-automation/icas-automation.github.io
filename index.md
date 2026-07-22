---
layout: home

hero:
  name: "ICAS"
  text: "Smart Home Energy Control"
  tagline: "Zaawansowane oprogramowanie klasy Premium dla centrali Fibaro HC3."
  image:
    src: /logo.png
    alt: ICAS Smart Home
  actions:
    - theme: brand
      text: Poznaj SurplusEnergySwitch
      link: /SurplusEnergySwitch/index
    - theme: alt
      text: Zobacz Dokumentację
      link: /SurplusEnergySwitch/quick-start

features:
  - title: ⚡ Maksymalizacja Autokonsumpcji
    details: Inteligentny algorytm podejmuje decyzje w oparciu o bilans mocy z licznika w czasie rzeczywistym. Przekierowuje 100% nadwyżek prądu z PV bezpośrednio do Twoich odbiorników.
  
  - title: 🛡️ Bezpieczeństwo i Fail-Safe
    details: Wbudowane mechanizmy zabezpieczające zapobiegają niekontrolowanemu poborowi z sieci przy utracie sygnału Wi-Fi lub braku odczytów z licznika.

  - title: 🎛️ ZAAWANSOWANA HISTEREZA
    details: Ochrona urządzeń wykonawczych (pomp ciepła, kompresorów) przed zbyt częstym cyklowaniem (tzw. "miganie przekaźnikami") podczas chwilowego zachmurzenia.

  - title: 🔀 Wielopoziomowe Priorytety
    details: Swobodna konfiguracja kolejności załączania urządzeń – od bojlerów CWU, przez klimatyzację, aż po ładowarki samochodów elektrycznych (EV).
---

## Dlaczego rozwiązania fabryczne nie wystarczają?

Wielu użytkowników automatyki domowej próbuje zarządzać energią za pomocą prostych scenariuszy bloku lub LUA typu *"Jeśli moc > 2000W to włącz grzałkę"*. 

Taki zabieg prowadzi do **częstego uszkadzania przekaźników**, braku stabilności instalacji i nieefektywnego gospodarowania energią przy zmiennej pogodzie. 

> **ICAS SurplusEnergySwitch** został zaprojektowany z myślą o wyeliminowaniu tych wad – działa jak dedykowany, przemysłowy sterownik PLC osadzony wewnątrz Twojego Fibaro HC3.

---

## Kluczowe Możliwości w Pigułce

| Cecha | Proste Scenariusze LUA | ICAS SurplusEnergySwitch |
| :--- | :---: | :---: |
| **Płynna Histereza Czasowo-Mocowa** | ❌ Brak | **Tak (Pełna kontrola)** |
| **System Ochrony Odbiorników (Fail-Safe)** | ❌ Brak | **Tak (Zero niespodzianek na rachunku)** |
| **Dynamika zmian przy zachmurzeniu** | Wyłącza natychmiast | **Algorytm podtrzymania min. czasu pracy** |
| **Obsługa Multi-Odbiorników z Priorytetem** | Trudna w utrzymaniu | **Rozbudowana matryca konfiguracji** |
| **Dedykowany interfejs diagnostyczny** | Brak | **Pełen podgląd stanu w interfejsie HC3** |

---

<div style="text-align: center; margin-top: 3rem;">
  <a href="./SurplusEnergySwitch/index" style="background-color: var(--vp-c-brand-1); color: white; padding: 12px 24px; border-radius: 8px; font-weight: bold; text-decoration: none;">
    Przejdź do pełnej dokumentacji i instalacji &rarr;
  </a>
</div>