var counter = 0;

var controlChoices = ["Disabled", "Enabled"]

var probeResponseTypeChoices = ["No Response", "Send Probe", "Any Response"]

var probeIdleDectionChoices = ["No Recv", "No Send", "No Send Recv"]

var formatterLogErrorChoices = [0,1]

var sessionIDChoices = ['', "01", "02"]



var originpcdefault={
    pcSessionID: ["VIC_Connection", "VIC_Test"],
    pcSessionName: ["VIC_Connection", "VIC_Test"],
    perferredVIC: ["OCE", "VIPF"],
    pcFailureDelay:[1,1],
    autoShutDown: ["Disabled", "Enabled"],
    apESMsg: ["Enabled", "Disabled"],
    pcAddress:[
        {networkAddress:["VIPA", "VIPB", "VIPC", "VIPF", "OVNVCMS"],
         numberOfSessions:[1,1,1,1,1],
         sessionID: ['','','','','']
        },
         {networkAddress:["VIPA", "VIPB", "VIPC", "VIPF"],
         numberOfSessions:[1,1,1,1],
         sessionID: ['','','','']
        }
    ],
    probe:[
        {
        control:"Enabled",
        interval:10,
        responseTime:8,
        responseType:"AnyResponse",
        idleDection:"NoRecv",
        },
        {
        control:"Enabled",
        interval:20,
        responseTime:10,
        responseType:"NoResponse",
        idleDection:"NoSend",  
        }
    ],
    partialMessage: [
        {
        control: "Enabled",
        timeOut: 5,
        },
        {
        control: "Disabled",
        timeOut: 5,
        },
    ],   
    formatterLogError: [0,1],
    handshake:[
        {control:"Enabled",
         timeWait: 5,
        },
        {control:"Enabled",
        timeWait: 10,
        }
        ],
    maxMessgeLength: [2052, 1024],
    flowControl:[
        {
        retryAttempts:0,
        retryTimeWait: 10,
        timeOut: 60,
        attemptsNumber: 10,
        successAttemptspercentage:100,
        },
        {
        retryAttempts:0,
        retryTimeWait: 10,
        timeOut: 60,
        attemptsNumber: 10,
        successAttemptspercentage:100,
        },
        ],
    socketOption:[
        {
        sendSocketBufferSize: 0,
        receiveSocketBufferSize: 0,
        },
        {
        sendSocketBufferSize: 0,
        receiveSocketBufferSize: 0,
        },
    ],
}

var pcdefault = {
    pcSessionID: ["VIC_Connection", "VIC_Test"],
    pcSessionName: ["VIC_Connection", "VIC_Test"],
    perferredVIC: ["OCE", "VIPF"],
    pcFailureDelay:[1,1],
    autoShutDown: ["Disabled", "Enabled"],
    apESMsg: ["Enabled", "Disabled"],
    pcAddress:[
        {networkAddress:["VIPA", "VIPB", "VIPC", "VIPF", "OVNVCMS"],
         numberOfSessions:[1,1,1,1,1],
         sessionID: ['','','','','']
        },
         {networkAddress:["VIPA", "VIPB", "VIPC", "VIPF"],
         numberOfSessions:[1,1,1,1],
         sessionID: ['','','','']
        }
    ],
    probe:[
        {
        control:"Enabled",
        interval:10,
        responseTime:8,
        responseType:"AnyResponse",
        idleDection:"NoRecv",
        },
        {
        control:"Enabled",
        interval:20,
        responseTime:10,
        responseType:"NoResponse",
        idleDection:"NoSend",  
        }
    ],
    partialMessage: [
        {
        control: "Enabled",
        timeOut: 5,
        },
        {
        control: "Disabled",
        timeOut: 5,
        },
    ],   
    formatterLogError: [0,1],
    handshake:[
        {control:"Enabled",
         timeWait: 5,
        },
        {control:"Enabled",
        timeWait: 10,
        }
        ],
    maxMessgeLength: [2052, 1024],
    flowControl:[
        {
        retryAttempts:0,
        retryTimeWait: 10,
        timeOut: 60,
        attemptsNumber: 10,
        successAttemptspercentage:100,
        },
        {
        retryAttempts:0,
        retryTimeWait: 10,
        timeOut:60,
        attemptsNumber: 10,
        successAttemptspercentage:100,
        },
        ],
    socketOption:[
        {
        sendSocketBufferSize: 0,
        receiveSocketBufferSize: 0,
        },
        {
        sendSocketBufferSize: 0,
        receiveSocketBufferSize: 0,
        },
    ],
}

// ------------------------------------
// Dynamical loading the exists data
// --------------------------------------
$(document).on('click','.pcdefaultxmlButton', function(e){
    e.preventDefault();
    $('#pcdefaultxmlbtn').css('display', 'block');
    var i;
    for (i=0; i<pcdefault.pcSessionID.length; i++) {
        counter = i+1;
        var newTabMenu = $(document.createElement('div')).attr("id", 'pcDefaultTabMenu' + counter);
        newTabMenu.after().html ('<button class="tablinks" onclick="pcSessionPolicy(event, \''
                                + pcdefault.pcSessionID[i]
                                + '\')">' 
                                + pcdefault.pcSessionName[i] 
                                + '</button>');
        newTabMenu.appendTo("#pcDefaultTabMenu");

        var newTextBoxDiv = $(document.createElement('div'))
	         .attr("id", 'tab' + counter);
        
        newTextBoxDiv.after().html('<div id = "' + pcdefault.pcSessionID[i] + '" class="tabcontent" style="height: 83%">'
                            + '<label class = "pcdefaultxmlSubTitle"> General Settings</label>'
                            + '<hr/>'
                            + '<label>PC Session Policy ID:</label>'
                            + '&nbsp'
                            + '<input type = "Text" style = "width: 120px" class = "pcSessionPolicyID" id = "pcSessionPolicyID'+ counter +'" value = "'+ pcdefault.pcSessionID[i] +'"/>'
                            + '<label style="position: relative; left: 36px;">PC Session Policy Name:</label>'
                            + '&nbsp'
                            + '<input type = "text" style = "width: 120px; position: relative; left: 37px;" class = "pcSessionPolicyName" id = "pcSessionPolicyName'+ counter +'" value = "'+ pcdefault.pcSessionName[i] +'"/>'
                            + '<label style="position: relative; left: 90px">Perferred VIC:</label>'
                            + '&nbsp'
                            + '<select class = "perferredVICSelector" id = "perferredVICSelector'+ counter +'" style="position: relative; left: 89px;">'
                            + '</select>'
                            + '<P></P>'
                            + '<label>Failure Delay:</label>'
                            + '&nbsp'
                            + '<input type = "number" style = "width: 50px" class = "pcFailureDelay" id = "pcFailureDelay'+ counter +'" value = "'+ pcdefault.pcFailureDelay[i] +'"/> Seconds'
                            + '<label style="position: relative; left: 90px;"> Auto Shutdown:</label>'
                            + '&nbsp'
                            + '<select class = "autoShutdownSelector" id = "autoShutdownSelector'+ counter +'" style="position: relative; left: 88px;">'
                            + '</select>'
                            + '<label style="position: relative; left: 228px"> Access Point ES Msg:</label>'
                            + '&nbsp'
                            + '<select class = "apESMsgSelector" id = "apESMsgSelector'+ counter +'" style="position: relative; left: 228px;">'
                            + '</select>'
                            + '<P></P>'
                            + '<label>Maximum Message Length: </label>'
                            + '&nbsp'
                            + '<input type = "number" style = "width: 50px" class = "formatterMaxMessgeLength" id = "formatterMaxMessgeLength'+ counter +'" value = "'+ pcdefault.maxMessgeLength[i] +'"/> Bytes'
                            + '<P></P>'
                            + '<label class = "pcdefaultxmlSubTitle"> PC Address</label>'
                            + '<P></P>'
                            + '<div class = "pcAddressSettings">'
                            + '<label> Network Address: </label>'
                            + '&nbsp'
                            + '<select class = "networkAddressSelector" id = "networkAddressSelector' + counter + '">'
                            + '</select>'
                            
                            + '<label style="position: relative; left: 40px;"> Number of Sessions: </label>'
                            + '<input type="number" class="numberOfSessions" style = "width: 50px; position:relative; left: 40px"/>'
                            + '<label style="position: relative; left: 80px"> Session ID Used in Connection Report: </label>'
                            + '<select class = "sessionIDSelector" id="sessionIDSelector'+ counter +'" style="position: relative; left: 80px;">'
                            + '</select>'
                           
                            + '<input type="button" value="Add" data-tabname="' + pcdefault.pcSessionName[i] + '" class = "addPCAddress" style="position: relative; left: 130px"/>'
                            + '<hr/>'
                            + '<table id="pcdefaulttableID' + counter + '" border="1" align="center" width="60%">'
                            + '<thead>'
                            + '<tr>'
                            + '<th style = "width: 130px; text-align: center;">Network Address</th>'
                            + '<th style = "width: 130px; text-align: center;">No. of Sessions</th>'
                            + '<th style = "width: 130px; text-align: center;">Session ID</th>'
                            + '<th style = "width: 80px; text-align: center;">  </th>'
                            + '</tr>'
                            + '</thead>'
                            + '<tbody id="pcdefaulttbodyID' + counter + '" class = "pcdefaulttbodyID">'
                            + '</tbody>'
                            + '</table>'
                            + '</div>'
                            + '<label class = "pcdefaultxmlSubTitle"> Probe Settings</label>'
                            + '<hr/>'
                            + '<div class = "pcProbeSettings">'
                            + '<label>Control:</label>'
                            + '<select class = "controlProbeSelector" id = "controlProbeSelector'+ counter +'"/>'
                            + '</select>'
                            + '<label style="position: relative; left: 165px;">Interval:</label>'
                            + '<input type = "number" style = "width: 50px; position: relative; left: 168px" class = "probeInterval" id = "probeInterval'+ counter +'" value = "'+ pcdefault.probe[i].interval +'"/>'
                            + '<label style="position: relative; left: 172px">seconds</label>'
                            + '<label style="position: relative; left: 340px;">Type: Heart Beat</label>'
                            + '<p></p>'
                            + '<label>Response is expected in </label>'
                            + '<input type = "number" style = "width: 50px" class = "probeResponceTime" id = "probeResponceTime'+ counter +'" value = "'+ pcdefault.probe[i].responseTime +'"/> seconds'
                            + '<label style="position: relative; left: 39px">Response Type:</label>'
                            + '<select class = "probeResponseTypeSelector" id = "probeResponseTypeSelector'+ counter +'" style="position: relative; left: 43px">'
                            + '</select>'
                            + '<label style="position: relative; left: 156px">Idle Detection:</label>'
                            + '<select class = "probeIdleDectionSelector" id = "probeIdleDectionSelector'+ counter +'" style="position: relative; left: 160px">'
                            + '</select>'
                            + '</div>'
                           
                            + '<label class = "pcdefaultxmlSubTitle"> Partial Message</label>'
                            + '<hr/>'
                            + '<div class = "pcPartialMessageSettings">'
                            + '<label>Control:</label>'
                            + '<select class = "partialMessageControlSelector" id = "partialMessageControlSelector'+ counter +'">'
                            + '</select>'
                            + '<label style="position: relative; left: 166px">Timeout:</label>'
                            + '<input type = "number" style = "width:50px; position: relative; left: 170px" class = "partialMessageTimeout" id = "partialMessageTimeout'+ counter +'" value = "'+ pcdefault.partialMessage[i].timeOut +'"/>'
                            + '<label style="position: relative; left: 172px">seconds</label>'
                            + '</div>'
                            + '<label class = "pcdefaultxmlSubTitle"> Formatter </label>'
                            + '<hr/>'
                            + '<div class="pcFormatterSettings">'
                            + '<label>Name: VisaIsoHeaderFormatter</label> '
                            + '<label style="position: relative; left: 98px">Processor: visa</label>'
                            + '<label style="position: relative; left: 330px">Log Error:</label>'
                            + '<select class = "formatterLogErrorSelector" id = "formatterLogErrorSelector'+ counter +'" style="position: relative; left:334px">'
                            + '</select>'
                            + '</div>'
                           
                            + '<label class = "pcdefaultxmlSubTitle"> Handshake</label>'
                            + '<hr/>'
                            + '<div class = "pcHandshakeSettings">'
                            + '<label> Control: </label>'
                            + '<select class = "handshakeControlSelector" id = "handshakeControlSelector'+ counter +'">'
                            + '</select>'
                            + '<label style="position: relative; left: 207px;">Time Wait: </label>'
                            + '<input type = "number" style = "width:50px; position: relative; left: 207px;" class = "handshakeTimeWait" id = "handshakeTimeWait'+ counter +'" value = "'+ pcdefault.handshake[i].timeWait +'"/>'
                            + '<label style="position: relative; left: 211px">seconds</label>'
                            + '</div>'

                            + '<label class = "pcdefaultxmlSubTitle"> Flow Control</label>'
                            + '<hr/>'
                            + '<div class = "pcFlowControlSettings">'
                            + '<label> Number of Retry Attempts: </label>'
                            + '<input type = "number" style = "width:50px" class = "flowControlRetryAttempts" id = "flowControlRetryAttempts'+ counter +'" value = "'+ pcdefault.flowControl[i].retryAttempts +'"/>'
                            + '<label style="position: relative; left: 73px"> Retry Timewait: </label>'
                            + '<input type = "number" style = "width:50px; position: relative; left: 73px" class = "flowControlTimeWait" id = "flowControlTimeWait'+ counter +'" value = "'+ pcdefault.flowControl[i].retryTimeWait +'" />'
                            + '<label style="position: relative; left: 78px;">milliseconds </label>'
                            + '<label style="position: relative; left: 162px;"> Timeout Value: </label>'
                            + '<input type = "number" style = "width:50px; position: relative; left: 163px" class = "flowControlTimeOut" id = "flowControlTimeOut'+ counter +'" value = "'+ pcdefault.flowControl[i].timeOut +'" />'
                            + '<label style="position: relative; left: 163px;"> seconds </label>'
                            + '<p></p>'
                            + '<label> Number of Attempts: </label>'
                            + '<input type = "number" style = "width:50px" class = "flowControlRetryAttempts" id = "flowControlRetryAttempts'+ counter +'" value = "'+ pcdefault.flowControl[i].attemptsNumber +'"/> Seconds'
                            + '<label style="position: relative; left: 55px"> Successful Attempts: </label>'
                            + '<input type = "number" style = "width:50px; position: relative; left: 54px" class = "flowControlSuccessfulRate" id = "flowControlSuccessfulRate'+ counter +'" value = "'+ pcdefault.flowControl[i].successAttemptspercentage +'"/>'
                            + '<label style="position: relative; left: 56px"> % </label>'                            
                            + '</div>'
                           
                            + '<label class = "pcdefaultxmlSubTitle"> Socket Option </label>'
                            + '<hr/>'
                            + '<div class="pcSocketOptionSettings">'
                            + '<label> Send Socket Buffer Size:</label>'
                            + '&nbsp'
                            + '<input type = "number" style = "width:50px" class = "socketOptionSendSize" id = "socketOptionSendSize'+ counter +'" value = "'+ pcdefault.socketOption[i].sendSocketBufferSize +'"/>'
                            + '&nbsp'
                            + '<label> bytes </label>'
                            + '<label style="position: relative; left: 54px"> Receive Socket Buffer Size:</label>'
                            + '<input type = "number" style = "width:50px; position: relative; left: 63px;" class = "socketOptionReceiveSize" id = "socketOptionReceiveSize'+ counter +'" value = "'+ pcdefault.socketOption[i].receiveSocketBufferSize +'"/>'
                            + '<label style="position: relative; left: 64px"> bytes </label>'
                            + '</div>'
                            
                            + '<input type = "button" value = "Remove" class = "removePCSessionPolicybtn" onclick = "removePCSessionPolicy('+ counter +')"/>'
                            + '<input type = "button" value = "Save" class = "savePCSessionPolicybtn" data-tabname="' + pcdefault.pcSessionID[i] +'"/>'
                            + '</div>'
                            + '</div>'
                        );
        newTextBoxDiv.appendTo("#pcDefaultTabContentContainer");
        // Auto loaded the values of perferred VIC
        var h;
        for (h=0; h < networkingxml.networkGroupName.length; h++) {
             if (pcdefault.perferredVIC[i] == networkingxml.networkGroupName[h]){
                 $("#perferredVICSelector" + counter).append('<option selected = "selected" value = "'+ networkingxml.networkGroupName[h]+'">'+ networkingxml.networkGroupName[h]+'</option>');
             } else {
                $("#perferredVICSelector"+counter).append('<option value = "' + networkingxml.networkGroupName[h] +'">' + networkingxml.networkGroupName[h] +"</option>");
             }
        }
        // Auto loaded the values of Auto Shut Down Selector
        var h;
        for (h=0; h < controlChoices.length; h++) {
             if (pcdefault.autoShutDown[i] == controlChoices[h]){
                 $("#autoShutdownSelector" + counter).append('<option selected = "selected" value = "'+ controlChoices[h] +'">'+ controlChoices[h] +'</option>');
             } else {
                $("#autoShutdownSelector"+counter).append('<option value = "' + controlChoices[h] +'">' + controlChoices[h] +"</option>");
             }    
        }
        // Auto loaded the values of AP ES Msg Selector 
        var h;
         for (h=0; h<controlChoices.length; h++){
             if (pcdefault.apESMsg[i]==controlChoices[h]){
                 $("#apESMsgSelector" + counter).append('<option selected = "selected" value = "'+ controlChoices[h] +'">'+ controlChoices[h] +'</option>');
             } else {
                 $("#apESMsgSelector" + counter).append('<option value = "'+ controlChoices[h] +'">'+ controlChoices[h] +'</option>');
             }
         }

        // Auto loaded the values of Access Point ES Msg
        var h;
        for (h=0; h < controlChoices.length; h++) {
             if (pcdefault.apESMsg[i] == controlChoices[h]){
                 $("#apESMsgSelector" + counter).append('<option selected = "selected" value = "'+ controlChoices[h] +'">'+ controlChoices[h] +'</option>');
             } else {
                $("#apESMsgSelector"+counter).append('<option value = "' + controlChoices[h] +'">' + controlChoices[h] +"</option>");
             }
        }
       // Auto loaded the values of control Probe Selector
        var h;
        for (h=0; h < controlChoices.length; h++) {
             if (pcdefault.probe[i].control == controlChoices[h]){
                 $("#controlProbeSelector" + counter).append('<option selected = "selected" value = "'+ controlChoices[h] +'">'+ controlChoices[h] +'</option>');
             } else {
             $("#controlProbeSelector"+counter).append('<option value = "' + controlChoices[h] +'">' + controlChoices[h] +"</option>");
             }
        }
        // Auto loaded the values of Probe Response Type Selector
        var h;
        for (h=0; h < probeResponseTypeChoices.length; h++) {
             if (pcdefault.probe[i].responseType == probeResponseTypeChoices[h]){
                 $("#probeResponseTypeSelector" + counter).append('<option selected = "selected" value = "'+ probeResponseTypeChoices[h] +'">'+ probeResponseTypeChoices[h] +'</option>');
             } else {
                $("#probeResponseTypeSelector"+counter).append('<option value = "' + probeResponseTypeChoices[h] +'">' + probeResponseTypeChoices[h] +"</option>");
             }    
        }
        // Auto loaded the values of Probe Idle Dection
        var h;
        for (h=0; h < probeIdleDectionChoices.length; h++) {
             if (pcdefault.probe[i].idleDection == probeIdleDectionChoices[h]){
                 $("#probeIdleDectionSelector" + counter).append('<option selected = "selected" value = "'+ probeIdleDectionChoices[h] +'">'+ probeIdleDectionChoices[h] +'</option>');
             } else {
             $("#probeIdleDectionSelector"+counter).append('<option value = "' + probeIdleDectionChoices[h] +'">' + probeIdleDectionChoices[h] +"</option>");
             }    
        }
        // Auto loaded the values of Partial Message Control
        var h;
        for (h=0; h < controlChoices.length; h++) {
             if (pcdefault.partialMessage[i].control == controlChoices[h]){
                 $("#partialMessageControlSelector" + counter).append('<option selected = "selected" value = "'+ controlChoices[h] +'">'+ controlChoices[h] +'</option>');
             } else {
                $("#partialMessageControlSelector"+counter).append('<option value = "' + controlChoices[h] +'">' + controlChoices[h] +"</option>");
             }    
        }
        // Auto loaded the values of formatter Log Error
        var h;
        for (h=0; h < formatterLogErrorChoices.length; h++) {
             if (pcdefault.formatterLogError[i] == formatterLogErrorChoices[h]){
                 $("#formatterLogErrorSelector" + counter).append('<option selected = "selected" value = "'+ formatterLogErrorChoices[h] +'">'+ formatterLogErrorChoices[h] +'</option>');
             } else {
                $("#formatterLogErrorSelector"+counter).append('<option value = "' + formatterLogErrorChoices[h] +'">' + formatterLogErrorChoices[h] +"</option>");
             }    
        }
        // Auto loaded the values of hand shake control
        var h;
        for (h=0; h < controlChoices.length; h++) {
             if (pcdefault.handshake[i].control == controlChoices[h]){
                 $("#handshakeControlSelector" + counter).append('<option selected = "selected" value = "'+ formatterLogErrorChoices[h] +'">'+ formatterLogErrorChoices[h] +'</option>');
             } else {
             $("#handshakeControlSelector"+counter).append('<option value = "' + formatterLogErrorChoices[h] +'">' + formatterLogErrorChoices[h] +"</option>");
             }
        }
        // Auto loaded the values of session ID used in report
        var h;
        for (h=0; h < sessionIDChoices.length; h++) {
             $("#sessionIDSelector" + counter).append('<option value = "' + sessionIDChoices[h] +'">' + sessionIDChoices[h] +"</option>");
        }
        // Auto loaded the values of Network Address
        var h;
        var k;
        for (h=0; h < networkingxml.networkGroupName.length; h++) {
            for (k=0; k < networkingxml.networkAddress[h].networkAddressID.length; k++){
                $("#networkAddressSelector"+counter).append('<option value = "' + networkingxml.networkAddress[h].networkAddressID[k] +'">' + networkingxml.networkAddress[h].networkAddressID[k] +"</option>");
            }
        }

        // Auto loaded the PC Address
        var j;
        for (j=0; j<pcdefault.pcAddress[i].networkAddress.length; j++){
            var $delete = $("<input />").attr("type","button").attr("value","Remove").attr("data-tabid",pcdefault.pcSessionID[i]);

            var $tr = $("<tr></tr>");
            var $td1 = $("<td></td>").html(pcdefault.pcAddress[i].networkAddress[j]);
            var $td2 = $("<td></td>").html(pcdefault.pcAddress[i].numberOfSessions[j]);
            var $td3 = $("<td></td>").html(pcdefault.pcAddress[i].sessionID[j]);
            var $td4 =  $("<td></td>").append($delete);
            $tr.append($td1);
            $tr.append($td2);
            $tr.append($td3);
            $tr.append($td4)
         
            $("#pcdefaulttbodyID" + counter).append($tr);
            // delete Routing Addresses related from the array
            $delete.click(function(e){
                e.preventDefault();
                $tr = $(this).parent().parent();
                deleteAddress = $($tr.find("td").get(0)).text();
                deletePriority = $($tr.find("td").get(1));
                $tr.remove();
                var lo = $(this).data('tabname');
                var arlo = jQuery.inArray(lo,routingxml.ruleID);
                var deleteArrayLocation = jQuery.inArray(deleteAddress, pcdefault.pcAddress[arlo].networkAddress);
                console.log(deleteArrayLocation);
                pcdefault.pcAddress[arlo].networkAddress.splice(deleteArrayLocation, 1);
                pcdefault.pcAddress[arlo].numberOfSessions.splice(deleteArrayLocation, 1);
                pcdefault.pcAddress[arlo].sessionID.splice(deleteArrayLocation,1);
            });
        } 
    }
})

// ----------------------
//  Open the correspoding span
// ---------------------
function pcSessionPolicy (evt, name) {
    // Declare all variables
    var i, tabcontent, tablinks;
    console.log(name);

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    tabContentName = document.getElementsByClassName("tabcontent")
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    for (i = 0; i < tabContentName.length; i++){
        tabContentName[i].className = tabContentName[i].className.replace(" active","");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    var targetDOMElemet = typeof name == 'string' ? document.getElementById(name) : name
    targetDOMElemet.style.display = "block";
    evt.currentTarget.className += " active";
    targetDOMElemet.className += " active";
}

// ------------------------------
// Remove the whole PC Session Policy
// -------------------------------
$(document).on('click', ".removePCSessionPolicybtn", function(e){
    e.preventDefault();
    $(this).parents(".tabcontent").empty();
    counter--;
})

function removePCSessionPolicy(number){
    console.log("PC Session Tab Menu"+number);
    var deleteNumber = Number(number)-1;
    console.log(deleteNumber);
    // delete in the routingxml Array
    pcdefault.pcSessionID.splice(deleteNumber,1);
    pcdefault.pcSessionName.splice(deleteNumber,1);
    pcdefault.perferredVIC.splice(deleteNumber,1);
    pcdefault.pcFailureDelay.splice(deleteNumber,1);
    pcdefault.autoShutDown.splice(deleteNumber,1);
    pcdefault.apESMsg.splice(deleteNumber,1);
    pcdefault.pcAddress.splice(deleteNumber,1);
    pcdefault.probe.splice(deleteNumber,1);
    pcdefault.partialMessage.splice(deleteNumber,1);
    pcdefault.formatterLogError.splice(deleteNumber,1);
    pcdefault.handshake.splice(deleteNumber,1);
    pcdefault.maxMessgeLength.splice(deleteNumber,1);
    pcdefault.flowControl.splice(deleteNumber,1);
    pcdefault.socketOption.splice(deleteNumber,1);

    // delete the Tab Menu
    document.getElementById("pcDefaultTabMenu"+number).remove();
}


// -----------------------
// Add new PC Session Policy
// ----------------------
$(document).on('click', ".addPCSessionPolicyButton", function(e){
    e.preventDefault();
    $('#addPCSessionPolicybtn').css('display', 'block');
})

$(document).on('click', ".addNewPCSessionPolicybtn", function(e){
    e.preventDefault();
    counter++;
    var newPCSessionID = $("#addPCSessionPolicybtn"). find(".newPCSPID").val();
    var newPCSessionName = $("#addPCSessionPolicybtn").find(".newPCSPName").val();

    var newTabMenu = $(document.createElement('div')).attr("id", 'pcDefaultTabMenu' + counter);
        newTabMenu.after().html ('<button class="tablinks" onclick="pcSessionPolicy(event, \''
                                + newPCSessionID
                                + '\')">' 
                                + newPCSessionName 
                                + '</button>');
        newTabMenu.appendTo("#pcDefaultTabMenu");

        var newTextBoxDiv = $(document.createElement('div'))
	         .attr("id", 'tab' + counter);
        
        newTextBoxDiv.after().html('<div id = "' + newPCSessionID + '" class="tabcontent" style="height: 83%">'
                            + '<label class = "pcdefaultxmlSubTitle"> General Settings</label>'
                            + '<hr/>'
                            + '<label>PC Session Policy ID:</label>'
                            + '&nbsp'
                            + '<input type = "Text" style = "width: 120px" class = "pcSessionPolicyID" id = "pcSessionPolicyID'+ counter +'" value = "'+ newPCSessionID +'"/>'
                            + '<label style="position: relative; left: 36px;">PC Session Policy Name:</label>'
                            + '&nbsp'
                            + '<input type = "text" style = "width: 120px; position: relative; left: 37px;" class = "pcSessionPolicyName" id = "pcSessionPolicyName'+ counter +'" value = "'+ newPCSessionName +'"/>'
                            + '<label style="position: relative; left: 90px">Perferred VIC:</label>'
                            + '<select class = "perferredVICSelector" id = "perferredVICSelector'+ counter +'" style="position: relative; left: 91px;">'
                            + '</select>'
                            + '<P></P>'
                            + '<label>Failure Delay:</label>'
                            + '&nbsp'
                            + '<input type = "number" style = "width: 50px" class = "pcFailureDelay" id = "pcFailureDelay'+ counter +'"/> Seconds'
                            + '<label style="position: relative; left: 92px;"> Auto Shutdown:</label>'
                            + '<select class = "autoShutdownSelector" id = "autoShutdownSelector'+ counter +'" style="position: relative; left: 88px;">'
                            + '<option value = "Enabled"> Enabled </option>'
                            + '<option value = "Disabled"> Disabled </option>'
                            + '</select>'
                            + '<label style="position: relative; left: 231px"> Access Point ES Msg:</label>'
                            + '&nbsp'
                            + '<select class = "apESMsgSelector" id = "apESMsgSelector'+ counter +'" style="position: relative; left: 228px;">'
                            + '<option value = "Enabled"> Enabled </option>'
                            + '<option value = "Disabled"> Disabled </option>'
                            + '</select>'
                            + '<P></P>'
                            + '<label>Maximum Message Length: </label>'
                            + '&nbsp'
                            + '<input type = "number" style = "width: 50px" class = "formatterMaxMessgeLength" id = "formatterMaxMessgeLength'+ counter +'"/> Bytes'
                            + '<P></P>'
                            + '<label class = "pcdefaultxmlSubTitle"> PC Address</label>'
                            + '<P></P>'
                            + '<div class = "pcAddressSettings">'
                            + '<label> Network Address: </label>'
                            + '&nbsp'
                            + '<select class = "networkAddressSelector" id = "networkAddressSelector' + counter + '">'
                            + '</select>'
                            + '<label style="position: relative; left: 40px;"> Number of Sessions: </label>'
                            + '<input type="number" class="numberOfSessions" style = "width: 50px; position:relative; left: 40px"/>'
                            + '<label style="position: relative; left: 80px"> Session ID Used in Connection Report: </label>'
                            + '<select class = "sessionIDSelector" id="sessionIDSelector'+ counter +'" style="position: relative; left: 80px;">'
                            + '</select>'
                            + '<input type="button" value="Add" data-tabname="' + newPCSessionID + '" class = "addPCAddress" style="position: relative; left: 130px"/>'
                            + '<hr/>'
                            + '<table id="pcdefaulttableID' + counter + '" border="1" align="center" width="60%">'
                            + '<thead>'
                            + '<tr>'
                            + '<th style = "width: 130px; text-align: center;">Network Address</th>'
                            + '<th style = "width: 130px; text-align: center;">No. of Sessions</th>'
                            + '<th style = "width: 130px; text-align: center;">Session ID</th>'
                            + '<th style = "width: 80px; text-align: center;">  </th>'
                            + '</tr>'
                            + '</thead>'
                            + '<tbody id="pcdefaulttbodyID' + counter + '" class = "pcdefaulttbodyID">'
                            + '</tbody>'
                            + '</table>'
                            + '</div>'
                            + '<label class = "pcdefaultxmlSubTitle"> Probe Settings</label>'
                            + '<hr/>'
                            + '<div class = "pcProbeSettings">'
                            + '<label>Control:</label>'
                            + '<select class = "controlProbeSelector" id = "controlProbeSelector'+ counter +'">'
                            + '<option value = "Enabled"> Enabled </option>'
                            + '<option value = "Disabled"> Disabled </option>'
                            + '</select>'
                            + '<label style="position: relative; left: 165px;">Interval:</label>'
                            + '<input type = "number" style = "width: 50px; position: relative; left: 168px" class = "probeInterval" id = "probeInterval'+ counter +'"/>'
                            + '<label style="position: relative; left: 172px">seconds</label>'
                            + '<label style="position: relative; left: 340px;">Type: Heart Beat</label>'
                            + '<P></P>'
                            + '<label>Response is expected in </label>'
                            + '<input type = "number" style = "width: 50px" class = "probeResponceTime" id = "probeResponceTime'+ counter +'"/> seconds'
                            + '<label style="position: relative; left: 39px">Response Type:</label>'
                            + '<select class = "probeResponseTypeSelector" id = "probeResponseTypeSelector'+ counter +'" style="position: relative; left: 43px">'
                            + '</select>'
                            + '<label style="position: relative; left: 156px">Idle Detection:</label>'
                            + '<select class = "probeIdleDectionSelector" id = "probeIdleDectionSelector'+ counter +'" style="position: relative; left: 160px">'
                            + '</select>'
                            + '</div>'

                            + '<label class = "pcdefaultxmlSubTitle"> Partial Message</label>'
                            + '<hr/>'
                            + '<div class = "pcPartialMessageSettings">'
                            + '<label>Control:</label>'
                            + '<select class = "partialMessageControlSelector" id = "partialMessageControlSelector'+ counter +'">'
                            + '<option value = "Enabled"> Enabled </option>'
                            + '<option value = "Disabled"> Disabled </option>'
                            + '</select>'
                            + '<label style="position: relative; left: 166px">Timeout:</label>'
                            + '<input type = "number" style = "width:50px; position: relative; left: 170px" class = "partialMessageTimeout" id = "partialMessageTimeout'+ counter + '"/>'
                            + '<label style="position: relative; left: 172px">seconds</label>'
                            + '</div>'
                            + '<label class = "pcdefaultxmlSubTitle"> Formatter </label>'
                            + '<hr/>'
                            + '<div class="pcFormatterSettings">'
                            + '<label>Name: VisaIsoHeaderFormatter</label> '
                            + '<label style="position: relative; left: 98px">Processor: visa</label>'
                            + '<label style="position: relative; left: 330px">Log Error:</label>'
                            + '<select class = "formatterLogErrorSelector" id = "formatterLogErrorSelector'+ counter +'" style="position: relative; left:334px">'
                            + '</select>'
                            + '</div>'
                            + '<label class = "pcdefaultxmlSubTitle"> Handshake</label>'
                            + '<hr/>'
                            + '<div class = "pcHandshakeSettings">'
                            + '<label> Control: </label>'
                            + '<select class = "handshakeControlSelector" id = "handshakeControlSelector'+ counter +'">'
                            + '<option value = "Enabled"> Enabled </option>'
                            + '<option value = "Disabled"> Disabled </option>'
                            + '</select>'
                            + '<label style="position: relative; left: 207px;">Time Wait: </label>'
                            + '<input type = "number" style = "width:50px; position: relative; left: 207px;" class = "handshakeTimeWait" id = "handshakeTimeWait'+ counter +'"/>'
                            + '<label style="position: relative; left: 211px">seconds</label>'
                            + '</div>'
                            
                            + '<label class = "pcdefaultxmlSubTitle"> Flow Control</label>'
                            + '<hr/>'
                            + '<div class = "pcFlowControlSettings">'
                            + '<label> Number of Retry Attempts: </label>'
                            + '<input type = "number" style = "width:50px" class = "flowControlRetryAttempts" id = "flowControlRetryAttempts'+ counter +'"/>'
                            + '<label style="position: relative; left: 73px"> Retry Timewait: </label>'
                            + '<input type = "number" style = "width:50px; position: relative; left: 73px" class = "flowControlTimeWait" id = "flowControlTimeWait'+ counter +'" />'
                            + '<label style="position: relative; left: 78px;">milliseconds </label>'
                            + '<label style="position: relative; left: 162px;"> Timeout Value: </label>'
                            + '<input type = "number" style = "width:50px; position: relative; left: 163px" class = "flowControlTimeOut" id = "flowControlTimeOut'+ counter +'" />'
                            + '<label style="position: relative; left: 163px;"> seconds </label>'
                            + '<p></p>'
                            + '<label> Number of Attempts: </label>'
                            + '<input type = "number" style = "width:50px" class = "flowControlRetryAttempts" id = "flowControlRetryAttempts'+ counter +'"/> Seconds'
                            + '<label style="position: relative; left: 55px"> Successful Attempts: </label>'
                            + '<input type = "number" style = "width:50px; position: relative; left: 54px" class = "flowControlSuccessfulRate" id = "flowControlSuccessfulRate'+ counter +'"/>'
                            + '<label style="position: relative; left: 56px"> % </label>'                            
                            + '</div>'
                            + '<label class = "pcdefaultxmlSubTitle"> Socket Option </label>'
                            + '<hr/>'
                            + '<div class="pcSocketOptionSettings">'
                            + '<label> Send Socket Buffer Size:</label>'
                            + '&nbsp'
                            + '<input type = "number" style = "width:50px" class = "socketOptionSendSize" id = "socketOptionSendSize'+ counter +'"/> Bytes'
                            + '&nbsp'
                            + '<label> bytes </label>'
                            + '<label style="position: relative; left: 54px"> Receive Socket Buffer Size:</label>'
                            + '<input type = "number" style = "width:50px; position: relative; left: 63px;" class = "socketOptionReceiveSize" id = "socketOptionReceiveSize'+ counter +'"/>'
                            + '<label style="position: relative; left: 64px"> bytes </label>'
                            + '</div>'
                            
                            + '<input type = "button" value = "Remove" class = "removePCSessionPolicybtn" onclick = "removePCSessionPolicy('+ counter +')"/>'
                            + '<input type = "button" value = "Save" class = "savePCSessionPolicybtn"/>'
                            + '</div>'
                            + '</div>'
                        );
        newTextBoxDiv.appendTo("#pcDefaultTabContentContainer");
    // Auto load perferred VIC
    var h;
    for (h=0; h < networkingxml.networkGroupName.length; h++) {
        $("#perferredVICSelector" + counter).append('<option value = "'+ networkingxml.networkGroupName[h]+'">'+ networkingxml.networkGroupName[h]+'</option>');
    }

    // Auto load network Address in PC Address
    var h;
    var k;
    for (h=0; h < networkingxml.networkGroupName.length; h++) {
        for (k=0; k < networkingxml.networkAddress[h].networkAddressID.length; k++){
            $("#networkAddressSelector"+counter).append('<option value = "' + networkingxml.networkAddress[h].networkAddressID[k] +'">' + networkingxml.networkAddress[h].networkAddressID[k] +"</option>");
        }
    }
    // Auto loaded the values of session ID used in report
    var h;
    for (h=0; h < sessionIDChoices.length; h++) {
        $("#sessionIDSelector" + counter).append('<option value = "' + sessionIDChoices[h] +'">' + sessionIDChoices[h] +"</option>");
    }
    // Auto loaded the values of Probe Idle Dection
    var h;
    for (h=0; h < probeIdleDectionChoices.length; h++) {
        $("#probeIdleDectionSelector"+counter).append('<option value = "' + probeIdleDectionChoices[h] +'">' + probeIdleDectionChoices[h] +"</option>");  
    }
     // Auto loaded the values of formatter Log Error
    var h;
     for (h=0; h < formatterLogErrorChoices.length; h++) {
        $("#formatterLogErrorSelector"+counter).append('<option value = "' + formatterLogErrorChoices[h] +'">' + formatterLogErrorChoices[h] +"</option>");
    }
    // Auto loaded the values of Probe Response Type Selector
    var h;
    for (h=0; h < probeResponseTypeChoices.length; h++) {
        $("#probeResponseTypeSelector"+counter).append('<option value = "' + probeResponseTypeChoices[h] +'">' + probeResponseTypeChoices[h] +"</option>");
    }

          
    // Push new Add data in routing.xml Array
    pcdefault.pcSessionID.push(newPCSessionID);
    pcdefault.pcSessionName.push(newPCSessionName);
    pcdefault.perferredVIC.push("");
    pcdefault.pcFailureDelay.push(1);
    pcdefault.autoShutDown.push("");
    pcdefault.apESMsg.push("");
    pcdefault.pcAddress.push({
                                networkAddress:[],
                                numberOfSessions:[],
                                sessionID:[],                    
                            });
    pcdefault.probe.push({
                            control:"",
                            interval:10,
                            responseTime:8,
                            responseType:"",
                            idleDection:""
    });
    pcdefault.partialMessage.push({
        conntrol:"",
        timeOut:5
    });
    pcdefault.formatterLogError.push(0);
    pcdefault.handshake.push({
        control:"",
        timeWait:5,
    });
    pcdefault.maxMessgeLength.push(2052);
    pcdefault.flowControl.push({
        retryAttempts:0,
        retryTimeWait: 10,
        timeOut: 60,
        attemptsNumber: 10,
        successAttemptspercentage:100,
    })
    pcdefault.socketOption.push({
        sendSocketBufferSize: 0,
        receiveSocketBufferSize: 0,
    })
    // routingxml.routingAddress.push({networkAddress:[],
    //                                 priority:[],
    //                                 mtiRoute:[]});
    
    document.getElementById('addPCSessionPolicybtn').style.display = 'none';
})

// -----------------------------------
// Newly Add new PC Address
// ------------------------------------
$(document).on('click', ".addPCAddress", function(e){
    e.preventDefault();
    //Alloacate IP Address and Port Number, fetch out the input
    var newNetworkAddress = $(this).parent(".pcAddressSettings").find(".networkAddressSelector").val();
    var newSessionNumber = $(this).parent(".pcAddressSettings").find(".numberOfSessions").val();
    var newSessionID = $(this).parent(".pcAddressSettings").find(".sessionIDSelector").val();

    // Add in routingxml Array
    var tabName = $(this).data('tabname');
    console.log(tabName);
    var addLol = jQuery.inArray(tabName,pcdefault.pcSessionID);
    console.log(addLol);
    pcdefault.pcAddress[addLol].networkAddress.push(newNetworkAddress);
    pcdefault.pcAddress[addLol].numberOfSessions.push(newSessionNumber);
    pcdefault.pcAddress[addLol].sessionID.push(newSessionID);

    var $delete = $("<input />").attr("type","button").attr("value","Remove").attr("data-tabname",tabName);
    
   //create tr, td
    var $tr = $("<tr></tr>");
    var $td1 = $("<td></td>").html(newNetworkAddress);
    var $td2 = $("<td></td>").html(newSessionNumber);
    var $td3 = $("<td></td>").html(newSessionID);
    var $td4 =  $("<td></td>").append($delete);
    
    $tr.append($td1);
    $tr.append($td2);
    $tr.append($td3);
    $tr.append($td4);
         
    $(this).parent(".pcAddressSettings").find(".pcdefaulttbodyID").append($tr);
    $delete.click(function(e){
        e.preventDefault();
        $tr = $(this).parent().parent();
        deleteAddress = $($tr.find("td").get(0)).text();
        $tr.remove();
        var lo = $(this).data('tabname');
        var arlo = jQuery.inArray(lo,pcdefault.pcSessionName);
        var deleteArrayLocation = jQuery.inArray(deleteAddress, pcdefault.pcAddress[arlo].networkAddress);
        console.log(deleteArrayLocation);
        pcdefault.pcAddress[arlo].networkAddress.splice(deleteArrayLocation, 1);
        pcdefault.pcAddress[arlo].numberOfSessions.splice(deleteArrayLocation, 1);
        pcdefault.pcAddress[arlo].sessionID.splice(deleteArrayLocation, 1);
    });
});

// Save the current value 
$(document).on('click', ".savePCSessionPolicybtn", function(e){
    e.preventDefault();
    var currentTabName = $(this).data('tabname');
    console.log(currentTabName);
    var currentLol = jQuery.inArray(currentTabName,pcdefault.pcSessionID);
    console.log(currentLol);
    pcdefault.perferredVIC[currentLol] = $(this).parents(".tabcontent").find(".perferredVICSelector").val();
    pcdefault.pcFailureDelay[currentLol] = $(this).parents(".tabcontent").find(".pcFailureDelay").val();
    pcdefault.autoShutDown[currentLol] = $(this).parents(".tabcontent").find(".autoShutdownSelector").val();

})