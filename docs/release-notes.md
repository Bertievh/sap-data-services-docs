---
sidebar_label: 'Release Notes'
---

# SAP Data Services Release Notes

## Version 21.00.0000

2021 December

:white_check_mark: **CONNUTIL-540**: CVE-2021-44228 adjustment removing log4j as the logging component.

:white_check_mark: **CONNUTIL-541**: Log file does not switch on defined values.

## Migration Considerations

This release includes the new format installer where the files are extracted from the zip file into the desired directory. It contains an embedded java version for connector so there is no reliance on installed Java versions.

The configuration file has also been renamed from **Agent.config** to **Connector.config**.

The user password defined in the job definition, should be changed from an Enterprise Manager encryted value to using encrypted global properties. This means that the associated Windows agent must support the EncryptedTokens feature.

There is no need to upgrade the job-subtype.
			