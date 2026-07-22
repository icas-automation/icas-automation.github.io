# Scenariusze Użycia (Use Cases)

Poniższe przykłady pokazują, jak dopasować parametry modułu **SurplusEnergySwitch** do konkretnych układów urządzeń w domu.

---

## Scenariusz A: Prosty system z grzałką CWU i buforem

**Opis układu:**  
Użytkownik posiada grzałkę w zbiorniku wody użytkowej (2 kW) oraz drugą grzałkę w buforze C.O. (3 kW).

### Konfiguracja parametrów:
```json
Meter_ID = 105
Power_Buffer = 100
Min_On_Time = 600       // 10 minut pracy (ochrona przekaźnika)
Min_Off_Time = 300      // 5 minut spoczynku

Device_P1_ID = 120      // Grzałka CWU
Device_P1_Power = 2000

Device_P2_ID = 121      // Grzałka Bufor C.O.
Device_P2_Power = 3000