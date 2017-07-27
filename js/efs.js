
originalEFSConfig = {
    efs: {purgeInterval: 1440,
          purgeDelay: 30240,
          logLevel: "INFO",
          blockInventory: "Y",
         },
    ftp: {greetingMessage: "Welcome to EAS File Services!",
          controlTimeout: 900,
          dataTimeout: 180,
          sendSize: 10240,
          receiveSize: 10240,
         },
    aftp: {connectionTimeout: 600,
           sendSize: 10240,
           receiveSize: 10240,
           fqdnCheck: "Y",
          },
    
}

efsConfig = {
    efs: {purgeInterval: originalEFSConfig.efs.purgeInterval,
          purgeDelay: originalEFSConfig.efs.purgeDelay,
          logLevel: originalEFSConfig.efs.logLevel,
          blockInventory: originalEFSConfig.efs.blockInventory,
         },
    ftp: {greetingMessage: originalEFSConfig.ftp.greetingMessage,
          controlTimeout: originalEFSConfig.ftp.controlTimeout,
          dataTimeout: originalEFSConfig.ftp.dataTimeout,
          sendSize: originalEFSConfig.ftp.sendSize,
          receiveSize: originalEFSConfig.ftp.receiveSize,
        },
    aftp: {connectionTimeout: originalEFSConfig.aftp.connectionTimeout,
           sendSize: originalEFSConfig.aftp.sendSize,
           receiveSize: originalEFSConfig.aftp.receiveSize,
           fqdnCheck: originalEFSConfig.aftp.fqdnCheck,
          },

}

$(document).on('click','.ftpButton', function(e){
    e.preventDefault();
    $('#ftpbtn').css('display', 'block');
    
    $("#ftpbtn").find(".greetingMessage").val(efsConfig.ftp.greetingMessage);
    $("#ftpbtn").find(".controlTimeout").val(efsConfig.ftp.controlTimeout);
    $('#ftpbtn').find(".dataTimeout").val(efsConfig.ftp.dataTimeout);
    $('#ftpbtn').find(".sendSize").val(efsConfig.ftp.sendSize);
    $('#ftpbtn').find(".receiveSize").val(efsConfig.ftp.receiveSize);
})

$(document).on('click','.efsButton', function(e){
    e.preventDefault();
    $('#efsbtn').css('display', 'block');
    
    $("#efsbtn").find(".purgeInterval").val(efsConfig.efs.purgeInterval);
    $("#efsbtn").find(".purgeDelay").val(efsConfig.efs.purgeDelay);
    $('#efsbtn').find(".logLevel").val(efsConfig.efs.logLevel);
    $('#efsbtn').find(".blockInventorySelector").val(efsConfig.efs.blockInventory);
})

$(document).on('click','.aftpButton', function(e){
    e.preventDefault();
    $('#aftpbtn').css('display', 'block');
    
    $("#aftpbtn").find(".connectionTimeout").val(efsConfig.aftp.connectionTimeout);
    $('#aftpbtn').find(".sendSize").val(efsConfig.aftp.sendSize);
    $('#aftpbtn').find(".receiveSize").val(efsConfig.aftp.receiveSize);
    $('#aftpbtn').find(".fqdnCheckSelector").val(efsConfig.aftp.fqdnCheck);
    console.log(efsConfig.aftp.fqdnCheck);
})

$(document).on('click', '.saveEFSbtn', function(e){
    e.preventDefault()
    efsConfig.efs.purgeInterval = $(this).parents('.modal').find(".purgeInterval").val();
    efsConfig.efs.purgeDelay = $(this).parents('.modal').find(".purgeDelay").val();
    efsConfig.efs.logLevel = $(this).parents('.modal').find(".logLevel").val();
    efsConfig.efs.blockInventory = $(this).parents('.modal').find(".blockInventorySelector").val();
    
 

    $(this).closest('.modal')[0].style.display = 'none';
})

$(document).on('click', '.saveFTPbtn', function(e){
    e.preventDefault()
    efsConfig.ftp.greetingMessage = $(this).parents('.modal').find(".greetingMessage").val();
    efsConfig.ftp.controlTimeout = $(this).parents('.modal').find(".controlTimeout").val();
    efsConfig.ftp.dataTimeout = $(this).parents('.modal').find(".dataTimeout").val();
    efsConfig.ftp.sendSize = $(this).parents('.modal').find(".sendSize").val();
    efsConfig.ftp.receiveSize = $(this).parents('.modal').find(".receiveSize").val();
    $(this).closest('.modal')[0].style.display = 'none';
})

$(document).on('click', '.saveAFTPbtn', function(e){
    e.preventDefault()
    efsConfig.aftp.connectionTimeout = $(this).parents('.modal').find(".connectionTimeout").val();
    efsConfig.aftp.sendSize = $(this).parents('.modal').find(".sendSize").val();
    efsConfig.aftp.receiveSize = $(this).parents('.modal').find(".receiveSize").val();
    efsConfig.aftp.fqdnCheck = $(this).parents('.modal'). find(".fqdnCheckSelector").val();
    
    $(this).closest('.modal')[0].style.display = 'none';
})

