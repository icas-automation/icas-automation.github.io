# Installation and Configuration

Start smart overproduction management in your home in less than **5 minutes**. The process is fully automated and requires no script writing or knowledge of LUA code.

## Step 1: Download the latest software version

1. Go to the official website (https://icas-automation.github.io/).  
2. Navigate to the products section and select the module you are interested in.  
3. Download the latest stable version of the software in `.fqax` file format (Quick App).

## Step 2: Installation in the FIBARO / Nice gateway

1. Log in to the administrative panel of your FIBARO Home Center 3 / Lite or Yubii Home gateway.
2. In the side menu, go to **Settings**, and then select **Devices** (you can also use the quick access icon on the main dashboard).  
3. Click the characteristic blue **`+` (Add device)** button in the top right corner of the screen.  
4. Select the **Other device** option, and then click the **Upload from file** tile.
5. Select the previously downloaded file with the `.fqax` extension. The gateway will automatically import the device and prepare it for operation.

## Step 3: Basic Configuration (First Launch)

After successfully uploading the file, the system will automatically initiate the configuration and variable mapping process.

1. Go to the newly created Surplus Energy Switch device and open its dashboard in **Preview** mode.  
2. On the device's main screen, you will see an error message indicating that no receiver is assigned: `SWITCH_ID`.
3. Go to the *Variables* tab in the device's advanced settings.
4. Find the variable named `switch_id`.
5. Click the pencil icon ✏️ on the right side to edit.
6. Enter the ID of the actuator device (e.g., Wall Plug, Single Switch, or dedicated DHW heat pump relay) that the algorithm should control when overproduction is detected, and save the changes.

## Advanced Configuration (Optional)

Our Quick App has been designed around the "Install and Forget" principle, offering optimized default parameters. However, if you want to fine-tune the system's operation to the specifics of your appliances:  

1. Review the system parameter descriptions available in our technical documentation.
2. To change any parameter, go to the **Variables** tab and edit it as described in **Step 3**.

## Lifetime License Activation (Optional)

1. After purchasing the full version of the Surplus Energy Switch software, you will receive your unique license key via email.
2. To activate your lifetime license, go to the device's **Variables** tab.
3. Find the variable `licence_key` and enter the code you received (following the same steps as in Step 3).
4. The system will automatically verify the key and unlock full, unlimited functionality on your gateway.

## Factory Reset (Optional)

If you want to reset the device and clear the configuration to its initial state:

1. In the device's **Variables** tab, find the variable named `config_status`.
2. Click the edit icon and enter the value: `RESET`.
3. Save the changes. Quick App will automatically restart the state machine and restore default parameters.

::: danger ⚡ WARNING: TOTAL DEVICE RESET
Restoring factory settings (entering the value `RESET` into the `config_status` variable) permanently deletes all personalized operating times, defined hysteresis settings, and additional logic conditions, overwriting them with default values.
:::