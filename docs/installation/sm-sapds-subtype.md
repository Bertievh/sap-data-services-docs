---
sidebar_label: 'Solution ManagerSubtype Set-up'
---

# SAP Data Services Subtype Installation

## Overview

It should be noted that all interactions with the Solution Manager sub-type can only be completed using Solution Manager.

Download the ACSSAPDataServices.zip file from the ftp site under **OpCon Releases\\Integrations\\SapDataServices**.

Extract the **ACSSAPDataServices** directory and copy this into the **\\SAM\\plugins** for OpCon and relay installations.

For OpCon installations stop and restart the **SMA OpCon RestAPI** and **SMA OpCon Service Manager** services, for Relay stop and restart the **Relay Service**.

## Create the scripts
When using the Solution Manager sub-type, two scripts must be created. The first script contains the Connector.config information and the second script contains the drop-down list information.

Using Solution Manager
- Select **Library**.
- Select **Scripts**.
- Select **Script Types** from the upper right hand corner. 
    - Select **+Add**
    - In the ***Name*** field enter **ACSSAPDataServices**.
    - In the ***File Extension field*** enter **txt**.
    - In the ***Description*** field enter **Used for ACSSAPDataServices Integration**.
    - Select Save.
- Select **Script Runners** from the upper right hand corner. 
    - Select **+Add**
    - In the ***Name*** field enter **ACSSAPDataServices**.
    - In the ***OS*** field select **SAP Data Services** from the drop-down list.
    - In the ***Type*** field select **ACSSAPDataServices** from the drop-down list.
    - In the ***Command*** field enter **cmd.exe /c**.
    - Select Save.
- Select **Scripts** from the upper right hand corner.
    - Create the Connector.config script.
    - Select **+Add**.
    - In the ***Name*** field enter a name for the script. It is suggested using the proposed agent name and append **_config** to the name. 
    - In the ***Type*** field select **ACSSAPDataServices** from the drop-down list.
    - Assign the required roles.
    - In the ***Script*** paste the contents of the created Connector.config file.
    - Select Save.
 
## Create SAP Data Services Agent Definition

Using Solution Manager
- Select **Library**.
- Select **Agents**.
    - Select **+Add**
    - In the ***Name*** field enter the name of the agent.
    - Select **SAP Data Services** from the ***Type*** drop-down list.
    - In the ***SAP Data Services Settings*** section enter the required information.
    - In the ***Client Information*** section
        - In the ***Directory*** field enter the installation directory of the AzureVM Connector.
        - In the ***Name*** field insert **bods.exe** (default value).
        - In the ***Config File Name*** field insert **Connector.config** (default value).
    - In the ***Config Script*** section
        - Select **ACSSAPDataServices** from the ***Script Runner*** drop-down list.
        - Select the config script you previously created from the ***Script*** drop-down list.

- Select **Save**.
