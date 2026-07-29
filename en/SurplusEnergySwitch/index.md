<font style="color: var(--vp-c-brand-1);"><h1><b>Surplus Energy Switch</b></h1></font>

# The Missing Link in Smart Overproduction Management for the Fibaro Ecosystem

::: tip Smart Self-Consumption in Practice
Turn passive energy tracking into active cost optimization. ICAS Surplus Energy Switch is an advanced Quick App that automatically and effortlessly distributes surplus energy across your Smart Home using only your existing infrastructure.
:::

:::: details 🔍 Expand market challenge analysis (Net-billing, dynamic tariffs, and grid degradation)
Dynamic changes in the renewable energy market—in particular, the transition to the net-billing model and the onset of dynamic tariffs—require a complete redefinition of the modern home's energy strategy. The traditional method, based on indiscriminately feeding excess generated power back into the grid, is becoming highly unprofitable.

The primary issue with modern micro-photovoltaic installations is the lack of internal coordination between generation and consumption. Green tech devices (inverters, heat pumps, EV charging stations, or energy storage systems) operate in silos—without real-time data exchange. This causes production peaks to coincide with a lack of load, forcing prosumers to export energy at extremely low market rates.

Although leading home automation systems like Fibaro and Nice offer excellent monitoring tools, they do not natively include decision-making algorithms capable of cascading and fully autonomous load balancing. Attempts to manually program block scenes or write custom LUA scripts are time-consuming, difficult to maintain, and prone to errors.
::: danger ⚠️ Risk of Grid Instability and Device Degradation
A lack of smart hysteresis control when switching high-power appliances (e.g., DHW heaters or heat pumps) under variable cloud cover leads to relay chatter (frequent, pulsed switching on and off). This phenomenon drastically reduces the lifespan of electronics and HVAC compressors, risking costly failures and destabilizing home grid voltage.
:::
::::

## Intelligence in Every Detail
Engineered to operate seamlessly, protect your equipment, and maximize savings every single day.

| Feature | Description | User Benefit |
| ------- | ----------- | ------------ |
| 🤖 100% Autonomous | Fully hands-off operation. Setup is as simple as providing a device ID. | Install, configure once, and forget. |
| 🛡️ Device Protection | Advanced hysteresis control and minimum run-time enforcement. | Safeguards expensive HVAC compressors and electronics. |
| 📊 Profit Tracking | Real-time monitoring of energy retained at home instead of exported to the grid. | Full visibility into actual financial savings. |
| 🔔 Push Notifications | Automatic alerts when operating on "free" solar power. | Energy awareness without opening the app. |
| 🌡️ Custom Logic Conditions | Ability to set conditional rules (e.g., water temperature < 131°F / 55°C). | Comfort tailored exactly to your needs. |
| 🌐 Multilingual | Full language integration in compliance with Fibaro standards. | Native performance in your language. |

::: details 🛠️ View technical details and "Zero-Hardware" architecture
The Surplus Energy Switch application functions as a smart Local Energy Management System (Local EMS) integrated directly into the operating system of your Home Center 3 or Yubii Home gateway.

Unlike competing solutions that rely on installing extra physical controllers and modems costing thousands of dollars along with subscription fees, Surplus Energy Switch operates 100% in software.

It leverages the sensors, meters, smart plugs (Wall Plugs), and switches you already have installed in your home. All decision-making processes and calculations are performed locally on your gateway, guaranteeing maximum data security and reliability independent of cloud connectivity (cloud-free architecture).
:::

## From Single Outlets to a Smart Home Grid

Thanks to a flexible architecture, you can choose the optimal control method and scale it as your smart home grows.

### 🔌 Single-Mode
The app operates autonomously. The Quick App continuously monitors the building's overall energy balance and manages a single, dedicated receiver (e.g., a DHW heat pump), maintaining defined relay protection rules and overproduction stabilization.

### ⛓️ Multi-Mode (Advanced Cascading Operation)
A true breakthrough in the Fibaro ecosystem. Individual Quick App instances "communicate" with each other in real time, dynamically distributing surplus power. Higher-priority devices (e.g., a heat pump) receive energy first, while remaining surplus power is smoothly passed to lower-priority loads (e.g., an EV charger).

### ⚖️ Partial Coverage (Smart Partial Load Handling)
Optimize costs even under reduced solar output. This mode enables power-hungry devices to start even when overproduction doesn't cover 100% of their power demand—operating under partial solar coverage (e.g., 60% solar coverage) drastically lowers the net cost of pulling energy from the grid.

## An Interface You Understand From Day One

The visual identity of the app was designed in close harmony with Fibaro's design language, offering maximum data clarity.
* **Current Power Flow**: An intuitive real-time diagram displaying PV generation, self-consumption, and the precise surplus value directed to active loads.
<br><br>
<img src="/images/screen_energy_flow.png" alt="Aktualny Przepływ Mocy" style="display: block; margin: 0 auto;" />

* **Operational Parameters**: Quick view of device status (On/Off), operating mode, and power requirements with safety margins factored in, plus an intuitive savings tracker logging optimized energy daily, weekly, monthly, and yearly.
<br><br>
<img src="/images/screen_device_info.png" alt="Parametry Operacyjne" style="display: block; margin: 0 auto;" />

* **Run-State Indicators**: Visual indicators showing which logical conditions (e.g., surplus stabilization, minimum runtime, custom logic rule) are currently satisfied.
<br><br>
<img src="/images/screen_energy_balancing.png" alt="Statusy Kontynuacji Pracy" style="display: block; margin: 0 auto;" />


## Deployment Model: "Install and Forget"

Deploying Surplus Energy Switch requires no coding skills or editing LUA scripts. The entire process takes just 3 simple steps:

1. **Download and Import**: Import the downloaded Quick App file directly into your Fibaro HC3 configuration panel.

2. **Automatic Pairing**: Surplus Energy Switch scans the Z-Wave network and automatically identifies metering sensors and associated energy meters.

3. **Logic Configuration**: Assign the ID of the target device, and the rest of the configuration calibrates automatically.

Once configured, the system operates completely hands-off in the background, protecting your budget and equipment.

## Transparent Business Model: Fair Play

Test risk-free before deciding.

::: info 🎁 Free Trial
Download a fully functional trial version. Experience how the Surplus Energy Switch algorithm manages energy under the specific conditions of your home before making a purchasing decision.
:::

* **One-Time Lifetime License**: Pay once, own forever. Enjoy lifetime access to the latest software updates and feature releases completely free of charge.

* **Unlimited Instances (Unlimited HC3 QA)**: A single license linked to your HC3 gateway allows you to run unlimited Quick App instances. Manage as many devices in your home as you like at no additional cost.

<div style="background-color: var(--vp-c-bg-alt); border: 1px solid var(--vp-c-divider); padding: 15px 20px; border-radius: 8px; margin: 20px 0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
  <div>
    <strong style="font-size: 1.1em;">License Price:</strong>
    <span style="font-size: 1.3em; font-weight: bold; color: var(--vp-c-brand-1); margin-left: 10px;">99 EUR / 109 USD</span>
    <span style="font-size: 0.85em; color: var(--vp-c-text-2); display: block;">One-time fee, unlimited instances</span>
  </div>
  <a href="/buy" style="background-color: var(--vp-c-brand-1); color: white; padding: 8px 18px; border-radius: 6px; text-decoration: none; font-weight: bold;">
    Buy a License
  </a>
</div>

<div style="display: flex; gap: 10px; margin-top: 15px;">
  <a href="/downloads/ICAS_SurplusEnergySwitch_v1.0.zip" target="_blank" style="background-color: var(--vp-c-brand-1); color: white; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 0.9em;">
    Download Latest Version
  </a>
  <a href="/en/download" style="background-color: var(--vp-c-bg-alt); color: var(--vp-c-text-1); border: 1px solid var(--vp-c-divider); padding: 8px 16px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 0.9em;">
    See other versions
  </a>
</div>

## Expert Recommendation

Surplus Energy Switch redefines energy resource management in smart buildings. Instead of passively displaying historical graphs, this software delivers an active, dynamic, and hardware-safe decision-making system. For Fibaro and Nice system owners who have already invested in home automation, this is the most cost-effective optimization upgrade available. It maximizes the utility of existing equipment, drastically shortens the payback period on solar investments, and protects electronics from premature wear.