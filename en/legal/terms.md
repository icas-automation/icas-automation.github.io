---
layout: doc
title: Security Requirements
---

# Critical Systems and Safety Disclaimer

*Last updated: 2026*

## 1. Prohibition of Use in Critical Systems (High-Risk Applications)
**ICAS Automation software is NOT DESIGNED FOR CRITICAL USE**. It is not designed, tested, or certified for use in environments requiring critical reliability.

**It is strictly forbidden to use the Software for:**
* Controlling life-support equipment or medical devices.
* Acting as the sole or primary fire protection, explosion prevention, or burglar alarm system.
* Controlling installations where failure could pose a direct threat to human life or health.
* Replacing physical, mechanical safety devices (e.g., safety valves, bimetallic thermostats, physical overcurrent circuit breakers).

## 2. Hardware Fallback Requirement
Software-based automation (QuickApp) must never be the only line of defense against hardware failure.
* **Heating Installations:** Every heating circuit controlled by the Software must have hardware overheat protection (e.g., an STB safety thermostat that mechanically disconnects power when a safe temperature is exceeded).
* **Pumps and Valves:** Actuating devices must have factory-built protection against dry running or overloading.

## 3. Testing and Supervision
The User or Installer configuring the system is obligated to:
1. Conduct simulations of emergency situations (e.g., power outage, loss of Z-Wave connectivity) and ensure that the system transitions into a Fail-Safe state.
2. Regularly verify the correct physical state of the devices following hub operating system updates.