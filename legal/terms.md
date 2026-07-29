---
layout: doc
title: Wymagania Bezpieczeństwa
---

# Zastrzeżenie Dotyczące Systemów Krytycznych i Bezpieczeństwa

*Ostatnia aktualizacja: 2026 r.*

## 1. Zakaz Stosowania w Systemach Krytycznych (High-Risk Applications)
Oprogramowanie **ICAS Automation NOT DESIGNED FOR CRITICAL USE**. Nie jest ono zaprojektowane, testowane ani certyfikowane do użytku w środowiskach wymagających niezawodności krytycznej.

**Kategorycznie zabrania się stosowania Oprogramowania do:**
* Sterowania urządzeniami podtrzymującymi życie lub aparatury medycznej.
* Jako jedynego lub głównego systemu przeciwpożarowego, przeciwwybuchowego lub przeciwwłamaniowego.
* Sterowania instalacjami, których awaria może bezpośrednio zagrażać życiu lub zdrowiu ludzkiemu.
* Zastępowania fizycznych, mechanicznych urządzeń zabezpieczających (np. zaworów bezpieczeństwa, termostatów bimetalicznych, fizycznych bezpieczników nadprądowych).

## 2. Wymóg Bezpieczników Fizycznych (Hardware Fallback)
Automatyka programowa (QuickApp) nigdy nie może stanowić jedynej linii obrony przed awarią sprzętową. 
* **Instalacje Grzewcze:** Każdy obwód grzewczy sterowany przez Oprogramowanie musi posiadać sprzętowe zabezpieczenie przed przegrzaniem (np. termostat bezpieczeństwa STB odłączający zasilanie mechanicznie przy przekroczeniu bezpiecznej temperatury).
* **Pompy i Zawory:** Urządzenia wykonawcze muszą posiadać fabryczne zabezpieczenia przed pracą na sucho lub przeciążeniem.

## 3. Testowanie i Nadzór
Użytkownik lub Instalator konfigurujący system ma obowiązek:
1. Przeprowadzić symulację sytuacji awaryjnych (np. zanik zasilania, brak łączności Z-Wave) i upewnić się, że system przechodzi w stan bezpieczny (*Fail-Safe*).
2. Regularnie weryfikować poprawność stanu fizycznych urządzeń po aktualizacjach systemu operacyjnego centrali.