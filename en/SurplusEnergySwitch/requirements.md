# System Requirements

To successfully run and take full advantage of the capabilities of the Surplus Energy Switch application, your Smart Home ecosystem must meet the following technical requirements:

## Compatible Smart Home Gateway
The application runs as a native Quick App and requires one of the following control gateways:

* FIBARO Home Center 3 (HC3)
* FIBARO Home Center 3 Lite (HC3L)
* Nice Yubii Home or Yubii Home PRO

Firmware Version: Gateway operating system (firmware) version `5.150` or higher is required.

## Active Account and Network Connection

* **Gateway Registration:** The device must be registered to an official FibaroID or Nice ID user account.
* **Internet Access**: An internet connection is required solely during installation and activation of the encrypted Quick App file (subsequent algorithm operation runs 100% locally and offline).

## Energy Metering (Input Data)
For the algorithm to correctly calculate the energy balance (displayed on the panel as Overproduction) and control loads, the system requires access to real-time measurement data:

* **PV Production Metering**: A meter reporting current energy production from the photovoltaic installation.
* **Main Home Consumption Meter**: A bidirectional energy meter transmitting the current balance of energy consumption and grid feed-in.

## Actuators (Loads)

* **ON/OFF Actuators**: Any gateway-compatible relay, switch, or smart plug (e.g., FIBARO/Nice Wall Plug, Single Switch, Double Switch) assigned to the controlled load (e.g., domestic hot water heat pump or electric heater) with a unique system ID.

* **Additional Sensors (Optional)**: If you configure custom threshold conditions (e.g., disabling the heater when the boiler water temperature exceeds 131°F / 55°C), an appropriate temperature sensor must be installed and paired within the system.