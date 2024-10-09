---
sidebar_label: 'SAPDS Connector Configuation'
---

# SAP Data Services Connector Configuation

## Overview

This section will walk you through updating the Connector.config file. That contains information for the SAP DataServices Connector that defines the address of the web services and the location of the BODS_WSDL.wsdl file.

## Connector.config File

After installation is complete, the Connector.config file must be configured. 

```
[CONNECTOR]
CONNECTOR_NAME=
DEBUG=

[DATA SERVICES]
DATA_SERVICES_SERVER_ADDRESS=
DATA_SERVICES_WEB_SERVICES_ENDPOINT=
DATA_SERVICES_WSDL_LOCATION=
```

## SAP DS Connector Config Settings

### CONNECTOR


#### CONNECTOR_NAME

* The name of the connector. This value should not be changed.

#### DEBUG

* The Connector supports a debug mode which can be enabled by setting the value to ON. The connector should be run DEBUG disabled (OFF) and enabled (ON) when requested to capture an error condition.
* Value is either ON or OFF. 
* This parameter is defauled to OFF.

### DATA SERVICES

#### DATA_SERVICES_SERVER_ADDRESS

* This defines the address of the web server that supports the SAP Data Services web service.
* The value here is used to overwrite the web server address in the supplied wsdl.

#### DATA_SERVICES_WEB_SERVICES_ENDPOINT

* This defined the end pount for the web services.
* The default value is ```/Data S ervices/servlet/webservices?ver=2.1``` should be used unless this has been changed in the Data Services installation process.

#### DATA_SERVICES_WSDL_LOCATION

* This defines the location of the BODS_WSDL.wsdl file relative to the installaion directory.
* This value should not be changed.

:::tip Example
Connection.config

```
[CONNECTOR]
CONNECTOR_NAME=SAP Data Services Connector
DEBUG=ON

[DATA SERVICES]
DATA_SERVICES_SERVER_ADDRESS=http://VM-SAP-DS:8080
DATA_SERVICES_WEB_SERVICES_ENDPOINT=/DataServices/servlet/webservices?ver=2.1
DATA_SERVICES_WSDL_LOCATION=wsdl/BODS_WSDL.wsdl
```
:::
