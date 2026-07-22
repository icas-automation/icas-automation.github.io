# ICAS SurplusEnergySwitch

::: info INFORMACJA O MODUALE
**Aktualna wersja:** v1.0.0  
**Architektura:** Fibaro QuickApp (LUA)  
**Wspierane centrale:** Fibaro Home Center 3 / Yubii Home Pro  
:::

**ICAS SurplusEnergySwitch** to zaawansowany silnik decyzyjny przeznaczony do automatycznego bilansowania i przekierowywania nadwyżek energii z fotowoltaiki na lokalne odbiorniki prądu.

---

## Dlaczego podejście przemysłowe?

Tradycyjne sterowanie oparte o proste reguły „włącz/wyłącz” prowadzi do dwóch poważnych problemów:
1. **Częste cyklowanie odbiorników:** Chwilowe zachmurzenie powoduje nieustanne załączanie i wyłączanie grzałek czy pomp ciepła, co drastycznie skraca żywotność ich styczników oraz sprężarek.
2. **Pobór z sieci (Overshooting):** Nieprzemyślane załączenie dużego odbiornika (np. 3 kW) przy nadwyżce 1 kW skutkuje natychmiastowym dokupowaniem 2 kW z sieci po drogich taryfach.

`SurplusEnergySwitch` eliminuje te zjawiska poprzez zastosowanie **płynnej histerezy czasowo-mocowej** oraz **matrycy priorytetów**.

---

::: warning OSTRZEŻENIE BEZPIECZEŃSTWA
Przed skonfigurowaniem modułu upewnij się, że odbiorniki dużej mocy (grzałki CWU, pompy ciepła) posiadają niezależne, fizyczne zabezpieczenia termiczne (np. termostat bezpieczeństwa STB). Oprogramowanie automatyki budynkowej stanowi dodatkową warstwę sterującą i nie zastępuje sprzętowych zabezpieczeń PPOŻ/EHS.
:::