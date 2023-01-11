---
sidebar_label: 'Logging and Job Output'
---

# Logging and Job Output

The default logging implemented by the connector consists of a maximum cycle of five log files. The log files contain information about the SAP BODS Connector and any jobs run by the SAP Data Services Connector. The log files, called ```Agent.log - Agent.log.5```, are located in the ```<media>\log``` directory. Information is appended into the log files and any error messages, return codes can be viewed in these log files.

All information produced by the OpCon job is available in the job output and can be retrieved using the OpCon JORS capability. The returned job output includes the information from the SAP Data Services Trace Log (see section indented section of the example below). 

## Log Example
```
2014-12-09 09:46:28,404 [main] INFO  AgentLog - [BODSJobExecutorImpl] -----------------------------------------------------------
2014-12-09 09:46:28,404 [main] INFO  AgentLog - [BODSJobExecutorImpl] DEBUG : Performing Logout
2014-12-09 09:46:28,405 [main] INFO  AgentLog - [BODSConnectionFactory] DEBUG : Processing logout Request
2014-12-09 09:46:28,405 [main] INFO  AgentLog - [BODSConnectionFactory] DEBUG : END POINT ADDRESS {http://VM-BVH-OPCON45:8080/DataServices/servlet/webservices?ver=2.1}
2014-12-09 09:46:28,430 [main] INFO  AgentLog - [BODSConnectionFactory] DEBUG : logout return Status {Logout complete}
2014-12-09 09:46:28,430 [main] INFO  AgentLog - [BODSConnector] Operation return code : JOB_FINNISHED_OK
2014-12-09 09:46:58,735 [main] INFO  AgentLog - [BODSConnector] SMA BODS Connector       : 5.20.01.03
2014-12-09 09:46:58,737 [main] INFO  AgentLog - [BODSConnector] ------------------------------------------------------------------
2014-12-09 09:46:58,737 [main] INFO  AgentLog - [BODSConnector] DEBUG : Starting Connector
2014-12-09 09:46:58,737 [main] INFO  AgentLog - [BODSConnector] DEBUG : BUSINESS_OBJECTS_SERVER_ADDRESS {http://VM-BVH-OPCON45:8080}
2014-12-09 09:46:58,737 [main] INFO  AgentLog - [BODSConnector] DEBUG : BUSINESS_OBJECTS_WSDL_LOCATION {wsdl/BODS_WSDL.wsdl}
2014-12-09 09:46:58,738 [main] INFO  AgentLog - [BODSJobExecutorImpl] DEBUG : Processing START request  :  user {Administrator} cmssystem {VM-BVH-OPCON45} cmsauthentication {secEnterprise} jobname {HelloWorld} repository {Repo_VM-BAVH-OPCON45} jobserver {JobServer_1} server group {null} initial poll delay {5} poll delay {5} parameters {RefFilesAddressCleanse='E:/Program Files (x86)/SAP BusinessObjects/Data Services/DataQuality/reference'} global variables {VAR1=VALUE,VAR2=VALUE2,VAR3=VALUE3}
2014-12-09 09:46:58,739 [main] INFO  AgentLog - [BODSConnectionFactory] DEBUG : Processing logon Request
2014-12-09 09:46:58,739 [main] INFO  AgentLog - [BODSConnectionFactory] DEBUG : wsdl location {file:/C:/java_projects/SMA%20OpCon%20SAP%20BODS%20Connector/code/bods.connector/wsdl/BODS_WSDL.wsdl}
2014-12-09 09:46:58,740 [main] INFO  AgentLog - [BODSConnectionFactory] DEBUG : END POINT ADDRESS {http://VM-BVH-OPCON45:8080/DataServices/servlet/webservices?ver=2.1}
2014-12-09 09:47:01,761 [main] INFO  AgentLog - [BODSConnectionFactory] DEBUG : logon return Session ID {14612561-E54F-0576-F516-6C97FF424D7F}
2014-12-09 09:47:01,761 [main] INFO  AgentLog - [BODSJobExecutorImpl] DEBUG : Returned Session ID  {14612561-E54F-0576-F516-6C97FF424D7F}
2014-12-09 09:47:01,761 [main] INFO  AgentLog - [BODSJobExecutorImpl] DEBUG : Extracting global variables  {VAR1=VALUE,VAR2=VALUE2,VAR3=VALUE3}
2014-12-09 09:47:01,761 [main] INFO  AgentLog - [BODSJobExecutorImpl] DEBUG : Processing global variable  {VAR1=VALUE}
2014-12-09 09:47:01,761 [main] INFO  AgentLog - [BODSJobExecutorImpl] DEBUG : Adding global variable  name {VAR1} value {VALUE}
2014-12-09 09:47:01,761 [main] INFO  AgentLog - [BODSJobExecutorImpl] DEBUG : Processing global variable  {VAR2=VALUE2}
2014-12-09 09:47:01,761 [main] INFO  AgentLog - [BODSJobExecutorImpl] DEBUG : Adding global variable  name {VAR2} value {VALUE2}
2014-12-09 09:47:01,761 [main] INFO  AgentLog - [BODSJobExecutorImpl] DEBUG : Processing global variable  {VAR3=VALUE3}
2014-12-09 09:47:01,762 [main] INFO  AgentLog - [BODSJobExecutorImpl] DEBUG : Adding global variable  name {VAR3} value {VALUE3}
2014-12-09 09:47:01,762 [main] INFO  AgentLog - [BODSJobExecutorImpl] DEBUG : Extracting subtitution parameters  {RefFilesAddressCleanse='E:/Program Files (x86)/SAP BusinessObjects/Data Services/DataQuality/reference'}
2014-12-09 09:47:01,762 [main] INFO  AgentLog - [BODSJobExecutorImpl] DEBUG : Processing subtitution parameter  {RefFilesAddressCleanse='E:/Program Files (x86)/SAP BusinessObjects/Data Services/DataQuality/reference'}
2014-12-09 09:47:01,762 [main] INFO  AgentLog - [BODSJobExecutorImpl] DEBUG : Adding subtitution parameter  name {RefFilesAddressCleanse} value {'E:/Program Files (x86)/SAP BusinessObjects/Data Services/DataQuality/reference'}
2014-12-09 09:47:01,762 [main] INFO  AgentLog - [BODSConnectionFactory] DEBUG : Processing RunBatchJob Request
2014-12-09 09:47:01,762 [main] INFO  AgentLog - [BODSConnectionFactory] DEBUG : wsdl location {file:/C:/java_projects/SMA%20OpCon%20SAP%20BODS%20Connector/code/bods.connector/wsdl/BODS_WSDL.wsdl}
2014-12-09 09:47:01,762 [main] INFO  AgentLog - [BODSConnectionFactory] DEBUG : END POINT ADDRESS {http://VM-BVH-OPCON45:8080/DataServices/servlet/webservices?ver=2.1}
2014-12-09 09:47:05,162 [main] INFO  AgentLog - [BODSConnectionFactory] DEBUG : RunBatchJob return CID {4} PID {2720} RID {30} Error Message {}
2014-12-09 09:47:05,162 [main] INFO  AgentLog - [BODSJobExecutorImpl] DEBUG : Get Status of job Runid  {30}
2014-12-09 09:47:10,164 [pool-2-thread-1] INFO  AgentLog - [BODSConnectionFactory] DEBUG : Processing getBatchJob Request : runid {30} repository {Repo_VM-BAVH-OPCON45}
2014-12-09 09:47:10,164 [pool-2-thread-1] INFO  AgentLog - [BODSConnectionFactory] DEBUG : wsdl location {file:/C:/java_projects/SMA%20OpCon%20SAP%20BODS%20Connector/code/bods.connector/wsdl/BODS_WSDL.wsdl}
2014-12-09 09:47:10,165 [pool-2-thread-1] INFO  AgentLog - [BODSConnectionFactory] DEBUG : END POINT ADDRESS {http://VM-BVH-OPCON45:8080/DataServices/servlet/webservices?ver=2.1}
2014-12-09 09:47:10,908 [pool-2-thread-1] INFO  AgentLog - [BODSConnectionFactory] DEBUG : getBatchJobStatus return Code {0} Status {succeeded}
2014-12-09 09:47:10,908 [pool-2-thread-1] INFO  AgentLog - [BODSJobExecutorImpl] DEBUG : Status of batch job {succeeded}
2014-12-09 09:47:10,914 [main] INFO  AgentLog - [BODSConnectionFactory] DEBUG : Processing getJobTraceLog Request : runid {30} repository {Repo_VM-BAVH-OPCON45}
2014-12-09 09:47:10,915 [main] INFO  AgentLog - [BODSConnectionFactory] DEBUG : wsdl location {file:/C:/java_projects/SMA%20OpCon%20SAP%20BODS%20Connector/code/bods.connector/wsdl/BODS_WSDL.wsdl}
2014-12-09 09:47:10,915 [main] INFO  AgentLog - [BODSConnectionFactory] DEBUG : END POINT ADDRESS {http://VM-BVH-OPCON45:8080/DataServices/servlet/webservices?ver=2.1}
2014-12-09 09:47:11,056 [main] INFO  AgentLog - [BODSJobExecutorImpl] ------------------------------------------------------------
2014-12-09 09:47:11,056 [main] INFO  AgentLog - [BODSJobExecutorImpl] JOB TRACE LOG
2014-12-09 09:47:11,056 [main] INFO  AgentLog - [BODSJobExecutorImpl] ------------------------------------------------------------
2014-12-09 09:47:11,056 [main] INFO  AgentLog - [BODSJobExecutorImpl] (14.2) 11-01-14 09:47:02 (2720:4392)      JOB: Reading job <49e15d53_602c_4fd9_8ddd_2f2cebc4a833> from the repository; Server version is <14.2.1.224>; Repository version is
                                               <14.2.1.0000>.
    (14.2) 11-01-14 09:47:02 (2720:4392)      JOB: Current directory of job <49e15d53_602c_4fd9_8ddd_2f2cebc4a833> is <E:\Program Files (x86)\SAP BusinessObjects\Data
                                               Services\bin>.
    (14.2) 11-01-14 09:47:03 (2720:4392)      JOB: Starting job on job server host <VM-BVH-OPCON45>, port <3500>.
    (14.2) 11-01-14 09:47:03 (2720:4392)      JOB: Job <HelloWorld> of runid <2014110109470327204392> is initiated by user <SYSTEM>.
    (14.2) 11-01-14 09:47:03 (2720:4392)      JOB: Processing job <HelloWorld>.
    (14.2) 11-01-14 09:47:03 (2720:4392)      JOB: Optimizing job <HelloWorld>.
    (14.2) 11-01-14 09:47:03 (2720:4392)      JOB: Job <HelloWorld> is started.
    (14.2) 11-01-14 09:47:03 (2720:4392)  PRINTFN: Hello Guys !
    (14.2) 11-01-14 09:47:03 (2720:4392)      JOB: Job <HelloWorld> is completed successfully. 
2014-12-09 09:47:11,056 [main] INFO  AgentLog - [BODSJobExecutorImpl] ------------------------------------------------------------
2014-12-09 09:47:11,056 [main] INFO  AgentLog - [BODSJobExecutorImpl] DEBUG : Performing Logout
2014-12-09 09:47:11,056 [main] INFO  AgentLog - [BODSConnectionFactory] DEBUG : Processing logout Request
2014-12-09 09:47:11,056 [main] INFO  AgentLog - [BODSConnectionFactory] DEBUG : END POINT ADDRESS {http://VM-BVH-OPCON45:8080/DataServices/servlet/webservices?ver=2.1}
2014-12-09 09:47:11,091 [main] INFO  AgentLog - [BODSConnectionFactory] DEBUG : logout return Status {Logout complete}
2014-12-09 09:47:11,091 [main] INFO  AgentLog - [BODSConnector] Operation return code : JOB_FINNISHED_OK
```
