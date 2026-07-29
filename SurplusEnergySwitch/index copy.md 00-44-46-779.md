<font style="color: var(--vp-c-brand-1);"><h1><b>Surplus Energy Switch</b></h1></font>


# Brakujące Ogniwo Inteligentnego Zarządzania Nadprodukcją w Ekosystemie Fibaro

:::: details Zmień pasywne śledzenie energii w inteligentne zarządzanie nadprodukcją. ICAS Surplus Energy Switch to brakujące ogniwo, które automatycznie balansuje moc Twojego Smart Home.

Dynamiczne zmiany na rynku odnawialnych źródeł energii, w szczególności przejście na system rozliczeń typu net-billing oraz wprowadzenie taryf dynamicznych, wymuszają radykalną zmianę podejścia do zarządzania energią w gospodarstwach domowych. Tradycyjny model prosumencki, oparty na bezkrytycznym oddawaniu nadwyżek energii do sieci elektroenergetycznej, staje się skrajnie nieopłacalny. Wyszukane analizy rynkowe wykazują, że największym problemem współczesnych instalacji fotowoltaicznych jest brak wewnętrznej koordynacji pomiędzy generacją a konsumpcją. Samodzielne urządzenia klasy „green tech”, takie jak falowniki, magazyny energii, pompy ciepła czy ładowarki samochodów elektrycznych, działają w sposób odizolowany. Brak wymiany danych w czasie rzeczywistym powoduje, że wysoka produkcja energii ze słońca często pokrywa się z brakiem obciążenia wewnątrz budynku, co prowadzi do przymusowego eksportu energii po niskich, a niekiedy ujemnych stawkach rynkowych.

Wiodące systemy automatyki domowej, takie jak Fibaro i Nice, oferują doskonałe narzędzia do monitorowania zużycia energii oraz zaawansowane panele wizualizacyjne. Same w sobie nie posiadają one jednak natywnych, w pełni autonomicznych algorytmów decyzyjnych zdolnych do dynamicznego i kaskadowego dystrybuowania nadwyżek prądu pomiędzy rozproszonymi odbiornikami. Użytkownicy końcowi stają przed koniecznością samodzielnego tworzenia skomplikowanych scen blokowych lub pisania dedykowanych skryptów LUA dla każdego urządzenia, co jest rozwiązaniem nieefektywnym, podatnym na błędy i trudnym w utrzymaniu.

::: danger Ryzyko Niestabilności Sieci i Degradacji Urządzeń
Brak inteligentnego sterowania histerezą przy załączaniu urządzeń o wysokiej mocy (np. grzałek CWU czy pomp ciepła) w warunkach zmiennego zachmurzenia prowadzi do tzw. oscylacji przekaźników (częstego włączania i wyłączania). Zjawisko to drastycznie skraca żywotność sprężarek HVAC oraz negatywnie wpływa na parametry napięciowe sieci domowej.
:::
::::

## Inteligencja w każdym detalu
Zaprojektowane, by działać niezauważalnie i efektywnie:

* **⚡ Autonomia 100%**: Konfiguracja "Zainstaluj i zapomnij". Wystarczy podać ID urządzenia, którym zarządzasz – resztę magii wykona algorytm.

* **🛡️ Ochrona Urządzeń**: Zabezpieczamy Twoją elektronikę przed zbyt częstym włączaniem i wyłączaniem. Stabilizacja nadprodukcji gwarantuje spokój i trwałość sprzętu.

* **📊 Śledzenie Oszczędności**: Dokładnie wiesz, ile energii nie zostało oddane do sieci, lecz zamienione na realną pracę Twoich urządzeń.

* **🔔 Inteligentne Powiadomienia**: Otrzymuj informacje na telefon, gdy Twoje urządzenia zaczynają pracować wyłącznie na "darmowej" energii ze słońca.

* **🌡️ Warunki Customowe**: Definiuj własne reguły np. włącz bojler tylko, gdy nadprodukcja istnieje, ale temperatura wody spadnie poniżej 55°C.

* **🌐 Wielojęzyczność**: Interfejs dostępny w większości języków wspieranych przez Fibaro. Rozwiązanie globalne dla Twojego domu.

::: details Zobacz więcej
Rozwiązanie ICAS Surplus Energy Switch zostało zaprojektowane jako bezpośrednia odpowiedź na tę lukę funkcjonalną w systemach Smart Home opartych na centralach Home Center 3 oraz Yubii Home. Stanowi ono zaawansowaną aplikację typu Quick App (QA), która integruje się bezpośrednio z oprogramowaniem układowym centrali i pełni rolę nadrzędnego zarządcy energii (Energy Management System – EMS) na poziomie lokalnym.

Największą przewagą konkurencyjną systemu ICAS jest brak konieczności zakupu jakichkolwiek dodatkowych komponentów sprzętowych. Podczas gdy rozwiązania alternatywne wymagają kosztownych inwestycji w fizyczne urządzenia sterujące oraz modemy.

ICAS Surplus Energy Switch optymalizuje nadprodukcję przy użyciu istniejącej infrastruktury. Wykorzystuje zainstalowane już w budynku sensory, inteligentne gniazdka (Wall Plug), przełączniki (Single/Double Switch) czy asocjacje z pompami ciepła i klimatyzatorami. Całość obliczeń oraz sterowanie odbywa się wewnątrz centrali Fibaro, gwarantując najwyższe bezpieczeństwo danych i niezależność od zewnętrznych serwerów chmurowych (cloud-free architecture).
:::
--- 

# Od pojedynczych gniazdek po inteligentną sieć domową
Zaprojektowane, by działać samodzielnie lub pracować w sieci:

* **Single-Mode**: Urządzenie pracuje samodzielnie, monitorując nadprodukcję i swoje własne parametry ochrony.

* **Multi-Mode (Praca kaskadowa)**: Prawdziwa potęga. QuickAppy komunikują się między sobą, rozdzielając nadwyżkę energii na podstawie ustalonych priorytetów ważności.

* **Partial Coverage**: Zwiększ efektywność jeszcze bardziej – pozwalaj na włączenie urządzenia, nawet jeśli słońce nie pokrywa 100% zapotrzebowania, ale znacząco obniża koszt pracy.

---

# Interfejs, który rozumiesz od pierwszej sekundy
Interfejs graficzny aplikacji ICAS Surplus Energy Switch został zaprojektowany z myślą o najwyższej czytelności i intuicyjności obsługi, co bezpośrednio koresponduje z wizualną tożsamością ekosystemu Fibaro:

* **Aktualny przepływ mocy**: Podgląd w czasei rzeczywistym produkcji, zużycia i dokładnej wartości poboru lub nadwyżki w watach.

* **Dane urządzenia**: Najwaniejsze informacje o trybie pracy urządzenia, jego stanie, wymaganej mocy oraz zabezpieczeń.

* **Statystyki autokonsumpcji**: Dzienny, tygodniowy, miesięczny i roczny podgląd zaoszczędzonych kilowatogodzin.

* **Status Automatyki**: Jasna informacja, dlaczego urządzenie pracuje lub jest wyłaczone.

---

# Model Wdrożeniowy - Zainstaluj i Zapomnij
Proces implementacji oprogramowania ICAS Surplus Energy Switch został uproszczony do minimum, aby wyeliminować barierę techniczną dla mniej doświadczonych użytkowników.
1. Pobranie i Import: Użytkownik pobiera plik Quick App i importuje go bezpośrednio przez panel konfiguracyjny centrali Fibaro Home Center 3
2. Automatyczne Parowanie: Algorytm samodzielnie skanuje strukturę sieci Z-Wave i urządzeń wirtualnych, identyfikując sensory poboru i liczniki energii.
3. Definicja Kaskady: Za pomocą prostego interfejsu graficznego przypisywane są priorytety oraz wymagane czasy stabilizacji dla poszczególnych obciążeń.

Po zakończeniu konfiguracji system nie wymaga żadnej dalszej ingerencji ze strony użytkownika. Pracuje w pełni autonomicznie, chroniąc stabilność energetyczną budynku i maksymalizując zyski finansowe prosumenta.

---

# Przejrzysty model biznesowy
W celu weryfikacji skuteczności działania algorytmu w specyficznych warunkach danej instalacji, udostępniana jest w pełni funkcjonalna, wersja próbna (Trial). Pozwala ona na bezkosztowe przetestowanie wszystkich funkcji premium. 

* **Licencja Lifetime**: Kupujesz raz, otrzymujesz dostęp do wszystkich przyszłych wersji bezpłatnie.
* **Nieskończone instancje**: Jedna licencja na Twoje HC3 pozwala instalować nieskończenie wiele QuickAppów.
* **Wersja testowa**: Pobierz pełną wersję i sprawdź jak ICAS radzi sobie z Twoją nadprodukcją.

---

# Rekomendacje Eksperckie
ICAS Surplus Energy Switch redefiniuje sposób, w jaki systemy Smart Home podchodzą do zarządzania zasobami energetycznymi. Zamiast biernego monitorowania i prezentacji danych historycznych, oprogramowanie wprowadza aktywny, dynamiczny i w pełni bezpieczny proces decyzyjny. Dla właścicieli systemów Fibaro i Nice, którzy zainwestowali już znaczne środki w infrastrukturę automatyki budynkowej, rozwiązanie to stanowi najbardziej opłacalną inwestycję modernizacyjną. Eliminuje ono potrzebę zakupu drogich, zewnętrznych sterowników sprzętowych, wyciskając maksimum możliwości z urządzeń, które użytkownik posiada już w swoim domu. Wdrożenie systemu pozwala na natychmiastowe zwiększenie wskaźnika autokonsumpcji, skrócenie czasu zwrotu z inwestycji w fotowoltaikę oraz zabezpieczenie urządzeń HVAC przed przedwczesnym zużyciem mechanologicznym.

