# Wymagania i Kompatybilność

Aby zapewnić prawidłowe i bezawaryjne działanie modułu **SurplusEnergySwitch**, instalacja musi spełniać poniższe wymagania techniczne.

---

## 1. Wymagania Wirusowe / Systemowe

| Element | Wymaganie minimalne | Zalecane |
| :--- | :--- | :--- |
| **Centrala** | Fibaro Home Center 3 | Fibaro HC3 (FW > 5.140) |
| **Dostęp do sieci** | Lokalna sieć LAN/Wi-Fi | Połączenie kablowe Ethernet (LAN) |
| **Pamięć RAM HC3** | Stan stabilny (< 80% użycia) | Stan stabilny |

---

## 2. Wymagane Liczniki Energii (Grid Meters)

Moduł do prawidłowej pracy wymaga **jednego, głównego źródła danych o bilansie mocy na przyłączu budynku** (wartość wyrażona w Watach `W`). 

Zalecane integracje z miernikami dwukierunkowymi:
*   **Mierniki zintegrowane w falownikach:** Fronius (Smart Meter), SolarEdge, Huawei (DTSU666), Deye, FoxESS.
*   **Dedykowane liczniki Smart Home:** Shelly Pro 3EM, Zamel MEW-01, Supla, Fibaro Smart Implant z licznikiem impulse.

::: tip WARTOŚĆ UJEMNA CZY DODATNIA?
Moduł automatycznie rozpoznaje konfigurację licznika. Bez względu na to, czy Twój miernik raportuje nadwyżkę jako `-1500W` czy `+1500W`, parametr konfiguracji wejściowej pozwala na dopasowanie wektora mocy bez konieczności edycji kodu LUA.
:::

---

## 3. Wspierane Urządzenia Executora (Odbiorniki)

Moduł może sterować dowolnym urządzeniem widocznym w Fibaro HC3 jako:
*   `com.fibaro.binarySwitch` (Przekaźniki, Smart Plugi, Wall Plugi)
*   `com.fibaro.multilevelSwitch` (Ściemniacze / Regulator mocy grzałki PWM)
*   Dedykowane QuickAppy zewnętrznych producentów (np. ładowarki EV, pompy ciepła po Modbus/API).