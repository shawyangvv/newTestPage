var enableChoices=["YES", "NO"]
var counter = 0;

var originalPCInterfaceSettings = {

}

var pcInterfaceSettings = {
    interfaceName: ["eth0"],
    gatewayIP: ["192.168.1.1"],
    localInterfaceIP: ["192.168.1.55"],
    netmask: ["255.255.255.0"],
    mtuValue: [1500],
    autoNegotiate: ["YES"],
    routeAddress: [
        {
         names: ["VIC1_TP", "VIC2_TP", "VIC3_TP", "VIC4_TP", "VIC5_TP", "VIC6_TP", "VCMS1_TP", "VCMS2_TP", "AFTP", "VCMS_AFTP", "NTPServer#1", "NTPServer#2", "PrimarySyslogNG", "SecondarySyslogNG", "PrimaryEventConsole", "SecondaryEventConsole", "TivoliTMN", "PrimaryDNS", "SecondaryDNS", "CRLDP", "PrimaryIDM", "SecondaryIDM", "EAM-BASTION"],
         settings: [
             {
                 name: "VIC1_TP",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "OCECPCA1",
                 secureConnection: "YES",
                 protocol: "TCP",
                 remoteIP: ["10.200.34.100"],
                 portNumbers: "51117"
             },
             {
                name: "VIC2_TP", 
                gatewayIP: "192.168.1.245",
                usage: "YES",
                networkAddressID: "OCWCPCA1",
                secureConnection: "YES",
                protocol: "TCP",
                remoteIP: "10.200.140.11",
                portNumbers: "51117" 
             },
             {
                name: "VIC3_TP",
                gatewayIP: "192.168.1.245",
                usage: "NO",
                networkAddressID: "",
                sercureConnection: "",
                protocol: "TCP",
                remoteIP: "",
                portNumbers: "51117"
             },
             {
                name: "VIC4_TP",
                gatewayIP: "192.168.1.245",
                usage: "NO",
                networkAddressID: "",
                secureConnection: "",
                protocol: "TCP",
                remoteIP: "",
                portNumbers: "51117"
             },
             {
                name: "VIC5_TP",
                gatewayIP: "192.168.1.245",
                usage: "NO",
                networkAddressID: "",
                secureConnection: "",
                protocol: "TCP",
                remoteIP: "",
                portNumbers: "51117"
             },
             {
                 name: "VIC6_TP",
                 gatewayIP: "192.168.1.245",
                 usage: "NO",
                 networkAddressID: "",
                 secureConnection: "",
                 protocol: "TCP",
                 remoteIP: "",
                 portNumbers: "51117"
             },
             {
                 name: "VCMS1_TP",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "OCWVCMS",
                 secureConnection: "YES",
                 protocol: "TCP",
                 remoteIP: "10.200.34.100",
                 portNumbers: "51117"
             },
             {
                 name: "VCMS2_TP",
                 gatewayIP: "192.168.1.245",
                 usage: "NO",
                 networkAddressID: "",
                 secureConnection: "NO",
                 protocol: "TCP",
                 remoteIP: "",
                 portNumbers: "51117"
             },
             {
                 name: "AFTP",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "",
                 secureConnection: "YES",
                 protocol: "TCP",
                 remoteIP: "10.200.34.100",
                 portNumbers: "50111"
             },
             {
                 name: "VCMS_AFTP",
                 gatewayIP: "192.168.1.245",
                 usage: "NO",
                 networkAddressID: "",
                 secureConnection: "NO",
                 protocol: "TCP",
                 remoteIP: "",
                 portNumbers: "50111"
             },
             {
                 name: "NTPServer#1",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "",
                 secureConnection: "",
                 protocol: "UDP",
                 remoteIP: "10.200.31.29",
                 portNumbers: "123"
             },
             {
                 name: "NTPServer#2",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "",
                 secureConnection: "",
                 protocol: "UDP",
                 remoteIP: "10.200.31.29",
                 portNumbers: "123"
             },
             {
                 name: "PrimarySyslogNG",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "",
                 secureConnection: "",
                 protocol: "TCP",
                 remoteIP: "10.73.160.231",
                 portNumbers: "5140"
             },
             {
                 name: "SecondarySyslogNG",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "",
                 secureConnection: "",
                 protocol: "TCP",
                 remoteIP: "10.73.160.231",
                 portNumbers: "5140"
             },
             {
                 name: "PrimaryEventConsole",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "",
                 secureConnection: "",
                 protocol: "TCP",
                 remoteIP: "10.203.151.26",
                 portNumbers: "8416"
             },
             {
                 name: "SecondaryEventConsole",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "",
                 secureConnection: "",
                 protocol: "TCP",
                 remoteIP: "10.200.31.30",
                 portNumbers: "8416"
             },
             {
                 name: "TivoliTMN",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "",
                 secureConnection: "",
                 protocol: "TCP",
                 remoteIP: "10.200.31.30",
                 portNumbers: "9494, 9495, 9496"
             },
             {
                 name: "PrimaryDNS",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "",
                 secureConnection: "",
                 protocol: "UDP",
                 remoteIP: "10.172.130.51",
                 portNumbers: "53"
             },
             {
                 name: "SecondaryDNS",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "",
                 secureConnection: "",
                 protocol: "UDP",
                 remoteIP: "10.172.131.51",
                 portNumbers: "53"
             },
             {
                 name: "CRLDP",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "",
                 secureConnection: "",
                 protocol: "TCP",
                 remoteIP: "10.203.103.42, crl.inov.visa.net",
                 portNumbers: "389"
             },
            {
                 name: "PrimaryIDM",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "",
                 secureConnection: "",
                 protocol: "TCP",
                 remoteIP: "192.168.1.112",
                 portNumbers: "9463-9466"
             },
             {
                 name: "SecondaryIDM",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "",
                 secureConnection: "",
                 protocol: "TCP",
                 remoteIP: "192.168.1.112",
                 portNumbers: "9463-9466"
             },
             {
                 name: "EAM-BASTION",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "",
                 secureConnection: "",
                 protocol: "TCP",
                 remoteIP: "192.168.1.110, 192.168.1.115, 192.168.1.120",
                 portNumbers: "670, 9463-9466"
             },
             ]
        }
]}
// ------------------------------------
// Dynamical loading the exists data
// --------------------------------------
$(document).on('click','.pcInterfacesButton', function(e){
    e.preventDefault();
    $('#pcInterfacesbtn').css('display', 'block');
    var i;
    for (i=0; i<pcInterfaceSettings.interfaceName.length; i++) {
        counter = i+1;
        var lol=counter-1;
        var newTabMenu = $(document.createElement('div')).attr("id", 'pcInterfaceTabMenu' + counter);
        newTabMenu.after().html ('<button class="tablinks" onclick="pcInter(event, \''
                                + pcInterfaceSettings.interfaceName[i]
                                + '\')">' 
                                + pcInterfaceSettings.interfaceName[i]
                                + '</button>');
        newTabMenu.appendTo("#pcInterfaceTabMenu");

        var newTextBoxDiv = $(document.createElement('div'))
	         .attr("id", 'pcIntab' + counter);
        
        newTextBoxDiv.after().html('<div id ="'+ pcInterfaceSettings.interfaceName[i] +'" class = "tabcontent" style="height:93%; width: 87%">'
                                +  '<label class = "easGSSubTitle"> Configuration of Processor Network </label>'
                                +  '<hr/>'
                                +  '<label> Processor-side Interface Name: </label>'
                                +  '&nbsp'
                                +  '<input type = "text" class= "pcInterfaceNameInput" value="'+ pcInterfaceSettings.interfaceName[i] +'" style="width: 80px;"/>'
                                +  '<label style="position: relative; left: 124px;"> Gateway Address: </label>'
                                +  '<input type = "text" class= "pcInterfaceGatewayAdd" style="position: relative; left: 126px; width: 120px;" value="'+ pcInterfaceSettings.gatewayIP[i] +'">'
                                +  '<label style="position: relative; left: 233px;"> Local Interface IP Address: </label>'
                                +  '<input type = "text" class= "pcInterfaceLocalIp" value="'+ pcInterfaceSettings.localInterfaceIP[i] +'" style="position: relative; width: 120px; left: 238px;">'
                                +  '<p></p>'
                                +  '<label> Netmask: </label>'
                                +  '&nbsp'
                                +  '<input type = "text" class= "pcInterfaceIPNetmask" value="'+ pcInterfaceSettings.netmask[i] +'" style="width: 120px">'
                                +  '<label style = "position: relative; left: 223px"> MTU Value: </label>'
                                +  '<input type = "number" class= "pcInterfaceMTUValue" style="position: relative; left: 225px; width: 120px" value="'+ pcInterfaceSettings.mtuValue[i] +'">'
                                +  '<label style = "position: relative; left: 372px"> Use Auto-Negotiate for this Interface: </label>'
                                +  '<select class = "pcInterAutoNego" id = "pcInterAutoNego'+ counter +'" style="position: relative; left: 371px">'
                                +  '</select>'
                                +  '<p></p>'
                                +  '<label class = "easGSSubTitle"> ROUTEADDRESS </label>'
                                +  '<hr/>'
                                +  '<table id="pcRouteAddressTable'+ i +'" class="display" cellspacing="0">'
                                +  '<thead>'
                                +  '<tr>'
                                +  '<th>Name</th>'
                                +  '<th>Gateway Address</th>'
                                +  '<th>Enable</th>'
                                +  '<th>Network Address ID</th>'
                                +  '<th>Secure Connection</th>'
                                +  '<th>Protocol</th>'
                                +  '<th>Remote IP address/ FQDN</th>'
                                +  '<th>Port Numbers</th>'
                                +  '</tr>'
                                +  '</thead>'
                                +  '</table>'
                                +  '<input type = "button" value = "Remove" class = "removePCInterfacebtn" onclick = "removePCInterface('+ counter +')"/>'
                                +  '<input type = "button" value = "Save" class = "savePCInterfacebtn"/>'
                                +  '</div>'                            
                                +  '</div>'
                                +  '</div>')

         newTextBoxDiv.appendTo("#pcInterfaceTabContentContainer");
    // Load Auto-Negotiate selector
    var h;
        for (h=0; h < enableChoices.length; h++) {
            if (pcInterfaceSettings.autoNegotiate[i] == enableChoices[h]){
                $("#pcInterAutoNego"+counter).append('<option selected = "selected" value = "' +enableChoices[h] +'">' + enableChoices[h] +"</option>");
            } else {
             $("#pcInterAutoNego"+counter).append('<option value = "' +enableChoices[h] +'">' + enableChoices[h] +"</option>");
            }
        }
    // Loading the Route Address Table
    $('#pcRouteAddressTable'+i).DataTable({
        data: pcInterfaceSettings.routeAddress[i].settings,
        columns:[
            {data: 'name'},
            {data: 'gatewayIP'},
            {data: 'usage',
              render: function(data, type, row){
                  console.log(row.name)
                  return "<input class = 'usageChoice' id = '"+ row.name +"' type='checkbox' " + (data=='YES'? 'checked' : '') + " data-rowname='"+row.name+"' data-curtablelol='"+ lol +"'>"
            }},
            {data: 'networkAddressID',
                render: function(data, type, row){
                    if (row.usage=='YES'){
                        if (row.name=="VIC1_TP"||row.name=="VIC2_TP"||row.name=="VIC3_TP"||row.name=="VIC4_TP"||row.name=="VIC5_TP"||row.name=="VIC6_TP"||row.name=="VCMS1_TP"||row.name=="VCMS2_TP"){
                            return "<input type='text' value='"+ data +"'/>";
                        }
                    }       
                    return " ";
                }
            },
            {data: 'secureConnection',
                render: function(data, type, row){
                    if (row.usage=='YES'){
                        if (row.name=="VIC1_TP"||row.name=="VIC2_TP"||row.name=="VIC3_TP"||row.name=="VIC4_TP"||row.name=="VIC5_TP"||row.name=="VIC6_TP"||row.name=="VCMS1_TP"||row.name=="VCMS2_TP"||row.name=="AFTP"||row.name=="VXMS_AFTP"){
                            return "<input type='checkbox' " + (data=='YES'? 'checked' : '') + ">"
                        }    
                    } 
                    return " ";               
                }
            },
            {data: 'protocol',
                render: function(data, type, row){
                    if (row.usage=="YES"){
                        return data;
                    }
                    return " ";
                }
            },
            {data: 'remoteIP',
                render: function(data, type, row){
                    if (row.usage=='YES'){
                        return "<textarea type = 'text' class = 'remoteIPAddress'>" + data + "</textarea>"
                    } else {
                        return " ";
                    }
                }
            },
            {data: 'portNumbers',
                render: function(data, type, row){
                    if (row.usage == 'YES'){
                        return "<textarea type = 'text' class = 'portNumbers'>" + data + "</textarea>"
                    } else {
                        return " ";
                    }
                }

            }
        ],
        
    })

    }

})

// Accoding to "Usage" display the following attributes or not
$(document).on('change', '.usageChoice', function(){
    var checked = this.checked
    var tableLol = $(this).data('curtablelol');
    var currentRowName = $(this).data('rowname');
    var table = $('#pcRouteAddressTable'+tableLol).DataTable();

    var lol = jQuery.inArray(currentRowName, pcInterfaceSettings.routeAddress[tableLol].names)
    
    var currentData = table.row(lol).data();
    console.log(currentData);
    if (checked){
        pcInterfaceSettings.routeAddress[tableLol].settings[lol].usage="YES";
    } else {
        pcInterfaceSettings.routeAddress[tableLol].settings[lol].usage="NO";
    }
    table
        .row(lol)
        .data(currentData)
        .draw()

})

// ----------------------
//  Open the correspoding span
// ---------------------
function pcInter(evt, name) {
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

// ------------------------------
// Remove the whole PC Interface
// -------------------------------
$(document).on('click', ".removePCInterfacebtn", function(e){
    e.preventDefault();
    $(this).parents(".tabcontent").empty();
    counter--;
})

function removePCInterface(number){
    console.log("pcInterfaceTabMenu"+number);
    var deleteNumber = Number(number)-1;
    console.log(deleteNumber);
    // delete in the pcInterface Array
    pcInterfaceSettings.interfaceName.splice(deleteNumber,1);
    pcInterfaceSettings.gatewayIP.splice(deleteNumber,1);
    pcInterfaceSettings.localInterfaceIP.splice(deleteNumber,1);
    pcInterfaceSettings.netmask.splice(deleteNumber,1);
    pcInterfaceSettings.mtuValue.splice(deleteNumber,1);
    pcInterfaceSettings.autoNegotiate.splice(deleteNumber,1);
    pcInterfaceSettings.routeAddress.splice(deleteNumber,1);
    // delete the Tab Menu
    document.getElementById("pcInterfaceTabMenu"+number).remove();
}


// -----------------------
// Add new PC Interface
// ----------------------
$(document).on('click', ".addPCInterfaceButton", function(e){
    e.preventDefault();
    $('#addPCInterfacebtn').css('display', 'block');
})

$(document).on('click', ".addNewPCInterbtn", function(e){
    e.preventDefault();
    counter++;
    
    var newInterName = $("#addPCInterfacebtn"). find(".newPCInterName").val();
    var newGateway = $("#addPCInterfacebtn").find(".newPCInterGatewayIP").val();
    var newLocalIP = $("#addPCInterfacebtn").find(".newPCInterLocalIP").val(); 

    var newTabMenu = $(document.createElement('div')).attr("id", 'pcInterfaceTabMenu' + counter);
    newTabMenu.after().html ('<button class="tablinks" onclick="pcInter(event, \''
                             + newInterName 
                             + '\')">' 
                             + newInterName
                             + '</button>');
    newTabMenu.appendTo("#pcInterfaceTabMenu");

    var newTextBoxDiv = $(document.createElement('div'))
	     .attr("id", 'pcIntab' + counter);
    var currenLol=counter-1;
    
    newTextBoxDiv.after().html('<div id = "' + newInterName + '" class="tabcontent" style="height:93%; width: 87%">'
                            + '<label class = "easGSSubTitle"> Configuration of Processor Network </label>'
                            + '<hr/>'
                            + '<label> Processor-side Interface Name: </label>'
                            + '&nbsp'
                            + '<input type = "text" class= "pcInterfaceNameInput" value="'+ newInterName +'" style="width: 80px;"/>'
                            + '<label style="position: relative; left: 124px;"> Gateway Address: </label>'
                            + '<input type = "text" class= "pcInterfaceGatewayAdd" style="position: relative; left: 126px; width: 120px;" value="'+ newGateway +'">'
                            + '<label style="position: relative; left: 233px;"> Local Interface IP Address: </label>'
                            + '<input type = "text" class= "pcInterfaceLocalIp" value="'+ newLocalIP +'" style="position: relative; width: 120px; left: 238px;">'
                            + '<p></p>'
                            + '<label> Netmask: </label>'
                            + '&nbsp'
                            +  '<input type = "text" class= "pcInterfaceIPNetmask" style="width: 120px">'
                            +  '<label style = "position: relative; left: 223px"> MTU Value: </label>'
                            +  '<input type = "number" class= "pcInterfaceMTUValue" style="position: relative; left: 225px; width: 120px">'
                            +  '<label style = "position: relative; left: 372px"> Use Auto-Negotiate for this Interface: </label>'
                            +  '<select class = "pcInterAutoNego" id = "pcInterAutoNego'+ counter +'" style="position: relative; left: 371px">'
                            +  '<option value="YES"> YES </option>'
                            +  '<option value="NO"> NO </option>'
                            +  '</select>'  
                            +  '<p></p>'
                            +  '<label class = "easGSSubTitle"> ROUTEADDRESS </label>'
                            +  '<hr/>'
                            +  '<table id="pcRouteAddressTable'+ currenLol +'" class="display" cellspacing="0">'
                            +  '<thead>'
                            +  '<tr>'
                            +  '<th>Name</th>'
                            +  '<th>Gateway Address</th>'
                            +  '<th>Enable</th>'
                            +  '<th>Network Address ID</th>'
                            +  '<th>Secure Connection</th>'
                            +  '<th>Protocol</th>'
                            +  '<th>Remote IP address/ FQDN</th>'
                            +  '<th>Port Numbers</th>'
                            +  '</tr>'
                            +  '</thead>'
                            +  '</table>'
                            +  '<input type = "button" value = "Remove" class = "removePCInterfacebtn" onclick = "removePCInterface('+ counter +')"/>'
                            +  '<input type = "button" value = "Save" class = "savePCInterfacebtn"/>'
                            +  '</div>'                            
                            +  '</div>'
                            +  '</div>'
                        );
    newTextBoxDiv.appendTo("#pcInterfaceTabContentContainer");
    // Push new Add data in PC Interface Array
    pcInterfaceSettings.interfaceName.push(newInterName);
    pcInterfaceSettings.gatewayIP.push(newGateway);
    pcInterfaceSettings.localInterfaceIP.push(newLocalIP);
    pcInterfaceSettings.netmask.push("");
    pcInterfaceSettings.mtuValue.push("");
    pcInterfaceSettings.autoNegotiate.push("");
    pcInterfaceSettings.routeAddress.push({names:["VIC1_TP", "VIC2_TP", "VIC3_TP", "VIC4_TP", "VIC5_TP", "VIC6_TP", "VCMS1_TP", "VCMS2_TP", "AFTP", "VCMS_AFTP", "NTPServer#1", "NTPServer#2", "PrimarySyslogNG", "SecondarySyslogNG", "PrimaryEventConsole", "SecondaryEventConsole", "TivoliTMN", "PrimaryDNS", "SecondaryDNS", "CRLDP", "PrimaryIDM", "SecondaryIDM", "EAM-BASTION"], settings: [
             {
                 name: "VIC1_TP",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "OCECPCA1",
                 secureConnection: "YES",
                 protocol: "TCP",
                 remoteIP: ["10.200.34.100"],
                 portNumbers: "51117"
             },
             {
                name: "VIC2_TP", 
                gatewayIP: "192.168.1.245",
                usage: "YES",
                networkAddressID: "OCWCPCA1",
                secureConnection: "YES",
                protocol: "TCP",
                remoteIP: "10.200.140.11",
                portNumbers: "51117" 
             },
             {
                name: "VIC3_TP",
                gatewayIP: "192.168.1.245",
                usage: "NO",
                networkAddressID: "",
                sercureConnection: "",
                protocol: "TCP",
                remoteIP: "",
                portNumbers: "51117"
             },
             {
                name: "VIC4_TP",
                gatewayIP: "192.168.1.245",
                usage: "NO",
                networkAddressID: "",
                secureConnection: "",
                protocol: "TCP",
                remoteIP: "",
                portNumbers: "51117"
             },
             {
                name: "VIC5_TP",
                gatewayIP: "192.168.1.245",
                usage: "NO",
                networkAddressID: "",
                secureConnection: "",
                protocol: "TCP",
                remoteIP: "",
                portNumbers: "51117"
             },
             {
                 name: "VIC6_TP",
                 gatewayIP: "192.168.1.245",
                 usage: "NO",
                 networkAddressID: "",
                 secureConnection: "",
                 protocol: "TCP",
                 remoteIP: "",
                 portNumbers: "51117"
             },
             {
                 name: "VCMS1_TP",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "OCWVCMS",
                 secureConnection: "YES",
                 protocol: "TCP",
                 remoteIP: "10.200.34.100",
                 portNumbers: "51117"
             },
             {
                 name: "VCMS2_TP",
                 gatewayIP: "192.168.1.245",
                 usage: "NO",
                 networkAddressID: "",
                 secureConnection: "NO",
                 protocol: "TCP",
                 remoteIP: "",
                 portNumbers: "51117"
             },
             {
                 name: "AFTP",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "",
                 secureConnection: "YES",
                 protocol: "TCP",
                 remoteIP: "10.200.34.100",
                 portNumbers: "50111"
             },
             {
                 name: "VCMS_AFTP",
                 gatewayIP: "192.168.1.245",
                 usage: "NO",
                 networkAddressID: "",
                 secureConnection: "NO",
                 protocol: "TCP",
                 remoteIP: "",
                 portNumbers: "50111"
             },
             {
                 name: "NTPServer#1",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "",
                 secureConnection: "",
                 protocol: "UDP",
                 remoteIP: "10.200.31.29",
                 portNumbers: "123"
             },
             {
                 name: "NTPServer#2",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "",
                 secureConnection: "",
                 protocol: "UDP",
                 remoteIP: "10.200.31.29",
                 portNumbers: "123"
             },
             {
                 name: "PrimarySyslogNG",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "",
                 secureConnection: "",
                 protocol: "TCP",
                 remoteIP: "10.73.160.231",
                 portNumbers: "5140"
             },
             {
                 name: "SecondarySyslogNG",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "",
                 secureConnection: "",
                 protocol: "TCP",
                 remoteIP: "10.73.160.231",
                 portNumbers: "5140"
             },
             {
                 name: "PrimaryEventConsole",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "",
                 secureConnection: "",
                 protocol: "TCP",
                 remoteIP: "10.203.151.26",
                 portNumbers: "8416"
             },
             {
                 name: "SecondaryEventConsole",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "",
                 secureConnection: "",
                 protocol: "TCP",
                 remoteIP: "10.200.31.30",
                 portNumbers: "8416"
             },
             {
                 name: "TivoliTMN",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "",
                 secureConnection: "",
                 protocol: "TCP",
                 remoteIP: "10.200.31.30",
                 portNumbers: "9494, 9495, 9496"
             },
             {
                 name: "PrimaryDNS",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "",
                 secureConnection: "",
                 protocol: "UDP",
                 remoteIP: "10.172.130.51",
                 portNumbers: "53"
             },
             {
                 name: "SecondaryDNS",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "",
                 secureConnection: "",
                 protocol: "UDP",
                 remoteIP: "10.172.131.51",
                 portNumbers: "53"
             },
             {
                 name: "CRLDP",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "",
                 secureConnection: "",
                 protocol: "TCP",
                 remoteIP: "10.203.103.42, crl.inov.visa.net",
                 portNumbers: "389"
             },
            {
                 name: "PrimaryIDM",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "",
                 secureConnection: "",
                 protocol: "TCP",
                 remoteIP: "192.168.1.112",
                 portNumbers: "9463-9466"
             },
             {
                 name: "SecondaryIDM",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "",
                 secureConnection: "",
                 protocol: "TCP",
                 remoteIP: "192.168.1.112",
                 portNumbers: "9463-9466"
             },
             {
                 name: "EAM-BASTION",
                 gatewayIP: "192.168.1.245",
                 usage: "YES",
                 networkAddressID: "",
                 secureConnection: "",
                 protocol: "TCP",
                 remoteIP: "192.168.1.110, 192.168.1.115, 192.168.1.120",
                 portNumbers: "670, 9463-9466"
             }]}
    )
    
   
    // $('#pcRouteAddressTable'+currenLol).dataTable();
    // Loading Route Address Table
     $('#pcRouteAddressTable'+currenLol).dataTable({
        data: pcInterfaceSettings.routeAddress[currenLol].settings,
        columns:[
            {data: 'name'},
            {data: 'gatewayIP'},
            {data: 'usage',
              render: function(data, type, row){
                  console.log(row.name)
                  return "<input class = 'usageChoice' id = '"+ row.name +"' type='checkbox' " + (data=='YES'? 'checked' : '') + " data-rowname='"+row.name+"' data-curtablelol='"+ currenLol +"'>"
            }},
            {data: 'networkAddressID',
                render: function(data, type, row){
                    if (row.usage=='YES'){
                        if (row.name=="VIC1_TP"||row.name=="VIC2_TP"||row.name=="VIC3_TP"||row.name=="VIC4_TP"||row.name=="VIC5_TP"||row.name=="VIC6_TP"||row.name=="VCMS1_TP"||row.name=="VCMS2_TP"){
                            return "<input type='text' value='"+ data +"'/>";
                        }
                    }       
                    return " ";
                }
            },
            {data: 'secureConnection',
                render: function(data, type, row){
                    if (row.usage=='YES'){
                        if (row.name=="VIC1_TP"||row.name=="VIC2_TP"||row.name=="VIC3_TP"||row.name=="VIC4_TP"||row.name=="VIC5_TP"||row.name=="VIC6_TP"||row.name=="VCMS1_TP"||row.name=="VCMS2_TP"||row.name=="AFTP"||row.name=="VXMS_AFTP"){
                            return "<input type='checkbox' " + (data=='YES'? 'checked' : '') + ">"
                        }    
                    } 
                    return " ";               
                }
            },
            {data: 'protocol',
                render: function(data, type, row){
                    if (row.usage=="YES"){
                        return data;
                    }
                    return " ";
                }
            },
            {data: 'remoteIP',
                render: function(data, type, row){
                    if (row.usage=='YES'){
                        return "<textarea type = 'text' class = 'remoteIPAddress'>" + data + "</textarea>"
                    } else {
                        return " ";
                    }
                }
            },
            {data: 'portNumbers',
                render: function(data, type, row){
                    if (row.usage == 'YES'){
                        return "<textarea type = 'text' class = 'portNumbers'>" + data + "</textarea>"
                    } else {
                        return " ";
                    }
                }

            }
        ],
        
    })
    document.getElementById('addPCInterfacebtn').style.display = 'none';
    // e.preventDefault()
})

