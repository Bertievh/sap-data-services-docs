---
sidebar_label: 'Installation'
---

# SAP Data Services Connector Installation

## Installation

1. Extract files from the SAPDSConnector-win.zip
2. Place the folder and files within the 'SAPDSConnector-win.zip' on the OpCon Server with in the OpConxps installation path.
    * If Opcon is installed on the C drive, navigate to ```C:\Program Files\OpConxps``` and create a new direcotry called ```SAPDataServices```. Extract files to this new directory.
    * If OpCon is installed on a drive other than C, navigate to ```<Install Path>\OpConxps``` and create a new directory called ```SAPDataServices```. Extract files to this new directory.   

:::note
The SAP Data Services connector requires a Windows Agent (MSLSAM) as it executes as a Windows batch job. It can be installed on a central server or an agent can be installed on the SAP Data Services server.
:::

After the extraction is complete, the SAPDS directory will contain the following components:

* The SAP Data Services Connector Executable
* An Encryption Executable 
* A Connector.config file for the SAP Data Services Connector
* A JAVA directory containing the embedded OpenJDK version 1.8
* A WSDL directory containing the required Data Services XML files
* An emplugins directory containing the SAP Data Services Job Sub-type.

DataServices