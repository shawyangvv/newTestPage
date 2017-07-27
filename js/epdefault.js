var counter = 0;

var controlChoices = ["Disabled", "Enabled"];

var yesOrNoChoices = ["YES", "NO"];

var routingPolicyChoices = ["Fixed", "FixedBestEffort", "RoundRobin"];

var probeTypeChoices = ["HeartBeat", "KeepAlive"];

var probeResponseTypeChoices = ["NoResponse", "SendProbe", "AnyResponse"]

var probeIdleDectionChoices = ["NoRecv", "NoSend", "NoSendRecv"];

var formatterNameChoices = ["VisaIsoHeaderFormatter", "NvfoFormatter"]

var formatterProcessorChoices = ["visa", "nvfo"]

var formatterLogErrorChoices = [0,1]

var originepdefault={
    epSessionID: ["EP_Policy", "EP_Test"],
    epSessionName: ["EP_Policy", "EP_Test"],
    routingPolicy: ["FixedBestEffort", "RoundRobin"],
    routingRule: ["PROD_ROUTING", "PROD_TEST"],
    forceDown: ["Disabled", "Enabled"],
    secureUsage: ["NO", "YES"],
    probe:[{
        control: "Enabled",
        interval: 10,
        type: "KeepAlive",
        responseTime: 8,
        responseType: "NoResponse",
        idleDection: "NoSendRecv"
        },
        {
        control: "Enabled",
        interval: 10,
        type: "HeartBeat",
        responseTime: 8,
        responseType: "SendProbe",
        idleDection: "NoSend"
        }],
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
    formatter:[{
        name: "VisaIsoHeaderFormatter",
        Processor:"visa",
        logError:0,
    },
    {
        name: "NvfoFormatter",
        Processor:"nvfo",
        logError:1,
    }
    ], 
    quiesce: ["Enabled", "Disabled"],  
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

var epdefault={
    epSessionID: ["EP_Policy", "EP_Test"],
    epSessionName: ["EP_Policy", "EP_Test"],
    routingPolicy: ["FixedBestEffort", "RoundRobin"],
    routingRule: ["PROD_ROUTING", "PROD_TEST"],
    forceDown: ["Disabled", "Enabled"],
    secureUsage: ["NO", "YES"],
    probe:[{
        control: "Enabled",
        interval: 10,
        type: "KeepAlive",
        responseTime: 8,
        responseType: "NoResponse",
        idleDection: "NoSendRecv"
        },
        {
        control: "Enabled",
        interval: 10,
        type: "HeartBeat",
        responseTime: 8,
        responseType: "SendProbe",
        idleDection: "NoSend"
        }],
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
    formatter:[{
        name: "VisaIsoHeaderFormatter",
        Processor:"visa",
        logError:0,
    },
    {
        name: "NvfoFormatter",
        Processor:"nvfo",
        logError:1,
    }
    ], 
    quiesce: ["Enabled", "Disabled"],  
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

// ------------------------------------
// Dynamical loading the exists data
// --------------------------------------
$(document).on('click','.epdefaultxmlButton', function(e){
    e.preventDefault();
    $('#epdefaultxmlbtn').css('display', 'block');
    var i;
    for (i=0; i<epdefault.epSessionID.length; i++) {
        counter = i+1;
        var newTabMenu = $(document.createElement('div')).attr("id", 'epDefaultTabMenu' + counter);
        // newTabMenu.after().html ('<button class="tablinks" onclick="epSessionPolicy(event, \''
        //                         + epdefault.epSessionID[i]
        //                         + '\')">' 
        //                         + epdefault.epSessionName[i] 
        //                         + '</button>');
        newTabMenu.after().html ('<input type="button" class="tablinks" data-tabmenuname="'
                                + epdefault.epSessionID[i]
                                + '">' 
                                + epdefault.epSessionName[i] 
                                + '</input>');
        newTabMenu.appendTo("#epDefaultTabMenu");

        var newTextBoxDiv = $(document.createElement('div'))
	         .attr("id", 'epDefaulttab' + counter);
        
        newTextBoxDiv.after().html('<div id = "' + epdefault.epSessionID[i] + '" class="tabcontent" style="height: 85%">'
                            + '<label class = "epdefaultxmlSubTitle"> General Settings</label>'
                            + '<hr/>'
                            + '<label>EP Session Policy ID:</label>'
                            + '&nbsp'
                            + '<input type = "Text" style = "width: 120px" class = "epSessionPolicyID" id = "epSessionPolicyID'+ counter +'" value = "'+ epdefault.epSessionID[i] +'"/>'
                            + '<label style="position: relative; left: 121px;">EP Session Policy Name:</label>'
                            + '&nbsp'
                            + '<input type = "text" style = "width: 120px; position: relative; left: 123px" class = "epSessionPolicyName" id = "epSessionPolicyName'+ counter +'" value = "'+ epdefault.epSessionName[i] +'"/>'
                            + '<label style="position: relative; left: 248px;">Routing Policy:</label>'
                            + '&nbsp'
                            + '<select class = "routingPolicySelector" id = "routingPolicySelector'+ counter +'" style="position: relative; left: 249px">'
                            + '</select>'
                            + '<P></P>'
                            + '<label>Routing Rule:</label>'
                            + '&nbsp'
                            + '<select class = "routingruleSelector" id = "routingruleSelector'+ counter +'">'
                            + '</select>'
                            + '<label style="position: relative; left: 142px;"> Force Down:</label>'
                            + '&nbsp'
                            + '<select class = "forceDownSelector" id = "forceDownSelector'+ counter +'" style="position: relative; left: 143px;">'
                            + '</select>'
                            + '<label style="position: relative; left: 379px">Maximum Message Length: </label>'
                            + '<input type = "number" style = "width: 50px; position: relative; left: 381px" class = "epPolicyMaxMessgeLength" id = "epPolicyMaxMessgeLength'+ counter +'" value = "'+ epdefault.maxMessgeLength[i] +'"/>'
                            + '<label style="position: relative; left: 383px"> bytes </label>'
                            + '<P></P>'
                            + '<label> Quiesce: </label>'
                            + '<select class = "quiesceSelector" id = "quiesceSelector'+ counter +'">'
                            + '</select>'
                            + '<label style="position: relative; left: 227px"> Used for Secure Member Connection:</label>'
                            + '&nbsp'
                            + '<select class = "secureUsageSelector" id = "secureUsageSelector'+ counter +'" style="position: relative; left: 229px">'
                            + '</select>'
                            + '<P></P>'
                            
                            + '<label class = "epdefaultxmlSubTitle"> Probe Settings</label>'
                            + '<hr/>'
                            + '<div class = "epProbeSettings">'
                            + '<label>Control:</label>'
                            + '<select class = "epControlProbeSelector" id = "epControlProbeSelector'+ counter +'"/>'
                            + '</select>'
                            + '<label style="position: relative;  left: 239px">Interval:</label>'
                            + '<input type = "number" style = "width: 50px; position: relative; left: 242px" class = "probeInterval" id = "probeInterval'+ counter +'" value = "'+ pcdefault.probe[i].interval +'"/>'
                            + '<label style="position: relative; left: 244px"> seconds </label>'
                            
                            + '<label style="position: relative; left: 485px">Type:</label>'
                            + '<select style="position: relative; left: 491px" class = "epProbeTypeSelector" id = "epProbeTypeSelector'+ counter +'"/>'
                            + '</select>'
                            + '<p></p>'
                            + '<label>Response is expected in </label>'
                            + '<input type = "number" style = "width: 50px" class = "epProbeResponceTime" id = "epProbeResponceTime'+ counter +'" value = "'+ epdefault.probe[i].responseTime +'"/> seconds'
                            
                            + '<label style="position: relative; left: 113px">Response Type:</label>'
                            + '<select style="position: relative; left: 116px" class = "epProbeResponseTypeSelector" id = "epProbeResponseTypeSelector'+ counter +'">'
                            + '</select>'
                            + '<label style="position: relative; left: 309px">Idle Detection:</label>'
                            + '<select style="position: relative; left: 314px" class = "epProbeIdleDectionSelector" id = "epProbeIdleDectionSelector'+ counter +'">'
                            + '</select>'
                            + '</div>'

                            + '<label class = "epdefaultxmlSubTitle"> Partial Message</label>'
                            + '<hr/>'
                            + '<div class="epPartivalMessageSettings">'
                            + '<label>Control:</label>'
                            + '<select class = "epPartialMessageControlSelector" id = "epPartialMessageControlSelector'+ counter +'">'
                            + '</select>'
                    
                            + '<label style="position: relative; left: 238px">Timeout:</label>'
                            + '<input type = "number" style = "width:50px; position: relative; left: 243px" class = "epPartialMessageTimeout" id = "epPartialMessageTimeout'+ counter +'" value = "'+ pcdefault.partialMessage[i].timeOut +'"/>'
                            + '<label style="position: relative; left:249px ">seconds </label>'
                            + '</div>'
                            + '<label class = "epdefaultxmlSubTitle"> Formatter </label>'
                            + '<hr/>'
                            + '<div class="epFormatter">'
                            + '<label>Name:</label> '
                            + '<select class = "epFormatterNameSelector" id = "epFormatterNameSelector'+ counter +'">'
                            + '</select>'
                            
                            + '<label style="position: relative; left: 151px">Processor:</label>'
                            + '<select style="position: relative; left: 156px" class = "epFormatterProcessorSelector" id = "epFormatterProcessorSelector'+ counter +'">'
                            + '</select>'
                
                            + '<label style="position: relative; left: 442px">Log Error:</label>'
                            + '<select style="position: relative; left: 450px" class = "epFormatterLogErrorSelector" id = "epFormatterLogErrorSelector'+ counter +'">'
                            + '</select>'
                            + '</div>'       
                            + '<label class = "epdefaultxmlSubTitle"> Flow Control</label>'
                            + '<hr/>'
                            + '<div class="epFlowControl">'
                            + '<label> Number of Retry Attempts: </label>'
                            + '<input type = "number" style = "width:50px" class = "epFlowControlRetryAttempts" id = "epFlowControlRetryAttempts'+ counter +'" value = "'+ epdefault.flowControl[i].retryAttempts +'"/>'
                            + '<label style="position: relative; left: 143px"> Retry Timewait: </label>'
                            + '<input type = "number" style = "width:50px; position: relative; left: 144px" class = "epFlowControlTimeWait" id = "epFlowControlTimeWait'+ counter +'" value = "'+ epdefault.flowControl[i].retryTimeWait +'" />'
                            + '<label style="position: relative; left: 146px"> Milliseconds</label>'
                            + '<label style="position: relative; left: 318px"> Timeout Value: </label>'
                            + '<input type = "number" style = "width:50px; position: relative; left: 321px" class = "epFlowControlTimeOut" id = "epFlowControlTimeOut'+ counter +'" value = "'+ epdefault.flowControl[i].timeOut +'" />'
                            + '<label style="position: relative; left: 322px"> seconds </label>'
                            + '<p></p>'
                            + '<label> Number of Attempts: </label>'
                            + '<input type = "number" style = "width:50px" class = "epFlowControlRetryAttempts" id = "epFlowControlRetryAttempts'+ counter +'" value = "'+ epdefault.flowControl[i].attemptsNumber +'"/> Seconds'
                            + '<label style="position: relative; left: 124px"> Successful Attempts: </label>'
                            + '<input type = "number" style = "width:50px; position: relative; left: 125px" class = "epFlowControlSuccessfulRate" id = "epFlowControlSuccessfulRate'+ counter +'" value = "'+ epdefault.flowControl[i].successAttemptspercentage +'"/>'
                            + '<label style="position: relative; left: 127px"> % </label>'                            
                            + '</div>'
                            + '<label class = "epdefaultxmlSubTitle"> Socket Option </label>'
                            + '<hr/>'
                            + '<div class = "epSocketOption">'
                            + '<label> Send Socket Buffer Size:</label>'
                            + '<input type = "number" style = "width:50px" class = "epSocketOptionSendSize" id = "epSocketOptionSendSize'+ counter +'" value = "'+ epdefault.socketOption[i].sendSocketBufferSize +'"/> Bytes'
                            + '<label style="position: relative; left: 131px"> Receive Socket Buffer Size:</label>'
                            + '<input type = "number" style = "width:50px; position: relative; left: 134px" class = "epSocketOptionReceiveSize" id = "epSocketOptionReceiveSize'+ counter +'" value = "'+ epdefault.socketOption[i].receiveSocketBufferSize +'"/>'
                            + '<label style="position: relative; left: 136px"> bytes </label>'
                            + '</div>'
                            + '<input type = "button" value = "Remove" class = "removeEPSessionPolicybtn" onclick = "removeEPSessionPolicy('+ counter +')"/>'
                            + '<input type = "button" value = "Save" class = "saveEPSessionPolicybtn" data-tabname="' + epdefault.epSessionID[i] +'"/>'
                            + '</div>'
                            + '</div>'
                        );
        newTextBoxDiv.appendTo("#epDefaultTabContentContainer");
        //Auto load the value of routing Policy
        var h;
        for (h=0; h<routingPolicyChoices.length; h++){
            if (epdefault.routingPolicy[i] == routingPolicyChoices[h]){
                $("#routingPolicySelector" + counter).append('<option selected = "selected" value = "'+ routingPolicyChoices[h] +'">' + routingPolicyChoices[h] + '</option>');
            } else {
                $("#routingPolicySelector" + counter).append('<option value = "'+ routingPolicyChoices[h] +'">' + routingPolicyChoices[h] + '</option>');
            }
        } 
        //Auto load the value of routing rule
        var h;
        for (h=0; h<routingxml.ruleID.length; h++){
            if (epdefault.routingRule[i] == routingxml.ruleID[h]){
                $("#routingruleSelector" + counter).append('<option selected = "selected" value = "'+ routingxml.ruleID[h] +'">' + routingxml.ruleID[h] + '</option>');
            } else {
                $("#routingruleSelector" + counter).append('<option value = "'+ routingxml.ruleID[h] +'">' + routingxml.ruleID[h] + '</option>');
            }
        } 
        // Auto loaded the values of force Down Selector
        var h;
        for (h=0; h < controlChoices.length; h++) {
             if (epdefault.forceDown[i] == controlChoices[h]){
                 $("#forceDownSelector" + counter).append('<option selected = "selected" value = "'+ controlChoices[h] +'">'+ controlChoices[h] +'</option>');
             } else {
                $("#forceDownSelector"+counter).append('<option value = "' + controlChoices[h] +'">' + controlChoices[h] +"</option>");
             }    
        }
        // Auto loaded the values of Secure Usage Selector
        var h;
        for (h=0; h < yesOrNoChoices.length; h++) {
             if (epdefault.secureUsage[i] == yesOrNoChoices[h]){
                 $("#secureUsageSelector" + counter).append('<option selected = "selected" value = "'+ yesOrNoChoices[h] +'">'+ yesOrNoChoices[h] +'</option>');
             } else {
                $("#secureUsageSelector"+counter).append('<option value = "' + yesOrNoChoices[h] +'">' + yesOrNoChoices[h] +"</option>");
             }    
        }
         // Auto loaded the values of Quiesce Selector
        var h;
        for (h=0; h < controlChoices.length; h++) {
             if (epdefault.quiesce[i] == controlChoices[h]){
                 $("#quiesceSelector" + counter).append('<option selected = "selected" value = "'+ controlChoices[h] +'">'+ controlChoices[h] +'</option>');
             } else {
                $("#quiesceSelector"+counter).append('<option value = "' + controlChoices[h] +'">' + controlChoices[h] +"</option>");
             }    
        }
        // Auto loaded the values of ep Control Probe Selector
        var h;
        for (h=0; h < controlChoices.length; h++) {
             if (epdefault.probe[i].control == controlChoices[h]){
                 $("#epControlProbeSelector" + counter).append('<option selected = "selected" value = "'+ controlChoices[h] +'">'+ controlChoices[h] +'</option>');
             } else {
                $("#epControlProbeSelector"+counter).append('<option value = "' + controlChoices[h] +'">' + controlChoices[h] +"</option>");
             }
        }
       // Auto loaded the values of Probe Type Selector
        var h;
        for (h=0; h < probeTypeChoices.length; h++) {
             if (epdefault.probe[i].type == probeTypeChoices[h]){
                 $("#epProbeTypeSelector" + counter).append('<option selected = "selected" value = "'+ probeTypeChoices[h] +'">'+ probeTypeChoices[h] +'</option>');
             } else {
             $("#epProbeTypeSelector"+counter).append('<option value = "' + probeTypeChoices[h] +'">' + probeTypeChoices[h] +"</option>");
             }
        }
        // Auto loaded the values of Probe Response Type Selector
        var h;
        for (h=0; h < probeResponseTypeChoices.length; h++) {
             if (epdefault.probe[i].responseType == probeResponseTypeChoices[h]){
                 $("#epProbeResponseTypeSelector" + counter).append('<option selected = "selected" value = "'+ probeResponseTypeChoices[h] +'">'+ probeResponseTypeChoices[h] +'</option>');
             } else {
                $("#epProbeResponseTypeSelector"+counter).append('<option value = "' + probeResponseTypeChoices[h] +'">' + probeResponseTypeChoices[h] +"</option>");
             }    
        }
        // Auto loaded the values of Probe Idle Dection
        var h;
        for (h=0; h < probeIdleDectionChoices.length; h++) {
             if (epdefault.probe[i].idleDection == probeIdleDectionChoices[h]){
                 $("#epProbeIdleDectionSelector" + counter).append('<option selected = "selected" value = "'+ probeIdleDectionChoices[h] +'">'+ probeIdleDectionChoices[h] +'</option>');
             } else {
             $("#epProbeIdleDectionSelector"+counter).append('<option value = "' + probeIdleDectionChoices[h] +'">' + probeIdleDectionChoices[h] +"</option>");
             }    
        }
        // Auto loaded the values of Partial Message Control
        var h;
        for (h=0; h < controlChoices.length; h++) {
             if (epdefault.partialMessage[i].control == controlChoices[h]){
                 $("#epPartialMessageControlSelector" + counter).append('<option selected = "selected" value = "'+ controlChoices[h] +'">'+ controlChoices[h] +'</option>');
             } else {
                $("#epPartialMessageControlSelector"+counter).append('<option value = "' + controlChoices[h] +'">' + controlChoices[h] +"</option>");
             }    
        }
        // Auto loaded the values of Formatter Name Selector
        var h;
        for (h=0; h < formatterNameChoices.length; h++) {
             if (epdefault.formatter[i].name == formatterNameChoices[h]){
                 $("#epFormatterNameSelector" + counter).append('<option selected = "selected" value = "'+ formatterNameChoices[h] +'">'+ formatterNameChoices[h] +'</option>');
             } else {
                $("#epFormatterNameSelector"+counter).append('<option value = "' + formatterNameChoices[h] +'">' + formatterNameChoices[h] +"</option>");
             }    
        }
        // Auto loaded the values of Formatter Processor Selector
        var h;
        for (h=0; h < formatterNameChoices.length; h++) {
             if (epdefault.formatter[i].Processor == formatterProcessorChoices[h]){
                 $("#epFormatterProcessorSelector" + counter).append('<option selected = "selected" value = "'+ formatterProcessorChoices[h] +'">'+ formatterProcessorChoices[h] +'</option>');
             } else {
                $("#epFormatterProcessorSelector"+counter).append('<option value = "' + formatterProcessorChoices[h] +'">' + formatterProcessorChoices[h] +"</option>");
             }    
        }
        // Auto loaded the values of formatter Log Error
        var h;
        for (h=0; h < formatterLogErrorChoices.length; h++) {
             if (epdefault.formatter[i].logError == formatterLogErrorChoices[h]){
                 $("#epFormatterLogErrorSelector" + counter).append('<option selected = "selected" value = "'+ formatterLogErrorChoices[h] +'">'+ formatterLogErrorChoices[h] +'</option>');
             } else {
                $("#epFormatterLogErrorSelector"+counter).append('<option value = "' + formatterLogErrorChoices[h] +'">' + formatterLogErrorChoices[h] +"</option>");
             }    
        }
        
    }
})

// ----------------------
//  Open the correspoding span
// ---------------------
$(document).on('click', "#epDefaultTabMenu", function(e){
    
    e.preventDefault();
    var currentid=$(this).data('tabmenuname');
    // Declare all variables
    var i, tabcontent, tablinks;
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
    var targetDOMElemet = typeof currentid == 'string' ? document.getElementById(currentid) : currentid
    targetDOMElemet.style.display = "block";
    evt.currentTarget.className += " active";
    targetDOMElemet.className += " active";
     
})

// function epSessionPolicy (evt, name) {
//     // Declare all variables
//     var i, tabcontent, tablinks;
//     console.log(name);

//     // Get all elements with class="tabcontent" and hide them
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }

//     // Get all elements with class="tablinks" and remove the class "active"
//     tablinks = document.getElementsByClassName("tablinks");
//     tabContentName = document.getElementsByClassName("tabcontent")
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }

//     for (i = 0; i < tabContentName.length; i++){
//         tabContentName[i].className = tabContentName[i].className.replace(" active","");
//     }

//     // Show the current tab, and add an "active" class to the link that opened the tab
//     var targetDOMElemet = typeof name == 'string' ? document.getElementById(name) : name
//     targetDOMElemet.style.display = "block";
//     evt.currentTarget.className += " active";
//     targetDOMElemet.className += " active";
// }

// ------------------------------
// Remove the whole EP Session Policy
// -------------------------------
$(document).on('click', ".removeEPSessionPolicybtn", function(e){
    e.preventDefault();
    $(this).parents(".tabcontent").empty();
    counter--;
})

function removeEPSessionPolicy(number){
    console.log("EP Policy Tab Menu"+number);
    var deleteNumber = Number(number)-1;
    console.log(deleteNumber);
    // delete in the routingxml Array
    epdefault.epSessionID.splice(deleteNumber,1);
    epdefault.epSessionName.splice(deleteNumber,1);
    epdefault.routingPolicy.splice(deleteNumber,1);
    epdefault.routingRule.splice(deleteNumber,1);
    epdefault.forceDown.splice(deleteNumber,1);
    epdefault.secureUsage.splice(deleteNumber,1);
    epdefault.probe.splice(deleteNumber,1);
    epdefault.partialMessage.splice(deleteNumber,1);
    epdefault.formatter.splice(deleteNumber,1);
    epdefault.quiesce.splice(deleteNumber,1);
    epdefault.maxMessgeLength.splice(deleteNumber,1);
    epdefault.flowControl.splice(deleteNumber,1);
    epdefault.socketOption.splice(deleteNumber,1);

    // delete the Tab Menu
    document.getElementById("epDefaultTabMenu"+number).remove();
}


// -----------------------
// Add new EP Session Policy
// ----------------------
$(document).on('click', ".addEPSessionPolicyButton", function(e){
    e.preventDefault();
    $('#addEPSessionPolicybtn').css('display', 'block');
})

$(document).on('click', ".addNewEPSessionPolicybtn", function(e){
    e.preventDefault();
    counter++;
    var newEPSessionID = $("#addEPSessionPolicybtn"). find(".newEPSPID").val();
    var newEPSessionName = $("#addEPSessionPolicybtn").find(".newEPSPName").val();

    var newTabMenu = $(document.createElement('div')).attr("id", 'epDefaultTabMenu' + counter);
        newTabMenu.after().html ('<button class="tablinks" onclick="epSessionPolicy(event, \''
                                + newEPSessionID
                                + '\')">' 
                                + newEPSessionName 
                                + '</button>');
        newTabMenu.appendTo("#epDefaultTabMenu");

    var newTextBoxDiv = $(document.createElement('div'))
	         .attr("id", 'epdefaulttab' + counter);
        
      newTextBoxDiv.after().html('<div id = "' + newEPSessionID + '" class="tabcontent">'
                            + '<label class = "epdefaultxmlSubTitle"> General Settings</label>'
                            + '<hr/>'
                            + '<label>EP Session Policy ID:</label>'
                            + '&nbsp'
                            + '<input type = "Text" style = "width: 120px" class = "epSessionPolicyID" id = "epSessionPolicyID'+ counter +'" value = "'+ newEPSessionID +'"/>'
                            + '<label style="position: relative; left: 121px;">EP Session Policy Name:</label>'
                            + '&nbsp'
                            + '<input type = "text" style = "width: 120px; position: relative; left: 123px" class = "epSessionPolicyName" id = "epSessionPolicyName'+ counter +'" value = "'+ newEPSessionName +'"/>'
                            + '<label style="position: relative; left: 248px;">Routing Policy:</label>'
                            + '&nbsp'
                            + '<select style="position: relative; left: 249px" class = "routingPolicySelector" id = "routingPolicySelector'+ counter +'">'
                            + '</select>'
                            + '<P></P>'
                            + '<label>Routing Rule:</label>'
                            + '&nbsp'
                            + '<select class = "routingruleSelector" id = "routingruleSelector'+ counter +'">'
                            + '</select>'
                            + '<label style="position: relative; left: 142px;"> Force Down:</label>'
                            + '&nbsp'
                            + '<select style="position: relative; left: 143px;" class = "forceDownSelector" id = "forceDownSelector'+ counter +'">'
                            + '</select>'
                            + '<label style="position: relative; left: 379px">Maximum Message Length: </label>'
                            + '<input type = "number" style = "width: 50px; position: relative; left: 381px" class = "epPolicyMaxMessgeLength" id = "epPolicyMaxMessgeLength'+ counter +'/>'
                            + '<label style="position: relative; left: 383px"> bytes </label>'
                            + '<P></P>'
                            + '<label> Quiesce: </label>'
                            + '<select class = "quiesceSelector" id = "quiesceSelector'+ counter +'">'
                            + '</select>'
                            + '<label style="position: relative; left: 227px"> Used for Secure Member Connection:</label>'
                            + '&nbsp'
                            + '<select class = "secureUsageSelector" id = "secureUsageSelector'+ counter +'" style="position: relative; left: 229px">'
                            + '</select>'
                            + '<P></P>'
                        
                            + '<label class = "epdefaultxmlSubTitle"> Probe Settings</label>'
                            + '<hr/>'
                            + '<div class = "epProbeSettings">'
                            + '<label>Control:</label>'
                            + '<select class = "epControlProbeSelector" id = "epControlProbeSelector'+ counter +'"/>'
                            + '</select>'
                            + '<label style="position: relative; left: 239px">Interval:</label>'
                            + '<input type = "number" style = "width: 50px; position: relative; left: 242px" class = "probeInterval" id = "probeInterval'+ counter +'"/>'
                            + '<label style="position: relative; left: 244px"> seconds </label>'
                            + '<label style="position: relative; left: 485px">Type:</label>'
                            + '<select style="position: relative; left: 491px" class = "epProbeTypeSelector" id = "epProbeTypeSelector'+ counter +'"/>'
                            + '</select>'
                            + '<p></p>'
                            + '<label>Response is expected in </label>'
                            + '<input type = "number" style = "width: 50px" class = "epProbeResponceTime" id = "epProbeResponceTime'+ counter +'"/> seconds'
                            + '<p></p>'
                            + '<label style="position: relative; left: 113px">Response Type:</label>'
                            + '<select class = "epProbeResponseTypeSelector" id = "epProbeResponseTypeSelector'+ counter +'">'
                            + '</select>'
                            + '<label style="position: relative; left: 309px">Idle Detection:</label>'
                            + '<select style="position: relative; left: 314px" class = "epProbeIdleDectionSelector" id = "epProbeIdleDectionSelector'+ counter +'">'
                            + '</select>'
                            + '<P></P>'
                            + '</div>'

                            + '<label class = "epdefaultxmlSubTitle"> Partial Message</label>'
                            + '<hr/>'
                            + '<div class="epPartivalMessageSettings">'
                            + '<label>Control:</label>'
                            + '<select class = "epPartialMessageControlSelector" id = "epPartialMessageControlSelector'+ counter +'">'
                            + '</select>'
                            
                            + '<label style="position: relative; left: 238px">Timeout:</label>'
                            + '<input type = "number" style = "width:50px; position: relative; left: 243px" class = "epPartialMessageTimeout" id = "epPartialMessageTimeout'+ counter +'" />'
                            + '<label style="position: relative; left:249px ">seconds </label>'
                            + '</div>'
                            + '<label class = "epdefaultxmlSubTitle"> Formatter </label>'
                            + '<hr/>'
                            + '<label>Name:</label> '
                            + '<select class = "epFormatterNameSelector" id = "epFormatterNameSelector'+ counter +'">'
                            + '</select>'
                            
                            + '<label style="position: relative; left: 151px">Processor:</label>'
                            + '<select style="position: relative; left: 156px" class = "epFormatterProcessorSelector" id = "epFormatterProcessorSelector'+ counter +'">'
                            + '</select>'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '<label>Log Error:</label>'
                            + '<select class = "epFormatterLogErrorSelector" id = "epFormatterLogErrorSelector'+ counter +'">'
                            + '</select>'
                            + '<p></p>'
                        
                            + '<label class = "epdefaultxmlSubTitle"> Flow Control</label>'
                            + '<hr/>'
                            + '<label> Number of Retry Attempts: </label>'
                            + '<input type = "number" style = "width:50px" class = "epFlowControlRetryAttempts" id = "epFlowControlRetryAttempts'+ counter +'"/>'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '<label> Retry Timewait: </label>'
                            + '<input type = "number" style = "width:50px" class = "epFlowControlTimeWait" id = "epFlowControlTimeWait'+ counter +'" /> Milliseconds'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '<label> Timeout Value: </label>'
                            + '<input type = "number" style = "width:50px" class = "epFlowControlTimeOut" id = "epFlowControlTimeOut'+ counter +'" /> Seconds'
                            + '<label> Number of Attempts: </label>'
                            + '<input type = "number" style = "width:50px" class = "epFlowControlRetryAttempts" id = "epFlowControlRetryAttempts'+ counter +'"/> Seconds'
                            + '<label> Successful Attempts: </label>'
                            + '<input type = "number" style = "width:50px" class = "epFlowControlSuccessfulRate" id = "epFlowControlSuccessfulRate'+ counter +'"/> %'                            
                            + '<p></p>'
                            + '<label class = "epdefaultxmlSubTitle"> Socket Option </label>'
                            + '<hr/>'
                            + '<label> Send Socket Buffer Size:</label>'
                            + '<input type = "number" style = "width:50px" class = "epSocketOptionSendSize" id = "epSocketOptionSendSize'+ counter +'"/> Bytes'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '<label> Receive Socket Buffer Size:</label>'
                            + '<input type = "number" style = "width:50px" class = "epSocketOptionReceiveSize" id = "epSocketOptionReceiveSize'+ counter +'"/> Bytes'
                            + '<p><p>'
                            + '<input type = "button" value = "Remove" class = "removeEPSessionPolicybtn" onclick = "removeEPSessionPolicy('+ counter +')"/>'
                            + '<input type = "button" value = "Save" class = "saveEPSessionPolicybtn" data-tabname="' + newEPSessionID +'"/>'
                            + '</div>'
                            + '</div>'
                        );
        newTextBoxDiv.appendTo("#epDefaultTabContentContainer");   
        //Auto load the value of routing Policy
        var h;
        for (h=0; h<routingPolicyChoices.length; h++){
            $("#routingPolicySelector" + counter).append('<option value = "'+ routingPolicyChoices[h] +'">' + routingPolicyChoices[h] + '</option>');     
        } 
        //Auto load the value of routing rule
        var h;
        for (h=0; h<routingxml.ruleID.length; h++){
            $("#routingruleSelector" + counter).append('<option value = "'+ routingxml.ruleID[h] +'">' + routingxml.ruleID[h] + '</option>');
        } 
        // Auto loaded the values of force Down Selector
        var h;
        for (h=0; h < controlChoices.length; h++) {
             $("#forceDownSelector"+counter).append('<option value = "' + controlChoices[h] +'">' + controlChoices[h] +"</option>");       
        }
        // Auto loaded the values of Secure Usage Selector
        var h;
        for (h=0; h < yesOrNoChoices.length; h++) {
             $("#secureUsageSelector"+counter).append('<option value = "' + yesOrNoChoices[h] +'">' + yesOrNoChoices[h] +"</option>");     
        }
        // Auto loaded the values of Quiesce Selector
        var h;
        for (h=0; h < controlChoices.length; h++) {
            $("#quiesceSelector"+counter).append('<option value = "' + controlChoices[h] +'">' + controlChoices[h] +"</option>");   
        }
        // Auto loaded the values of ep Control Probe Selector
        var h;
        for (h=0; h < controlChoices.length; h++) {
             $("#epControlProbeSelector"+counter).append('<option value = "' + controlChoices[h] +'">' + controlChoices[h] +"</option>");
        }
       // Auto loaded the values of Probe Type Selector
        var h;
        for (h=0; h < probeTypeChoices.length; h++) {
             $("#epProbeTypeSelector"+counter).append('<option value = "' + probeTypeChoices[h] +'">' + probeTypeChoices[h] +"</option>");  
        }
        // Auto loaded the values of Probe Response Type Selector
        var h;
        for (h=0; h < probeResponseTypeChoices.length; h++) {
            $("#epProbeResponseTypeSelector"+counter).append('<option value = "' + probeResponseTypeChoices[h] +'">' + probeResponseTypeChoices[h] +"</option>");   
        }
        // Auto loaded the values of Probe Idle Dection
        var h;
        for (h=0; h < probeIdleDectionChoices.length; h++) {
            $("#epProbeIdleDectionSelector"+counter).append('<option value = "' + probeIdleDectionChoices[h] +'">' + probeIdleDectionChoices[h] +"</option>");   
        }
        // Auto loaded the values of Partial Message Control
        var h;
        for (h=0; h < controlChoices.length; h++) {
             $("#epPartialMessageControlSelector"+counter).append('<option value = "' + controlChoices[h] +'">' + controlChoices[h] +"</option>");  
        }
        // Auto loaded the values of Formatter Name Selector
        var h;
        for (h=0; h < formatterNameChoices.length; h++) {
            $("#epFormatterNameSelector"+counter).append('<option value = "' + formatterNameChoices[h] +'">' + formatterNameChoices[h] +"</option>");   
        }
        // Auto loaded the values of Formatter Processor Selector
        var h;
        for (h=0; h < formatterNameChoices.length; h++) {
             $("#epFormatterProcessorSelector"+counter).append('<option value = "' + formatterProcessorChoices[h] +'">' + formatterProcessorChoices[h] +"</option>");  
        }
        // Auto loaded the values of formatter Log Error
        var h;
        for (h=0; h < formatterLogErrorChoices.length; h++) {
             $("#epFormatterLogErrorSelector"+counter).append('<option value = "' + formatterLogErrorChoices[h] +'">' + formatterLogErrorChoices[h] +"</option>");   
        }
          
    // Push new Add data in epdefault.xml Array
    epdefault.epSessionID.push(newEPSessionID);
    epdefault.epSessionName.push(newEPSessionName);
    epdefault.routingPolicy.push("");
    epdefault.routingRule.push("");
    epdefault.forceDown.push("");
    epdefault.secureUsage.push("");
    epdefault.probe.push({
        control:"",
        interval:10,
        type: "",
        responseTime:8,
        responseType:"",
        idleDection:""
    })
    epdefault.partialMessage.push({
        conntrol:"",
        timeOut:5
    })
    epdefault.formatter.push({
        name: "",
        Processor:"",
        logError:0,
    })
    epdefault.quiesce.push("Enabled");
    epdefault.maxMessgeLength.push(2052);
    epdefault.flowControl.push({
        retryAttempts:0,
        retryTimeWait: 10,
        timeOut: 60,
        attemptsNumber: 10,
        successAttemptspercentage:100,
    })
    epdefault.socketOption.push({
        sendSocketBufferSize: 0,
        receiveSocketBufferSize: 0,
    })
    
    document.getElementById('addEPSessionPolicybtn').style.display = 'none';
})

// Save the current value 
$(document).on('click', ".saveEPSessionPolicybtn", function(e){
    e.preventDefault();
    var currentTabName = $(this).data('tabname');
    console.log(currentTabName);
    var currentLol = jQuery.inArray(currentTabName,pcdefault.pcSessionID);
    console.log(currentLol);
    epdefault.routingPolicy[currentLol] = $(this).parents(".tabcontent").find(".routingPolicySelector").val();
    epdefault.routingRule[currentLol] = $(this).parents(".tabcontent").find(".routingruleSelector").val();

})