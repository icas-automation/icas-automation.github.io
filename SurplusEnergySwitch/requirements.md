# Wymagania systemowe

Aby pomyślnie uruchomić i w pełni korzystać z możliwości aplikacji Surplus Energy Switch, Twój ekosystem Smart Home musi spełniać następujące wymagania techniczne:

## Kompatybilna Centrala Smart Home
Aplikacja działa jako natywny Quick App i wymaga jednej z poniższych central zarządzających:

* FIBARO Home Center 3 (HC3)
* FIBARO Home Center 3 Lite (HC3L)
* Nice Yubii Home lub Yubii Home PRO

Wersja oprogramowania: Wymagany jest system operacyjny centrali (firmware) w wersji `5.150` lub nowszej.

## Aktywne konto i połączenie sieciowe

* **Rejestracja centrali:** Urządzenie musi być zarejestrowane na oficjalnym koncie FibaroID lub Nice ID użytkownika.
* **Dostęp do Internetu**: Połączenie internetowe jest niezbędne wyłącznie podczas instalacji i aktywacji zaszyfrowanego pliku Quick App (późniejsze działanie algorytmów odbywa się w 100% lokalnie i bezchmurowo).

## Opomiarowanie energii (Dane wejściowe)
Aby algorytm mógł poprawnie obliczać bilans energii (widoczny na panelu jako Nadprodukcja) i sterować odbiornikami, system potrzebuje dostępu do danych pomiarowych w czasie rzeczywistym:

* **Pomiar produkcji PV**: Licznik raportujący bieżącą produkcję energii z instalacji fotowoltaicznej.
* **Główny licznik zużycia domu**: Dwukierunkowy licznik energii przekazujący aktualny bilans poboru i oddawania energii do sieci.  

## Urządzenia wykonawcze (Odbiorniki)

* **Elementy wykonawcze ON/OFF**: Dowolny kompatybilny z centralą przekaźnik, przełącznik lub inteligentne gniazdko (np. FIBARO/Nice Wall Plug, Single Switch, Double Switch) przypisane do kontrolowanego obciążenia (np. pompy ciepłej wody użytkowej lub grzałki elektrycznej) posiadające unikalne ID w systemie.  

* **Czujniki dodatkowe (Opcjonalnie)**: Jeśli konfigurujesz własne warunki progowe (np. blokadę załączenia grzałki, gdy temperatura wody w bojlerze przekroczy 55°C), w systemie musi być zainstalowany i sparowany odpowiedni czujnik temperatury.