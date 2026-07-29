<font style="color: var(--vp-c-brand-1);"><h1><b>Surplus Energy Switch</b></h1></font>

# Brakujące Ogniwo Inteligentnego Zarządzania Nadprodukcją w Ekosystemie Fibaro

::: tip Inteligentna Autokonsumpcja w Praktyce
Zmień bierne śledzenie energii w aktywną optymalizację kosztów. ICAS Surplus Energy Switch to zaawansowana aplikacja Quick App, która automatycznie i bezobsługowo dystrybuuje nadwyżki energii w Twoim Smart Home, wykorzystując wyłącznie istniejącą infrastrukturę.
:::

:::: details 🔍 Rozwiń analizę wyzwań rynkowych (Net-billing, taryfy dynamiczne i degradacja sieci)
Dynamiczne zmiany na rynku odnawialnych źródeł energii – w szczególności przejście na model rozliczeń typu net-billing oraz wejście w erę taryf dynamicznych – wymuszają całkowitą redefinicję strategii energetycznej nowoczesnego domu. Tradycyjna metoda, oparta na bezkrytycznym oddawaniu nadwyżek wyprodukowanego prądu do sieci, staje się skrajnie nieopłacalna.

Głównym problemem współczesnych mikroinstalacji fotowoltaicznych jest brak wewnętrznej koordynacji pomiędzy generacją a konsumpcją. Urządzenia typu green tech (falowniki, pompy ciepła, stacje ładowania pojazdów czy magazyny energii) pracują w silosach – bez wymiany danych w czasie rzeczywistym. Powoduje to sytuację, w której szczyt produkcji zbiega się z brakiem obciążenia, zmuszając prosumenta do eksportu energii po skrajnie niskich stawkach rynkowych

Chociaż wiodące systemy automatyki domowej, takie jak Fibaro i Nice, oferują doskonałe narzędzia monitorujące, nie posiadają one w standardzie natywnych algorytmów decyzyjnych zdolnych do kaskadowego i w pełni autonomicznego balansowania obciążeń. Próby ręcznego programowania scen blokowych lub pisania dedykowanych skryptów LUA są czasochłonne, trudne w utrzymaniu i podatne na błędy.
::: danger ⚠️ Ryzyko Niestabilności Sieci i Degradacji Urządzeń
Brak inteligentnego sterowania histerezą przy załączaniu urządzeń o wysokiej mocy (np. grzałek CWU czy pomp ciepła) w warunkach zmiennego zachmurzenia prowadzi do tzw. oscylacji przekaźników (częstego, impulsowego włączania i wyłączania). Zjawisko to drastycznie skraca żywotność elektroniki oraz sprężarek HVAC, generując ryzyko kosztownych awarii i destabilizując napięcie w sieci domowej.
:::
::::

## Inteligencja w każdym detalu
Zaprojektowane tak, aby działać niezauważalnie, chronić Twoje urządzenia i maksymalizować oszczędności każdego dnia.

| Funkcja | Opis działania | Korzyść dla użytkownika |
| ------- | -------------- | ----------------------- |
| 🤖 Autonomia 100% | W pełni bezobsługowa praca. Konfiguracja sprowadza się do podania ID urządzenia. | Instalujesz, konfigurujesz raz i zapominasz. |
| 🛡️ Ochrona Urządzeń | Zaawansowana kontrola histerezy i minimalnego czasu pracy urządzenia. | Zabezpieczenie drogich sprężarek i elektroniki HVAC. |
| 📊 Śledzenie Zysków | Bieżące monitorowanie energii, która została w domu, zamiast trafić do sieci. | Pełen wgląd w realne oszczędności finansowe. |
| 🔔 Powiadomienia Push | Automatyczne alerty o pracy na "darmowym" prądzie ze słońca. | Świadomość energetyczna bez zaglądania do aplikacji. |
| 🌡️ Warunki Customowe | Możliwość definiowania warunków logicznych (np. temperatura wody < 55°C). | Komfort dopasowany dokładnie do Twoich potrzeb. |
| 🌐 Wielojęzyczność | Pełna integracja językowa zgodna ze standardem Fibaro. | Natywne działanie w Twoim języku. |

::: details 🛠️ Zobacz szczegóły techniczne i architekturę "Zero-Hardware"
Aplikacja Surplus Energy Switch działa jako inteligentny zarządca energii (Local EMS) zintegrowany bezpośrednio z systemem operacyjnym Twojej centrali Home Center 3 lub Yubii Home.

W przeciwieństwie do konkurencyjnych rozwiązań, które opierają się na instalacji dodatkowych, fizycznych sterowników i modemów generujących koszty rzędu tysięcy złotych oraz opłaty abonamentowe, Surplus Energy Switch działa w 100% programowo.

Wykorzystuje ona sensory, liczniki, inteligentne gniazdka (Wall Plug) oraz przełączniki, które już posiadasz w swoim domu. Wszystkie procesy decyzyjne i obliczenia realizowane są lokalnie na Twojej centrali, gwarantując najwyższe bezpieczeństwo danych i niezawodność niezależną od połączenia z chmurą (cloud-free architecture).
:::

## Od pojedynczych gniazdek po inteligentną sieć domową

Dzięki elastycznej architekturze możesz wybrać optymalny model sterowania i skalować go w miarę rozwoju swojego inteligentnego domu.

### 🔌 Single-Mode
Urządzenie działa w sposób autonomiczny. Aplikacja Quick App stale monitoruje ogólny bilans energetyczny budynku i zarządza pojedynczym, dedykowanym odbiornikiem (np. pompą CWU), dbając o zachowanie zdefiniowanych reguł ochrony przekaźnika i stabilizacji nadprodukcji.

### ⛓️ Multi-Mode (Zaawansowana praca kaskadowa)
Prawdziwa rewolucja w ekosystemie Fibaro. Poszczególne instancje Quick App "rozmawiają" ze sobą w czasie rzeczywistym, dynamicznie dystrybuując nadwyżkę mocy. Urządzenia o wyższym priorytecie (np. pompa ciepła) otrzymują energię w pierwszej kolejności, a pozostały nadmiar jest płynnie przekazywany do odbiorników o niższym priorytecie (np. ładowarki EV).

### ⚖️ Partial Coverage (Inteligentne pokrycie częściowe)
Zoptymalizuj koszty nawet przy ograniczonej produkcji ze słońca. Tryb ten umożliwia uruchomienie energochłonnych urządzeń również wtedy, gdy nadprodukcja nie pokrywa 100% ich zapotrzebowania, ale praca w danym momencie (np. przy 60% pokrycia solarnego) drastycznie obniża ostateczny koszt poboru energii z sieci.

## Interfejs, który rozumiesz od pierwszej sekundy

Wizualna tożsamość aplikacji została zaprojektowana w ścisłej synergii z designem Fibaro, oferując maksymalną czytelność danych.
* **Aktualny Przepływ Mocy**: Intuicyjny diagram prezentujący w czasie rzeczywistym produkcję PV, zużycie własne oraz precyzyjną, aktualną wartość nadwyżki kierowanej do urządzeń.
<br><br>
<img src="/images/screen_energy_flow.png" alt="Aktualny Przepływ Mocy" style="display: block; margin: 0 auto;" />

* **Parametry Operacyjne**: Szybki podgląd stanu urządzenia (Włączone/Wyłączone), trybu pracy, wymaganej mocy z uwzględnieniem buforów bezpieczeństwa, a także przejrzysty licznik oszczędności gromadzący dane o zoptymalizowanej energii w ujęciu dobowym, tygodniowym, miesięcznym oraz rocznym.
<br><br>
<img src="/images/screen_device_info.png" alt="Parametry Operacyjne" style="display: block; margin: 0 auto;" />

* **Statusy Kontynuacji Pracy**: Wizualne diody informujące użytkownika o tym, które warunki logiczne (np. stabilizacja nadwyżki, minimalny czas pracy, dodatkowy customowy warunek) są aktualnie spełnione.
<br><br>
<img src="/images/screen_energy_balancing.png" alt="Statusy Kontynuacji Pracy" style="display: block; margin: 0 auto;" />

## Model Wdrożeniowy: „Zainstaluj i Zapomnij”

Wdrożenie systemu Surplus Energy Switch nie wymaga umiejętności programistycznych ani ingerencji w kod LUA. Cały proces zamyka się w 3 prostych krokach:

1. **Pobranie i Import**: Importujesz pobrany plik Quick App bezpośrednio w panelu konfiguracyjnym swojej centrali Fibaro HC3.

2. **Automatyczne Parowanie**: Surplus Energy Switch skanuje sieć Z-Wave i automatycznie identyfikuje sensory pomiarowe oraz powiązane liczniki energii.

3. **Konfiguracja Logiki**: Przypisujesz ID sterowanego urządzenia, a reszta konfiguracji kalibruje się automatycznie.

Po tej konfiguracji system staje się bezobsługowy – działa w tle, chroniąc Twój budżet i urządzenia.

## Przejrzysty model biznesowy: Fair Play

Przetestuj bez ryzyka i zdecyduj.

::: info 🎁 Bezpłatny Trial
Pobierz w pełni funkcjonalną wersję testową. Sprawdź, jak algorytm Surplus Energy Switch radzi sobie z zarządzaniem energią w specyficznych warunkach Twojego domu przed podjęciem decyzji o zakupie.
:::

* **Jednorazowa Licencja Lifetime**: Kupujesz tylko raz. Otrzymujesz dożywotni dostęp do najnowszych wydań i aktualizacji oprogramowania zupełnie bezpłatnie.

* **Nielimitowane Instancje (Unlimited HC3 QA)**: Jedna licencja przypisana do Twojej centrali HC3 uprawnia Cię do uruchomienia nieskończenie wielu instancji Quick App. Możesz kontrolować dowolną liczbę urządzeń w swoim domu bez dopłat.

<div style="background-color: var(--vp-c-bg-alt); border: 1px solid var(--vp-c-divider); padding: 15px 20px; border-radius: 8px; margin: 20px 0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
  <div>
    <strong style="font-size: 1.1em;">Cena licencji:</strong>
    <span style="font-size: 1.3em; font-weight: bold; color: var(--vp-c-brand-1); margin-left: 10px;">399 PLN</span>
    <span style="font-size: 0.85em; color: var(--vp-c-text-2); display: block;">Jednorazowa opłata, nielimitowane instancje</span>
  </div>
  <a href="/buy" style="background-color: var(--vp-c-brand-1); color: white; padding: 8px 18px; border-radius: 6px; text-decoration: none; font-weight: bold;">
    Kup Licencję
  </a>
</div>

<div style="display: flex; gap: 10px; margin-top: 15px;">
  <a href="/downloads/ICAS_SurplusEnergySwitch_v1.0.zip" target="_blank" style="background-color: var(--vp-c-brand-1); color: white; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 0.9em;">
    Pobierz Najnowszą wersję
  </a>
  <a href="/download" style="background-color: var(--vp-c-bg-alt); color: var(--vp-c-text-1); border: 1px solid var(--vp-c-divider); padding: 8px 16px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 0.9em;">
    Sprawdź pozostałe wersje
  </a>
</div>

## Rekomendacje Eksperckie

Surplus Energy Switch redefiniuje podejście do zarządzania zasobami energetycznymi w inteligentnym budynku. Zamiast biernej prezentacji wykresów historycznych, oprogramowanie to wprowadza aktywny, dynamiczny i w pełni bezpieczny dla urządzeń proces decyzyjny. Dla właścicieli systemów Fibaro i Nice, którzy zainwestowali już środki w automatykę, jest to najbardziej opłacalna inwestycja optymalizacyjna. Pozwala wycisnąć maksimum możliwości z posiadanych urządzeń, drastycznie skraca czas zwrotu z inwestycji w fotowoltaikę i chroni elektronikę przed przedwczesnym zużyciem.