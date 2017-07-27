// Main Tab Pages
$(document).on('click','.submitButton', function(e){
    $('#submitbtn').css('display', 'block');
    $.get('/submitPage.html', function(data){
        console.log(data);
        $('#changesContainer').append(data);
        $("#submitContent div").hide(); 
	    $("#tabs li:first").attr("id","current"); 
	    $("#submitContent div:first").fadeIn(); 
        // EFS Changes Title
        if(efsConfig.efs != originalEFSConfig.efs){
            var newEFSSettings = $(document.createElement('div')).attr("id", 'newEFSSettings');
            newEFSSettings.after().html('<label class = "easGSSubTitle"> EFS Changes </label>'
                                        + '<hr/>'
                                        +'<p></p>');
            newEFSSettings.appendTo("#efsChanges");
        }
        // EFS Changes
        if (efsConfig.efs.purgeInterval != originalEFSConfig.efs.purgeInterval) {
            var newpurgeInterval = $(document.createElement('div')).attr("id", 'newEFSPurgeInterval');
            newpurgeInterval.after().html('<label >Purge Interval:</label>'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '<del>'
                                      + originalEFSConfig.efs.purgeInterval
                                      + '</del>'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '<ins>'
                                      + efsConfig.efs.purgeInterval
                                      + '</ins>'
                                      + '<p></p>');
            newpurgeInterval.appendTo("#efsChanges");
            console.log(newpurgeInterval);
        };

        if (efsConfig.efs.purgeDelay != originalEFSConfig.efs.purgeDelay) {
            var newpurgeDelay = $(document.createElement('div')).attr("id", 'newEFSPurgeDelay');
            newpurgeDelay.after().html('<label>Purge Interval:</label>'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '<del>'
                                      + originalEFSConfig.efs.purgeDelay
                                      + '</del>'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '<ins>'
                                      + efsConfig.efs.purgeDelay
                                      + '</ins>'
                                      + '<p></p>');
            newpurgeDelay.appendTo("#efsChanges");
            console.log(newpurgeDelay);
        };

         if (efsConfig.efs.logLevel != originalEFSConfig.efs.logLevel) {
            var newlogLevel = $(document.createElement('div')).attr("id", 'newEFSPurgeDelay');
            newlogLevel.after().html('<label>Purge Interval:</label>'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '<del>'
                                      + originalEFSConfig.efs.logLevel
                                      + '</del>'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '<ins>'
                                      + efsConfig.efs.logLevel
                                      + '</ins>'
                                      + '<p></p>');
            newlogLevel.appendTo("#efsChanges");
            console.log(newlogLevel);
        };

        if (efsConfig.efs.blockInventory != originalEFSConfig.efs.blockInventory) {
            var newblockInventory = $(document.createElement('div')).attr("id", 'newEFSPurgeDelay');
            newblockInventory.after().html('<label>Purge Interval:</label>'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '<del>'
                                      + originalEFSConfig.efs.blockInventory
                                      + '</del>'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '<ins>'
                                      + efsConfig.efs.blockInventory
                                      + '</ins>'
                                      + '<p></p>');
            newblockInventory.appendTo("#efsChanges");
            console.log(newblockInventory);
        };

        //AFTP Title
        if(efsConfig.aftp != originalEFSConfig.aftp){
            var newEFSSettings = $(document.createElement('div')).attr("id", 'newEFSSettings');
            newEFSSettings.after().html('<label class="easGSSubTitle"> AFTP Changes </label>'
                                        + '<hr/>'
                                        +'<p></p>');
            newEFSSettings.appendTo("#efsChanges");
        }

        //AFTP Changes
        if (efsConfig.aftp.connectionTimeout != originalEFSConfig.aftp.connectionTimeout) {
            var newconnectionTimeout = $(document.createElement('div')).attr("id", 'newconnectionTimeout');
            newconnectionTimeout.after().html('<label>AFTP Connection to VIC Timeout:</label>'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '<del>'
                                      + originalEFSConfig.aftp.connectionTimeout
                                      + '</del>'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '<ins>'
                                      + efsConfig.aftp.connectionTimeout
                                      + '</ins>'
                                      + '<p></p>');
            newconnectionTimeout.appendTo("#efsChanges");
            console.log(newconnectionTimeout);
        };

        if (efsConfig.aftp.sendSize != originalEFSConfig.aftp.sendSize) {
            var newAFTPsendSize = $(document.createElement('div')).attr("id", 'newAFTPsendSize');
            newAFTPsendSize.after().html('<label>Send Socket Buffer Size:</label>'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '<del>'
                                      + originalEFSConfig.aftp.sendSize
                                      + '</del>'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '<ins>'
                                      + efsConfig.aftp.sendSize
                                      + '</ins>'
                                      + 'Bytes'
                                      + '<p></p>');
            newAFTPsendSize.appendTo("#efsChanges");
        };

        if (efsConfig.aftp.receiveSize != originalEFSConfig.aftp.receiveSize) {
            var newAFTPreceiveSize = $(document.createElement('div')).attr("id", 'newAFTPreceiveSize');
            newAFTPreceiveSize.after().html('<label>Receive Socket Buffer Size:</label>'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '<del>'
                                      + originalEFSConfig.aftp.receiveSize
                                      + '</del>'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '<ins>'
                                      + efsConfig.aftp.receiveSize
                                      + '</ins>'
                                      + 'Bytes'
                                      + '<p></p>');
            newAFTPreceiveSize.appendTo("#efsChanges");
        };

        if (efsConfig.aftp.fqdnCheck != originalEFSConfig.aftp.fqdnCheck) {
            var newAFTPfqdnCheck = $(document.createElement('div')).attr("id", 'newAFTPfqdnCheck');
            newAFTPfqdnCheck.after().html('<label>Perform FQDN Check for AFTP:</label>'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '<del>'
                                      + originalEFSConfig.aftp.fqdnCheck
                                      + '</del>'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '<ins>'
                                      + efsConfig.aftp.fqdnCheck
                                      + '</ins>'
                                      + '<p></p>');
            newAFTPfqdnCheck.appendTo("#efsChanges");
        };

        // FTP Changes
        if(efsConfig.ftp != originalEFSConfig.ftp){
            var newEFSSettings = $(document.createElement('div')).attr("id", 'newEFSSettings');
            newEFSSettings.after().html('<label class= "easGSSubTitle"> FTP Changes </label>'
                                        + '<hr/>'
                                        +'<p></p>');
            newEFSSettings.appendTo("#efsChanges");
        }

        //AFTP Changes
        if (efsConfig.ftp.greetingMessage != originalEFSConfig.ftp.greetingMessage) {
            var newgreetingMessage = $(document.createElement('div')).attr("id", 'newgreetingMessage');
            newgreetingMessage.after().html('<label>AFTP Connection to VIC Timeout:</label>'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '<del>'
                                      + originalEFSConfig.ftp.greetingMessage
                                      + '</del>'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '<ins>'
                                      + efsConfig.ftp.greetingMessage
                                      + '</ins>'
                                      + '<p></p>');
            newgreetingMessage.appendTo("#efsChanges");
            console.log(newgreetingMessage);
        };

        if (efsConfig.ftp.controlTimeout != originalEFSConfig.ftp.controlTimeout) {
            var newFTPcontrolTimeout = $(document.createElement('div')).attr("id", 'newFTPcontrolTimeout');
            newFTPcontrolTimeout.after().html('<label>Control Connection Timeout:</label>'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '<del>'
                                      + originalEFSConfig.ftp.controlTimeout
                                      + '</del>'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '<ins>'
                                      + efsConfig.ftp.controlTimeout
                                      + '</ins>'
                                      + '<p></p>');
            newFTPcontrolTimeout.appendTo("#efsChanges");
        };

        if (efsConfig.ftp.dataTimeout != originalEFSConfig.ftp.dataTimeout) {
            var newFTPdataTimeout = $(document.createElement('div')).attr("id", 'newFTPdataTimeout');
            newFTPdataTimeout.after().html('<label>Data Connection Timeout:</label>'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '<del>'
                                      + originalEFSConfig.ftp.dataTimeout
                                      + '</del>'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '<ins>'
                                      + efsConfig.ftp.dataTimeout
                                      + '</ins>'
                                      + '<p></p>');
            newFTPdataTimeout.appendTo("#efsChanges");
        };

        if (efsConfig.ftp.sendSize != originalEFSConfig.ftp.sendSize) {
            var newFTPsendSize = $(document.createElement('div')).attr("id", 'newFTPsendSize');
            newFTPsendSize.after().html('<label>Send Socket Buffer Size:</label>'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '<del>'
                                      + originalEFSConfig.ftp.sendSize
                                      + '</del>'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '<ins>'
                                      + efsConfig.ftp.sendSize
                                      + '</ins>'
                                      + 'Bytes'
                                      + '<p></p>');
            newFTPreceiveSize.appendTo("#efsChanges");
        };

        if (efsConfig.ftp.receiveSize != originalEFSConfig.ftp.receiveSize) {
            var newFTPreceiveSize = $(document.createElement('div')).attr("id", 'newFTPreceiveSize');
            newFTPreceiveSize.after().html('<label>Receive Socket Buffer Size:</label>'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '<del>'
                                      + originalEFSConfig.ftp.receiveSize
                                      + '</del>'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '&nbsp'
                                      + '<ins>'
                                      + efsConfig.ftp.receiveSize
                                      + '</ins>'
                                      + 'Bytes'
                                      + '<p></p>');
            newFTPreceiveSize.appendTo("#efsChanges");
        };


        // EMS Changes
        if (pcxml != originPCXML){
            var newEMSSettings = $(document.createElement('div')).attr("id", 'newEMSSettings');
            newEMSSettings.after().html('<label> pc.xml Changes </label>'
                                        +'<p></p>');
            newEMSSettings.appendTo("#emsChanges");
        }


        var i, j;
        

        // Delete  
        for (var j=0; j < originPCXML.apTitle.length; j++){
            var i = 0;
            if (originPCXML.apTitle[j] != pcxml.apTitle[i]){
                if (i == pcxml.apTitle.length-1){
                    var deleteSession = $(document.createElement('div')).attr("id", 'newEMSSettings');
                        deleteSession.after().html('<label>'
                                                    + "The Session Name of: "
                                                    + '<del>'
                                                    + originPCXML.apName[j]
                                                    + '</del>'
                                                    + ' deleted </label>'
                                                    + '<p></p>'
                                                   );
                        deleteSession.appendTo("#emsChanges");
                    }
                i++;
            }
        }

        // Add  
        for (var i=0; i < pcxml.apTitle.length; i++){
            var j = 0;
            if (originPCXML.apTitle[j] != pcxml.apTitle[i]){
                if (j == originPCXML.apTitle.length-1){
                    var addSession = $(document.createElement('div')).attr("id", 'newEMSSettings');
                        addSession.after().html('<label>'
                                                    + "The Session Name of: "
                                                    + '<ins>'
                                                    + pcxml.apID[i]
                                                    + '</ins>'
                                                    + ' added </label>'
                                                    + '<p></p>'
                                                   );
                        addSession.appendTo("#emsChanges");
                    }
                j++;
            }
        }


  })
})

//Tabs Click 
$(document).on('click', '#tabs a', function(e){
    e.preventDefault();        
    $("#submitContent div").hide(); 
    $("#tabs li").attr("id",""); 
    $(this).parent().attr("id","current"); 
    $('#' + $(this).attr('title')).fadeIn(); 
})


