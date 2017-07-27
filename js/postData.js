
var head = '<ROOT>';
var end = '</ROOT>';             

$(document).on('click', '.confirmButton', function(e){
  e.preventDefault();
  var currentDate = new Date();
  var profileHead = '<PROFILESET CONFIG_PATCH_VERSION_NUM="1" CREATION_DATE="'
                  + currentDate.getDate()
                  + '/'
                  + currentDate.getMonth()+1
                  + '/'
                  + currentDate.getFullYear()
                  + '-'
                  + currentDate.getHours()
                  + ':'
                  + currentDate.getMinutes()
                  + ':'
                  + currentDate.getSeconds()
                  + '" PROFILE_DESC="?" PROFILE_NAME="eas" PROFILE_VERSION="9.8.002" RELEASE_VERSION="3.2" WS_VERSION="9.8.002">'
    
    function findRegionCode(regionName){
      var regionCode = jQuery.inArray(regionName,easRegionChoices)+1;
      return (regionCode);
    }

    function findOrdinalNumber(serverPriority){
      if (serverPriority=="primary"){
        return("1");
      } else {
        return("2");
      }
    }

    function findServerNumber(failOverModual){
      if (failOverModual == "dual"){
        return ("2");
      } else {
        return ("1");
      }
    }

    var newEASSettingsHead = '<REGION REGION_CODE="'
                        + findRegionCode(easGeneralSettings.region)
                        + '" REGION_NAME="'
                        + easGeneralSettings.region
                        + '" WS_VERSION="9.6.001"><COUNTRY COUNTRY_CODE="US" COUNTRY_NAME="USA" WS_RETRY_STATE="0" WS_VERSION="9.6.001"><SERVERGROUP DEFAULT_GATEWAY="'    
                        + easGeneralSettings.serverGroup.gatewayIP
                        + '" DOMAIN_NAME="'
                        + easGeneralSettings.serverGroup.domainName
                        + '" FAILOVER_MODEL="'
                        + easGeneralSettings.serverGroup.failOver
                        + '" GROUP_ID="GRP001" ORGANISATION_NAME="'
                        + easGeneralSettings.serverGroup.organizationName
                        + '"  ORGANISATION_UNIT_NAME="'
                        + easGeneralSettings.serverGroup.organizationUnitName
                        + '" SERVER_COUNT="'
                        + findServerNumber(easGeneralSettings.serverGroup.failOver) 
                        + '" WS_VERSION="9.6.001"><SERVER HOST_NAME="'
                        + easGeneralSettings.server.hostName
                        + '" ORDINAL_NUMBER="'
                        + findOrdinalNumber(easGeneralSettings.server.serverPriority)
                        +'" OS_TYPE="Linux" WS_VERSION="9.6.001">'

      // Network (PC-side Interface)
      var newPCInterfaceSettings = '<NETWORK BANDWIDTH_MBPS="'
                                  + 
                                  + '" DIRECTION="PROCESSOR" FLOATING_IFC_NAME="'
                                  + 
                                  + ':1" FLOATING_IP_ADDRESS="'
                                  +
                                  + '" GATEWAY_ADDRESS="'
                                  +
                                  + '" IFC_NAME="'
                                  + 
                                  + '" IP_ADDRESS="'
                                  +
                                  + '" IS_AUTONEGOTIATE="'
                                  +
                                  + '" IS_DUPLEX="'
                                  + 
                                  + '" MTU="'
                        
      // Threshoulds 
      var newEASThresholdsSettings = '<THRESHOLDSETTINGS ALERT_SAMPLING_COUNT="'
                                   + easGeneralSettings.thresholdSettings.generalSettings.alertCount
                                   + '" CPU_ALERT_SAMPLING_COUNT="'
                                   + easGeneralSettings.thresholdSettings.generalSettings.cpuAlertCount
                                   + '" LOADFILE_INTERVAL_SECONDS="'
                                   + easGeneralSettings.thresholdSettings.generalSettings.loadAlertsInterval
                                   + '" LOAD_TIME_SECONDS="'
                                   + easGeneralSettings.thresholdSettings.generalSettings.checkNewAlertInterval
                                   + '" MAX_CPU_PCT_KERNEL="'
                                   + easGeneralSettings.thresholdSettings.generalSettings.maxCPUKernel
                                   + '" MAX_CPU_PCT_USER="'
                                   + easGeneralSettings.thresholdSettings.generalSettings.maxCPUUser
                                   + '" MIN_CPU_PCT_IDLE="'
                                   + easGeneralSettings.thresholdSettings.generalSettings.minCPUIdle
                                   + '" MIN_FREE_MEM="'
                                   + easGeneralSettings.thresholdSettings.generalSettings.minFreeMemory
                                   + '" MIN_FREE_SWAP="'
                                   + easGeneralSettings.thresholdSettings.generalSettings.minFreeSwap
                                   + '" MIN_ONLINE_CPU_COUNT="'
                                   + easGeneralSettings.thresholdSettings.generalSettings.minOnlineCPU
                                   + '" NETWORK_ALERT_SAMPLING_COUNT="'
                                   + easGeneralSettings.thresholdSettings.generalSettings.networkAlertCount
                                   + '" PARTITION_ALERT_SAMPLING_COUNT="'
                                   + easGeneralSettings.thresholdSettings.generalSettings.partitionAlertCount
                                   + '" PARTITION_MAX_UTILIZATION="'
                                   + easGeneralSettings.thresholdSettings.generalSettings.partitionMaxUtilization
                                   + '" WS_VERSION="9.6.001">'
    var h;
    for (h=0; h<easGeneralSettings.thresholdSettings.process.name.length; h++){
      var newProcessThreeshold = '<PROCESSTHRESHOLD ALERT_SAMPLING_COUNT="'
                                + easGeneralSettings.thresholdSettings.process.settings[h].alertCount
                                + '" MAX_CPU_PERCENT="'
                                + easGeneralSettings.thresholdSettings.process.settings[h].maxCPU
                                + '" MAX_MEM_PERCENT="'
                                + easGeneralSettings.thresholdSettings.process.settings[h].maxMemory
                                + '" NAME="'
                                + easGeneralSettings.thresholdSettings.process.name[h]
                                + '"/>'
     newEASThresholdsSettings = newEASThresholdsSettings.concat(newProcessThreeshold);
    }
    newEASThresholdsSettings = newEASThresholdsSettings.concat('</THRESHOLDSETTINGS>');
    
    var efsPart = '<EFSAPPLICATION BLOCK_ICF_FILES="Y" LOG_LEVEL="'
                + efsConfig.efs.logLevel
                + '" MEMBER_ADAPTER="FTP" NAME="EFS" PURGE_DELAY="'
                + efsConfig.efs.purgeDelay
                + '" PURGE_INTERVAL="'
                + efsConfig.efs.purgeInterval
                + '" WS_VERSION="9.6.001">'
                + '<FTPSERVICE CONTROL_CONNECTION_TIMEOUT="'
                + efsConfig.ftp.controlTimeout 
                + '" DATA_CONNECTION_TIMEOUT="'
                + efsConfig.ftp.dataTimeout
                + '" GREETING_MESG="'
                + efsConfig.ftp.greetingMessage
                + '" NAME="FTP" SOCKET_RCV_BUFFER_SIZE="'
                + efsConfig.ftp.sendSize
                + '" SOCKET_SND_BUFFER_SIZE="'
                + efsConfig.ftp.receiveSize
                + '" WS_VERSION="9.6.001"/>'
                + '<AFTPSERVICE FQDN_CHECK="'
                + efsConfig.aftp.fqdnCheck
                + '" NAME="AFTP" SESSION_TIMEOUT="'
                + efsConfig.aftp.connectionTimeout
                + '" SOCKET_RCV_BUFFER_SIZE="'
                + efsConfig.aftp.sendSize
                + '" SOCKET_SND_BUFFER_SIZE="'
                + efsConfig.aftp.receiveSize
                + '" WS_VERSION="9.6.001"/>'
                + '</EFSAPPLICATION>';
      
      var emsHeading = '<EMSAPPLICATION NAME="EMS" WS_VERSION="9.6.004">'


      var i;
      
      var aps=[];
      var updatePCXML='';
      for (i=0; i<pcxml.apTitle.length; i++){
        aps[i]='<ACCESSPOINT AUTHENTICATION="None" ID="'
            + pcxml.apID[i]
            +'" NAME="'
            + pcxml.apName[i]
            + '" SESSION_POLICY="'
            + pcxml.sessionPolicySelector[i]
            + '" WS_VERSION="9.6.001"/>'
        updatePCXML=updatePCXML.concat(aps[i])
    }
      

      var rps = [];
      var updateRoutingxml ='';
      for (i=0; i<routingxml.ruleID.length; i++){
        rps[i] = '<ROUTINGRULE ID="'
                + routingxml.ruleID[i]
                + '" NAME="' 
                + routingxml.ruleName[i]
                + '" WS_VERSION="9.6.001">'
        for (j=0; j<routingxml.routingAddress[i].networkAddress.length; j++){
          var ras;
          ras = '<ROUTINGADDRESS ID="'
                + routingxml.routingAddress[i].networkAddress[j]
                + '" MTIROUTE="'
                + routingxml.routingAddress[i].mtiRoute[j]
                + '" PRIORITY="'
                + routingxml.routingAddress[i].priority[j]
                + '" WS_VERSION="9.6.001"/>'
          rps[i] = rps[i].concat(ras);
        }
        rps[i] = rps[i].concat('</ROUTINGRULE>')
        updateRoutingxml = updateRoutingxml.concat(rps[i]);
      }

    function findProcessingCenterID(pcname){
      if (pcname == "OCW"){
        return("000001");
      } else {
        if (pcname == "OCE"){
          return("000002");
          } else {
            if (pcname == "OCC") {
              return("000003");
            } else {
              if (pcname == "OCB"){
                return ("000004")
              } else {
                if (pcname == "OCAP"){
                return ("000005")
              } else {
                if (pcname == "VIPF"){
                  return ("000006")
                } else {
                  if (pcname == "VIPG"){
                  return ("000007")
                  } else {
                    if (pcname == "VIPH"){
                    return ("000008")
                    } else {
                      if (pcname == "VIPI"){
                         return ("000009")
                      }
                    }
                  }
                }
              }
              } 
            }
          }
      }
      
    }


    var pcs=[];
    var updateNetworkingxml = '';
    for (i=0; i<networkingxml.networkGroupName.length; i++){
      var currentPCID = findProcessingCenterID(networkingxml.networkGroupName[i]);
      pcs[i] = '<PROCESSINGCENTER ID="'
              + currentPCID
              +'" NAME="'
              + networkingxml.networkGroupName[i]
              +'" WS_VERSION="9.6.001">'
      var nas=[];
      for (j=0; j<networkingxml.networkAddress[i].networkAddressID.length; j++){
        nas[j] = '<NETWORKADDRESS ID="'
                + networkingxml.networkAddress[i].networkAddressID[j]
                + '" NAME="'
                + networkingxml.networkAddress[i].networkAddressName[j]
                + '" TIMEOUT="'
                + networkingxml.networkAddress[i].addressTimeout[j]
                + '" WS_VERSION="9.6.001"><RETRYPOLICY CONTROL="'
                + networkingxml.networkAddress[i].retryPolicy.control[j]
                + '" INITIAL_ATTEMPTS="'
                + networkingxml.networkAddress[i].retryPolicy.initialAttempts[j]
                + '" INTERVAL="'
                + networkingxml.networkAddress[i].retryPolicy.interval[j]
                + '" MAX_INTERVAL="'
                + networkingxml.networkAddress[i].retryPolicy.maxInterval[j]
                + '" MULTIPLIER="'
                + networkingxml.networkAddress[i].retryPolicy.multiplier[j]
                + '" WS_VERSION="9.6.001"/>'
        nas[j]=nas[j].concat('</NETWORKADDRESS>')
        pcs[i]=pcs[i].concat(nas[j]);
    }
    pcs[i]=pcs[i].concat('</PROCESSINGCENTER>')
    updateNetworkingxml=updateNetworkingxml.concat(pcs[i]);
  }
  
// pcdefault.xml
    var updatePCDefaultxml='';
    var newpcSPs = [];
    for (i=0; i<pcdefault.pcSessionID.length; i++){
      newpcSPs[i] = '<PCSESSIONPOLICY ACCESSPOINT_ES_MSG="'
                  + pcdefault.apESMsg[i]
                  + '" AUTO_SHUTDOWN="'
                  + pcdefault.autoShutDown[i]
                  + '" FAILURE_DELAY="'
                  + pcdefault.pcFailureDelay[i]
                  + '" FLOW="pcflow" ID="'
                  + pcdefault.pcSessionID[i]
                  + '" NAME="'
                  + pcdefault.pcSessionName[i]
                  + '" PLATFORM="3" PREFERRED_VIC="'
                  + pcdefault.perferredVIC[i]
                  + '" SESSION_TYPE="commvm::CfgSessionFactory" WS_VERSION="9.6.001">'
      var j;
      var newPCAddress = '';
      for (j=0; j<pcdefault.pcAddress[i].networkAddress.length; j++){
        newPCAddress = '<PCADDRESS CR_SESSIONID="'
                      + pcdefault.pcAddress[i].sessionID[j]
                      + '" ID="'
                      + pcdefault.pcAddress[i].networkAddress[j]
                      + '" NUM_SESSIONS="'
                      + pcdefault.pcAddress[i].numberOfSessions[j]
                      + '" WS_VERSION="9.6.001"/>'
        newpcSPs[i] = newpcSPs[i].concat(newPCAddress)
      }
      updatePCDefaultxml = updatePCDefaultxml.concat(newpcSPs[i])
      updatePCDefaultxml=updatePCDefaultxml.concat('</PCSESSIONPOLICY>')
    }
    

  //epdefault.xml
  var updateepdefault='';
  var newEPSPs = '';
  for (i=0; i<epdefault.epSessionID.length; i++){
    newEPSPs='<EPSESSIONPOLICY FLOW="epflow" FORCE_DOWN="'
          + epdefault.forceDown[i]
          + '" ID="'
          + epdefault.epSessionID[i]
          + '" NAME="'
          + '" PLATFORM="0"'
          + ' ROUTING_POLICY="'
          + epdefault.routingPolicy[i]
          + '" ROUTING_RULE="'
          + epdefault.routingRule[i]
          + '" SESSION_TYPE="commvm::CfgSessionFactory" WS_VERSION="9.6.001"><PROBE CONTROL="'
          + epdefault.probe[i].control
          + '" IDLE_DETECTION="'
          + epdefault.probe[i].idleDection
          + '" INTERVAL="'
          + epdefault.probe[i].interval
          + '" RESPONSE="'
          + epdefault.probe[i].responseTime
          + '" RESPONSE_TYPE="'
          + epdefault.probe[i].responseType
          + '" TYPE="'
          + epdefault.probe[i].type
          + '" WS_VERSION="9.6.001"/><PARTIALMESSAGE CONTROL="'
          + epdefault.partialMessage[i].control
          + '" TIMEOUT="'
          + epdefault.partialMessage[i].timeOut
          + '" WS_VERSION="9.6.001"/><FORMATTER LOG_ERROR="'
          + epdefault.formatter[i].logError
          + '" NAME="'
          + epdefault.formatter[i].name
          + '" PROCESSOR="'
          + epdefault.formatter[i].Processor
          + '" RESPONSE_DETERMINATION_POLICY="MTI" WS_VERSION="9.6.001"/><QUIESCE CONTROL="'
          + epdefault.quiesce[i]
          + '" WS_VERSION="9.6.001"/><FRAMER IS_CONFIGURE="N" MAX_MSG_LENGTH="'
          + epdefault.maxMessgeLength[i]
          + '" NAME="vmlh" WS_VERSION="9.6.001"/><FLOWCONTROL IS_CONFIGURE="N" NUM_ATTEMPTS="'
          + epdefault.flowControl[i].attemptsNumber
          + '" RETRY_NUM="'
          + epdefault.flowControl[i].retryAttempts
          + '" RETRY_WAIT_MILLI_SECONDS="'
          + epdefault.flowControl[i].retryTimeWait
          + '" SUCCESS_PERCENT="'
          + epdefault.flowControl[i].successAttemptspercentage
          + '" TIMEOUT="'
          + epdefault.flowControl[i].timeOut
          + '" WS_VERSION="9.6.001"/><SOCKETOPTION IS_CONFIGURE="N" SOCKET_RCV_BUFFER_SIZE="'
          + epdefault.socketOption[i].receiveSocketBufferSize
          + '" SOCKET_SND_BUFFER_SIZE="'
          + epdefault.socketOption[i].sendSocketBufferSize
          + '" WS_VERSION="9.6.001"/>'
    
    updateepdefault=updateepdefault.concat(newEPSPs)
    updateepdefault=updateepdefault.concat('</EPSESSIONPOLICY>')

  }
  

  // Failover 
  var newFailoverSettings = '';





    
    var newConfigFile = head.concat(profileHead)

    newConfigFile = newConfigFile.concat(newEASSettingsHead)
    newConfigFile = newConfigFile.concat(newEASThresholdsSettings)
   
    newConfigFile = newConfigFile.concat(efsPart)

    newConfigFile = newConfigFile.concat(emsHeading)
    newConfigFile = newConfigFile.concat(updateNetworkingxml)
    newConfigFile = newConfigFile.concat(updateRoutingxml)
    newConfigFile = newConfigFile.concat(updatePCDefaultxml)
    newConfigFile = newConfigFile.concat(updateepdefault)
    newConfigFile = newConfigFile.concat(updatePCXML)
    newConfigFile = newConfigFile.concat('</EMSAPPLICATION>')
    
    newConfigFile = newConfigFile.concat('</SERVER>')
    newConfigFile = newConfigFile.concat('</SERVERGROUP>')

    newConfigFile = newConfigFile.concat('</COUNTRY>')
    newConfigFile = newConfigFile.concat('</REGION>')
    newConfigFile = newConfigFile.concat('</PROFILESET>')
    newConfigFile = newConfigFile.concat(end)
    console.log(newConfigFile);

  
      
    $.post('http://127.0.0.1:8080/xml', JSON.stringify({'xml':newConfigFile}))
    document.getElementById('submitbtn').style.display = 'none';
    alert("New Configuration File has been Generated");

})
