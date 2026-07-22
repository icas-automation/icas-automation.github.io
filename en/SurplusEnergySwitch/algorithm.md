# Algorytm i Logika Działania

Serce modułu **SurplusEnergySwitch** stanowi algorytm ciągłej analizy bilansu mocy oparty na stanowej logice decyzyjnej. Zapobiega on niepożądanym stanom nieustalonym w instalacji elektrycznej.

---

## 1. Cykl Decyzyjny (Pętla Główna)

Pętla pomiarowa wykonuje się w stałym interwale czasowym (domyślnie co **5 sekund**). Cały proces decyzyjny podzielony jest na 4 fazy:

```mermaid
graph TD
    A[Odbiór danych z Licznika Głównego] --> B[Normalizacja Wektora Mocy]
    B --> C{Weryfikacja Fail-Safe Watchdog}
    C -- Brak danych / Błąd --> D[TRYB BEZPIECZNY: Awaryjne wyłączenie odbiorników]
    C -- Dane poprawne --> E{Czy Bilans Mocy > Histereza Załączenia?}
    E -- TAK --> F[Załączenie Odbiornika wg Priorytetu P1...Pn]
    E -- NIE --> G{Czy Bilans Mocy < Histereza Wyłączenia?}
    G -- TAK --> H{Czy minął czas Min_On_Time?}
    H -- TAK --> I[Wyłączenie Odbiornika o najniższym Priorytecie]
    H -- NIE --> J[Podtrzymanie pracy - Ochrona Cyklowania]
    G -- NIE --> K[Stan Stabilny - Brak Zmian]