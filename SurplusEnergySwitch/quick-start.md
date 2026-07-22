# Szybki Start (Quick Start)

Poniższa instrukcja krok po kroku pozwoli Ci uruchomić podstawowe sterowanie nadwyżką w mniej niż **5 minut**.

---

## Krok 1: Import Pliku Pliku `.fqa`

1. Zaloguj się do panelu domowego Fibaro HC3.
2. Przejdź do: **Ustawienia** $\rightarrow$ **10. Urządzenia**.
3. Kliknij niebieski przycisk **`+`** (Dodaj urządzenie).
4. Wybierz opcję **Inne urządzenie**, a następnie **Wgraj plik z dysku**.
5. Wskaż pobrany plik `ICAS_SurplusEnergySwitch_v1.0.fqa`.

---

## Krok 2: Powiązanie Licznika Głównego

1. Otwórz nowo utworzone urządzenie `ICAS SurplusEnergySwitch`.
2. Przejdź do zakładki **Zmienne (Variables)**.
3. Odnajdź zmienną `Meter_ID` i wpisz w niej **ID urządzenia głównego licznika mocy** z Twojej centrali Fibaro.

```json
Meter_ID = 245