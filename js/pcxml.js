var counter = 0;
var originPCXML = {
    apTitle: ["641101", "641102"],
    apID: ["641101", "641102"],
    apName: ["Production AccessPoint", "AccessPoint Test"],
    sessionPolicySelector: ["VIC_Connection", "VIC_Test"],
}

var pcxml = {
    apTitle: ["641101", "641102"],
    apID: ["641101", "641102"],
    apName: ["Production AccessPoint", "AccessPoint Test"],
    sessionPolicySelector: ["VIC_Connection", "VIC_Test"],
}

// Access Point Span    
$(document).on('click', '.accessPoint', function(e){
    e.preventDefault();
	$parent_box = $(this).closest('.apBox');
	$parent_box.siblings().find('.apSettings').slideUp();
	$parent_box.find('.apSettings').slideToggle(1000, 'swing');
})

// Add original exists Access Point
$(document).on('click','.pcxmlButton', function(e){
    e.preventDefault();
    $('#pcxmlbtn').css('display', 'block');
    var i;
    for (i=0; i<pcxml.apTitle.length; i++) {
        counter = i+1;
        var newTextBoxDiv = $(document.createElement('div'))
	     .attr("id", 'ap'+counter);
         newTextBoxDiv.after().html('<div class = "apBox" id = "apBox">'
                                    + '<div class = "accessPoint" id = "accessPoint">'
                                    + '<input class = "apTitle" id = "apTitle'+ counter +'" value = "' + pcxml.apTitle[i] + '"/>'
                                    + '</div>'
                                    + '<div class = "apSettings" id = "apSettings">'
                                    + '<ul class="about" id ="about">'
                                    + '<li>'
                                    + '<label>Access Point ID</label>'
                                    + '<input class = "apID" id = "apID' + counter + '" type = "number" value = "'+ pcxml.apID[i] +'"/>'                                     
                                    + '<p></p>'
                                    + '</li>'
                                    + '<li>'
                                    + '<label>Access Point Name</label>'
                                    + '<textarea name="text" rows="14" cols="10" wrap="soft" class="apName" id="apName'+counter+'">'
                                    + pcxml.apName[i]
                                    + '</textarea>'
                                    // + '<input class = "apName" id = "apName' + counter + '" type = "text" value = "' + pcxml.apName[i] + '"/>'
                                    + '<p></p>' 
                                    + '</li>'
                                     + '<li>'
                                    + '<label>Session Policy</label>'
                                    + '<select class = "sessionPolicySelector" id = "sessionPolicySelector' + counter +'">'
                                    // + '<select class = "sessionPolicySelector">'
                                    + '</select>'
                                    + '<p></p>'
                                    + '</li>'
                                    + '<li>'
                                    + '<input type = "button" value = "Save" class = "saveAPbtn" id = "saveAPbtn"/>'
                                    + '<input type = "button" value = "Remove" class = "removeAPbtn" id = "removeAPbtn"/>'
                                    + '</li>'
                                    + '</ul>'
                                    + '</div>'
                                    + '</div>'                                                     
                                );
    newTextBoxDiv.appendTo("#pcxmlContainer");
    var h;
    for (h=0; h < pcdefault.pcSessionID.length; h++) {
        console.log("checked");
        if (pcxml.sessionPolicySelector[i] == pcdefault.pcSessionID[h]){
            $("#sessionPolicySelector"+counter).append('<option selected = "selected" value = "' + pcdefault.pcSessionID[h] +'">' + pcdefault.pcSessionID[h] + "</option>");
        } else {
            $("#sessionPolicySelector"+counter).append('<option value = "' + pcdefault.pcSessionID[h] +'">' + pcdefault.pcSessionID[h] + "</option>");
        } 
    }
        console.log(i);
    }

})


$(document).on('click','.addAPButton', function(e){
    e.preventDefault();
    $('#addAPbtn').css('display', 'block');
    var h;
    for (h=0; h < pcdefault.pcSessionID.length; h++) {
        console.log("checked");
        $("#newSessionPolicy").append('<option value = "' + pcdefault.pcSessionID[h] +'">' + pcdefault.pcSessionID[h] + "</option>");
        } 
    })

// Add New Access Point
$(document).ready(function(){  
    $("#addNewAPbtn").click(function (e) {
        e.preventDefault();
        counter++;
        var newAPID = $("#addAPbtn"). find(".newAPID").val();
        var newAPName = $("#addAPbtn").find(".newAPName").val();
        var newSessionPolicy = $("#addAPbtn").find(".newSessionPolicy").val();
        e.preventDefault();
    
	if(counter>10){
        alert("Only 10 Access Points allow");
        return false;
	}

	var newTextBoxDiv = $(document.createElement('div'))
	     .attr("id", 'ap'+counter);

	newTextBoxDiv.after().html('<div class = "apBox" id = "apBox">'
                                        +'<div class = "accessPoint" id = "accessPoint">'
                                        + '<input class = "apTitle" id = "apTitle'+ counter +'" value = "' + newAPID + '"/>'
                                        + '</div>'
                                        + '<div class = "apSettings" id = "apSettings">'
                                        + '<ul class="about" id ="about">'
                                        + '<li>'
                                        + '<label>Access Point ID</label>'
                                        + '<input class = "apID" id = "apID' + counter + '" type = "number" value = "'+ newAPID +'"/>'                                     
                                        + '<p></p>'
                                        + '</li>'
                                        + '<li>'
                                        + '<label>Access Point Name</label>'
                                        + '<textarea name="text" rows="14" cols="10" wrap="soft" class="apName" id="apName'+counter+'">'
                                        + newAPName
                                        + '</textarea>'
                                        // + '<input class = "apName" id = "apName' + counter + '" type = "text" value = "' + newAPName + '"/>'
                                        + '<p></p>' 
                                        + '</li>'
                                        + '<li>'
                                        + '<label>Session Policy</label>'
                                        + '<select class = "sessionPolicySelector' + counter + '" id = "sessionPolicySelector' +counter +'">'
                                        + '</select>'
                                        + '<p></p>'
                                        + '</li>'
                                        + '<li>'
                                        + '<input type = "button" value = "Save" class = "saveAPbtn" id = "saveAPbtn"/>'
                                        + '<input type = "button" value = "Remove" class = "removeAPbtn" id = "removeAPbtn"/>'
                                        + '</li>'
                                        + '</ul>'
                                        + '</div>'
                                        + '</div>'                                                     
                                );

	newTextBoxDiv.appendTo("#pcxmlContainer");
     var h;
    for (h=0; h < pcdefault.pcSessionID.length; h++) {
        if (newSessionPolicy == pcdefault.pcSessionID[h]){
            $("#sessionPolicySelector"+counter).append('<option selected = "selected" value = "' + pcdefault.pcSessionID[h] +'">' + pcdefault.pcSessionID[h] + "</option>");
        } else {
            $("#sessionPolicySelector"+counter).append('<option value = "' + pcdefault.pcSessionID[h] +'">' + pcdefault.pcSessionID[h] + "</option>");
        } 
    }
    console.log("test"+counter);
    pcxml.apTitle.push(newAPID);
    pcxml.apName.push(newAPName);
    pcxml.apID.push(newAPID);
    pcxml.sessionPolicySelector.push(newSessionPolicy);
	
    document.getElementById('addAPbtn').style.display = 'none';
     });
    
})

// remove the exists AP
$(document).on('click', '.removeAPbtn', function(e){
    e.preventDefault();
    if (counter == 1) {
        alert("At least one Access Point should be defined!");
        return false;
    }
    counter--;
    var deleteAPTitle = $(this).parents(".apBox").find(".apTitle").val();
    pcxml.apTitle.splice(jQuery.inArray(deleteAPTitle, pcxml.apTitle), 1);
    var deleteAPID = $(this).parents(".apBox").find(".apID").val();
    pcxml.apID.splice(jQuery.inArray(deleteAPID, pcxml.apID), 1);
    var deleteAPName = $(this).parents(".apBox").find(".apName").val();
    pcxml.apName.splice(jQuery.inArray(deleteAPName, pcxml.apName), 1);
    var deleteSessionPolicy = $(this).parents(".apBox").find(".sessionPolicySelector").val();
    pcxml.sessionPolicySelector.splice(jQuery.inArray(deleteSessionPolicy, pcxml.sessionPolicySelector), 1);
    $(this).parents(".apBox").remove();
    
    
})


// saveApbtn 
$(document).on('click', '.saveAPbtn', function(e){
    e.preventDefault();
    var updateAPID = $(this).parents(".apBox").find(".apID").val();
    var i = pcxml.apID.indexOf(updateAPID);
    var updateAPName = $(this).parents(".apBox").find(".apName").val();
    pcxml.apName[i] = updateAPName;
    var updateSessionPolicy = $(this).parents(".apBox").find(".sessionPolicySelector").val();
    pcxml.sessionPolicySelector[i] = updateSessionPolicy;  
})

