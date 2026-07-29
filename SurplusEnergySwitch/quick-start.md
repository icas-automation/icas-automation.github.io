# Instalacja i Konfiguracja

Uruchom inteligentne sterowanie nadprodukcją w swoim domu w mniej niż **5 minut**. Proces jest w pełni zautomatyzowany i nie wymaga od Ciebie pisania skryptów ani znajomości języka LUA.

## Krok 1: Pobranie najnowszej wersji oprogamowania

1. Wejdź na oficjalną stronę (https://icas-automation.github.io/).  
2. Przejdź do sekcji produktów i wybierz interesujący Cię moduł.  
3. Pobierz najnowszą, stabilną wersję oprogramowania w formacie pliku `.fqax` (Quick App).

## Krok 2: Instalacja w centrali FIBARO / Nice

1. Zaloguj się do panelu administracyjnego swojej centrali FIBARO Home Center 3 / Lite lub Yubii Home.
2. W menu bocznym przejdź do sekcji **Ustawienia**, a następnie wybierz **Urządzenia** (możesz również skorzystać z ikony szybkiego dostępu na pulpicie głównym).  
3. Kliknij charakterystyczny, niebieski przycisk **`+` (Dodaj urządzenie)** w prawym górnym rogu ekranu.  
4. Wybierz opcję **Inne urządzenie**, a następnie kliknij kafelek **Wgraj z pliku**.
5. Wskaż pobrany wcześniej plik o rozszerzeniu `.fqax`. Centrala automatycznie zaimportuje urządzenie i przygotuje je do pracy.

## Krok 3: Konfiguracja podstawowa (Pierwsze uruchomienie)

Po pomyślnym wgraniu pliku, system automatycznie zainicjuje proces konfiguracji i mapowania zmiennych.

1. Przejdź do nowo utworzonego urządzenia Surplus Energy Switch i otwórz jego pulpit w trybie **Podgląd**.  
2. Na ekranie głównym urządzenia zobaczysz komunikat o błędzie informujący o braku przypisanego odbiornika: `SWITCH_ID`.
3. Przejdź do zakładki *Zmienne* w ustawieniach zaawansowanych urządzenia.
4. Odnajdź zmienną o nazwie `switch_id`.
5. Kliknij ikonę ołówka ✏️ po prawej stronie, aby przejść do edycji.
6. Wpisz ID urządzenia wykonawczego (np. Wall Plug, Single Switch lub dedykowany przekaźnik pompy CWU), którym algorytm ma zarządzać w momencie wykrycia nadprodukcji, i zatwierdź zmiany.

## Konfiguracja zaawansowana (Opcjonalnie)

Nasz Quick App został zaprojektowany w myśl zasady "Zainstaluj i Zapomnij", oferując zoptymalizowane parametry domyślne. Jeśli jednak chcesz precyzyjnie dostosować działanie systemu do specyfiki swoich odbiorników:  

1. Zapoznaj się z opisem parametrów systemowych dostępnym w naszej dokumentacji technicznej.
2. Aby zmienić dowolny parametr, przejdź do zakładki **Zmienne** i dokonaj edycji w sposób opisany w **Kroku 3**.

## Aktywacja licencji Lifetime (Opcjonalnie)

1. Po zakupie pełnej wersji oprogramowania Surplus Energy Switch otrzymasz drogą mailową swój unikalny klucz licencyjny.
2. Aby aktywować dożywotnią licencję, przejdź do zakładki **Zmienne** urządzenia.
3. Odnajdź zmienną `licence_key` i wprowadź w niej otrzymany kod (postępując analogicznie jak w Kroku 3).
4. System automatycznie zweryfikuje klucz i odblokuje pełną, nielimitowaną funkcjonalność na Twojej centrali.

## Przywracanie ustawień fabrycznych (Opcjonalnie)

W przypadku chęci zresetowania urządzenia i wyczyszczenia konfiguracji do stanu początkowego:

1. W zakładce **Zmienne** urządzenia odnajdź zmienną o nazwie `config_status`.
2. Kliknij ikonę edycji i wpisz wartość: `RESET`.
3. Zapisz zmiany. Quick App automatycznie zrestartuje maszynę stanów i przywróci parametry domyślne.

::: danger ⚡ UWAGA: CAŁKOWITY RESET URZĄDZENIA
Przywrócenie ustawień fabrycznych (wpisanie wartości `RESET` w zmiennej `config_status`) bezpowrotnie usuwa wszystkie spersonalizowane czasy pracy, zdefiniowane histerezy oraz dodatkowe warunki logiczne, nadpisując je wartościami domyślnymi.
:::
