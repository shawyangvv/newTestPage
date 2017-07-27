var yesOrNoChoices = ["YES", "NO"];

var stationDescChoices = ["Credit", "Debit", "MIS", "CAS"];

var counter = 0;

var ipAddressChoices = ["192.168.2.174", "192.168.2.95", "192.168.2.162", "192.168.2.178", "192.168.2.172", "192.168.2.152", "192.168.1.20", "192.168.1.21","192.168.1.25"];
var portNumberChoices = ["10100", "10200", "10300"]

var originalepxml ={
    endPointID:["Visa_Test", "Visa_Wow" ],
    endPointName: ["Visa_Test", "Visa_Wow" ],
    noDelayTCP: ["YES", "NO"],
    pcr:[{
        pcrID: ["6400", "6411"],
        pcrName: ["PCR_6400", "PCR_6411"],
        stationGroup: [
            {
                stationGroupID: ["SG100", "SG101"],
                stationGroupName: ["SG100", "SG101"],
                accessPoint: ["641101", "641101"],
                maxSessions: [1,1],
                sessionPolicy: ["EP_Policy", "EP_Policy"],
                sourcePortAuth: ["NO", "NO"],
                authAddress:[ 
                    {ipAddress:["192.168.1.152", "192.168.1.152", "192.168.1.152", "192.168.1.20"],
                     portNumber:["10200", "10300", "10100", "10300"]
                    },
                    {ipAddress:["192.168.2.95", "192.168.2.95", "192.168.2.95", "192.168.1.25"],
                     portNumber:["10200", "10300", "10100", "10300"]
                    },  
                     ],
                station: [
                    {id:["641201", "641301", "641401"],
                    desc:["CAS", "CAS", "CAS"]
                    },
                    {id:["641202", "641302", "641402"],
                    desc:["MIS", "MIS", "MIS"]
                    },
                ]
            },
             {
                stationGroupID: ["SG001", "SG002"],
                stationGroupName: ["SG001", "SG002"],
                accessPoint: ["641101", "641101"],
                maxSessions: [2,2],
                sessionPolicy: ["EP_Policy", "EP_Policy"],
                sourcePortAuth: ["NO", "YES"],
                authAddress: [
                    {ipAddress:["192.168.2.178", "192.168.2.172", "192.168.1.20"],
                     portNumber:["10100", "10200", "10200"]
                    },
                    {ipAddress:["192.168.2.152", "192.168.2.152", "192.168.1.21"],
                     portNumber:["10100", "10200", "10200"]
                    }
                    ],
                station:[ 
                    {id:["304050"],
                     desc:["Credit"]
                    },
                    {id: ["304051"],
                    desc: ["Debit"]
                    }]
            },
        ],
    },],
}

var epxml ={
    endPointID:["Visa_Test", "Visa_Wow" ],
    endPointName: ["Visa_Test", "Visa_Wow" ],
    noDelayTCP: ["YES", "NO"],
    pcr:[{
        pcrID: ["6400", "6411"],
        pcrName: ["PCR_6400", "PCR_6411"],
        stationGroup: [
            {
                stationGroupID: ["SG100", "SG101"],
                stationGroupName: ["SG100", "SG101"],
                accessPoint: ["641101", "641101"],
                maxSessions: [1,1],
                sessionPolicy: ["EP_Policy", "EP_Policy"],
                sourcePortAuth: ["NO", "NO"],
                authAddress:[ 
                    {ipAddress:["192.168.1.152", "192.168.1.152", "192.168.1.152", "192.168.1.20"],
                     portNumber:["10200", "10300", "10100", "10300"]
                    },
                    {ipAddress:["192.168.2.95", "192.168.2.95", "192.168.2.95", "192.168.1.25"],
                     portNumber:["10200", "10300", "10100", "10300"]
                    },  
                     ],
                station: [
                    {id:["641201", "641301", "641401"],
                    desc:["CAS", "CAS", "CAS"]
                    },
                    {id:["641202", "641302", "641402"],
                    desc:["MIS", "MIS", "MIS"]
                    },
                ]
            },
             {
                stationGroupID: ["SG001", "SG002"],
                stationGroupName: ["SG001", "SG002"],
                accessPoint: ["641101", "641101"],
                maxSessions: [2,2],
                sessionPolicy: ["EP_Policy", "EP_Policy"],
                sourcePortAuth: ["NO", "YES"],
                authAddress: [
                    {ipAddress:["192.168.2.178", "192.168.2.172", "192.168.1.20"],
                     portNumber:["10100", "10200", "10200"]
                    },
                    {ipAddress:["192.168.2.152", "192.168.2.152", "192.168.1.21"],
                     portNumber:["10100", "10200", "10200"]
                    }
                    ],
                station:[ 
                    {id:["304050"],
                     desc:["Credit"]
                    },
                    {id: ["304051"],
                    desc: ["Debit"]
                    }]
            },
        ],
    },
    {
        pcrID: ["6401", "6412"],
        pcrName: ["PCR_6401", "PCR_6412"],
        stationGroup: [
            {
                stationGroupID: ["SG102", "SG103"],
                stationGroupName: ["SG102", "SG103"],
                accessPoint: ["641101", "641101"],
                maxSessions: [1,1],
                sessionPolicy: ["EP_Policy", "EP_Policy"],
                sourcePortAuth: ["NO", "NO"],
                authAddress:[ 
                    {ipAddress:["192.168.1.152", "192.168.1.152", "192.168.1.152", "192.168.1.20"],
                     portNumber:["10200", "10300", "10100", "10300"]
                    },
                    {ipAddress:["192.168.2.95", "192.168.2.95", "192.168.2.95", "192.168.1.25"],
                     portNumber:["10200", "10300", "10100", "10300"]
                    },  
                     ],
                station: [
                    {id:["641201", "641301", "641401"],
                    desc:["CAS", "CAS", "CAS"]
                    },
                    {id:["641202", "641302", "641402"],
                    desc:["MIS", "MIS", "MIS"]
                    },
                ]
            },
             {
                stationGroupID: ["SG003", "SG004"],
                stationGroupName: ["SG004", "SG004"],
                accessPoint: ["641101", "641101"],
                maxSessions: [2,2],
                sessionPolicy: ["EP_Policy", "EP_Policy"],
                sourcePortAuth: ["NO", "YES"],
                authAddress: [
                    {ipAddress:["192.168.2.178", "192.168.2.172", "192.168.1.20"],
                     portNumber:["10100", "10200", "10200"]
                    },
                    {ipAddress:["192.168.2.152", "192.168.2.152", "192.168.1.21"],
                     portNumber:["10100", "10200", "10200"]
                    }
                    ],
                station:[ 
                    {id:["304050"],
                     desc:["Credit"]
                    },
                    {id: ["304051"],
                    desc: ["Debit"]
                    }]
            },
        ],
    }
    ],
}


var tabcounter = 0;
var sgtabcounter = 0;

// ------------------------------------
// Dynamical loading the exists data in ep.xml
// --------------------------------------
$(document).on('click','.epxmlButton', function(e){
    e.preventDefault();
    $('#epxmlbtn').css('display', 'block');
    var i;
    tabcounter=0;
    for (i=0; i<epxml.endPointID.length; i++) {
        counter = i+1;

        var newTabMenu = $(document.createElement('div')).attr("id", 'epTabMenu' + counter);
        newTabMenu.after().html ('<button class="tablinks" onclick="endPoint(event, \''
                                + epxml.endPointID[i] 
                                + '\')">' 
                                + epxml.endPointName[i]
                                + '</button>');
        newTabMenu.appendTo("#epTabMenu");

        var newTextBoxDiv = $(document.createElement('div'))
	         .attr("id", 'eptab' + counter);
        
        newTextBoxDiv.after().html('<div id = "' + epxml.endPointID[i] + '" class="tabcontent">'
                            + '<label class = "epSubTitle"> General Settings</label>'
                            + '<hr/>'
                            + '<label> Endpoint ID:</label>'
                            + '<input type = "text" class = "endpointID" id = "endpointID'+ counter +'" value = "'+ epxml.endPointID[i] +'"/>'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '<label> Endpoint Name: </label>'
                            + '<input type = "text" class = "endpointName" id = "endpointName'+ counter +'" value = "'+ epxml.endPointName[i] +'"/>'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '<label> No Delay for Endpoint TCP Sockets: </label>'
                            + '<select class = "noDelayTCPSelector" id = "noDelayTCPSelector' + counter + '">'
                            + '</select>'
                            + '<p></p>'
                            + '<label class = "epSubTitle"> PCR Configuration </label>'
                            + '<button class = "oldAddPCRButton" id = "oldAddPCRButton" data-epid = "'+ epxml.endPointID[i] +'" style= "width: 23px; height: 20px">'
                            + '<i class = "fa fa-plus-square" style = "color: #3498db"> </i>'
                            + '</button>'
                            + '<hr/>'

                            + '<div class="pcrtabs" id = "pcrtabs">'
                            + '<div id="pcrtabMenu' + counter + '">'
                            + '</div>'
                            + '<div class="pcrcontent" id = "pcrcontent' + counter + '">'
                            + '</div>'
                            + '</div>'

                            + '<input type = "button" value = "Remove" class = "removeEPbtn" onclick = "removeEndPoint('+ counter +')"/>'
                            + '<input type = "button" value = "Save" class = "saveEPbtn"/>'
                            + '</div>'
                            + '</div>'
                            + '</div>'
                        );
        newTextBoxDiv.appendTo("#epTabContentContainer");
   
        // Add the No Delay selector Selector
        var h;
        for (h=0; h < yesOrNoChoices.length; h++) {
            if (epxml.noDelayTCP[i] == yesOrNoChoices[h]){
                $("#noDelayTCPSelector"+counter).append('<option selected = "selected" value = "' +yesOrNoChoices[h] +'">' + yesOrNoChoices[h] +"</option>");
            } else {
             $("#noDelayTCPSelector"+counter).append('<option value = "' +yesOrNoChoices[h] +'">' + yesOrNoChoices[h] +"</option>");
            }
        }

        // Add PCR
        var j = 0;
        for (j=0; j < epxml.pcr[i].pcrID.length; j++){
            tabcounter++;
            var newPCRTab = $(document.createElement('div')).attr("id", 'pcrtab' + tabcounter).attr("class", 'pcrtab');
            newPCRTab.after().html('<button class="tab-toggle" onclick = "pcr(event,\''
                                + epxml.pcr[i].pcrID[j]
                                + '\')">'
                                + epxml.pcr[i].pcrName[j]
                                + '</button>');

            newPCRTab.appendTo("#pcrtabMenu"+counter);     
            
            var newPCRTabContent = $(document.createElement('div')).attr("id", 'pcrTab' + tabcounter);
            newPCRTabContent.after().html('<div id = "'+ epxml.pcr[i].pcrID[j] + '" class = "pcrTabContent">'
                            + '<h3 class="pcrheading">General Settings</h3>'
                            + '<hr/>'
                            + '<label> PCR ID:</label>'
                            + '&nbsp'
                            + '<input type = "text" class = "pcrID" id = "pcrID'+ tabcounter +'" value = "'+ epxml.pcr[i].pcrID[j] +'"/>'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '<label> PCR Name:</label>'
                            + '&nbsp'
                            + '<input type = "text" class = "pcrName" id = "pcrName'+ tabcounter +'" value = "'+ epxml.pcr[i].pcrName[j] +'"/>'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '<p></p>'
                            + '<h3 class="pcrheading">Station Group'
                            + '<button class = "oldAddSGButton" id = "oldAddSGButton" data-epid = "'+ epxml.endPointID[i] +'" data-pcrid="'+ epxml.pcr[i].pcrID[j] +'" data-tabcounterValue="'+ tabcounter +'" style= "width: 24px; height: 20px; position: absolutel; left: 650px">'
                            + '<i class = "fa fa-plus-square" style = "color: #3498db"> </i>'
                            + '</button>'
                            + '</h3>'
                            + '<hr/>'

                            + '<div class="stationGrouptabs" id = "stationGrouptabs">'
                            + '<div id="stationGrouptabMenu' + tabcounter + '">'
                            + '</div>'
                            + '<div class="stationGroupcontent" id = "stationGroupcontent' + tabcounter + '">'
                            + '</div>'
                            + '</div>' 
                            
                            + '<div class = "pcr-clear">'
                            + '<input type = "button" value = "Remove" class = "removePCRbtn" onclick = "removePCR('+ i +','+ j + ',' + tabcounter +')"/>'
                            + '<input type = "button" value = "Save" class = "savePCRbtn"/>'
                            + '</div>'
                            + '</div>');
                
                
                newPCRTabContent.appendTo("#pcrcontent"+counter); 

                // Auto load the station
                var k;
                for (k=0; k < epxml.pcr[i].stationGroup[j].stationGroupID.length; k++){
                    sgtabcounter++;
                    var newSGTab = $(document.createElement('div')).attr("id", 'sgtab' + sgtabcounter).attr("class", 'sgtab');
                    newSGTab.after().html('<button class="tab-toggle1" onclick = "stationGroup(event,\''
                                + epxml.pcr[i].stationGroup[j].stationGroupID[k]
                                + '\')">'
                                + epxml.pcr[i].stationGroup[j].stationGroupName[k]
                                + '</button>');

                    newSGTab.appendTo("#stationGrouptabMenu"+tabcounter);     
            
                    var newSGTabContent = $(document.createElement('div')).attr("id", 'sgTab' + sgtabcounter);
                    newSGTabContent.after().html('<div id = "'+ epxml.pcr[i].stationGroup[j].stationGroupID[k] + '" class = "sgTabContent">'
                                                + '<h3 class="pcrheading">General Settings</h3>'
                                                + '<hr/>'
                                                + '<label> Station Group ID:</label>'
                                                + '&nbsp'
                                                + '<input style="width:100px" type = "text" class = "sgID" id = "sgID'+ sgtabcounter +'" value = "'+ epxml.pcr[i].stationGroup[j].stationGroupID[k] +'"/>'
                                                + '<label style="position: relative; left: 136px;"> Station Group Name:</label>'
                                                + '&nbsp'
                                                + '<input style="position: relative; width:100px; left: 138px" type = "text" class = "sgName" id = "sgName'+ sgtabcounter +'" value = "'+ epxml.pcr[i].stationGroup[j].stationGroupName[k] +'"/>'
                                                + '<p></p>'
                                                + '<label> Access Point: </label>'
                                                + '&nbsp'
                                                + '<select class="sgAPSelector" id="sgAPSelector'+ sgtabcounter +'" >'
                                                + '</select>'
                                                + '<label style="position: relative; left: 184px"> Maximum Number of Sessions Supported:</label>'
                                                + '<input stype = "text" style = "width: 30px; position: relative; left: 187px" class = "sgmaxSession" id = "sgmaxSession'+ sgtabcounter +'" value = "'+ epxml.pcr[i].stationGroup[j].maxSessions[k] +'"/>'
                                                + '<p></p>'
                                                + '<label> Session Policy: </label>'
                                                + '<select class="sgSPSelector" id="sgSPSelector'+ sgtabcounter +'" >'
                                                + '</select>'
                                                + '<label style="position: relative; left: 163px"> Use Source Port Based Authentication: </label>'
                                                + '<select style="position: relative; left:162px" class="sgSourcePortAuthSelector" id="sgSourcePortAuthSelector'+ sgtabcounter +'" >'
                                                + '</select>' 
                                                + '<p></p>'
                                                + '<h3 class="pcrheading">Auth Address</h3>'
                                                + '<hr/>'
                                                + '<div class = "authAddressSettings">'
                                                + 'Network Address: <select class = "adIPAddressSelector" id = "adIPAddressSelector' + sgtabcounter + '">'
                                                + '</select>'
                                                + '<label style="position: relative; ">Port Number:</label>'
                                                + '<select style= "position: relative; " class="adPortNumberSelector" id = "adPortNumberSelector'+sgtabcounter+'">'
                                                + '</select>'
                                                + '<input style="position:relative; " type="button" value="Add" data-sgid="' + epxml.pcr[i].stationGroup[j].stationGroupID[k] + '" data-pcrid="'+epxml.pcr[i].pcrID[j]+'" data-epid="'+epxml.endPointID[i]+'" class = "addAuthAddress"/>'
                                                + '<hr/>'
                                                + '<table id="authAddresstableID' + sgtabcounter + '" border="1" align="center" width="60%">'
                                                + '<thead>'
                                                + '<tr>'
                                                + '<th style = "width: 130px; text-align: center;">IP Address</th>'
                                                + '<th style = "width: 130px; text-align: center;">Port Number</th>'
                                                + '<th style = "width: 80px; text-align: center;">  </th>'
                                                + '</tr>'
                                                + '</thead>'
                                                + '<tbody id="authAddresstbodyID' + sgtabcounter + '" class = "authAddresstbodyID">'
                                                + '</tbody>'
                                                + '</table>'
                                                + '</div>'
                                                + '<p></p>'
                                                + '<h3 class="pcrheading">Configuration of Station</h3>'
                                                + '<hr/>'
                                                + '<div class = "stationsSettings">'
                                                + 'Station ID: <input type="text" class="stationIDInput" style = "width: 50px"/>'
                                                + '&nbsp'
                                                + '&nbsp'
                                                + 'Description:<select class="stationDescSelector" id = "stationDescSelector'+sgtabcounter+'">'
                                                + '</select>'
                                                + '&nbsp'
                                                + '&nbsp'
                                                + '<input type="button" value="Add" data-sgid="' + epxml.pcr[i].stationGroup[j].stationGroupID[k] + '" data-pcrid="'+epxml.pcr[i].pcrID[j]+'" data-epid="'+epxml.endPointID[i]+'" class = "addStation"/>'
                                                + '<hr/>'
                                                + '<table id="stationInfotableID' + sgtabcounter + '" border="1" align="center" width="60%">'
                                                + '<thead>'
                                                + '<tr>'
                                                + '<th style = "width: 130px; text-align: center;">Station ID</th>'
                                                + '<th style = "width: 130px; text-align: center;">Description</th>'
                                                + '<th style = "width: 80px; text-align: center;">  </th>'
                                                + '</tr>'
                                                + '</thead>'
                                                + '<tbody id="stationInfotbodyID' + sgtabcounter + '" class = "stationInfotbodyID">'
                                                + '</tbody>'
                                                + '</table>'
                                                + '</div>' 
                                                + '<div class = "sg-clear">'
                                                + '<input type = "button" value = "Remove" class = "removeSGbtn" onclick = "removeSG('+ i + ',' + j + ',' + k + ',' + sgtabcounter +')"/>'
                                                + '<input type = "button" value = "Save" class = "saveSGbtn"/>'      
                                                + '</div>'
                                                + '</div>');
                    newSGTabContent.appendTo("#stationGroupcontent"+tabcounter); 

                     var m;
                    for (m=0; m<ipAddressChoices.length; m++){
                        $("#adIPAddressSelector"+sgtabcounter).append('<option value = "' + ipAddressChoices[m] +'">' + ipAddressChoices[m] +"</option>");
                    }
                    
                    var m;
                    for (m=0; m<portNumberChoices.length; m++){
                        $("#adPortNumberSelector"+sgtabcounter).append('<option value = "' + portNumberChoices[m] +'">' + portNumberChoices[m] +"</option>");
                    }

                     var m;
                    for (m=0; m<stationDescChoices.length; m++){
                        $("#stationDescSelector"+sgtabcounter).append('<option value = "' + stationDescChoices[m] +'">' + stationDescChoices[m] +"</option>");
                    }


                    
                    // Auto Load Access Point
                    var h;
                    for (h=0; h<pcxml.apID.length; h++){
                        if (epxml.pcr[i].stationGroup[j].accessPoint[k]==pcxml.apID[h]){
                            $("#sgAPSelector" + sgtabcounter).append('<option selected = "selected" value = "' +pcxml.apID[h] +'">' + pcxml.apID[h] +"</option>");
                        }else{
                            $("#sgAPSelector" + sgtabcounter).append('<option value = "' +pcxml.apID[h] +'">' + pcxml.apID[h] +"</option>");
                        }
                    }

                    // Auto Load Session Policy
                    var h;
                    for (h=0; h<epdefault.epSessionID.length; h++){
                        if (epxml.pcr[i].stationGroup[j].sessionPolicy[k]==epdefault.epSessionID[h]){
                            $("#sgSPSelector" + sgtabcounter).append('<option selected = "selected" value = "' +epdefault.epSessionID[h] +'">' + epdefault.epSessionID[h] +"</option>");
                        }else{
                            $("#sgSPSelector" + sgtabcounter).append('<option value = "' +epdefault.epSessionID[h] +'">' + epdefault.epSessionID[h] +"</option>");
                        }
                    }

                    // Auto Load Sorce Based Auth Choice
                    var h;
                    for (h=0; h<yesOrNoChoices.length; h++){
                        if (epxml.pcr[i].stationGroup[j].sourcePortAuth[k]==yesOrNoChoices[h]){
                            $("#sgSourcePortAuthSelector" + sgtabcounter).append('<option selected = "selected" value = "' + yesOrNoChoices[h] +'">' + yesOrNoChoices[h] +"</option>");
                        }else{
                            $("#sgSourcePortAuthSelector" + sgtabcounter).append('<option value = "' +yesOrNoChoices[h] +'">' + yesOrNoChoices[h] +"</option>");
                        }
                    }

                    // Auto load Auth Address
                    var m;
                    for (m=0; m<epxml.pcr[i].stationGroup[j].authAddress[k].ipAddress.length; m++){
                        console.log("Auth Address")
                        var $delete = $("<input />").attr("type","button").attr("value","Remove").attr("data-subtabid",epxml.pcr[i].stationGroup[j].stationGroupID[k]).attr("data-tabid",epxml.pcr[i].pcrID[j]).attr("data-mainid", epxml.endPointID[i]);
                        var $tr = $("<tr></tr>");
                        var $td1 = $("<td></td>").html(epxml.pcr[i].stationGroup[j].authAddress[k].ipAddress[m]);
                        var $td2 = $("<td></td>").html(epxml.pcr[i].stationGroup[j].authAddress[k].portNumber[m]);
                        var $td3 =  $("<td></td>").append($delete);
                        $tr.append($td1);
                        $tr.append($td2);
                        $tr.append($td3);
         
                        $("#authAddresstbodyID" + sgtabcounter).append($tr);
                    
                        // delete Routing Addresses related from the array
                        $delete.click(function(e){
                            e.preventDefault();
                            $tr = $(this).parent().parent();
                            deleteAddress = $($tr.find("td").get(0)).text();
                            
                            $tr.remove();
                            var subTab = $(this).data('subtabid');
                            var parentTab = $(this).data('tabid').toString();
                            var mainTab = $(this).data('mainid');

                            var firstLo = jQuery.inArray(mainTab,epxml.endPointID);
                            var secondLo = jQuery.inArray(parentTab, epxml.pcr[firstLo].pcrID)
                            var thirdLo = jQuery.inArray(subTab, epxml.pcr[firstLo].stationGroup[secondLo].stationGroupID)
                            var deleteLo = jQuery.inArray(deleteAddress, epxml.pcr[firstLo].stationGroup[secondLo].authAddress[thirdLo].ipAddress);
                            
                            epxml.pcr[firstLo].stationGroup[secondLo].authAddress[thirdLo].ipAddress.splice(deleteLo,1);
                            epxml.pcr[firstLo].stationGroup[secondLo].authAddress[thirdLo].portNumber.splice(deleteLo,1);
                            
                            console.log(deleteLo);
                        });
                    }

                    // Auto load Station Info
                    var m;
                    for (m=0; m<epxml.pcr[i].stationGroup[j].station[k].id.length; m++){
                        console.log("Station Info")
                        var $delete = $("<input />").attr("type","button").attr("value","Remove").attr("data-subtabid",epxml.pcr[i].stationGroup[j].stationGroupID[k]).attr("data-tabid",epxml.pcr[i].pcrID[j]).attr("data-mainid", epxml.endPointID[i]);
                        var $tr = $("<tr></tr>");
                        var $td1 = $("<td></td>").html(epxml.pcr[i].stationGroup[j].station[k].id[m]);
                        var $td2 = $("<td></td>").html(epxml.pcr[i].stationGroup[j].station[k].desc[m]);
                        var $td3 =  $("<td></td>").append($delete);
                        $tr.append($td1);
                        $tr.append($td2);
                        $tr.append($td3);
         
                        $("#stationInfotableID" + sgtabcounter).append($tr);
                    
                        // delete Routing Addresses related from the array
                        $delete.click(function(e){
                            e.preventDefault();
                            $tr = $(this).parent().parent();
                            deleteAddress = $($tr.find("td").get(0)).text();
                            
                            $tr.remove();
                            var subTab = $(this).data('subtabid');
                            var parentTab = $(this).data('tabid').toString();
                            var mainTab = $(this).data('mainid');

                            var firstLo = jQuery.inArray(mainTab,epxml.endPointID);
                            var secondLo = jQuery.inArray(parentTab, epxml.pcr[firstLo].pcrID)
                            var thirdLo = jQuery.inArray(subTab, epxml.pcr[firstLo].stationGroup[secondLo].stationGroupID)
                            var deleteLo = jQuery.inArray(deleteAddress, epxml.pcr[firstLo].stationGroup[secondLo].station[thirdLo].id);
                            
                            epxml.pcr[firstLo].stationGroup[secondLo].station[thirdLo].id.splice(deleteLo,1);
                            epxml.pcr[firstLo].stationGroup[secondLo].station[thirdLo].desc.splice(deleteLo,1);
                            
                            console.log(deleteLo);
                        });
                    }


                };  
            };  
        
        }
})                         

// ----------------------
//  Open the correspoding span
// ---------------------
function endPoint(evt, name) {
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

// --------------------------------
// Open the PCR Span
// --------------------------------
function pcr(evt, name) {
    // Declare all variables
    console.log("function PCR")
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("pcrTabContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-toggle");
    tabContentName = document.getElementsByClassName("pcrTabContent")
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

// --------------------------------
// Open the Station Group Span
// --------------------------------
function stationGroup(evt, name) {
    // Declare all variables
    console.log("function Station Group")
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("sgTabContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-toggle1");
    tabContentName = document.getElementsByClassName("sgTabContent")
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

// -------------------------
// Remove the whole SG
// --------------------------
$(document).on('click', ".removeSGbtn", function(e){
    e.preventDefault();
    $(this).parents(".sgTabContent").empty();
    sgtabcounter--;
})

function removeSG(epnumber, pcrnumber,sgnumber, sgtabnumber){
    // delete in the epxml Array
    epxml.pcr[epnumber].stationGroup[pcrnumber].stationGroupID.splice(sgnumber,1);
    epxml.pcr[epnumber].stationGroup[pcrnumber].stationGroupName.splice(sgnumber,1);
    epxml.pcr[epnumber].stationGroup[pcrnumber].accessPoint.splice(sgnumber,1);
    epxml.pcr[epnumber].stationGroup[pcrnumber].maxSessions.splice(sgnumber,1);
    epxml.pcr[epnumber].stationGroup[pcrnumber].sessionPolicy.splice(sgnumber,1);
    epxml.pcr[epnumber].stationGroup[pcrnumber].sourcePortAuth.splice(sgnumber,1);
    epxml.pcr[epnumber].stationGroup[pcrnumber].authAddress.splice(sgnumber,1);
    epxml.pcr[epnumber].stationGroup[pcrnumber].station.splice(sgnumber,1);

    // delete the Tab Menu
    document.getElementById("sgtab"+sgtabnumber).remove();
    document.getElementById("sgTab"+sgtabnumber).remove();
}

// ----------------------
// Remove the whole PCR
// -----------------------
$(document).on('click', ".removePCRbtn", function(e){
    e.preventDefault();
    $(this).parents(".pcrTabContent").empty();
    tabcounter--;
})
function removePCR(epnumber, pcrnumber, tabnumber){
    // delete in the epxml Array
    epxml.pcr[epnumber].pcrID.splice(pcrnumber,1);
    epxml.pcr[epnumber].pcrName.splice(pcrnumber,1);
    epxml.pcr[epnumber].stationGroup.splice(pcrnumber,1);

    // delete the Tab Menu
    document.getElementById("pcrTab"+tabnumber).remove();
    document.getElementById("pcrtab"+tabnumber).remove();
}
// ------------------------------
// Remove the whole End Point
// -------------------------------
$(document).on('click', ".removeEPbtn", function(e){
    e.preventDefault();
    $(this).parents(".tabcontent").empty();
    counter--;
})

function removeEndPoint(number){
    
    var deleteNumber = Number(number)-1;
    console.log(deleteNumber);
    // delete in the epxml Array
    epxml.endPointID.splice(deleteNumber,1);
    epxml.endPointName.splice(deleteNumber,1);
    epxml.noDelayTCP.splice(deleteNumber,1);
    epxml.pcr.splice(deleteNumber,1);

    // delete the Tab Menu
    document.getElementById("epTabMenu"+number).remove();
}

// -----------------------
// Add new End Point
// ----------------------
$(document).on('click', ".addEPButton", function(e){
    e.preventDefault();
    $('#addEndPointbtn').css('display', 'block');
})

$(document).on('click', ".addNewEPbtn", function(e){
    e.preventDefault();
    counter++;
    var newEndpointID = $("#addEndPointbtn").find(".newEndpointIDInput").val();
    var newEndpointName = $("#addEndPointbtn").find(".newEndpointNameInput").val();

    var newTabMenu = $(document.createElement('div')).attr("id", 'epTabMenu' + counter);
        newTabMenu.after().html ('<button class="tablinks" onclick="endPoint(event, \''
                                + newEndpointID 
                                + '\')">' 
                                + newEndpointName
                                + '</button>');
        newTabMenu.appendTo("#epTabMenu");

        var newTextBoxDiv = $(document.createElement('div'))
	         .attr("id", 'eptab' + counter);
        
        newTextBoxDiv.after().html('<div id = "' + newEndpointID  + '" class="tabcontent">'
                            + '<label class = "epSubTitle"> General Settings</label>'
                            + '<hr/>'
                            + '<label> Endpoint ID:</label>'
                            + '<input type = "text" class = "endpointID" id = "endpointID'+ counter +'" value = "'+ newEndpointID +'"/>'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '<label> Endpoint Name: </label>'
                            + '<input type = "text" class = "endpointName" id = "endpointName'+ counter +'" value = "'+ newEndpointName +'"/>'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '<label> No Delay for Endpoint TCP Sockets: </label>'
                            + '<select class = "noDelayTCPSelector" id = "noDelayTCPSelector' + counter + '">'
                            + '</select>'
                            + '<p></p>'

                            + '<label class = "epSubTitle"> PCR Configuration </label>'
                            + '<button class = "addPCRButton" id = "addPCRButton" data-epid = "'+ newEndpointID +'" style= "width: 20px; height: 20px">'
                            + '<i class = "fa fa-plus-square" style = "color: #3498db"> </i>'
                            + '</button>'
                            + '<hr/>'
                            + '<div class="pcrtabs" id = "pcrtabs">'
                            + '<div id="pcrtabMenu' + counter + '">'
                            + '</div>'
                            + '<div class="pcrcontent" id = "pcrcontent' + counter + '">'
                            + '</div>'
                            + '</div>'

                            + '<input type = "button" value = "Remove" class = "removeEPbtn" onclick = "removeEndPoint('+ counter +')"/>'
                            + '<input type = "button" value = "Save" class = "saveEPbtn"/>'
                            + '</div>'
                            + '</div>'
                            + '</div>'
                        );
        newTextBoxDiv.appendTo("#epTabContentContainer");
   // Add the No Delay selector Selector
    var h;
    for (h=0; h < yesOrNoChoices.length; h++) {
        $("#noDelayTCPSelector"+counter).append('<option value = "' +yesOrNoChoices[h] +'">' + yesOrNoChoices[h] +"</option>");
    }
    // Push new Add data in epxml Array
    epxml.endPointID.push(newEndpointID);
    epxml.endPointName.push(newEndpointName);
    epxml.noDelayTCP.push("");
    epxml.pcr.push({
        pcrID: [],
        pcrName: [],
        stationGroup:[{
            stationGroupID: [],
            stationGroupName: [],
            accessPoint: [],
            maxSessions: [],
            sessionPolicy: [],
            sourcePortAuth: [],
            authAddress:[{
                ipAddress:[],
                portNumber:[]
            }],
            station:[{
                id:[],
                desc:[],
            }],
        }],
    })
    document.getElementById('addEndPointbtn').style.display = 'none';
    
})

// ---------------------------------
// Add new PCR in Exist EP page
// ---------------------------------
$(document).on('click', ".oldAddPCRButton", function(e){
    e.preventDefault();
    var currentep = $(this).data('epid');
    $('#addPCRbtn').css('display', 'block');
    var newTextBoxDiv = $(document.createElement('div'))
	     .attr("id", 'addNewPCRPopUp');
        
    newTextBoxDiv.after().html(
        '<form class = "modal-content-addNewPCR animate">'
        + '<div class = "newPCRContainer" id = "newPCRContainer">'
        + '<div class = "title_content">'
        + '<div class = "addNewEndPCRTitle">Add New PCR</div>'
        + '<div class = "clear"></div>'
        + '</div>'
        + '<label> New PCR ID:</label>'
        + '<input placeholder = "Enter PCR ID" id = "newPCRIDInput" class = "newPCRIDInput" required style = "left: 124px; position: absolute">'
        + '<p></p>'
        + '<label> New PCR Name:</label>'
        + '<input placeholder = "Enter Station Group Name" id = "newPCRNameInput" class = "newPCRNameInput" required>'
        + '<p></p>'
        + '<div class ="pcr-clearfix">'
        + '<input  type = "reset" class = "resetbtn"></input>'
        + '<button class = "oldAddNewPCRbtn" id = "oldAddNewPCRbtn" data-epid="'+currentep+'">Add</button>'
        + '</div>'
        + '</div>'
        + '</form>'
    )
newTextBoxDiv.appendTo("#addPCRbtn");
})

$(document).on('click', ".oldAddNewPCRbtn", function(e){
    e.preventDefault();
    tabcounter++;
    var currentEP = $(this).data('epid');
    var currentLol = jQuery.inArray(currentEP,epxml.endPointID);
    var insertTabLol = currentLol+1;
    var newPCRID = $("#addPCRbtn").find(".newPCRIDInput").val();
    var newPCRName = $("#addPCRbtn").find(".newPCRNameInput").val();

    var newPCRTab = $(document.createElement('div')).attr("id", 'pcrtab' + tabcounter).attr("class", 'pcrtab');
    newPCRTab.after().html('<button class="tab-toggle" onclick = "pcr(event,\''
                                + newPCRID
                                + '\')">'
                                + newPCRName
                                + '</button>');
    newPCRTab.appendTo("#pcrtabMenu"+ insertTabLol);     
            
    var newPCRTabContent = $(document.createElement('div')).attr("id", 'pcrTab' + tabcounter);
    newPCRTabContent.after().html('<div id = "'+ newPCRID + '" class = "pcrTabContent">'
                            + '<h3 class="pcrheading">General Settings</h3>'
                            + '<hr/>'
                            + '<label> PCR ID:</label>'
                            + '&nbsp'
                            + '<input type = "text" class = "pcrID" id = "pcrID'+ tabcounter +'" value = "'+ newPCRID +'"/>'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '<label> PCR Name:</label>'
                            + '&nbsp'
                            + '<input type = "text" class = "pcrName" id = "pcrName'+ tabcounter +'" value = "'+ newPCRName +'"/>'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '<p></p>'
                            + '<h3 class="pcrheading">Station Group'
                            + '<button class = "addSGButton" id = "addSGButton" data-epid = "'+ currentEP +'" data-pcrid="'+ newPCRID +'" data-tabcounterValue="'+ tabcounter +'" style= "width: 20px; height: 20px">'
                            + '<i class = "fa fa-plus-square" style = "color: #3498db"> </i>'
                            + '</button>'
                            + '</h3>'
                            + '<hr/>'

                            + '<div class="stationGrouptabs" id = "stationGrouptabs">'
                            + '<div id="stationGrouptabMenu' + tabcounter + '">'
                            + '</div>'
                            + '<div class="stationGroupcontent" id = "stationGroupcontent' + tabcounter + '">'
                            + '</div>'
                            + '</div>' 

                            + '</div>');
                
                
                newPCRTabContent.appendTo("#pcrcontent"+insertTabLol); 

    // Push new Add data in epxml Array
    epxml.pcr[currentLol].pcrID.push(newPCRID);
    epxml.pcr[currentLol].pcrName.push(newPCRName);
    epxml.pcr[currentLol].stationGroup.push({
            stationGroupID: [],
            stationGroupName: [],
            accessPoint: [],
            maxSessions: [],
            sessionPolicy: [],
            sourcePortAuth: [],
            authAddress:[{
                ipAddress:[],
                portNumber:[]
            }],
            station:[{
                id:[],
                desc:[],
            }],
    })
    document.getElementById('addPCRbtn').style.display = 'none';
    $("#addPCRbtn").empty();
    
})

// -----------------------------------
// Add new PCR in Newly added EP page
// -----------------------------------

$(document).on('click', ".addPCRButton", function(e){
    e.preventDefault();
    var currentep = $(this).data('epid');
    $('#addPCRbtn').css('display', 'block');
    var newTextBoxDiv = $(document.createElement('div'))
	     .attr("id", 'addNewPCRPopUp');
        
    newTextBoxDiv.after().html(
        '<form class = "modal-content-addNewPCR animate">'
        + '<div class = "newPCRContainer" id = "newPCRContainer">'
        + '<div class = "title_content">'
        + '<div class = "addNewEndPCRTitle">Add New PCR</div>'
        + '<div class = "clear"></div>'
        + '</div>'
        + '<label> New PCR ID:</label>'
        + '<input placeholder = "Enter PCR ID" id = "newPCRIDInput" class = "newPCRIDInput" required style = "left: 124px; position: absolute">'
        + '<p></p>'
        + '<label> New PCR Name:</label>'
        + '<input placeholder = "Enter Station Group Name" id = "newPCRNameInput" class = "newPCRNameInput" required>'
        + '<p></p>'
        + '<div class ="pcr-clearfix">'
        + '<input  type = "reset" class = "resetbtn"></input>'
        + '<button class = "addNewPCRbtn" id = "addNewPCRbtn" data-epid="'+currentep+'">Add</button>'
        + '</div>'
        + '</div>'
        + '</form>'
    )
newTextBoxDiv.appendTo("#addPCRbtn");
})

$(document).on('click', ".addNewPCRbtn", function(e){
    e.preventDefault();
    tabcounter++;
    var currentEP = $(this).data('epid');
    var currentLol = jQuery.inArray(currentEP,epxml.endPointID);
    var insertTabLol = currentLol+1;
    var newPCRID = $("#addPCRbtn").find(".newPCRIDInput").val();
    var newPCRName = $("#addPCRbtn").find(".newPCRNameInput").val();

    // Push new Add data in epxml Array
    epxml.pcr[currentLol].pcrID.push(newPCRID);
    epxml.pcr[currentLol].pcrName.push(newPCRName);

    var newPCRLol = jQuery.inArray(newPCRID, epxml.pcr[currentLol].pcrID); 

    var newPCRTab = $(document.createElement('div')).attr("id", 'pcrtab' + tabcounter).attr("class", 'pcrtab');
    newPCRTab.after().html('<button class="tab-toggle" onclick = "pcr(event,\''
                                + newPCRID
                                + '\')">'
                                + newPCRName
                                + '</button>');
    newPCRTab.appendTo("#pcrtabMenu"+ insertTabLol);     
            
    var newPCRTabContent = $(document.createElement('div')).attr("id", 'pcrTab' + tabcounter);
    newPCRTabContent.after().html('<div id = "'+ newPCRID + '" class = "pcrTabContent">'
                            + '<h3 class="pcrheading">General Settings</h3>'
                            + '<hr/>'
                            + '<label> PCR ID:</label>'
                            + '&nbsp'
                            + '<input type = "text" class = "pcrID" id = "pcrID'+ tabcounter +'" value = "'+ newPCRID +'"/>'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '<label> PCR Name:</label>'
                            + '&nbsp'
                            + '<input type = "text" class = "pcrName" id = "pcrName'+ tabcounter +'" value = "'+ newPCRName +'"/>'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '<p></p>'
                            + '<h3 class="pcrheading">Station Group'
                            + '<button class = "addSGButton" id = "addSGButton" data-epid = "'+ currentEP +'" data-pcrid="'+ newPCRID +'" data-tabcounterValue="'+ tabcounter +'" style= "width: 20px; height: 20px">'
                            + '<i class = "fa fa-plus-square" style = "color: #3498db"> </i>'
                            + '</button>'
                            + '</h3>'
                            + '<hr/>'

                            + '<div class="stationGrouptabs" id = "stationGrouptabs">'
                            + '<div id="stationGrouptabMenu' + tabcounter + '">'
                            + '</div>'
                            + '<div class="stationGroupcontent" id = "stationGroupcontent' + tabcounter + '">'
                            + '</div>'
                            + '</div>' 
                            + '<div class = "pcr-clear">'
                            + '<input type = "button" value = "Remove" class = "removePCRbtn" onclick = "removePCR('+ currentLol +','+ newPCRLol + ',' + tabcounter +')"/>'
                            + '<input type = "button" value = "Save" class = "savePCRbtn"/>'
                            + '</div>'
                            + '</div>');
                
                
                newPCRTabContent.appendTo("#pcrcontent"+insertTabLol); 

    

    document.getElementById('addPCRbtn').style.display = 'none';
    
})

//---------------------------------------
// Add new SG in exist PCR
// ---------------------------------------
$(document).on('click', ".oldAddSGButton", function(e){
    e.preventDefault();
    var currentEP = $(this).data('epid');
    var currentPCR = $(this).data('pcrid');
    var currentTabcounterValue = $(this).data('tabcountervalue');

    $('#addSGbtn').css('display', 'block');

    var newTextBoxDiv = $(document.createElement('div'))
	     .attr("id", 'addNewSGPopUp');
    newTextBoxDiv.after().html(
        '<form class = "modal-content-addNewStation animate">'
        + '<div class = "newSGContainer" id = "newSGContainer">'
        + '<div class = "title_content">'
        + '<div class = "addNewStationGroupTitle">Add New Station Group</div>'
        + '<div class = "clear"></div>'
        + '</div>'
        + '<label>  New Station Group ID:</label>'
        + '<input placeholder = "Enter Station Group ID" id = "newSGIDInput" class = "newSGIDInput" style="position: absolute; left: 190px" required>'
        + '<p></p>'
        + '<label> New Station Group Name:</label>'
        + '<input placeholder = "Enter Station Group Name" id = "newSGNameInput" class = "newSGNameInput" style="position: absolute; left: 190px" required>'
        + '<p></p>'
        + '<div class ="sg-clearfix">'
        + '<input  type = "reset" class = "resetbtn"></input>'
        + '<button class = "oldAddNewSGbtn" id = "oldAddNewSGbtn" data-epid = "'+ currentEP +'" data-pcrid="'+ currentPCR +'" data-tabcounterValue="'+ currentTabcounterValue +'">Add</button>'
        + '</div>'
        + '</div>'
        + '</form>'
    )
newTextBoxDiv.appendTo("#addSGbtn");
})

$(document).on('click', ".oldAddNewSGbtn", function(e){
    e.preventDefault();
    sgtabcounter++;
    var currentEP = $(this).data('epid');
    var currentPCR = $(this).data('pcrid').toString();
    var currentTabcounterValue = $(this).data('tabcountervalue');
    var currentEPLol = jQuery.inArray(currentEP,epxml.endPointID)
    var currentPCRLol = jQuery.inArray(currentPCR,epxml.pcr[currentEPLol].pcrID)
    var newSGID = $("#addSGbtn").find(".newSGIDInput").val();
    var newSGName = $("#addSGbtn").find(".newSGNameInput").val();

    // Push new Add data in epxml Array
    epxml.pcr[currentEPLol].stationGroup[currentPCRLol].stationGroupID.push(newSGID);
    epxml.pcr[currentEPLol].stationGroup[currentPCRLol].stationGroupName.push(newSGName);
    epxml.pcr[currentEPLol].stationGroup[currentPCRLol].authAddress.push({ipAddress:[],portNumber:[]});
    epxml.pcr[currentEPLol].stationGroup[currentPCRLol].station.push({id:[],desc:[]});

    var newSGLol = jQuery.inArray(newSGID, epxml.pcr[currentEPLol].stationGroup[currentPCRLol].stationGroupID);

    var newSGTab = $(document.createElement('div')).attr("id", 'sgtab' + sgtabcounter).attr("class", 'sgtab');
    newSGTab.after().html('<button class="tab-toggle1" onclick = "stationGroup(event,\''
                        + newSGID
                        + '\')">'
                        + newSGName
                        + '</button>');

    newSGTab.appendTo("#stationGrouptabMenu"+currentTabcounterValue);     
            
    var newSGTabContent = $(document.createElement('div')).attr("id", 'sgTab' + sgtabcounter);
    newSGTabContent.after().html('<div id = "'+ newSGID + '" class = "sgTabContent">'
                                + '<h3 class="pcrheading">General Settings</h3>'
                                + '<hr/>'
                                + '<label> Station Group ID:</label>'
                                + '&nbsp'
                                + '<input style="width:100px" type = "text" class = "sgID" id = "sgID'+ sgtabcounter +'" value = "'+ newSGID +'"/>'
                                + '<label style="position: relative; left: 136px;"> Station Group Name:</label>'
                                + '&nbsp'
                                + '<input tyle="position: relative; width:100px; left: 138px" type = "text" class = "sgName" id = "sgName'+ sgtabcounter +'" value = "'+ newSGName +'"/>'
                                + '<p></p>'
                                + '<label> Access Point: </label>'
                                + '&nbsp'
                                + '<select class="sgAPSelector" id="sgAPSelector'+ sgtabcounter +'" >'
                                + '</select>'
                                + '<label style="position: relative; left: 184px"> Maximum Number of Sessions Supported:</label>'
                                + '<input type = "text" style = "width: 30px; position: relative; left: 187px" class = "sgmaxSession" id = "sgmaxSession'+ sgtabcounter +'" />'
                                + '<p></p>'
                                + '<label> Session Policy: </label>'
                                + '<select class="sgSPSelector" id="sgSPSelector'+ sgtabcounter +'" >'
                                + '</select>'
                                + '<label style="position: relative; left: 163px"> Use Source Port Based Authentication: </label>'
                                + '<select style="position: relative; left:162px" class="sgSourcePortAuthSelector" id="sgSourcePortAuthSelector'+ sgtabcounter +'" >'
                                + '</select>' 
                                + '<p></p>'
                                
                                + '<h3 class="pcrheading">Auth Address</h3>'
                                + '<hr/>'
                                + '<div class = "authAddressSettings">'
                                + 'Network Address: <select class = "adIPAddressSelector" id = "adIPAddressSelector' + sgtabcounter + '">'
                                + '</select>'
                                + '<label style="position: relative; ">Port Number:</label>'
                                + '<select style="position: relative; " class="adPortNumberSelector" id = "adPortNumberSelector'+sgtabcounter+'">'
                                + '</select>'
                                + '<input style="position: relative; " type="button" value="Add" data-sgid="' + newSGID + '" data-pcrid="'+ currentPCR +'" data-epid="'+ currentEP +'" class = "addAuthAddress"/>'
                                + '<hr/>'
                                + '<table id="authAddresstableID' + sgtabcounter + '" border="1" align="center" width="60%">'
                                + '<thead>'
                                + '<tr>'
                                + '<th style = "width: 130px; text-align: center;">IP Address</th>'
                                + '<th style = "width: 130px; text-align: center;">Port Number</th>'
                                + '<th style = "width: 80px; text-align: center;">  </th>'
                                + '</tr>'
                                + '</thead>'
                                + '<tbody id="authAddresstbodyID' + sgtabcounter + '" class = "authAddresstbodyID">'
                                + '</tbody>'
                                + '</table>'
                                + '</div>'
                                + '<p></p>'
                                
                                + '<h3 class="pcrheading">Configuration of Station</h3>'
                                + '<hr/>'
                                + '<div class = "stationsSettings">'
                                + 'Station ID: <input type="text" class="stationIDInput" style = "width: 50px"/>'
                                + '&nbsp'
                                + '&nbsp'
                                + 'Description:<select class="stationDescSelector" id = "stationDescSelector'+sgtabcounter+'">'
                                + '</select>'
                                + '&nbsp'
                                + '&nbsp'
                                + '<input type="button" value="Add" data-sgid="' + newSGID + '" data-pcrid="'+ currentPCR +'" data-epid="'+ currentEP +'"class = "addStation"/>'
                                + '<hr/>'
                                + '<table id="stationInfotableID' + sgtabcounter + '" border="1" align="center" width="60%">'
                                + '<thead>'
                                + '<tr>'
                                + '<th style = "width: 130px; text-align: center;">Station ID</th>'
                                + '<th style = "width: 130px; text-align: center;">Description</th>'
                                + '<th style = "width: 80px; text-align: center;">  </th>'
                                + '</tr>'
                                + '</thead>'
                                + '<tbody id="stationInfotbodyID' + sgtabcounter + '" class = "stationInfotbodyID">'
                                + '</tbody>'
                                + '</table>'
                                + '</div>'
                                + '<div class = "sg-clear">'
                                + '<input type = "button" value = "Remove" class = "removeSGbtn" onclick = "removeSG('+ currentEPLol + ',' + currentPCRLol + ',' + newSGLol + ',' + sgtabcounter +')"/>'
                                + '<input type = "button" value = "Save" class = "saveSGbtn"/>'      
                                + '</div>'         
                                + '</div>');

                    newSGTabContent.appendTo("#stationGroupcontent"+currentTabcounterValue);
                    
                    var m;
                    for (m=0; m<ipAddressChoices.length; m++){
                        $("#adIPAddressSelector"+sgtabcounter).append('<option value = "' + ipAddressChoices[m] +'">' + ipAddressChoices[m] +"</option>");
                    }
                    
                    var m;
                    for (m=0; m<portNumberChoices.length; m++){
                        $("#adPortNumberSelector"+sgtabcounter).append('<option value = "' + portNumberChoices[m] +'">' + portNumberChoices[m] +"</option>");
                    }

                     var m;
                    for (m=0; m<stationDescChoices.length; m++){
                        $("#stationDescSelector"+sgtabcounter).append('<option value = "' + stationDescChoices[m] +'">' + stationDescChoices[m] +"</option>");
                    }
    // Auto Load Access Point
    var h;
    for (h=0; h<pcxml.apID.length; h++){
        $("#sgAPSelector" + sgtabcounter).append('<option value = "' +pcxml.apID[h] +'">' + pcxml.apID[h] +"</option>");
    }

    // Auto Load Session Policy
    var h;
    for (h=0; h<epdefault.epSessionID.length; h++){
        $("#sgSPSelector" + sgtabcounter).append('<option value = "' +epdefault.epSessionID[h] +'">' + epdefault.epSessionID[h] +"</option>");
    }

    // Auto Load Sorce Based Auth Choice
    var h;
    for (h=0; h<yesOrNoChoices.length; h++){
        $("#sgSourcePortAuthSelector" + sgtabcounter).append('<option value = "' +yesOrNoChoices[h] +'">' + yesOrNoChoices[h] +"</option>");
    }

   
    
    document.getElementById('addSGbtn').style.display = 'none';
    $("#addSGbtn").empty();
})
// --------------------------------------
// Add new SG in newly added EP (& PCR?)
// --------------------------------------

$(document).on('click', ".addSGButton", function(e){
    e.preventDefault();
    var currentEP = $(this).data('epid');
    var currentPCR = $(this).data('pcrid');
    var currentTabcounterValue = $(this).data('tabcountervalue');

    $('#addSGbtn').css('display', 'block');

    var newTextBoxDiv = $(document.createElement('div'))
	     .attr("id", 'addNewSGPopUp');
    newTextBoxDiv.after().html(
        '<form class = "modal-content-addNewStation animate">'
        + '<div class = "newSGContainer" id = "newSGContainer">'
        + '<div class = "title_content">'
        + '<div class = "addNewStationGroupTitle">Add New Station Group</div>'
        + '<div class = "clear"></div>'
        + '</div>'
        + '<label>  New Station Group ID:</label>'
        + '<input placeholder = "Enter Station Group ID" id = "newSGIDInput" class = "newSGIDInput" style="position: absolute; left: 190px" required>'
        + '<p></p>'
        + '<label> New Station Group Name:</label>'
        + '<input placeholder = "Enter Station Group Name" id = "newSGNameInput" class = "newSGNameInput" style="position: absolute; left: 190px" required>'
        + '<p></p>'
        + '<div class ="sg-clearfix">'
        + '<input  type = "reset" class = "resetbtn"></input>'
        + '<button class = "addNewSGbtn" id = "addNewSGbtn" data-epid = "'+ currentEP +'" data-pcrid="'+ currentPCR +'" data-tabcounterValue="'+ currentTabcounterValue +'">Add</button>'
        + '</div>'
        + '</div>'
        + '</form>'
    )
newTextBoxDiv.appendTo("#addSGbtn");
})

$(document).on('click', ".addNewSGbtn", function(e){
    e.preventDefault();
    sgtabcounter++;
    var currentEP = $(this).data('epid');
    var currentPCR = $(this).data('pcrid').toString();
    var currentTabcounterValue = $(this).data('tabcountervalue');
    var currentEPLol = jQuery.inArray(currentEP,epxml.endPointID)
    var currentPCRLol = jQuery.inArray(currentPCR,epxml.pcr[currentEPLol].pcrID)
    var newSGID = $("#addSGbtn").find(".newSGIDInput").val();
    var newSGName = $("#addSGbtn").find(".newSGNameInput").val();

    // Push new Add data in epxml Array
    epxml.pcr[currentEPLol].stationGroup[currentPCRLol].stationGroupID.push(newSGID);
    epxml.pcr[currentEPLol].stationGroup[currentPCRLol].stationGroupName.push(newSGName);

    var newSGLol = jQuery.inArray(newSGID,epxml.pcr[currentEPLol].stationGroup[currentPCRLol].stationGroupID)

    var newSGTab = $(document.createElement('div')).attr("id", 'sgtab' + sgtabcounter).attr("class", 'sgtab');
    newSGTab.after().html('<button class="tab-toggle1" onclick = "stationGroup(event,\''
                        + newSGID
                        + '\')">'
                        + newSGName
                        + '</button>');

    newSGTab.appendTo("#stationGrouptabMenu"+currentTabcounterValue);     
            
    var newSGTabContent = $(document.createElement('div')).attr("id", 'sgTab' + sgtabcounter);
    newSGTabContent.after().html('<div id = "'+ newSGID + '" class = "sgTabContent">'
                                + '<h3 class="pcrheading">General Settings</h3>'
                                + '<hr/>'
                                + '<label> Station Group ID:</label>'
                                + '&nbsp'
                                + '<input type = "text" class = "sgID" id = "sgID'+ sgtabcounter +'" value = "'+ newSGID +'"/>'
                                + '<label style="position: relative;left: 136px;"> Station Group Name:</label>'
                                + '&nbsp'
                                + '<input style="position: relative; width:100px; left: 138px" type = "text" class = "sgName" id = "sgName'+ sgtabcounter +'" value = "'+ newSGName +'"/>'
                                + '<p></p>'
                                + '<label> Access Point: </label>'
                                + '&nbsp'
                                + '<select class="sgAPSelector" id="sgAPSelector'+ sgtabcounter +'" >'
                                + '</select>'
                                + '<label style="position: relative; left: 184px"> Maximum Number of Sessions Supported:</label>'
                                + '<input type = "text" style = "width: 30px; position: relative; left: 187px" class = "sgmaxSession" id = "sgmaxSession'+ sgtabcounter +'" />'
                                + '<p></p>'
                                + '<label> Session Policy: </label>'
                                + '<select class="sgSPSelector" id="sgSPSelector'+ sgtabcounter +'" >'
                                + '</select>'
                                + '<label style="position: relative; left: 163px"> Use Source Port Based Authentication: </label>'
                                + '<select style="position: relative; left:162px" class="sgSourcePortAuthSelector" id="sgSourcePortAuthSelector'+ sgtabcounter +'" >'
                                + '</select>' 
                                + '<p></p>'
                                + '<h3 class="pcrheading">Auth Address</h3>'
                                + '<hr/>'
                                + '<div class = "authAddressSettings">'
                                + 'Network Address: <select class = "adIPAddressSelector" id = "adIPAddressSelector' + sgtabcounter + '">'
                                + '</select>'
                                + '<label style="position: relative; ">Port Number:</label>'
                                + '<select style= "position: relative; " class="adPortNumberSelector" id = "adPortNumberSelector'+sgtabcounter+'">'
                                + '</select>'
                                + '<input style="position:relative; " type="button" value="Add" data-sgid="' + newSGID + '" data-pcrid="'+ currentPCR +'" data-epid="'+ currentEP +'" class = "addAuthAddress"/>'
                                + '<hr/>'
                                + '<table id="authAddresstableID' + sgtabcounter + '" border="1" align="center" width="60%">'
                                + '<thead>'
                                + '<tr>'
                                + '<th style = "width: 130px; text-align: center;">IP Address</th>'
                                + '<th style = "width: 130px; text-align: center;">Port Number</th>'
                                + '<th style = "width: 80px; text-align: center;">  </th>'
                                + '</tr>'
                                + '</thead>'
                                + '<tbody id="authAddresstbodyID' + sgtabcounter + '" class = "authAddresstbodyID">'
                                + '</tbody>'
                                + '</table>'
                                + '</div>'
                                + '<p></p>'
                                
                                + '<h3 class="pcrheading">Configuration of Station</h3>'
                                + '<hr/>'
                                + '<div class = "stationsSettings">'
                                + 'Station ID: <input type="text" class="stationIDInput" style = "width: 50px"/>'
                                + '&nbsp'
                                + '&nbsp'
                                + 'Description:<select class="stationDescSelector" id = "stationDescSelector'+sgtabcounter+'">'
                                + '</select>'
                                + '&nbsp'
                                + '&nbsp'
                                + '<input type="button" value="Add" data-sgid="' + newSGID + '" data-pcrid="'+ currentPCR +'" data-epid="'+ currentEP +'"class = "addStation"/>'
                                + '<hr/>'
                                + '<table id="stationInfotableID' + sgtabcounter + '" border="1" align="center" width="60%">'
                                + '<thead>'
                                + '<tr>'
                                + '<th style = "width: 130px; text-align: center;">Station ID</th>'
                                + '<th style = "width: 130px; text-align: center;">Description</th>'
                                + '<th style = "width: 80px; text-align: center;">  </th>'
                                + '</tr>'
                                + '</thead>'
                                + '<tbody id="stationInfotbodyID' + sgtabcounter + '" class = "stationInfotbodyID">'
                                + '</tbody>'
                                + '</table>'
                                + '</div>' 
                                + '<div class = "sg-clear">'
                                + '<input type = "button" value = "Remove" class = "removeSGbtn" onclick = "removeSG('+ currentEPLol + ',' + currentPCRLol + ',' + newSGLol + ',' + sgtabcounter +')"/>'
                                + '<input type = "button" value = "Save" class = "saveSGbtn"/>'      
                                + '</div>'       
                                + '</div>');

                    newSGTabContent.appendTo("#stationGroupcontent"+currentTabcounterValue);
                    
                    var m;
                    for (m=0; m<ipAddressChoices.length; m++){
                        $("#adIPAddressSelector"+sgtabcounter).append('<option value = "' + ipAddressChoices[m] +'">' + ipAddressChoices[m] +"</option>");
                    }
                    
                    var m;
                    for (m=0; m<portNumberChoices.length; m++){
                        $("#adPortNumberSelector"+sgtabcounter).append('<option value = "' + portNumberChoices[m] +'">' + portNumberChoices[m] +"</option>");
                    }

                     var m;
                    for (m=0; m<stationDescChoices.length; m++){
                        $("#stationDescSelector"+sgtabcounter).append('<option value = "' + stationDescChoices[m] +'">' + stationDescChoices[m] +"</option>");
                    }
    // Auto Load Access Point
    var h;
    for (h=0; h<pcxml.apID.length; h++){
        $("#sgAPSelector" + sgtabcounter).append('<option value = "' +pcxml.apID[h] +'">' + pcxml.apID[h] +"</option>");
    }

    // Auto Load Session Policy
    var h;
    for (h=0; h<epdefault.epSessionID.length; h++){
        $("#sgSPSelector" + sgtabcounter).append('<option value = "' +epdefault.epSessionID[h] +'">' + epdefault.epSessionID[h] +"</option>");
    }

    // Auto Load Sorce Based Auth Choice
    var h;
    for (h=0; h<yesOrNoChoices.length; h++){
        $("#sgSourcePortAuthSelector" + sgtabcounter).append('<option value = "' +yesOrNoChoices[h] +'">' + yesOrNoChoices[h] +"</option>");
    }


    document.getElementById('addSGbtn').style.display = 'none';
    $("#addSGbtn").remove();
})

// -----------------------------------
// Newly Add new Auth Address
// ------------------------------------
$(document).on('click', ".addAuthAddress", function(e){
    e.preventDefault();
    console.log("Add Auth Address")

    var newIPAddress = $(this).parent(".authAddressSettings").find(".adIPAddressSelector").val();
    var newPortNumber = $(this).parent(".authAddressSettings").find(".adPortNumberSelector").val();

    // Add in epxml Array
    var currentSG = $(this).data('sgid');
    var currentEP = $(this).data('epid');
    var currentPCR = $(this).data('pcrid').toString();
    
    var currentEPLol = jQuery.inArray(currentEP,epxml.endPointID);
    var currentPCRLol = jQuery.inArray(currentPCR, epxml.pcr[currentEPLol].pcrID);
    var currentSGLol = jQuery.inArray(currentSG, epxml.pcr[currentEPLol].stationGroup[currentPCRLol].stationGroupID)

    epxml.pcr[currentEPLol].stationGroup[currentPCRLol].authAddress[currentSGLol].ipAddress.push(newIPAddress);
    epxml.pcr[currentEPLol].stationGroup[currentPCRLol].authAddress[currentSGLol].portNumber.push(newPortNumber);

    var $delete = $("<input />").attr("type","button").attr("value","Remove").attr("data-subtabid",currentSG).attr("data-tabid",currentPCR).attr("data-mainid", currentEP);
   //create tr, td
    var $tr = $("<tr></tr>");
    var $td1 = $("<td></td>").html(newIPAddress);
    var $td2 = $("<td></td>").html(newPortNumber);
    var $td3 =  $("<td></td>").append($delete);
    
    $tr.append($td1);
    $tr.append($td2);
    $tr.append($td3);
         
    $(this).parent(".authAddressSettings").find(".authAddresstbodyID").append($tr);
    
    // delete Auth Addresses related from the array
    $delete.click(function(e){
        e.preventDefault();
        $tr = $(this).parent().parent();
        deleteAddress = $($tr.find("td").get(0)).text();
                            
        $tr.remove();
        var subTab = $(this).data('subtabid');
        var parentTab = $(this).data('tabid').toString();
        var mainTab = $(this).data('mainid');

        var firstLo = jQuery.inArray(mainTab,epxml.endPointID);
        var secondLo = jQuery.inArray(parentTab, epxml.pcr[firstLo].pcrID)
        var thirdLo = jQuery.inArray(subTab, epxml.pcr[firstLo].stationGroup[secondLo].stationGroupID)
        var deleteLo = jQuery.inArray(deleteAddress, epxml.pcr[firstLo].stationGroup[secondLo].authAddress[thirdLo].ipAddress);
                            
        epxml.pcr[firstLo].stationGroup[secondLo].authAddress[thirdLo].ipAddress.splice(deleteLo,1);
        epxml.pcr[firstLo].stationGroup[secondLo].authAddress[thirdLo].portNumber.splice(deleteLo,1);
                            
        console.log(deleteLo);
    });
});


// -----------------------------------
// Newly Add new Station
// ------------------------------------
$(document).on('click', ".addStation", function(e){
    e.preventDefault();
    var newStationID = $(this).parent(".stationsSettings").find(".stationIDInput").val();
    var newStationDesc = $(this).parent(".stationsSettings").find(".stationDescSelector").val();

    // Add in epxml Array
    var currentSG = $(this).data('sgid');
    var currentEP = $(this).data('epid');
    var currentPCR = $(this).data('pcrid').toString();
    
    var currentEPLol = jQuery.inArray(currentEP,epxml.endPointID);
    var currentPCRLol = jQuery.inArray(currentPCR, epxml.pcr[currentEPLol].pcrID);
    var currentSGLol = jQuery.inArray(currentSG, epxml.pcr[currentEPLol].stationGroup[currentPCRLol].stationGroupID)

    epxml.pcr[currentEPLol].stationGroup[currentPCRLol].station[currentSGLol].id.push(newStationID);
    epxml.pcr[currentEPLol].stationGroup[currentPCRLol].station[currentSGLol].desc.push(newStationDesc);

    var $delete = $("<input />").attr("type","button").attr("value","Remove").attr("data-subtabid",currentSG).attr("data-tabid",currentPCR).attr("data-mainid", currentEP);
   //create tr, td
    var $tr = $("<tr></tr>");
    var $td1 = $("<td></td>").html(newStationID);
    var $td2 = $("<td></td>").html(newStationDesc);
    var $td3 =  $("<td></td>").append($delete);
    
    $tr.append($td1);
    $tr.append($td2);
    $tr.append($td3);
         
    $(this).parent(".stationsSettings").find(".stationInfotbodyID").append($tr);
    
    // delete Auth Addresses related from the array
    $delete.click(function(e){
        e.preventDefault();
        $tr = $(this).parent().parent();
        deleteAddress = $($tr.find("td").get(0)).text();
                            
        $tr.remove();
        var subTab = $(this).data('subtabid');
        var parentTab = $(this).data('tabid').toString();
        var mainTab = $(this).data('mainid');

        var firstLo = jQuery.inArray(mainTab,epxml.endPointID);
        var secondLo = jQuery.inArray(parentTab, epxml.pcr[firstLo].pcrID)
        var thirdLo = jQuery.inArray(subTab, epxml.pcr[firstLo].stationGroup[secondLo].stationGroupID)
        var deleteLo = jQuery.inArray(deleteAddress, epxml.pcr[firstLo].stationGroup[secondLo].station[thirdLo].id);
                            
        epxml.pcr[firstLo].stationGroup[secondLo].station[thirdLo].id.splice(deleteLo,1);
        epxml.pcr[firstLo].stationGroup[secondLo].station[thirdLo].desc.splice(deleteLo,1);
                            
        console.log(deleteLo);
    });
});