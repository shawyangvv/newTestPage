var easRegionChoices = ["USA", "Canada", "EU", "AsiaPacific", "LatinAmerica", "CEMEA", "Inovant"]

var easFailoverModualChoices = ["single", "dual"]

var easDomainNameChoices = ["usa.visa.net", "can.visa.net", "eu.visa.net", "ap.visa.net", "lac.visa.net", "cemea.visa.net"]

var easServerPriorityChoices = ["primary", "secondary"]

var abilityChoices = ["YES", "NO"]

var originalEASGeneralSettings={
    region: "USA",
    serverGroup: {
        failOver: "single",
        domainName: "usa.visa.net",
        gatewayIP: "192.168.1.1",
        organizationName: "visa",
        organizationUnitName: "Inovant"
    },
    server: {
        hostName: "s172easup08",
        serverPriority: "primary"
    },
    peerSettings:{
        peerHostName: "s172easup12",
        failOverDetectTime: 15000,
        heartBeatInterval: 1000,
        missedHeartBeat: 65,
        icmpTimeout: 30000,
        epMulticastIP: ["225.1.2.3"],
        pcMulticastIP: ["224.1.2.3","226.1.2.3"],
        epMulticastPortNumber: 4018,
        epICMPAbility: "NO",
        epMulticastAbility: "NO"
    },
    thresholdSettings:{
        generalSettings:{
            minOnlineCPU: 1,
            minCPUIdle: 20,
            maxCPUUser: 70,
            maxCPUKernel: 60,
            minFreeMemory: 15,
            alertCount: 20,
            minFreeSwap: 15,
            cpuAlertCount: 50,
            partitionAlertCount: 50,
            partitionMaxUtilization: 80,
            networkAlertCount: 50,
            loadAlertsInterval: 120,
            checkNewAlertInterval: 120
        },
        process: {
            name: ["slapd", "syslog-ng", "cron", "xntpd", "stunnel", "postgres", "efsserver", "emsserver", "mgserver", "edgeui", "idm"],
            settings: [
                {maxCPU: 25,
                 maxMemory: 25,
                 alertCount: 25,
                },

                {maxCPU: 25,
                 maxMemory: 25,
                 alertCount: 25,
                },

                {maxCPU: 25,
                 maxMemory: 25,
                 alertCount: 25,
                },

                {maxCPU: 25,
                 maxMemory: 25,
                 alertCount: 25,
                },

                {maxCPU: 25,
                 maxMemory: 25,
                 alertCount: 25,
                },
                {maxCPU: 25,
                 maxMemory: 25,
                 alertCount: 25,
                },
                {maxCPU: 25,
                 maxMemory: 25,
                 alertCount: 25,
                },
                {maxCPU: 25,
                 maxMemory: 25,
                 alertCount: 25,
                },
                {maxCPU: 25,
                 maxMemory: 25,
                 alertCount: 25,
                },
                {maxCPU: 25,
                 maxMemory: 25,
                 alertCount: 25,
                },
                {maxCPU: 25,
                 maxMemory: 25,
                 alertCount: 25,
                },
            ],
        },
            
        
    },
}

var easGeneralSettings={
    region: "USA",
    serverGroup: {
        failOver: "single",
        domainName: "usa.visa.net",
        gatewayIP: "192.168.1.1",
        organizationName: "visa",
        organizationUnitName: "Inovant"
    },
    server: {
        hostName: "s172easup08",
        serverPriority: "primary"
    },
    peerSettings:{
        peerHostName: "s172easup12",
        failOverDetectTime: 15000,
        heartBeatInterval: 1000,
        missedHeartBeat: 65,
        icmpTimeout: 30000,
        epMulticastIP: ["225.1.2.3"],
        pcMulticastIP: ["224.1.2.3","226.1.2.3"],
        epMulticastPortNumber: 4018,
        epICMPAbility: "NO",
        epMulticastAbility: "NO"
    },
     thresholdSettings:{
        generalSettings:{
            minOnlineCPU: 1,
            minCPUIdle: 20,
            maxCPUUser: 70,
            maxCPUKernel: 60,
            minFreeMemory: 15,
            alertCount: 20,
            minFreeSwap: 15,
            cpuAlertCount: 50,
            partitionAlertCount: 50,
            partitionMaxUtilization: 80,
            networkAlertCount: 50,
            loadAlertsInterval: 120,
            checkNewAlertInterval: 120
        },
        process: {
            name: ["slapd", "syslog-ng", "cron", "xntpd", "stunnel", "postgres", "efsserver", "emsserver", "mgserver", "edgeui", "idm"],
            settings: [
                {maxCPU: 25,
                 maxMemory: 25,
                 alertCount: 25,
                },

                {maxCPU: 25,
                 maxMemory: 25,
                 alertCount: 25,
                },

                {maxCPU: 25,
                 maxMemory: 25,
                 alertCount: 25,
                },

                {maxCPU: 25,
                 maxMemory: 25,
                 alertCount: 25,
                },

                {maxCPU: 25,
                 maxMemory: 25,
                 alertCount: 25,
                },
                {maxCPU: 25,
                 maxMemory: 25,
                 alertCount: 25,
                },
                {maxCPU: 25,
                 maxMemory: 25,
                 alertCount: 25,
                },
                {maxCPU: 25,
                 maxMemory: 25,
                 alertCount: 25,
                },
                {maxCPU: 25,
                 maxMemory: 25,
                 alertCount: 25,
                },
                {maxCPU: 25,
                 maxMemory: 25,
                 alertCount: 25,
                },
                {maxCPU: 25,
                 maxMemory: 25,
                 alertCount: 25,
                },
            ],
        },
            
        
    },
}

$(document).on('click','.easGeneralSettingsButton', function(e){
    e.preventDefault();
    $('#easGeneralSettingsbtn').css('display', 'block');
    $.get('/easSettings.html', function(data){
        $('#easGSContainer').append(data);
        $("#easGSContent #easThresholdsSettings").hide();

        // load data in Thresholds Settings
    $('#easGeneralSettingsbtn').find(".minCPUCount").val(easGeneralSettings.thresholdSettings.generalSettings.minOnlineCPU);
    $('#easGeneralSettingsbtn').find(".minCPUIdle").val(easGeneralSettings.thresholdSettings.generalSettings.minCPUIdle);
    $('#easGeneralSettingsbtn').find(".minFreeMemory").val(easGeneralSettings.thresholdSettings.generalSettings.minFreeMemory);
    $('#easGeneralSettingsbtn').find(".maxCPUKernel").val(easGeneralSettings.thresholdSettings.generalSettings.maxCPUKernel);
    $('#easGeneralSettingsbtn').find(".maxCPUUser").val(easGeneralSettings.thresholdSettings.generalSettings.maxCPUUser);
    $('#easGeneralSettingsbtn').find(".alertSamplingCount").val(easGeneralSettings.thresholdSettings.generalSettings.alertCount);
    $('#easGeneralSettingsbtn').find(".partitionAlertCount").val(easGeneralSettings.thresholdSettings.generalSettings.partitionAlertCount);
    $('#easGeneralSettingsbtn').find(".partitionMaxUtilization").val(easGeneralSettings.thresholdSettings.generalSettings.partitionMaxUtilization);
    $('#easGeneralSettingsbtn').find(".networkAlertSamplingCount").val(easGeneralSettings.thresholdSettings.generalSettings.networkAlertCount);
    $('#easGeneralSettingsbtn').find(".loadTimeInterval").val(easGeneralSettings.thresholdSettings.generalSettings.loadAlertsInterval);
    $('#easGeneralSettingsbtn').find(".checkAlertFilesInterval").val(easGeneralSettings.thresholdSettings.generalSettings.checkNewAlertInterval);


        // Auto Load Region Selector
        var h;
        for (h=0; h<easRegionChoices.length; h++){
            if (easGeneralSettings.region == easRegionChoices[h]){
                $("#easRegionSelector").append('<option selected = "selected" value = "' +easRegionChoices[h] +'">' + easRegionChoices[h] +"</option>");
            } else {
                $("#easRegionSelector").append('<option value = "' +easRegionChoices[h] +'">' + easRegionChoices[h] +"</option>");
            }
        }

        // Auto Load Failover Modual
        var h;
        for (h=0; h<easFailoverModualChoices.length; h++){
            if (easGeneralSettings.serverGroup.failOver == easFailoverModualChoices[h]){
                $("#easFailoverModalSelector").append('<option selected = "selected" value = "' +easFailoverModualChoices[h] +'">' + easFailoverModualChoices[h] +"</option>");
            } else {
                $("#easFailoverModalSelector").append('<option value = "' +easFailoverModualChoices[h] +'">' + easFailoverModualChoices[h] +"</option>");
            }
        }

        // Auto Load Domain Name
        var h;
        for (h=0; h<easDomainNameChoices.length; h++){
            if (easGeneralSettings.serverGroup.domainName == easDomainNameChoices[h]){
                $("#easDomainNameSelector").append('<option selected = "selected" value = "' +easDomainNameChoices[h] +'">' + easDomainNameChoices[h] +"</option>");
            } else {
                $("#easDomainNameSelector").append('<option value = "' +easDomainNameChoices[h] +'">' + easDomainNameChoices[h] +"</option>");
            }
        }

        $("#easGeneralSettingsbtn").find(".easGatewayIP").val(easGeneralSettings.serverGroup.gatewayIP);
        $("#easGeneralSettingsbtn").find(".easOrganizationName").val(easGeneralSettings.serverGroup.organizationName);
        $('#easGeneralSettingsbtn').find(".easOrganizationUnitName").val(easGeneralSettings.serverGroup.organizationUnitName);
    
        $('#easGeneralSettingsbtn').find(".easServerHostName").val(easGeneralSettings.server.hostName);
        
        $('#easGeneralSettingsbtn').find(".easPeerHostName").val(easGeneralSettings.peerSettings.peerHostName);
        $('#easGeneralSettingsbtn').find(".easFailoverDetectTime").val(easGeneralSettings.peerSettings.failOverDetectTime);
        $('#easGeneralSettingsbtn').find(".easHBInterval").val(easGeneralSettings.peerSettings.heartBeatInterval);
        $('#easGeneralSettingsbtn').find(".easHBMissedNum").val(easGeneralSettings.peerSettings.missedHeartBeat);
        $('#easGeneralSettingsbtn').find(".easICMPTimeout").val(easGeneralSettings.peerSettings.icmpTimeout);
        $('#easGeneralSettingsbtn').find(".easMulticastPortNum").val(easGeneralSettings.peerSettings.epMulticastPortNumber);
    
        // whether it is dual Modual
        if (easGeneralSettings.serverGroup.failOver == "dual"){
            $("#dual-block").removeClass('element-hide').addClass('element-show');
            var h;
            for (h=0; h<easServerPriorityChoices.length; h++){
                if (easGeneralSettings.server.serverPriority == easServerPriorityChoices[h]){
                $("#easDualServerPrioritySelector").append('<option selected = "selected" value = "' +easServerPriorityChoices[h] +'">' + easServerPriorityChoices[h] +"</option>");
                } else {
                    $("#easDualServerPrioritySelector").append('<option value = "' +easServerPriorityChoices[h] +'">' + easServerPriorityChoices[h] +"</option>");
                }
            }
    
            $("#failover-block").removeClass('element-hide').addClass('element-show');
            
         
            for (h=0; h<abilityChoices.length; h++){
                if (easGeneralSettings.peerSettings.epICMPAbility == abilityChoices[h]){
                    $("#icmpForRouterSelector").append('<option selected = "selected" value = "' +abilityChoices[h] +'">' + abilityChoices[h] +"</option>")
                } else {
                    $("#icmpForRouterSelector").append('<option value = "' +abilityChoices[h] +'">' + abilityChoices[h] +"</option>") 
            }
            }
            for (h=0; h<abilityChoices.length; h++){
                if (easGeneralSettings.peerSettings.epMulticastAbility == abilityChoices[h]){
                    $("#epMulticastSelector").append('<option selected = "selected" value = "' +abilityChoices[h] +'">' + abilityChoices[h] +"</option>")
                } else {
                    $("#epMulticastSelector").append('<option value = "' +abilityChoices[h] +'">' + abilityChoices[h] +"</option>") 
                }
            }

            //Auto load Endpoint-side multicast IP Address
            var h;
            for (h=0; h<easGeneralSettings.peerSettings.epMulticastIP.length; h++){
                var $delete = $("<input />").attr("type","button").attr("value","Remove").attr("data-number",h);
                var $tr = $("<tr></tr>");
                var $td1 = $("<td></td>").html(easGeneralSettings.peerSettings.epMulticastIP[h]);
                var $td2 =  $("<td></td>").append($delete);
                $tr.append($td1);
                $tr.append($td2);
                
                $("#easEPMulticasttbodyID").append($tr);

                $delete.click(function(){
                    e.preventDefault();
                    $tr = $(this).parent().parent();
                    $tr.remove();
                    var lo = $(this).data('number');
                    easGeneralSettings.peerSettings.epMulticastIP.splice(lo,1);    
                });
            }


        } else {
            $("#dual-block").removeClass('element-show').addClass('element-hide');
        }
        
    })

    
})

//Enable click on the table value of Process Thresholds Settings
var h;
for (h=0; h<easGeneralSettings.thresholdSettings.process.name.length*4; h++){ 
    $(document).on('click',"#easProcessThresholdsTbody th:eq("+h+")", function(e){
        e.preventDefault();
        var tdObj = $(this);

        var lo = tdObj.parent().data('location');
        var coloValue = tdObj.data('colonum');

        if (tdObj.children("input").length>0){
            return false;
        }

        var text = tdObj.html();
        tdObj.html("");

        if (coloValue == 0 ){
            var inputObj=$("<input type='text'>").val(text).appendTo(tdObj)
            inputObj.trigger("focus").trigger("select")
           
            inputObj.click(function(){
                e.preventDefault();
                return false;
            });
            inputObj.keyup(function(event){
                var keycode = event.which;
                if (keycode ==13){
                    var inputText = $(this).val();
                    easGeneralSettings.thresholdSettings.process.settings[lo].
                    tdObj.html(inputText);
                }

                if (keycode == 27){
                    tdObj.html(text);
                }
             easGeneralSettings.thresholdSettings.process.name[lo] = inputObj.val();
            })
        } else {
            var inputObj=$("<input type='number'>").val(text).appendTo(tdObj)
            inputObj.trigger("focus").trigger("select")
        
            inputObj.click(function(){
                e.preventDefault();
                return false;
            });
            inputObj.keyup(function(event){
                var keycode = event.which;
                if (keycode ==13){
                    var inputText = $(this).val();
                    easGeneralSettings.thresholdSettings.process.settings[lo].
                    tdObj.html(inputText);
                }

                if (keycode == 27){
                    tdObj.html(text);
                }
                 if (coloValue == 1){
                    easGeneralSettings.thresholdSettings.process.settings[lo].maxCPU = inputObj.val();
                }
                if (coloValue == 2){
                    easGeneralSettings.thresholdSettings.process.settings[lo].maxMemory = inputObj.val();
                }
                if (coloValue == 3){
                    easGeneralSettings.thresholdSettings.process.settings[lo].alertCount = inputObj.val();
                }
            })
           
        }
      
    })
 }

//When change the value 
$(document).on('change','.easFailoverModalSelector', function(e){
    if (e.target.value == "dual"){
        $("#dual-block").removeClass('element-hide').addClass('element-show');
        var h;
        for (h=0; h<easServerPriorityChoices.length; h++){
            if (easGeneralSettings.server.serverPriority == easServerPriorityChoices[h]){
            $("#easDualServerPrioritySelector").append('<option selected = "selected" value = "' +easServerPriorityChoices[h] +'">' + easServerPriorityChoices[h] +"</option>");
            } else {
                $("#easDualServerPrioritySelector").append('<option value = "' +easServerPriorityChoices[h] +'">' + easServerPriorityChoices[h] +"</option>");
            }
        }

        $("#failover-block").removeClass('element-hide').addClass('element-show');
        for (h=0; h<abilityChoices.length; h++){
            if (easGeneralSettings.peerSettings.epICMPAbility == abilityChoices[h]){
                $("#icmpForRouterSelector").append('<option selected = "selected" value = "' +abilityChoices[h] +'">' + abilityChoices[h] +"</option>")
            } else {
                $("#icmpForRouterSelector").append('<option value = "' +abilityChoices[h] +'">' + abilityChoices[h] +"</option>") 
            }
        }
        for (h=0; h<abilityChoices.length; h++){
            if (easGeneralSettings.peerSettings.epMulticastAbility == abilityChoices[h]){
                $("#epMulticastSelector").append('<option selected = "selected" value = "' +abilityChoices[h] +'">' + abilityChoices[h] +"</option>")
            } else {
                $("#epMulticastSelector").append('<option value = "' +abilityChoices[h] +'">' + abilityChoices[h] +"</option>") 
            }
        }

        //Auto load Endpoint-side multicast IP Address
        var h;
        for (h=0; h<easGeneralSettings.peerSettings.epMulticastIP.length; h++){
            var $delete = $("<input />").attr("type","button").attr("value","Remove").attr("data-number",h);

            var $tr = $("<tr></tr>");
            var $td1 = $("<td></td>").html(easGeneralSettings.peerSettings.epMulticastIP[h]);
            var $td2 =  $("<td></td>").append($delete);
            $tr.append($td1);
            $tr.append($td2);
         
            $("#easEPMulticasttbodyID").append($tr);

            $delete.click(function(){
                e.preventDefault();
                $tr = $(this).parent().parent();
                $tr.remove();
                var lo = $(this).data('number');
                easGeneralSettings.peerSettings.epMulticastIP.splice(lo,1);
                
            });
        }
        //Auto load Visa-side multicast IP Address
        var h;
        for (h=0; h<easGeneralSettings.peerSettings.pcMulticastIP.length; h++){
            var $delete = $("<input />").attr("type","button").attr("value","Remove").attr("data-number",h);

            var $tr = $("<tr></tr>");
            var $td1 = $("<td></td>").html(easGeneralSettings.peerSettings.pcMulticastIP[h]);
            var $td2 =  $("<td></td>").append($delete);
            $tr.append($td1);
            $tr.append($td2);
         
            $("#easPCMulticasttbodyID").append($tr);

            $delete.click(function(){
                e.preventDefault();
                $tr = $(this).parent().parent();
                $tr.remove();
                var lo = $(this).data('number');
                easGeneralSettings.peerSettings.pcMulticastIP.splice(lo,1);
                
            });
        }
        
    } else {
        $("#dual-block").removeClass('element-show').addClass('element-hide');
    }
})

// -----------------------------------
// Newly Add new EP MC IP Address
// ------------------------------------
$(document).on('click', ".addNewEPMCIPAddress", function(){
    e.preventDefault();
    //Alloacate IP Address and Port Number, fetch out the input
    var newIPAddress = $(this).parent(".easEPMulticastIP").find(".newEPMulticastIPInput").val();

    // Add in  Array
    easGeneralSettings.peerSettings.epMulticastIP.push(newIPAddress);
    var lo=jQuery.inArray(newIPAddress,easGeneralSettings.peerSettings.epMulticastIP)

    var $delete = $("<input />").attr("type","button").attr("value","Remove").attr("data-number",lo);
    
   //create tr, td
    var $tr = $("<tr></tr>");
    var $td1 = $("<td></td>").html(newIPAddress);
    var $td2 =  $("<td></td>").append($delete);
    
    $tr.append($td1);
    $tr.append($td2);
    
    $("#easEPMulticasttbodyID").append($tr);
    
     $delete.click(function(){
        e.preventDefault();
        $tr = $(this).parent().parent();
        $tr.remove();
        var lo = $(this).data('number');
        easGeneralSettings.peerSettings.epMulticastIP.splice(lo,1);        
    });
});

// -----------------------------------
// Newly Add new pC MC IP Address
// ------------------------------------
$(document).on('click', ".addNewPCMCIPAddress", function(){
    e.preventDefault();
    //Alloacate IP Address and Port Number, fetch out the input
    var newIPAddress = $(this).parent(".easPCMulticastIP").find(".newPCMulticastIPInput").val();

    // Add in  Array
    easGeneralSettings.peerSettings.pcMulticastIP.push(newIPAddress);
    var lo=jQuery.inArray(newIPAddress,easGeneralSettings.peerSettings.pcMulticastIP)

    var $delete = $("<input />").attr("type","button").attr("value","Remove").attr("data-number",lo);
    
   //create tr, td
    var $tr = $("<tr></tr>");
    var $td1 = $("<td></td>").html(newIPAddress);
    var $td2 =  $("<td></td>").append($delete);
    
    $tr.append($td1);
    $tr.append($td2);
    
    $("#easPCMulticasttbodyID").append($tr);
    
     $delete.click(function(){
         e.preventDefault();
         $tr = $(this).parent().parent();
        $tr.remove();
        var lo = $(this).data('number');
        easGeneralSettings.peerSettings.pcMulticastIP.splice(lo,1);
                
    });
});


 $(document).on('click', '.saveEASServerSettingsbtn', function(e){
    e.preventDefault()

    easGeneralSettings.region =$(this).parents('.modal').find(".easRegionSelector").val();
    easGeneralSettings.serverGroup.failOver =$(this).parents('.modal').find(".easFailoverModalSelector").val();
    easGeneralSettings.serverGroup.domainName =$(this).parents('.modal').find(".easDomainNameSelector").val();
    easGeneralSettings.serverGroup.gatewayIP =$(this).parents('.modal').find(".easGatewayIP").val();
    easGeneralSettings.serverGroup.organizationName =$(this).parents('.modal').find(".easOrganizationName").val();
    easGeneralSettings.serverGroup.organizationUnitName =$(this).parents('.modal').find(".easOrganizationUnitName").val();

    easGeneralSettings.server.hostName =$(this).parents('.modal').find(".easServerHostName").val();
    easGeneralSettings.server.serverPriority =$(this).parents('.modal').find(".easDualServerPrioritySelector").val();   
 
    easGeneralSettings.peerSettings.peerHostName = $(this).parents('.modal').find(".easPeerHostName").val();
    easGeneralSettings.peerSettings.failOverDetectTime = $(this).parents('.modal').find(".easFailoverDetectTime").val();
    easGeneralSettings.peerSettings.heartBeatInterval = $(this).parents('.modal').find(".easHBInterval").val();
    easGeneralSettings.peerSettings.missedHeartBeat = $(this).parents('.modal').find(".easHBMissedNum").val();
    easGeneralSettings.peerSettings.icmpTimeout = $(this).parents('.modal').find(".easICMPTimeout").val();
    
    easGeneralSettings.peerSettings.epMulticastPortNumber = $(this).parents('.modal').find(".easMulticastPortNum").val();
    easGeneralSettings.peerSettings.epICMPAbility = $(this).parents('.modal').find(".icmpForRouterSelector").val();
    easGeneralSettings.peerSettings.epMulticastAbility = $(this).parents('.modal').find(".epMulticastSelector").val();

    $(this).closest('.modal')[0].style.display = 'none';
})



//Tabs Click 
$(document).on('click', '#easGStabs a', function(e){
    e.preventDefault();        
    $("#easGSContent #easGeneralSettings").hide();
    $("#easGSContent #easThresholdsSettings").hide();
    $("#easGSContent #tab3").hide();
    $("#easGSContent #tab4").hide();
    $("#easGStabs li").attr("id",""); 
    $(this).parent().attr("id","current"); 
    $('#' + $(this).attr('title')).fadeIn(); 
})