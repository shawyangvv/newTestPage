
var networkAddressChoices = ["VIPA", "VIPB", "OVNVCMS", "VIPC", "VIPF"]


var counter = 0;
var originalRoutingxml ={
    ruleID:["PROD_ROUTING", "PROD_TEST"],
    ruleName: ["PROD_ROUTING", "PROD_TEST"],
    routingAddress:[
        {
            networkAddress:["VIPA", "VIPB","VIPC", "VIPF"],
            priority: [1, 1, 1, 1],
            mtiRoute: ["Disabled", "Enabled", "Disabled", "Disabled"]
        },
        {
            networkAddress: ["VIPA", "VIPB", "OVNVCMS", "VIPC"],
            priority: [1,1,1,1],
            mtiRoute: ["Disabled", "Enabled", "Disabled", "Disabled"]
        }
        

    ]
}

var routingxml ={
    ruleID:["PROD_ROUTING", "PROD_TEST"],
    ruleName: ["PROD_ROUTING", "PROD_TEST"],
    routingAddress:[
        {
            networkAddress:["VIPA", "VIPB","VIPC", "VIPF"],
            priority: [1, 1, 1, 1],
            mtiRoute: ["Disabled", "Enabled", "Disabled", "Disabled"]
        },
        {
            networkAddress: ["VIPA", "VIPB", "OVNVCMS", "VIPC"],
            priority: [1,1,1,1],
            mtiRoute: ["Disabled", "Enabled", "Disabled", "Disabled"]
        }
    ]
}

// ------------------------------------
// Dynamical loading the exists data
// --------------------------------------
$(document).on('click','.routingButton', function(e){
    e.preventDefault();
    $('#routingbtn').css('display', 'block');
    var i;
    for (i=0; i<routingxml.ruleID.length; i++) {
        counter = i+1;
        var rpID = routingxml.ruleID[i];
        var rpName = routingxml.ruleName[i];

        var newTabMenu = $(document.createElement('div')).attr("id", 'routingTabMenu' + counter);
        newTabMenu.after().html ('<button class="tablinks" onclick="routing(event, \''
                                + rpName 
                                + '\')">' 
                                + rpName 
                                + '</button>');
        newTabMenu.appendTo("#routingTabMenu");

        var newTextBoxDiv = $(document.createElement('div'))
	         .attr("id", 'tab' + counter);
        console.log(rpName);
        newTextBoxDiv.after().html('<div id = "' + rpName + '" class="tabcontent" style="height:93%">'
                            + '<label>Routing Rule ID:</label>'
                            + '<input type = "text" class="routingRuleId' + counter + '" id = "routingRuleId' + counter + '" value = "' + rpID + '"/>'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '<label>Routing Rule Name:</label>'
                            + '<input type = "text" class= "routingRuleName' + counter + '" id = "routingRuleName' + counter + '" value = "' + rpName + '"/>'
                            + '<p></p>'
                            + '<label class = "routingSubTitle"> Routing Address</label>'
                            + '<P></P>'
                            + '<div class = "routingAddressSettings">'
                            + 'Network Address: <select class = "ranetworkAddressSelector" id = "ranetworkAddressSelector' + counter + '">'
                            + '</select>'
                            + '&nbsp'
                            + '&nbsp'
                            + ' Priority:<input type="number" class="priority" style = "width: 130px"/>'
                            + '&nbsp'
                            + '&nbsp'
                            + 'MTI Route:<select class = "mtiRoute">'
                            + '<option value = "Enabled">Enabled</option>'
                            + '<option value = "Disabled">Disabled</option>'
                            + '</select>'
                            + '&nbsp'
                            + '&nbsp'
                            + '<input type="button" value="Add" data-tabname="' + rpName + '" class = "addRoutingAddress"/>'
                            + '<hr/>'
                            + '<table id="routingtableID' + counter + '" border="1" align="center" width="60%">'
                            + '<thead>'
                            + '<tr>'
                            + '<th style = "width: 130px; text-align: center;">Network Address</th>'
                            + '<th style = "width: 130px; text-align: center;">Priority</th>'
                            + '<th style = "width: 130px; text-align: center;">MTI Route</th>'
                            + '<th style = "width: 80px; text-align: center;">'
                            + '</th>'
                            + '</tr>'
                            + '</thead>'
                            + '<tbody id="routingtbodyID' + counter + '" class = "routingtbodyID">'
                            + '</tbody>'
                            + '</table>'
                            + '</div>'
                            + '<input type = "button" value = "Remove" class = "removeRoutingbtn" onclick = "removeRoutingPolicy('+ counter +')"/>'
                            + '<input type = "button" value = "Save" class = "saveRoutingbtn"/>'
                            + '</div>'
                            + '</div>'
                        );
        newTextBoxDiv.appendTo("#routingTabContentContainer");
        // Auto loaded the values of network Addresses
        var h;
        for (h=0; h < networkAddressChoices.length; h++) {
             $("#ranetworkAddressSelector"+counter).append('<option value = "' +networkAddressChoices[h] +'">' + networkAddressChoices[h] +"</option>");
        }
        // Auto loaded the Routing Address
        var j;
        for (j=0; j<routingxml.routingAddress[i].networkAddress.length; j++){
            var $delete = $("<input />").attr("type","button").attr("value","Remove").attr("data-tabid",rpID);

            var $tr = $("<tr></tr>");
            var $td1 = $("<td></td>").html(routingxml.routingAddress[i].networkAddress[j]);
            var $td2 = $("<td></td>").html(routingxml.routingAddress[i].priority[j]);
            var $td3 = $("<td></td>").html(routingxml.routingAddress[i].mtiRoute[j]);
            var $td4 =  $("<td></td>").append($delete);
            $tr.append($td1);
            $tr.append($td2);
            $tr.append($td3);
            $tr.append($td4);
         
            $("#routingtbodyID" + counter).append($tr);
            // delete Routing Addresses related from the array
            $delete.click(function(e){
                e.preventDefault();
                $tr = $(this).parent().parent();
                deleteAddress = $($tr.find("td").get(0)).text();
                deletePriority = $($tr.find("td").get(1));
                $tr.remove();
                var lo = $(this).data('tabid');
                var arlo = jQuery.inArray(lo,routingxml.ruleID);
                var deleteArrayLocation = jQuery.inArray(deleteAddress, routingxml.routingAddress[arlo].networkAddress);
                console.log(deleteArrayLocation);
                routingxml.routingAddress[arlo].networkAddress.splice(deleteArrayLocation, 1);
                routingxml.routingAddress[arlo].priority.splice(deleteArrayLocation, 1);
                routingxml.routingAddress[arlo].mtiRoute.splice(deleteArrayLocation,1);
            });
        } 
    }

})

// ----------------------
//  Open the correspoding span
// ---------------------
function routing(evt, name) {
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
// Remove the whole Routing Policy
// -------------------------------
$(document).on('click', ".removeRoutingbtn", function(e){
    e.preventDefault();
    $(this).parents(".tabcontent").empty();
    counter--;
})

function removeRoutingPolicy(number){
    console.log("routingTabMenu"+number);
    var deleteNumber = Number(number)-1;
    console.log(deleteNumber);
    // delete in the routingxml Array
    routingxml.ruleID.splice(deleteNumber,1);
    routingxml.ruleName.splice(deleteNumber,1);
    routingxml.routingAddress.splice(deleteNumber,1);
    // delete the Tab Menu
    document.getElementById("routingTabMenu"+number).remove();
}


// -----------------------
// Add new Routing Policy
// ----------------------
$(document).on('click', ".addRoutingPolicyButton", function(e){
    e.preventDefault();
    $('#addRoutingPolicybtn').css('display', 'block');
})

$(document).on('click', ".addNewRPbtn", function(e){
    e.preventDefault();
    counter++;
    var rpID = $("#addRoutingPolicybtn"). find(".newRPID").val();
    var rpName = $("#addRoutingPolicybtn").find(".newRPName").val();

    var newTabMenu = $(document.createElement('div')).attr("id", 'routingTabMenu' + counter);
    newTabMenu.after().html ('<button class="tablinks" onclick="routing(event, \''
                             + rpName 
                             + '\')">' 
                             + rpName 
                             + '</button>');
    newTabMenu.appendTo("#routingTabMenu");

    var newTextBoxDiv = $(document.createElement('div'))
	     .attr("id", 'tab' + counter);
    console.log(rpName);
    newTextBoxDiv.after().html('<div id = "' + rpName + '" class="tabcontent" style="height: 93%">'
                            + '<label>Routing Rule ID:</label>'
                            + '<input type = "text" class="routingRuleId' + counter + '" id = "routingRuleId' + counter + '" value = "' + rpID + '"/>'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '&nbsp'
                            + '<label>Routing Rule Name:</label>'
                            + '<input type = "text" class= "routingRuleName' + counter + '" id = "routingRuleName' + counter + '" value = "' + rpName + '"/>'
                            + '<p></p>'
                            + '<label class = "routingSubTitle"> Routing Address</label>'
                            + '<P></P>'
                            + '<div class = "routingAddressSettings">'
                            + 'Network Address: <select class = "ranetworkAddressSelector" id = "ranetworkAddressSelector' + counter + '">'
                            + '</select>'
                            + '&nbsp'
                            + '&nbsp'
                            + ' Priority:<input type="number" class="priority" style = "width: 130px"/>'
                            + '&nbsp'
                            + '&nbsp'
                            + 'MTI Route:<select class = "mtiRoute">'
                            + '<option value = "Enabled">Enabled</option>'
                            + '<option value = "Disabled">Disabled</option>'
                            + '</select>'
                            + '&nbsp'
                            + '&nbsp'
                            + '<input type="button" value="Add" data-tabname = "'+ rpName +'" class = "addRoutingAddress"/>'
                            + '<hr/>'
                            + '<table id="routingtableID'+ counter + '" border="1" align="center" width="60%">'
                            + '<thead>'
                            + '<tr>'
                            + '<th style = "width: 130px; text-align: center;">Network Address</th>'
                            + '<th style = "width: 130px; text-align: center;">Priority</th>'
                            + '<th style = "width: 130px; text-align: center;">MTI Route</th>'
                            + '<th style = "width: 80px; text-align: center;">'
                            + '</th>'
                            + '</tr>'
                            + '</thead>'
                            + '<tbody id="routingtbodyID' + counter + '" class = "routingtbodyID">'
                            + '</tbody>'
                            + '</table>'
                            + '</div>'
                            + '<input type = "button" value = "Remove" class = "removeRoutingbtn" onclick = "removeRoutingPolicy('+ counter +')"/>'
                            + '<input type = "button" value = "Save" class = "saveRoutingbtn"/>'
                            + '</div>'
                            + '</div>'
                        );
    newTextBoxDiv.appendTo("#routingTabContentContainer");
    // Push new Add data in routing.xml Array
    routingxml.ruleID.push(rpID);
    routingxml.ruleName.push(rpName);
    routingxml.routingAddress.push({networkAddress:[],
                                    priority:[],
                                    mtiRoute:[]});
    // Auto loaded the values of network Address
    var h;
    for (h=0; h< networkAddressChoices.length; h++) {
        $("#ranetworkAddressSelector" + counter).append('<option value = "' +networkAddressChoices[h] +'">' + networkAddressChoices[h] +"</option>");
     }
    
    document.getElementById('addRoutingPolicybtn').style.display = 'none';
})


// -----------------------------------
// Newly Add new Routing Address
// ------------------------------------
$(document).on('click', ".addRoutingAddress", function(e){
    e.preventDefault();
    //Alloacate IP Address and Port Number, fetch out the input
    var newNetworkAddress = $(this).parent(".routingAddressSettings").find(".ranetworkAddressSelector").val();
    var newPriority = $(this).parent(".routingAddressSettings").find(".priority").val();
    var newMtiRoute = $(this).parent(".routingAddressSettings").find(".mtiRoute").val();

    // Add in routingxml Array
    var tabName = $(this).data('tabname');
    console.log(tabName);
    var addLol = jQuery.inArray(tabName,routingxml.ruleName);
    console.log(addLol);
    routingxml.routingAddress[addLol].networkAddress.push(newNetworkAddress);
    routingxml.routingAddress[addLol].priority.push(newPriority);
    routingxml.routingAddress[addLol].mtiRoute.push(newMtiRoute);

    var $delete = $("<input />").attr("type","button").attr("value","Remove").attr("data-tabname",tabName);
    
   //create tr, td
    var $tr = $("<tr></tr>");
    var $td1 = $("<td></td>").html(newNetworkAddress);
    var $td2 = $("<td></td>").html(newPriority);
    var $td3 = $("<td></td>").html(newMtiRoute);
    var $td4 =  $("<td></td>").append($delete);
    
    $tr.append($td1);
    $tr.append($td2);
    $tr.append($td3);
    $tr.append($td4);
         
    $(this).parent(".routingAddressSettings").find(".routingtbodyID").append($tr);
    $delete.click(function(e){
        e.preventDefault();
        $tr = $(this).parent().parent();
        deleteAddress = $($tr.find("td").get(0)).text();
        $tr.remove();
        var lo = $(this).data('tabname');
        var arlo = jQuery.inArray(lo,routingxml.ruleID);
        var deleteArrayLocation = jQuery.inArray(deleteAddress, routingxml.routingAddress[arlo].networkAddress);
        console.log(deleteArrayLocation);
        routingxml.routingAddress[arlo].networkAddress.splice(deleteArrayLocation, 1);
        routingxml.routingAddress[arlo].priority.splice(deleteArrayLocation, 1);
        routingxml.routingAddress[arlo].mtiRoute.splice(deleteArrayLocation,1);
    });
});
