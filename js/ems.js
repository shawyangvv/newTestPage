var counter = 2;







$(document).on('click', '.savePcXmlbtn', function(e){
    e.preventDefault()
    emsConfig.pcxml.apTitle1 = $(this).parents('.modal').find(".apTitle1").val();
    emsConfig.pcxml.apID1 = $(this).parents('.modal').find(".apID1").val();
    emsConfig.pcxml.apName1 = $(this).parents('.modal').find(".apName1").val();
    emsConfig.pcxml.sessionPolicySelector1 = $(this).parents('.modal').find(".sessionPolicySelector1").val();
    
    emsConfig.pcxml.apTitle2 = $(this).parents('.modal').find(".apTitle2").val();
    emsConfig.pcxml.apID2 = $(this).parents('.modal').find(".apID2").val();
    emsConfig.pcxml.apName2 = $(this).parents('.modal').find(".apName2").val();
    emsConfig.pcxml.sessionPolicySelector2 = $(this).parents('.modal').find(".sessionPolicySelector2").val();
    
    emsConfig.pcxml.apTitle3 = $(this).parents('.modal').find(".apTitle3").val();
    emsConfig.pcxml.apID3 = $(this).parents('.modal').find(".apID3").val();
    emsConfig.pcxml.apName3 = $(this).parents('.modal').find(".apName3").val();
    emsConfig.pcxml.sessionPolicySelector3 = $(this).parents('.modal').find(".sessionPolicySelector3").val();

    emsConfig.pcxml.apTitle4 = $(this).parents('.modal').find(".apTitle4").val();
    emsConfig.pcxml.apID4 = $(this).parents('.modal').find(".apID4").val();
    emsConfig.pcxml.apName4 = $(this).parents('.modal').find(".apName4").val();
    emsConfig.pcxml.sessionPolicySelector4 = $(this).parents('.modal').find(".sessionPolicySelector4").val();
    
    emsConfig.pcxml.apTitle5 = $(this).parents('.modal').find(".apTitle5").val();
    emsConfig.pcxml.apID5 = $(this).parents('.modal').find(".apID5").val();
    emsConfig.pcxml.apName5 = $(this).parents('.modal').find(".apName5").val();
    emsConfig.pcxml.sessionPolicySelector5 = $(this).parents('.modal').find(".sessionPolicySelector5").val();
    
    $(this).closest('.modal')[0].style.display = 'none';
})





