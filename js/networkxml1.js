
var networkAddressIDChoices = ["VIPA", "VIPB", "OVNVCMS", "VIPC", "VIPF"]

var networkGroupNameChoices = ["OCW", "OCE", "OCC", "OCB", "OCAP", "VIPF", "VIPG", "VIPH", "VIPI"]

var counter = 0;

var originalNetworkingxml ={
    networkGroupName:["OCW", "OCE", "OCC", "VIPF"],
    networkAddress:[
        {
            networkAddressID:["VIPA"],
            networkAddressName: ["VIPA"],
            addressTimeout: [5000],
            retryPolicy:{
                control: ["Enabled"],
                interval: [60],
                initialAttempts: [10],
                multiplier: [2],
                maxInterval: [60],
            }  
        },

        {
            networkAddressID:["VIPB", "OVNVCMS"],
            networkAddressName: ["VIPB", "OVNVCMS"],
            addressTimeout: [5000, 5000],
            retryPolicy:{
                control: ["Enabled", "Disabled"],
                interval: [60, 60],
                initialAttempts: [10, 10],
                multiplier: [2,2],
                maxInterval: [60, 60],
            }
        },

        {
            networkAddressID:["VIPC"],
            networkAddressName: ["VIPC"],
            addressTimeout: [5000],
            retryPolicy:{
                control: ["Enabled"],
                interval: [60],
                initialAttempts: [10],
                multiplier: [2],
                maxInterval: [60],
            }   
        },

        {
            networkAddressID:["VIPF"],
            networkAddressName: ["VIPF"],
            addressTimeout: [5000],
            retryPolicy:{
                control: ["Enabled"],
                interval: [60],
                initialAttempts: [10],
                multiplier: [2],
                maxInterval: [60],
            }
        },
    ]
}

var networkingxml ={
    networkGroupName:["OCW", "OCE", "OCC", "VIPF"],
    networkAddress:[
        {
            networkAddressID:["VIPA"],
            networkAddressName: ["VIPA"],
            addressTimeout: [5000],
            retryPolicy:{
                control: ["Enabled"],
                interval: [60],
                initialAttempts: [10],
                multiplier: [2],
                maxInterval: [60],
            }  
        },

        {
            networkAddressID:["VIPB", "OVNVCMS"],
            networkAddressName: ["VIPB", "OVNVCMS"],
            addressTimeout: [5000, 5000],
            retryPolicy:{
                control: ["Enabled", "Disabled"],
                interval: [60, 60],
                initialAttempts: [10, 10],
                multiplier: [2,2],
                maxInterval: [60, 60],
            }
        },

        {
            networkAddressID:["VIPC"],
            networkAddressName: ["VIPC"],
            addressTimeout: [5000],
            retryPolicy:{
                control: ["Enabled"],
                interval: [60],
                initialAttempts: [10],
                multiplier: [2],
                maxInterval: [60],
            }   
        },

        {
            networkAddressID:["VIPF"],
            networkAddressName: ["VIPF"],
            addressTimeout: [5000],
            retryPolicy:{
                control: ["Enabled"],
                interval: [60],
                initialAttempts: [10],
                multiplier: [2],
                maxInterval: [60],
            }
        },
    ]

}


var tabcounter = 0;

// ------------------------------------
// Dynamical loading the exists data in network.xml
// --------------------------------------
$(document).on('click','.networkxmlButton', function(e){
    e.preventDefault();
    $('#networkxmlbtn').css('display', 'block');
    var i;
    tabcounter=0;
    for (i=0; i<networkingxml.networkGroupName.length; i++) {
        counter = i+1;
        var currentPC = networkingxml.networkGroupName[i]; 

        var newTabMenu = $(document.createElement('div')).attr("id", 'networkTabMenu' + counter);
        newTabMenu.after().html ('<button class="tablinks" onclick="network(event, \''
                                + currentPC 
                                + '\')">' 
                                + currentPC
                                + '</button>');
        newTabMenu.appendTo("#networkTabMenu");

        var newTextBoxDiv = $(document.createElement('div'))
	         .attr("id", 'tab' + counter);
        
        newTextBoxDiv.after().html('<div id = "' + currentPC + '" class="tabcontent" style="height: 92%">'
                            + '<label>Network Group Name:</label>'
                            + '<select class = "networkGroupNameSelector" id = "networkGroupNameSelector' + counter + '">'
                            + '</select>'
                            + '<p></p>'
                            + '<label class = "networkSubTitle"> Network Address</label>'
                            + '<button class = "addNAButton" id = "addNAButton" data-pcname = "'+ currentPC +'">'
                            + '<i class = "fa fa-plus-square" style = "color: #3498db"> </i>'
                            + '</button>'
                            + '<hr/>'
                            + '<p></p>'
                            + '<div class="networkAddresstabs" id = "networkAddresstabs">'
                            + '<div id="networkAddresstabMenu' + counter + '">'
                            + '</div>'
                            + '<div class="networkAddresscontent" id = "networkAddresscontent' + counter + '">'
                            + '</div>'
                            + '</div>' 
                            + '<div class = "clearfix-pc">'                         
                            + '<input type = "button" value = "Remove" class = "removePCbtn" onclick = "removeProcessingCenter('+ counter +')"/>'
                            + '<input type = "button" value = "Save" class = "savePCbtn"/>'
                            + '</div>'
                            + '</div>'
                            + '</div>'
                            + '</div>'
                        );
        newTextBoxDiv.appendTo("#pcTabContentContainer");
   
        // Add the Network Group Name Selector
        var h;
        for (h=0; h < networkGroupNameChoices.length; h++) {
            if (networkingxml.networkGroupName[i] == networkGroupNameChoices[h]){
                $("#networkGroupNameSelector"+counter).append('<option selected = "selected" value = "' +networkGroupNameChoices[h] +'">' + networkGroupNameChoices[h] +"</option>");
            } else {
             $("#networkGroupNameSelector"+counter).append('<option value = "' +networkGroupNameChoices[h] +'">' + networkGroupNameChoices[h] +"</option>");
            }
        }

        // Add Network Address
        var j = 0;
        for (j=0; j < networkingxml.networkAddress[i].networkAddressID.length; j++){
            tabcounter++;
            var currentNAID = networkingxml.networkAddress[i].networkAddressID[j];
            var currentNAIDRE;
            var newNATab = $(document.createElement('div')).attr("id", 'networkAddresstab' + tabcounter).attr("class", 'networkAddresstab');
            
            if (currentNAID == "VIPF" || currentNAID == "VIPG" || currentNAID == "VIPH" || currentNAID == "VIPI"){
                currentNAIDRE = currentNAID + "NA";
            } else {
                currentNAIDRE = currentNAID;
            }
            newNATab.after().html('<button class="tab-toggle" onclick = "networkAddress(event,\''
                                + currentNAIDRE
                                + '\')">'
                                + currentNAID
                                + '</button>');

            newNATab.appendTo("#networkAddresstabMenu"+counter);     
            
            var newNATabContent = $(document.createElement('div')).attr("id", 'naTab' + tabcounter);
            newNATabContent.after().html('<div id = "'+ currentNAIDRE + '" class = "naTabContent">'
                                        + '<h3 class="networkAddressheading">General Settings</h3>'
                                        + '<hr/>'
                                        + '<div class = "networkAddressGeneralSettings">'
                                        + '<label> Network Address Identifier: </label>'
                                        + '<select class = "networkAddressIdentifier" id = "networkAddressIdentifier'+ tabcounter + '">'
                                        + '</select>'
                                        + '<p></p>'
                                        + '<label> Address Name: </label>'
                                        + '<input class = "networkAddressName" id = "networkAddressName' + tabcounter + '" type = "text" value = "' + networkingxml.networkAddress[i].networkAddressID[j] + '" sytle = "position: absolute; left: 337px"/>'
                                        + '<p></p>'
                                        + '<label> Address Timeout: </label>'
                                        + '<input class = "networkAddressTimeout" id = "networkAddressTimeout' + tabcounter + '" type = "number" value = "'+ networkingxml.networkAddress[i].addressTimeout[j] +'" style="position: absolute; left: 356px; width: 155px;"/>'
                                        + '<p></p>'
                                        + '</div>'
                                        + '<h3 class="networkAddressheading">Retry Policy</h3>'
                                        + '<hr/>'
                                        + '<div class = "networkAddressRetryPolicy">'
                                        + '<label>Control:</label>'
                                        + '<select id = "retryControlSelector' + tabcounter +'" class = "retryControlSelector" style="margin-left: 14px;">'
                                        + '</select>'
                                        + '<p></p>'
                                        + '<label> Interval:</label>'
                                        + '<input class = "retryInterval" id = "retryInterval' + tabcounter + '" type = "number" value = "'+ networkingxml.networkAddress[i].retryPolicy.interval[j] +'" style="width: 140px; margin-left: 14px; margin-right: 4px;"> Senconds'
                                        + '<p></p>'
                                        + '<label> Initial Attempts:</label>'
                                        + '<input class = "retryInitialAttempts" id = "retryInitialAttempts'+ tabcounter+ '"  type = "number" value = "'+ networkingxml.networkAddress[i].retryPolicy.initialAttempts[j] + '" style="width: 150px; margin-left: 24px;"/>'
                                        + '<p></p>'
                                        + '<label> Multiplier: </label>'
                                        + '<input class = "retryMultiplier" id = "retryMultiplier'+ tabcounter + '" type = "number" value = "'+ networkingxml.networkAddress[i].retryPolicy.multiplier[j] +'" style="margin-left: 32px"/>'
                                        + '<p></p>'
                                        + '<label>Max Interval: </label>'
                                        + '<input class = "retryMaxInterval" if = "retryMaxInterval' + tabcounter + '" type = "number" value = "'+ networkingxml.networkAddress[i].retryPolicy.maxInterval[j] +'" style="margin-left: 15px"/>'
                                        + '<p></p>'
                                        + '<input type = "button" value = "Remove" class = "removeNAbtn" onclick = "removeNetworkAddress('+ tabcounter +')"/>'
                                        + '<input type = "button" value = "Save" class = "saveNAbtn" data-location = '+ i +'/>'
                                        + '</div>'
                                        + '</div>'
                                        + '</div>'
                                        );
            
            newNATabContent.appendTo("#networkAddresscontent"+counter);    
            
            if (networkingxml.networkAddress[i].retryPolicy.control[j] == "Enabled"){
                    $("#retryControlSelector"+tabcounter).append('<option selected = "selected" value = "Enabled"> Enabled </option>');
                    $("#retryControlSelector"+tabcounter).append('<option value = "Disabled"> Disabled </option>');
                } else {
                    $("#retryControlSelector"+tabcounter).append('<option value = "Enabled"> Enabled </option>');
                    $("#retryControlSelector"+tabcounter).append('<option selected = "selected" value = "Disabled"> Disabled </option>');
                }
                     
            // Add Network Address Identifier Selector Option
            var h;
            for (h=0; h < networkAddressIDChoices.length; h++) {
            if (networkingxml.networkAddress[i].networkAddressID[j] == networkAddressIDChoices[h]){
                $("#networkAddressIdentifier"+tabcounter).append('<option selected = "selected" value = "' +networkAddressIDChoices[h] +'">' + networkAddressIDChoices[h] +"</option>");
            } else {
             $("#networkAddressIdentifier"+tabcounter).append('<option value = "' +networkAddressIDChoices[h] +'">' + networkAddressIDChoices[h] +"</option>");
            }
        }
    
        }
       
    }

})

// ----------------------
//  Open the correspoding span
// ---------------------
function network(evt, name) {
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
// Open the Network Address Span
// --------------------------------
function networkAddress(evt, name) {
    // Declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("naTabContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-toggle");
    tabContentName = document.getElementsByClassName("naTabContent")
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
// Remove the whole Processing Center
// -------------------------------
$(document).on('click', ".removePCbtn", function(e){
    e.preventDefault();
    $(this).parents(".tabcontent").empty();
    counter--;
})

function removeProcessingCenter(number){
    console.log("ProcessingCenterTabMenu"+number);
    var deleteNumber = Number(number)-1;
    console.log(deleteNumber);
    // delete in the routingxml Array
    networkingxml.networkGroupName.splice(deleteNumber,1);
    networkingxml.networkAddress.splice(deleteNumber,1);
    // delete the Tab Menu
    document.getElementById("networkTabMenu"+number).remove();
}

$(document).on('click', ".removeNAbtn", function(e){
    e.preventDefault();
    $(this).parents(".naTabContent").empty();
    counter--;
})

function removeNetworkAddress(number){
    var deleteNumber = Number(number)-1;
    networkingxml.networkAddress.splice(deleteNumber,1);
    document.getElementById("networkAddresstab"+number).remove();
}

// -----------------------
// Add new Processing Center
// ----------------------
$(document).on('click', ".addPCButton", function(e){
    e.preventDefault();
    // Add the Network Group Name Selector
    var h;
    for (h=0; h < networkGroupNameChoices.length; h++) {
        $("#newNetworkGroupNameSelector").append('<option value = "' +networkGroupNameChoices[h] +'">' + networkGroupNameChoices[h] +"</option>");
    }
    $('#addProcessingCenterbtn').css('display', 'block');

})

$(document).on('click', ".addNewPCbtn", function(e){
    e.preventDefault();
    counter++;
    var newNetworkGroupName = $("#addProcessingCenterbtn"). find(".newNetworkGroupNameSelector").val();

    var newTabMenu = $(document.createElement('div')).attr("id", 'networkTabMenu' + counter);
    newTabMenu.after().html ('<button class="tablinks" onclick="network(event, \''
                             + newNetworkGroupName 
                             + '\')">' 
                             + newNetworkGroupName 
                             + '</button>');
    newTabMenu.appendTo("#networkTabMenu");

    var newTextBoxDiv = $(document.createElement('div'))
	     .attr("id", 'tab' + counter);
    console.log(newNetworkGroupName);
    newTextBoxDiv.after().html('<div id = "' + newNetworkGroupName + '" class="tabcontent" style="height:92%">'
                            + '<label>Network Group Name:</label>'
                            + '<select class = "networkGroupNameSelector" id = "networkGroupNameSelector' + counter + '">'
                            + '</select>'
                            + '<p></p>'
                            + '<label class = "networkSubTitle"> Network Address</label>'
                            + '<button class = "addNAButton" id = "addNAButton" data-pcname = "'+ newNetworkGroupName +'">'
                            + '<i class = "fa fa-plus-square" style = "color: #3498db"> </i>'
                            + '</button>'
                            + '<hr/>'
                            + '<p></p>'
                            + '<div class="networkAddresstabs" id = "networkAddresstabs">'
                            + '<div id="networkAddresstabMenu' + counter + '">'
                            + '</div>'
                            + '<div class="networkAddresscontent" id = "networkAddresscontent' + counter + '">'
                            + '</div>'
                            + '</div>'                          
                            + '<input type = "button" value = "Remove" class = "removePCbtn" onclick = "removeProcessingCenter('+ counter +')"/>'
                            + '<input type = "button" value = "Save" class = "savePCbtn"/>'
                            + '</div>'
                            + '</div>'
                            + '</div>'
                        );
    newTextBoxDiv.appendTo("#pcTabContentContainer");
    // Push new Add data in routing.xml Array
    networkingxml.networkGroupName.push(newNetworkGroupName);
    networkingxml.networkAddress.push({networkAddressID:[],
                                       networkAddressName:[],
                                       addressTimeout:[],
                                       retryPolicy:{
                                          control:[],
                                          interval:[],
                                          initialAttempts:[],
                                          multiplier: [],
                                          maxInterval: [],
                                        }
                                    })
    // Add the Network Group Name Selector
    var h;
    for (h=0; h < networkGroupNameChoices.length; h++) {
        if (newNetworkGroupName == networkGroupNameChoices[h]){
            $("#networkGroupNameSelector"+counter).append('<option selected = "selected" value = "' +networkGroupNameChoices[h] +'">' + networkGroupNameChoices[h] +"</option>");
        } else {
            $("#networkGroupNameSelector"+counter).append('<option value = "' +networkGroupNameChoices[h] +'">' + networkGroupNameChoices[h] +"</option>");
        }
    }
    
    document.getElementById('addProcessingCenterbtn').style.display = 'none';
    $("#newNetworkGroupNameSelector").empty();
})

// ----------------------------
//  Add new Network Address
// -----------------------------

$(document).on('click', ".addNAButton", function(e){
    e.preventDefault();
    var currentTabName = $(this).data('pcname');
    console.log(currentTabName);
    $('#addNetworkAddressbtn').css('display', 'block');
    
    // Auto load the Add Network Address Pop up to pass the "tabname" to the "ADD" button 
    var newTextBoxDiv = $(document.createElement('div'))
	     .attr("id", 'addNetworkAddressPopUp');
    newTextBoxDiv.after().html(
                                '<form class = "modal-content-newNA animate">'
                             + '<div class = "newNetworkAddressContainer" id = "newNetworkAddressContainer" style = "padding-bottom: 80px;">'
                             + '<div class = "title_content">'
                             + '<div class = "text_content">Add New Network Address</div>'
                             + '<div class = "clear"></div>'
                             + '</div>'
                             + '<label style = "padding-left: 20px"> Network Address Identifier: </label>'
                             + '<select class = "newNetworkAddressSelector" id = "newNetworkAddressSelector">'
                             + '</select>'
                             + '<p></p>'
                             + '<label style = "padding-left: 20px"> Network Address Name: </label>'
                             + '<input placeholder = "Enter Network Address Name" id = "newNAName" class = "newNAName" style = "margin-left: 20px; width: 200px" required>'
                             + '<p></p>'
                             + '<div class="clearfix-newNA">'
                             + '<input  type = "reset" class = "resetbtn"></input>'
                             + '<button class = "addNewNAbtn" id = "addNewNAbtn" data-tabname="'+ currentTabName + '">Add</button>'
                             + '</div>'
                             + '</div>'
                             + '</div>'
                             + '</form>'
                             )
    
    
    console.log(currentTabName);

    newTextBoxDiv.appendTo("#addNetworkAddressbtn");
    // Add the Network Group Name Selector
    var h;
    for (h=0; h < networkAddressIDChoices.length; h++) {
        $("#newNetworkAddressSelector").append('<option value = "' + networkAddressIDChoices[h] +'">' + networkAddressIDChoices[h] +"</option>");
    }
    
})

$(document).on('click', ".addNewNAbtn", function(e){
    e.preventDefault();
    var currentNATabName=$(this).data('tabname');
    console.log(currentNATabName);

    var currentLocation = jQuery.inArray(currentNATabName, networkingxml.networkGroupName);
    console.log(currentTabNum);
    var currentTabNum = currentLocation+1;
    tabcounter++;
    var newNetworkAddressID = $("#addNetworkAddressbtn"). find(".newNetworkAddressSelector").val();
    var newNetworkAddressName = $("#addNetworkAddressbtn").find(".newNAName").val();
    var newNAIDRE;
    if (newNetworkAddressID == "VIPF" || newNetworkAddressID == "VIPG" || newNetworkAddressID == "VIPH" || newNetworkAddressID == "VIPI"){
                newNAIDRE = newNetworkAddressID + "NA";
    } else {
            newNAIDRE = newNetworkAddressID;
    }
    // Add Network Address Tab Menu
    var newNATab = $(document.createElement('div')).attr("id", 'networkAddresstab' + tabcounter).attr("class", 'networkAddresstab');
    newNATab.after().html('<button class="tab-toggle" onclick = "networkAddress(event,\''
                                + newNAIDRE
                                + '\')">'
                                + newNetworkAddressID
                                + '</button>');
    newNATab.appendTo("#networkAddresstabMenu"+currentTabNum);
    // Add Tab Content
    var newNATabContent = $(document.createElement('div')).attr("id", 'naTab' + tabcounter);
    newNATabContent.after().html('<div id = "'+ newNAIDRE + '" class = "naTabContent">'
                                        + '<h3 class="networkAddressheading">General Settings</h3>'
                                        + '<hr/>'
                                        + '<div class = "networkAddressGeneralSettings">'
                                        + '<label> Network Address Identifier: </label>'
                                        + '<select class = "networkAddressIdentifier" id = "networkAddressIdentifier'+ tabcounter + '">'
                                        + '</select>'
                                        + '<p></p>'
                                        + '<label> Address Name: </label>'
                                        + '<input class = "networkAddressName" id = "networkAddressName' + tabcounter + '" type = "text" value = "' + newNetworkAddressName + '"/>'
                                        + '<p></p>'
                                        + '<label> Address Timeout: </label>'
                                        + '<input class = "networkAddressTimeout" id = "networkAddressTimeout' + tabcounter + '" type = "number"/>'
                                        + '<p></p>'
                                        + '</div>'
                                        + '<h3 class="networkAddressheading">Retry Policy</h3>'
                                        + '<hr/>'
                                        + '<div class = "networkAddressRetryPolicy">'
                                        + '<label>Control:</label>'
                                        + '<select id = "retryControlSelector' + tabcounter +'" class = "retryControlSelector">'
                                        + '<option value = "Enabled"> Enabled </option>'
                                        + '<option value = "Disabled"> Disabled </option>'
                                        + '</select>'
                                        + '<p></p>'
                                        + '<label> Interval:</label>'
                                        + '<input class = "retryInterval" id = "retryInterval' + tabcounter + '" type = "number"/> Senconds'
                                        + '<p></p>'
                                        + '<label> Initial Attempts:</label>'
                                        + '<input class = "retryInitialAttempts" id = "retryInitialAttempts'+ tabcounter+ '"  type = "number"/>'
                                        + '<p></p>'
                                        + '<label> Multiplier: </label>'
                                        + '<input class = "retryMultiplier" id = "retryMultiplier'+ tabcounter + '" type = "number"/>'
                                        + '<p></p>'
                                        + '<label>Max Interval: </label>'
                                        + '<input class = "retryMaxInterval" if = "retryMaxInterval' + tabcounter + '" type = "number"/>'
                                        + '<p></p>'
                                        + '<input type = "button" value = "Remove" class = "removeNAbtn" onclick = "removeNetworkAddress('+ tabcounter +')"/>'
                                        + '<input type = "button" value = "Save" class = "saveNAbtn" data-location='+ currentLocation +' data-addressid = "'+ newNetworkAddressID +'"/>'
                                        + '</div>'
                                        + '</div>'
                                        + '</div>'
                                        );
            newNATabContent.appendTo("#networkAddresscontent"+currentTabNum); 
    // Add Network Address Identifier Selector Option
            var h;
            for (h=0; h < networkAddressIDChoices.length; h++) {
            if (newNetworkAddressID == networkAddressIDChoices[h]){
                $("#networkAddressIdentifier"+tabcounter).append('<option selected = "selected" value = "' +networkAddressIDChoices[h] +'">' + networkAddressIDChoices[h] +"</option>");
            } else {
             $("#networkAddressIdentifier"+tabcounter).append('<option value = "' +networkAddressIDChoices[h] +'">' + networkAddressIDChoices[h] +"</option>");
            }
        }
    // Push new network Address ID and Name
    networkingxml.networkAddress[currentLocation].networkAddressID.push(newNetworkAddressID);
    networkingxml.networkAddress[currentLocation].networkAddressName.push(newNetworkAddressName);

    
    document.getElementById('addNetworkAddressbtn').style.display = 'none';
    $("#addNetworkAddressPopUp").empty();

})

// ----------------------------------------
// Add Network Address Value
// ----------------------------------------
$(document).on('click', ".saveNAbtn", function(e){
    e.preventDefault();
    var fetchLocation = $(this).data('location');
    console.log("current location" + fetchLocation);
    var currentNetworkAddress= $(this).data('addressid');
    var subLocation = jQuery.inArray(currentNetworkAddress, networkingxml.networkAddress[fetchLocation].networkAddressID);
    console.log(subLocation)

    var newTimeout = Number($(this).parents('.tabcontent').find(".networkAddressTimeout").val());
    networkingxml.networkAddress[fetchLocation].addressTimeout.push(newTimeout);

    var newControl = $(this).parents('.tabcontent').find(".retryControlSelector").val();
    networkingxml.networkAddress[fetchLocation].retryPolicy.control.push(newControl);

    var newInterval = Number($(this).parents('.tabcontent').find(".retryInterval").val());
    networkingxml.networkAddress[fetchLocation].retryPolicy.interval.push(newInterval);

    var newAttempts = Number($(this).parents('.tabcontent').find(".retryInitialAttempts").val());
    networkingxml.networkAddress[fetchLocation].retryPolicy.initialAttempts.push(newAttempts);

    var newMultiplier = Number($(this).parents('.tabcontent').find(".retryMultiplier").val());
    networkingxml.networkAddress[fetchLocation].retryPolicy.multiplier.push(newMultiplier);

    var newMaxInterval = Number($(this).parents('.tabcontent').find(".retryMaxInterval").val());
    networkingxml.networkAddress[fetchLocation].retryPolicy.maxInterval.push(newMaxInterval);

})
