var idmLogLevelChoices=["ERROR", "WARNING", "INFO", "DEBUG"]

var pcMSSettings={
    msName: ["Cron Jobs", "IDM Application"],
    idmLogLevel:"INFO",
    cronJob:[
        {
        user: "bartadm",
        names: ["bartsh"],
        settings:[{
            name: "bartsh",
            command: "/usr/bin/sudo /opt/edge/3rdparty/bin/bartsh | /bin/logger -i -t bartadm_crond",
            minute: 30,
            hour: 1,
            monthDay: NaN,
            month: NaN,
            weekDay: NaN
        }]
    },
    {
        user: "edge",
        names: ["purge_offboard", "purge_message", "easldapsync", "easalertsync", "archivememberdata", "certmanager", "emsCleanTextLog", "sysmon_cleanup", "ea_system_snapshot"],
        settings:[
            {name: "purge_offboard",
             command: '/opt/edge/ems/scripts/clean_offboard.ksh',
             minute: 0,
             hour: 0,
             monthDay: NaN,
             month: NaN,
             weekDay: NaN
            },
            {name: "purge_message",
             command: '/opt/edge/ems/scripts/emsCleanBinaryLog.ksh',
             minute: 0,
             hour: 0,
             monthDay: NaN,
             month: NaN,
             weekDay: NaN
            },
            {name: "easldapsync",
             command: '/opt/edge/idm/scripts/easldapsync.sh',
             minute: 15,
             hour: 0,
             monthDay: NaN,
             month: NaN,
             weekDay: NaN
            },
            {name: "easalertsync",
             command: '/opt/edge/idm/scripts/easalertsync.sh',
             minute: 0,
             hour: 6,
             monthDay: 1,
             month: NaN,
             weekDay: NaN
            },
            {name: "archivememberdata",
             command: '/opt/edge/idm/scripts/archivememberdata.sh  /var/opt/idm/data/memberdata.xml',
             minute: 0,
             hour: 11,
             monthDay: NaN,
             month: NaN,
             weekDay: NaN
            },
            {name: "certmanager",
             command: '/opt/edge/3rdparty/util/bin/certmanager.ksh validate /etc/certs/ssl.pem',
             minute: 20,
             hour: 8,
             monthDay: NaN,
             month: NaN,
             weekDay: NaN
            },
            {name: "emsCleanTextLog",
             command: '/opt/edge/ems/scripts/emsCleanTextLog.ksh',
             minute: 0,
             hour: 0,
             monthDay: NaN,
             month: NaN,
             weekDay: NaN
            },
            {name: "sysmon_cleanup",
             command: '/opt/edge/adminserver/sysmon/sysmon_cleanup.ksh',
             minute: 0,
             hour: 0,
             monthDay: NaN,
             month: NaN,
             weekDay: NaN
            },
            {name: "ea_system_snapshot",
             command: '/opt/edge/support/system/scripts/cronWrapper.ksh -l /var/opt/log/ea_system_snapshot.log  /opt/edge/support/system/scripts/ea_system_snapshot.ksh',
             minute: 45,
             hour: 1,
             monthDay: NaN,
             month: NaN,
             weekDay: NaN
            },
        ],
    }]
}

// ------------------------------------
// Dynamical loading the exists data
// --------------------------------------
$(document).on('click','.pcMSButton', function(e){
    e.preventDefault();
    $('#pcMSbtn').css('display', 'block');
    var i;
    for (i=0; i<pcMSSettings.msName.length; i++) {
        counter = i+1;
        var lol=counter-1;
        var newTabMenu = $(document.createElement('div')).attr("id", 'pcMSTabMenu' + counter);
        newTabMenu.after().html ('<button class="tablinks" onclick="managementSystems(event, \''
                                + pcMSSettings.msName[i]
                                + '\')">' 
                                + pcMSSettings.msName[i]
                                + '</button>');
        newTabMenu.appendTo("#pcMSTabMenu");

        var newTextBoxDiv = $(document.createElement('div'))
	         .attr("id", 'pcMStab' + counter);
        if (pcMSSettings.msName[i]=="Cron Jobs"){
            newTextBoxDiv.after().html('<div id ="'+ pcMSSettings.msName[i] +'" class = "tabcontent" style="height:93%; width: 87%">'
                                +  '<label class = "easGSSubTitle"> Cron Job intervals for user \'bartadm\' </label>'
                                +  '<hr/>'
                                +  '<table id="bartadmCronJobs" class="display" cellspacing="0" style="width: 80%">'
                                +  '<thead>'
                                +  '<tr>'
                                +  '<th>Name</th>'
                                +  '<th>Command</th>'
                                +  '<th>Minute Entry</th>'
                                +  '<th>Hour Entry</th>'
                                +  '<th>Day of the Month</th>'
                                +  '<th>Month of the Year</th>'
                                +  '<th>Day of the Week</th>'
                                +  '</tr>'
                                +  '</thead>'
                                +  '</table>'

                                +  '<label class = "easGSSubTitle"> Cron Job intervals for user \'edge\' </label>'
                                +  '<hr/>'
                                +  '<table id="edgeCronJobs" class="display" cellspacing="0"  style="width: 80%">'
                                +  '<thead>'
                                +  '<tr>'
                                +  '<th>Name</th>'
                                +  '<th>Command</th>'
                                +  '<th>Minute Entry</th>'
                                +  '<th>Hour Entry</th>'
                                +  '<th>Day of the Month</th>'
                                +  '<th>Month of the Year</th>'
                                +  '<th>Day of the Week</th>'
                                +  '</tr>'
                                +  '</thead>'
                                +  '</table>'
                                +  '</div>')
        newTextBoxDiv.appendTo("#pcMSTabContentContainer");
        // Loading the 'bartadm' Table
    $('#bartadmCronJobs').DataTable({
        data: pcMSSettings.cronJob[0].settings,
        columns:[
            {data: 'name'},
            {data: 'command',
                render: function(data, type, row){
                    return "<textarea type = 'text' class = 'command'>" + data + "</textarea>"
                }
            },
            {data: 'minute',
              render: function(data, type, row){
                  return "<input class = 'minute' value='"+ data +"' type='number'>"
            }},
            {data: 'hour',
                render: function(data, type, row){
                    return "<input class = 'hour' value='"+ data +"' type='number'>"
                }
            },
            {data: 'monthDay',
                render: function(data, type, row){
                    return "<input class = 'monthDay' value='"+ data +"' type='number'>"             
                }
            },
            {data: 'month',
                render: function(data, type, row){
                    return "<input class = 'month' value='"+ data +"' type='number'>"
                }
            },
            {data: 'weekDay',
                render: function(data, type, row){
                    return "<input class = 'weekDay' value='"+ data +"' type='number'>"
                }
            },
        ], 
    })
    // Loading "edge" Table
    $('#edgeCronJobs').DataTable({
        data: pcMSSettings.cronJob[1].settings,
        columns:[
            {data: 'name'},
            {data: 'command',
                render: function(data, type, row){
                    return "<textarea type = 'text' class = 'command'>" + data + "</textarea>"
                }
            },
            {data: 'minute',
              render: function(data, type, row){
                  return "<input class = 'minute' value='"+ data +"' type='number'>"
            }},
            {data: 'hour',
                render: function(data, type, row){
                    return "<input class = 'hour' value='"+ data +"' type='number'>"
                }
            },
            {data: 'monthDay',
                render: function(data, type, row){
                    return "<input class = 'monthDay' value='"+ data +"' type='number'>"             
                }
            },
            {data: 'month',
                render: function(data, type, row){
                    return "<input class = 'month' value='"+ data +"' type='number'>"
                }
            },
            {data: 'weekDay',
                render: function(data, type, row){
                    return "<input class = 'weekDay' value='"+ data +"' type='number'>"
                }
            },
        ], 
    })

    } else {
        newTextBoxDiv.after().html('<div id ="'+ pcMSSettings.msName[i] +'" class = "tabcontent" style="height:93%; width: 87%">'
                                 + '<label> Application Log Level: </label>'
                                 + '<select class="idmLogLevel">'
                                 
                                 + '</select>'
                                 + '</div>')
        newTextBoxDiv.appendTo("#pcMSTabContentContainer");
        var h;
        for (h=0; h<idmLogLevelChoices.length; h++){
            if (pcMSSettings.idmLogLevel==idmLogLevelChoices[h]){
                $(".idmLogLevel").append('<option selected = "selected" value = "' +idmLogLevelChoices[h] +'">' + idmLogLevelChoices[h] +"</option>");
            } else {
                $(".idmLogLevel").append('<option value = "' +idmLogLevelChoices[h] +'">' + idmLogLevelChoices[h] +"</option>");
            }
        }
    }
        
    }

})

// ----------------------
//  Open the correspoding span
// ---------------------
function managementSystems(evt, name) {
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