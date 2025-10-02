---
sidebar_label: Solution Manager Defining a Job
---

# Defining SAP Data Services Jobs using Solution Manager

## Overview

It should be remembered that the SAP Data Services Connector does not create job definitions in the SAP Data Services database, but rather only uses existing job.

Solution Manager includes a job VMWare to assist with the definition of VMWare jobs. 

## SAP Data Services Job-Type

The SAP Data Services job-type simplifies the job definition process by displaying fields to generate the command line for the different supported SAP Data Services commands.

Select **SAP Data Services** Job Type and then select the required task Type from the drop-down list.

SAP Data Services supports the following Task Types.
- Cancel   to cancel a running task
- Ping     to test the connection to the SAP system.
- Start    to start a new task.
- Track    to track a running task.

### Integration Selection

**Integrations or Integration Group**: Defines the VMWare machine that is associated with the connector.

### Task Details

#### Cancel

A Cancel jtask type can be used to cancel a job running within the SAP Data Services environment. When the Cancel task type is selected, it will cancel the last running job of the defined job name in the defined repository.

**User Name**           Required field that contains the name of a SAP Data Services user that has the required privileges to execute the job.
**User Password**       Required field that contains the password of the defined SAP Data Services user. When defining passwords, the encrypted global token capability should be used, which is decrypted by the Windows Agent and passed to the connector.
**CMS System**          Required field that contains the name of the Central management Server associated with the SAP BODS installation
**CMS Authentication**  Required field that contains authentication mode associated with the user defined in the User Name field. Select a value from the drop down list that matches your installation (Enterprise,LDAP, WinAD or SAPR3).
**Job Name**            Required field that contains the name of the job to cancel. The connector searches for the last job id that matches the defined job name and has a 'running' status.
**Repository**          Required field that contains the name of the repository within which the job is defined.

#### Ping

A Ping task type has no additional parameters and can be used to test the communications link between the SAP Data Services Connector and the SAP Data Services environment.

**User Name**           Required field that contains the name of a SAP Data Services user that has the required privileges to execute the job.
**User Password**       Required field that contains the password of the defined SAP Data Services user. When defining passwords, the encrypted global token capability should be used, which is decrypted by the Windows Agent and passed to the connector.
**CMS System**          Required field that contains the name of the Central management Server associated with the SAP BODS installation
**CMS Authentication**  Required field that contains authentication mode associated with the user defined in the User Name field. Select a value from the drop down list that matches your installation (Enterprise,LDAP, WinAD or SAPR3).

#### Start

A Start task type can be used to start a job within the SAP Data Services environment. 

**User Name**           Required field that contains the name of a SAP Data Services user that has the required privileges to execute the job.
**User Password**       Required field that contains the password of the defined SAP Data Services user. When defining passwords, the encrypted global token capability should be used, which is decrypted by the Windows Agent and passed to the connector.
**CMS System**          Required field that contains the name of the Central management Server associated with the SAP BODS installation
**CMS Authentication**  Required field that contains authentication mode associated with the user defined in the User Name field. Select a value from the drop down list that matches your installation (Enterprise,LDAP, WinAD or SAPR3).
**Job Name**            Required field that contains the name of the job to cancel. The connector searches for the last job id that matches the defined job name and has a 'running' status.
**Repository**          Required field that contains the name of the repository within which the job is defined.
**System Config**      OPtional argument that defines a specific system configuration environment to be used for this execution.
**Job Server**         Optional argument which defines the name of a the server on which the job should be executed. Argument mutually exclusive with Job Server Group field. Either Job Server or Job Server Group field must be present.
**Job Server Group**   Optional argument which defines the name of a Job Server Group on which the job should be executed. Argument mutually exclusive with Job Server field. Either Job Server or Job Server Group field must be present.
**Disable Audit**      When selected submits a request to disable auditing for this execution.
**Initial Poll Delay** Required argument that defines the initial poll delay when checking for the status of the job after the job has been started. This is a value in seconds.
**Poll Delay**         Required argument that defines the poll delay between checking for the status of the job. This is a value in seconds.
**Substitution Parameters**: Substitution Parameters are used to pass values to the job being started.
    * To add a Substitution Parameter to the list, click on the **+ AddItem** button and enter the definition.
    * To update a Substitution Parameter, simply update the definition.
    * To remove a Substitution Parameter from the list, select the **-** button to the right of the text box.
**Global Variables**: Global Variables are used to pass variables to the job being started. The global variables are usually defined in SAP Data Services with a preceding dollar sign ($) (i.e. $Variable).
    * To add a global variable to the list, click on the **+ AddItem** button and enter the definition.
    * To update a global variable, simply update the definition.
    * To remove a global variable from the list, select the **-** button to the right of the text box.

#### TRACK

A Track task type is used when it is necessary to check the status of a job running in the SAP Data Services environment that was not started by an OpCon Start job type. 

**User Name**           Required field that contains the name of a SAP Data Services user that has the required privileges to execute the job.
**User Password**       Required field that contains the password of the defined SAP Data Services user. When defining passwords, the encrypted global token capability should be used, which is decrypted by the Windows Agent and passed to the connector.
**CMS System**          Required field that contains the name of the Central management Server associated with the SAP BODS installation
**CMS Authentication**  Required field that contains authentication mode associated with the user defined in the User Name field. Select a value from the drop down list that matches your installation (Enterprise,LDAP, WinAD or SAPR3).
**Job Name**            Required field that contains the name of the job to cancel. The connector searches for the last job id that matches the defined job name and has a 'running' status.
**Job Status**          Required field that contains the status of the job. While various values can be selected from the drop-down list, when tracking a job the 'running' status should be selected.
**Repository**          Required field that contains the name of the repository within which the job is defined.
**Initial Poll Delay** Required argument that defines the initial poll delay when checking for the status of the job after the job has been started. This is a value in seconds.
**Poll Delay**         Required argument that defines the poll delay between checking for the status of the job. This is a value in seconds.
