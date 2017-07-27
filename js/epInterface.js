var enableChoices=["YES", "NO"];
var speedChoices = [10, 100, 1000];
var duplexModeChoices = ["HALF", "FULL"];

var counter = 0;
var routeCounter = 0;

var epInterfaceSettings = {
    interfaceName: ["eth1"],
    gatewayIP: ["192.168.2.1"],
    localInterfaceIp: ["192.168.2.172"],
    netmask: ["255.255.255.0"],
    mtuValue: [1500],
    natdIP: [""],
    autoNegotiate: ["YES"],
    speed: [100],
    duplexMode: ["FULL"],
    routeAddress: [
        {names: ["EAGWebService", "FileTransferServices", "TransactionProcessing"],
         settings:[{
             name: "EAGWebService",
             gatewayIP: "192.168.2.1",
             protocol: "TCP",
             ipAddress: "Any",
             httpPort: "9443",
             outboundPort: "443, 1443, 2443, 3443, 4443",
         },
         {
             name: "FileTransferServices",
             gatewayIP: "192.168.2.1",
             enableFTP: "YES",
             ftpProtocol: "TCP",
             ftpRemoteIP: "192.168.2.33",
             ftpControlPort: "21",
             ftpActivePort: "20",
             ftpPassivePort: "10000-10010",
         },
         {
             name: "TransactionProcessing",
             protocol: "TCP",
             remoteIP: "127.0.0.1",
             portNumber: "5083, 10001"
         }]
        }
    ]
}

// ------------------------------------
// Dynamical loading the exists data
// --------------------------------------
$(document).on('click','.epInterfacesButton', function(e){
    e.preventDefault();
    $('#epInterfacesbtn').css('display', 'block');
    var i;
    for (i=0; i<epInterfaceSettings.interfaceName.length; i++) {
        counter = i+1;
        var currentArrayLol=counter-1;
        var newTabMenu = $(document.createElement('div')).attr("id", 'epInterfaceTabMenu' + counter);
        newTabMenu.after().html ('<button class="tablinks" onclick="epInter(event, \''
                                + epInterfaceSettings.interfaceName[i]
                                + '\')">' 
                                + epInterfaceSettings.interfaceName[i]
                                + '</button>');
        newTabMenu.appendTo("#epInterfaceTabMenu");

        var newTextBoxDiv = $(document.createElement('div'))
	         .attr("id", 'epIntab' + counter);
        
        newTextBoxDiv.after().html('<div id ="'+ epInterfaceSettings.interfaceName[i] +'" class = "tabcontent" style="height:93%; width: 87%">'
                                +  '<label class = "easGSSubTitle"> Configuration of Endpoint Network </label>'
                                +  '<hr/>'
                                +  '<label> Endpoint-side Interface Name: </label>'
                                +  '&nbsp'
                                +  '<input type = "text" class= "epInterfaceNameInput" value="'+ epInterfaceSettings.interfaceName[i] +'" style="width: 80px;"/>'
                                +  '<label style="position: relative; left: 124px;"> Gateway Address: </label>'
                                +  '<input type = "text" class= "epInterfaceGatewayAdd" style="position: relative; left: 126px; width: 120px;" value="'+ epInterfaceSettings.gatewayIP[i] +'">'
                                +  '<label style="position: relative; left: 233px;"> Local Interface IP Address: </label>'
                                +  '<input type = "text" class= "epInterfaceLocalIp" value="'+ epInterfaceSettings.localInterfaceIp[i] +'" style="position: relative; width: 120px; left: 238px;">'
                                +  '<p></p>'
                                +  '<label> Netmask: </label>'
                                +  '&nbsp'
                                +  '<input type = "text" class= "epInterfaceIPNetmask" value="'+ epInterfaceSettings.netmask[i] +'" style="width: 120px">'
                                +  '<label style = "position: relative; left: 223px"> MTU Value: </label>'
                                +  '<input type = "number" class= "epInterfaceMTUValue" style="position: relative; left: 225px; width: 120px" value="'+ epInterfaceSettings.mtuValue[i] +'">'
                                +  '<label style = "position: relative; left: 372px"> Use Auto-Negotiate for this Interface: </label>'
                                +  '<select class = "epInterAutoNego" id = "epInterAutoNego'+ counter +'" style="position: relative; left: 371px">'
                                +  '</select>'
                                +  '<p></p>'
                                +  '<label>Speed:</label>'
                                +  '&nbsp'
                                +  '<select class = "epInterSpeed" id = "epInterSpeed'+ counter +'">'
                                +  '</select>'
                                +  '<label>Mbps</label>'
                                +  '<label style="position: relative; left: 266px">Duplex Mode: </label>'
                                +  '<select class = "epInterDupMode" id="epInterDupMode'+ counter +'" style="position: relative; left: 267px">'
                                +  '</select>'
                                +  '<label style="position: relative; left: 455px">NAT\'d IP Address for EFS:</label>'
                                +  '<input type="text" class = "epNATdIP" style="position: relative; width: 120px; left: 460px" >'
                                +  '<p></p>'
                                +  '<label class = "easGSSubTitle"> ROUTEADDRESS </label>'
                                +  '<hr/>'
                                +  '<div class="epInterRouteContainer" id="epInterRouteContainer">'
                                +  '<ul class="epInterRouteTabs" id="epInterRouteTabs">'
                                +  '<li><a href="#" name="EAGWebService">EAGWebService</a></li>'
                                +  '<li><a href="#" name="FileTransferServices">FileTransferServices</a></li>'
                                +  '<li><a href="#" name="TransactionProcessing">TransactionProcessing</a></li>'
                                +  '</ul>'
                                +  '<div class="epInterRouteSettings" id ="epInterRouteSettings"> '
                                +  '<div class="epInterRouteSettingDetail"  id="EAGWebService">'
                                +  '<label> Gateway Address : 192.168.2.1 </label>'
                                +  '<label style="position: relative; left: 250px"> Protocol : TCP </label>'
                                +  '<label style="position: relative; left: 455px"> IP Address : Any </label>'
                                +  '<p></p>'
                                +  '<label>HTTPS port for EA Gateway Web Service: </label>'
                                +  '<input type="text" class = "EAGWebServiceHTTPPort" style="position: relative; width: 120px; " value="'+ epInterfaceSettings.routeAddress[currentArrayLol].settings[0].httpPort +'">'
                                +  '<label style="position: relative; left: 67px">Outbound ports for EA Gateway Web Service: </label>'
                                
                                +  '<textarea style="position: relative; left: 67px; top: 14px" type = "text" class = "EAGWebServiceOuteboundPort">' 
                                +  epInterfaceSettings.routeAddress[currentArrayLol].settings[0].outboundPort
                                +  '</textarea>'
                                +  '</div>'
                                +  '<div class="epInterRouteSettingDetail" id="FileTransferServices">'
                                +  '<label> Gateway Address : 192.168.2.1 </label>'
                                +  '<p></p>'
                                +  '<label> Enable FTP Service: </label> '
                                +  '<select class="fileTransferServicesFTPEnable" id = "fileTransferServicesFTPEnable'+ counter +'">'
                                +  '<select>'
                                +  '<p></p>'
                                +  '<div id= "fileTransferServicesFTPSettings" class="element-show">'
                                +  '<label> Protocol : TCP </label>'
                                +  '<label style="position: relative; "> Remote IP address: </label>'
                                +  '<input type="text" class = "FileTransferServicesFTPRemoteIP" style="position: relative;" value="'+ epInterfaceSettings.routeAddress[currentArrayLol].settings[1].ftpRemoteIP +'">'
                                +  '<label style="position: relative; "> Control Port: </label>'
                                +  '<input type="text" class = "FileTransferServicesFTPControlPort" style="position: relative;" value="'+ epInterfaceSettings.routeAddress[currentArrayLol].settings[1].ftpControlPort +'">'
                                +  '<p></p>'
                                +  '<label style="position: relative; "> Active port: </label>'
                                +  '<input type="text" class = "FileTransferServicesFTPActivePort" style="position: relative; width: 50px;" value="'+ epInterfaceSettings.routeAddress[currentArrayLol].settings[1].ftpActivePort +'">'
                                +  '<label style="position: relative; left: 258px"> Passive port: </label>'
                                +  '<input type="text" class = "FileTransferServicesFTPPassivePort" style="position: relative; left: 259px;" value="'+ epInterfaceSettings.routeAddress[currentArrayLol].settings[1].ftpPassivePort +'">'
                                +  '</div>'
                                +  '</div>'
                                +  '<div class="epInterRouteSettingDetail" id="TransactionProcessing">'
                                +  '<label> Protocol : TCP </label>'
                                +  '<label style="position: relative; left: 286px">Remote IP Address : 127.0.0.1</label>'
                                +  '<label style="position: relative; left: 445px"> Port Numbers: </label>'
                                +  '<input type="text" class = "TransactionProcessingPortNumbers" style="position: relative; width: 120px; left: 445px" value="'+ epInterfaceSettings.routeAddress[currentArrayLol].settings[2].remoteIP +'">'
                                +  '</div>'
                                +  '</div>'
                                +  '<input type = "button" value = "Remove" class = "removeEPInterfacebtn" onclick = "removeEPInterface('+ counter +')"/>'
                                +  '<input type = "button" value = "Save" class = "saveEPInterfacebtn"/>'
                                +  '</div>'                            
                                +  '</div>'
                                +  '</div>')

         newTextBoxDiv.appendTo("#epInterfaceTabContentContainer");
    $("#epInterRouteSettings .epInterRouteSettingDetail").hide(); // Initially hide all content
    $("#epInterRouteTabs li:first").attr("id","current"); // Activate first tab
    $("#epInterRouteSettings div:first").fadeIn(); // Show first tab content
        // Load Auto-Negotiate selector
        var h;
        for (h=0; h < enableChoices.length; h++) {
            if (epInterfaceSettings.autoNegotiate[i] == enableChoices[h]){
                $("#epInterAutoNego"+counter).append('<option selected = "selected" value = "' +enableChoices[h] +'">' + enableChoices[h] +"</option>");
            } else {
                $("#epInterAutoNego"+counter).append('<option value = "' +enableChoices[h] +'">' + enableChoices[h] +"</option>");
            }
        }
        // Load speed selector
        var h;
        for (h=0; h < speedChoices.length; h++) {
            if (epInterfaceSettings.speed[i] == speedChoices[h]){
                $("#epInterSpeed"+counter).append('<option selected = "selected" value = "' +speedChoices[h] +'">' + speedChoices[h] +"</option>");
            } else {
                $("#epInterSpeed"+counter).append('<option value = "' +speedChoices[h] +'">' + speedChoices[h] +"</option>");
            }
        }
        // Load Duplex Mode Selector
        var h;
        for (h=0; h < duplexModeChoices.length; h++) {
            if (epInterfaceSettings.duplexMode[i] == duplexModeChoices[h]){
                $("#epInterDupMode"+counter).append('<option selected = "selected" value = "' +duplexModeChoices[h] +'">' + duplexModeChoices[h] +"</option>");
            } else {
                $("#epInterDupMode"+counter).append('<option value = "' +duplexModeChoices[h] +'">' + duplexModeChoices[h] +"</option>");
            }
        }
        // Load FTP Service Enable Selector
        var h;
        for (h=0; h < enableChoices.length; h++) {
            if (epInterfaceSettings.routeAddress[i].settings[1].enableFTP == enableChoices[h]){
                $("#fileTransferServicesFTPEnable"+counter).append('<option selected = "selected" value = "' +enableChoices[h] +'">' + enableChoices[h] +"</option>");
            } else {
                $("#fileTransferServicesFTPEnable"+counter).append('<option value = "' +enableChoices[h] +'">' + enableChoices[h] +"</option>");
            }
        }

    }

})


// ----------------------
//  Open the correspoding span
// ---------------------
function epInter(evt, name) {
    evt.preventDefault();
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
    var targetDOMElemet = typeof name == 'string' ? document.getElementById(name) : name
    targetDOMElemet.style.display = "block";
    evt.currentTarget.className += " active";
    targetDOMElemet.className += " active";
}

// Open the Route Address Tab 
$(document).on('click','#epInterRouteTabs a', function(e){
    e.preventDefault();
    if ($(this).closest("li").attr("id") == "current"){ //detection for current tab
        return       
    } else{             
        $("#epInterRouteSettings .epInterRouteSettingDetail").hide(); //Hide all content
        $("#epInterRouteTabs li").attr("id",""); //Reset id's
        $(this).parent().attr("id","current"); // Activate this
        $('#' + $(this).attr('name')).fadeIn(); // Show content for current tab
    }
})

//When change the Enable pf FTP Service
$(document).on('change','.fileTransferServicesFTPEnable', function(e){
    if (e.target.value == "NO"){
        $("#fileTransferServicesFTPSettings").removeClass('element-show').addClass('element-hide');
    } 
    if (e.target.value == "YES"){
        $("#fileTransferServicesFTPSettings").removeClass('element-hide').addClass('element-show');
    } 

})

// ------------------------------
// Remove the whole ep Interface
// -------------------------------
$(document).on('click', ".removeEPInterfacebtn", function(e){
    e.preventDefault();
    $(this).parents(".tabcontent").empty();
    counter--;
})

function removeEPInterface(number){
    console.log("epInterfaceTabMenu"+number);
    var deleteNumber = Number(number)-1;
    console.log(deleteNumber);
    // delete in the routingxml Array
    epInterfaceSettings.interfaceName.splice(deleteNumber,1);
    epInterfaceSettings.gatewayIP.splice(deleteNumber,1);
    epInterfaceSettings.localInterfaceIp.splice(deleteNumber,1);
    epInterfaceSettings.netmask.splice(deleteNumber,1);
    epInterfaceSettings.mtuValue.splice(deleteNumber,1);
    epInterfaceSettings.natdIP.splice(deleteNumber,1);
    epInterfaceSettings.autoNegotiate.splice(deleteNumber,1);
    epInterfaceSettings.speed.splice(deleteNumber,1);
    epInterfaceSettings.duplexMode.splice(deleteNumber,1);
    epInterfaceSettings.routeAddress.splice(deleteNumber,1);
    // delete the Tab Menu
    document.getElementById("epInterfaceTabMenu"+number).remove();
}

// -----------------------
// Add new EP Interface
// ----------------------
$(document).on('click', ".addEPInterfaceButton", function(e){
    e.preventDefault();
    $('#addEPInterfacebtn').css('display', 'block');
})

$(document).on('click', ".addNewEPInterbtn", function(e){
    e.preventDefault();
    counter++;
    
    var currentArrayLol=counter-1;
    var newInterName = $("#addEPInterfacebtn"). find(".newEPInterName").val();
    var newGateway = $("#addEPInterfacebtn").find(".newEPInterGatewayIP").val();
    var newLocalIP = $("#addEPInterfacebtn").find(".newEPInterLocalIP").val(); 
    
    var newTabMenu = $(document.createElement('div')).attr("id", 'epInterfaceTabMenu' + counter);
    newTabMenu.after().html ('<button class="tablinks" onclick="epInter(event, \''
                             + newInterName 
                             + '\')">' 
                             + newInterName
                             + '</button>');
    newTabMenu.appendTo("#epInterfaceTabMenu");

    var newTextBoxDiv = $(document.createElement('div'))
	     .attr("id", 'epIntab' + counter);
    
    epInterfaceSettings.interfaceName.push(newInterName);
    epInterfaceSettings.gatewayIP.push(newGateway);
    epInterfaceSettings.localInterfaceIp.push(newLocalIP);
    epInterfaceSettings.netmask.push("255.255.255.0");
    epInterfaceSettings.mtuValue.push("");
    epInterfaceSettings.autoNegotiate.push("YES");
    epInterfaceSettings.natdIP.push("");
    epInterfaceSettings.speed.push(100);
    epInterfaceSettings.duplexMode.push("FULL");
    epInterfaceSettings.routeAddress.push({names:["EAGWebService", "FileTransferServices", "TransactionProcessing"], settings: [
             {
             name: "EAGWebService",
             gatewayIP: "192.168.2.1",
             protocol: "TCP",
             ipAddress: "Any",
             httpPort: "9443",
             outboundPort: "443, 1443, 2443, 3443, 4443",
         },
         {
             name: "FileTransferServices",
             gatewayIP: "192.168.2.1",
             enableFTP: "YES",
             ftpProtocol: "TCP",
             ftpRemoteIP: "192.168.2.33",
             ftpControlPort: "21",
             ftpActivePort: "20",
             ftpPassivePort: "10000-10010",
         },
         {
             name: "TransactionProcessing",
             protocol: "TCP",
             remoteIP: "127.0.0.1",
             portNumber: "5083, 10001"
         }]})

    newTextBoxDiv.after().html('<div id ="'+ newInterName +'" class = "tabcontent" style="height:93%; width: 87%">'
                                +  '<label class = "easGSSubTitle"> Configuration of Endpoint Network </label>'
                                +  '<hr/>'
                                +  '<label> Endpoint-side Interface Name: </label>'
                                +  '&nbsp'
                                +  '<input type = "text" class= "epInterfaceNameInput" value="'+ newInterName +'" style="width: 80px;"/>'
                                +  '<label style="position: relative; left: 124px;"> Gateway Address: </label>'
                                +  '<input type = "text" class= "epInterfaceGatewayAdd" style="position: relative; left: 126px; width: 120px;" value="'+ newGateway +'">'
                                +  '<label style="position: relative; left: 233px;"> Local Interface IP Address: </label>'
                                +  '<input type = "text" class= "epInterfaceLocalIp" value="'+ newLocalIP +'" style="position: relative; width: 120px; left: 238px;">'
                                +  '<p></p>'
                                +  '<label> Netmask: </label>'
                                +  '&nbsp'
                                +  '<input type = "text" class= "epInterfaceIPNetmask" style="width: 120px">'
                                +  '<label style = "position: relative; left: 223px"> MTU Value: </label>'
                                +  '<input type = "number" class= "epInterfaceMTUValue" style="position: relative; left: 225px; width: 120px">'
                                +  '<label style = "position: relative; left: 372px"> Use Auto-Negotiate for this Interface: </label>'
                                +  '<select class = "epInterAutoNego" id = "epInterAutoNego'+ counter +'" style="position: relative; left: 371px">'
                                +  '<option value="YES"> YES </option>'
                                +  '<option value="NO"> NO </option>'
                                +  '</select>'
                                +  '<p></p>'
                                +  '<label>Speed:</label>'
                                +  '&nbsp'
                                +  '<select class = "epInterSpeed" id = "epInterSpeed'+ counter +'">'
                                +  '<option value=10> 10 </option>'
                                +  '<option value=100> 100 </option>'
                                +  '<option value=1000> 1000 </option>'
                                +  '</select>'
                                +  '<label>Mbps</label>'
                                +  '<label style="position: relative; left: 266px">Duplex Mode: </label>'
                                +  '<select class = "epInterDupMode" id="epInterDupMode'+ counter +'" style="position: relative; left: 267px">'
                                +  '<option value="HALF"> HALF </option>'
                                +  '<option value="FULL"> FULL </option>'  
                                +  '</select>'
                                +  '<label style="position: relative; left: 455px">NAT\'d IP Address for EFS:</label>'
                                +  '<input type="text" class = "epNATdIP" style="position: relative; width: 120px; left: 460px">'
                                +  '<p></p>'
                                +  '<label class = "easGSSubTitle"> ROUTEADDRESS </label>'
                                +  '<hr/>'
                                +  '<div class="epInterRouteContainer" id="epInterRouteContainer">'
                                +  '<ul class="epInterRouteTabs" id="epInterRouteTabs">'
                                +  '<li><a href="#" name="EAGWebService1">EAGWebService</a></li>'
                                +  '<li><a href="#" name="FileTransferServices1">FileTransferServices</a></li>'
                                +  '<li><a href="#" name="TransactionProcessing1">TransactionProcessing</a></li>'
                                +  '</ul>'
                                +  '<div class="epInterRouteSettings" id ="epInterRouteSettings"> '
                                +  '<div class="epInterRouteSettingDetail"  id="EAGWebService1">'
                                +  '<label> Gateway Address : 192.168.2.1 </label>'
                                +  '<label style="position: relative; left: 250px"> Protocol : TCP </label>'
                                +  '<label style="position: relative; left: 455px"> IP Address : Any </label>'
                                +  '<p></p>'
                                +  '<label>HTTPS port for EA Gateway Web Service: </label>'
                                +  '<input type="text" class = "EAGWebServiceHTTPPort" style="position: relative; width: 120px; " value="'+ epInterfaceSettings.routeAddress[currentArrayLol].settings[0].httpPort +'">'
                                +  '<label style="position: relative; left: 67px">Outbound ports for EA Gateway Web Service: </label>'
                                
                                +  '<textarea style="position: relative; left: 67px; top: 14px" type = "text" class = "EAGWebServiceOuteboundPort">' 
                                +  epInterfaceSettings.routeAddress[currentArrayLol].settings[0].outboundPort
                                +  '</textarea>'
                                +  '</div>'
                                +  '<div class="epInterRouteSettingDetail" id="FileTransferServices1">'
                                +  '<label> Gateway Address : 192.168.2.1 </label>'
                                +  '<p></p>'
                                +  '<label> Enable FTP Service: </label> '
                                +  '<select class="fileTransferServicesFTPEnable" id = "fileTransferServicesFTPEnable'+ counter +'">'
                                +  '<option value="YES"> YES </option>'
                                +  '<option value="NO"> NO </option>'
                                +  '<select>'
                                +  '<p></p>'
                                +  '<div id= "fileTransferServicesFTPSettings" class="element-show">'
                                +  '<label> Protocol : TCP </label>'
                                +  '<label style="position: relative; "> Remote IP address: </label>'
                                +  '<input type="text" class = "FileTransferServicesFTPRemoteIP" style="position: relative;" value="'+ epInterfaceSettings.routeAddress[currentArrayLol].settings[1].ftpRemoteIP +'">'
                                +  '<label style="position: relative; "> Control Port: </label>'
                                +  '<input type="text" class = "FileTransferServicesFTPControlPort" style="position: relative;" value="'+ epInterfaceSettings.routeAddress[currentArrayLol].settings[1].ftpControlPort +'">'
                                +  '<p></p>'
                                +  '<label style="position: relative; "> Active port: </label>'
                                +  '<input type="text" class = "FileTransferServicesFTPActivePort" style="position: relative; width: 50px;" value="'+ epInterfaceSettings.routeAddress[currentArrayLol].settings[1].ftpActivePort +'">'
                                +  '<label style="position: relative; left: 258px"> Passive port: </label>'
                                +  '<input type="text" class = "FileTransferServicesFTPPassivePort" style="position: relative; left: 259px;" value="'+ epInterfaceSettings.routeAddress[currentArrayLol].settings[1].ftpPassivePort +'">'
                                +  '</div>'
                                +  '</div>'
                                +  '<div class="epInterRouteSettingDetail" id="TransactionProcessing1">'
                                +  '<label> Protocol : TCP </label>'
                                +  '<label style="position: relative; left: 286px">Remote IP Address : 127.0.0.1</label>'
                                +  '<label style="position: relative; left: 445px"> Port Numbers: </label>'
                                +  '<input type="text" class = "TransactionProcessingPortNumbers" style="position: relative; width: 120px; left: 445px" value="'+ epInterfaceSettings.routeAddress[currentArrayLol].settings[2].remoteIP +'">'
                                +  '</div>'
                                +  '</div>'
                                +  '<input type = "button" value = "Remove" class = "removeEPInterfacebtn" onclick = "removeEPInterface('+ counter +')"/>'
                                +  '<input type = "button" value = "Save" class = "saveEPInterfacebtn"/>'
                                +  '</div>'                            
                                +  '</div>'
                                +  '</div>')

         newTextBoxDiv.appendTo("#epInterfaceTabContentContainer");
    $("#epInterRouteSettings .epInterRouteSettingDetail").hide(); // Initially hide all content
    $("#epInterRouteTabs li:first").attr("id","current"); // Activate first tab
    $("#epInterRouteSettings div:first").fadeIn(); // Show first tab content

    document.getElementById('addEPInterfacebtn').style.display = 'none';
})