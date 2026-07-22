# Diagnostyka i Rozwiązywanie Problemów

W przypadku niedozwolonego zachowania systemu, skorzystaj z poniższej matrycy diagnostycznej.

---

## Tabela Błędów i Objawów

| Objaw / Błąd | Prawdopodobna przyczyna | Rozwiązanie |
| :--- | :--- | :--- |
| **Odbiornik nie załącza się mimo nadwyżki** | Bilans mocy jest niższy niż `Device_Px_Power` + `Power_Buffer`. | Sprawdź w konsoli HC3 aktualnie wyliczoną dostępną moc. |
| **Odbiornik wyłącza się po chmurze i nie włącza od razu** | Aktywna blokada `Min_Off_Time`. | Odczekaj zadeklarowany czas spoczynku lub zmniejsz parametr. |
| **W konsoli pojawia się `[Fail-Safe Triggered]`** | Utrata odczytu z licznika `Meter_ID` na czas > `FailSafe_Timeout`. | Sprawdź, czy licznik energii jest podłączony do sieci i raportuje stan w HC3. |
| **Załączają się wszystkie urządzenia na raz** | Zmienna `Meter_Invert` jest ustawiona nieprawidłowo. | Zmień wartość `Meter_Invert` z `false` na `true` (lub odwrotnie). |

---

## Podgląd Logów w Konsoli Fibaro HC3

Moduł generuje przejrzyste logi diagnostyczne. Aby je zobaczyć:
1. Otwórz urządzenie `ICAS SurplusEnergySwitch` w panelu HC3.
2. Rozwiń dolny panel **Konsola (Console)**.

Przykładowy poprawny log:
```text
 [INFO] [ICAS]: Bilans sieci: -2800W. Dostępna nadwyżka: 2800W.
 [INFO] [ICAS]: [P1] Bojler CWU (2000W) -> STATUS: ON (Załączono).
 [INFO] [ICAS]: Pozostała nadwyżka: 800W. Brak wystarczającej mocy dla P2 (1500W).