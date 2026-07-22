# Konfiguracja Parametrów (Variables)

Wszystkie parametry konfiguracyjne modułu **SurplusEnergySwitch** znajdują się w zakładce **Zmienne (Variables)** w panelu QuickAppa w Fibaro HC3.

---

## Tabela Zmiennych Konfiguracyjnych

| Nazwa Zmiennej | Typ | Domyślnie | Opis i Wskazówki |
| :--- | :---: | :---: | :--- |
| **`Meter_ID`** | `Number` | `0` | ID urządzenia głównego licznika energii w HC3. |
| **`Meter_Invert`** | `Boolean` | `false` | Ustaw `true`, jeśli Twój licznik raportuje eksport/nadwyżkę jako wartości dodatnie (zamiast ujemnych). |
| **`Power_Buffer`** | `Number` | `100` | Margines bezpieczeństwa w Watach `W`. Nadwyżka musi być większa o tę wartość przed załączeniem odbiornika. |
| **`Min_On_Time`** | `Number` | `300` | Minimalny czas (w sekundach) pracy odbiornika po załączeniu. |
| **`Min_Off_Time`** | `Number` | `180` | Minimalny czas (w sekundach) przerwy przed ponownym załączeniem tego samego odbiornika. |
| **`FailSafe_Timeout`**| `Number` | `60` | Czas (w sekundach) braku nowej odczytanej próby z licznika, po którym nastąpi wyłącznie odbiorników. |
| **`Interval_Sec`** | `Number` | `5` | Częstotliwość wykonywania pętli pomiarowej (rekomendowane: 5-10 sek). |

---

## Konfiguracja Macierzy Odbiorników (Priority Matrix)

Wspierana jest obsługa do **5 niezależnych stref priorytetowych** (P1 – P5). Dla każdego odbiornika zdefiniuj dwie zmienne:

### Odbiornik Priorytet 1 (P1 - Najwyższy priorytet)
* **`Device_P1_ID`** (`Number`): ID przekaźnika/urządzenia w HC3 (np. `182`).
* **`Device_P1_Power`** (`Number`): Szacowany lub rzeczywisty pobór mocy w Watach `[W]` (np. `2000`).

### Odbiornik Priorytet 2 (P2)
* **`Device_P2_ID`** (`Number`): ID urządzenia dla priorytetu 2.
* **`Device_P2_Power`** (`Number`): Pobór mocy w Watach `[W]`.

::: tip WYŁĄCZENIE NIEUŻYWANEGO PRIORYTETU
Jeśli nie używasz danego priorytetu (np. P4 lub P5), ustaw wartość zmiennej `Device_Px_ID` na `0`. Moduł automatycznie pominie ten krok w pętli decyzyjnej.
:::