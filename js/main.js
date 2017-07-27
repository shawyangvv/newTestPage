
$(document).on('click', '.close', function(e){
    e.preventDefault();
    $("#routingbtn").css('display', 'none');
    $("#pcxmlContainer").empty();
    $("#routingTabMenu").empty();
    $("#routingTabContentContainer").empty();
    $("#efsChanges").empty();
    $("#networkTabMenu").empty();
    $("#pcTabContentContainer").empty();
    $("#pcDefaultTabMenu").empty();
    $("#pcDefaultTabContentContainer").empty();
    $("#epTabContentContainer").empty();
    $("#epTabMenu").empty();
    $("#epDefaultTabContentContainer").empty();
    $("#epDefaultTabMenu").empty();
    $("#changesContainer").empty();
    $("#pcInterfaceTabMenu").empty();
    $("#pcInterfaceTabContentContainer").empty();
    $("#epInterfaceTabMenu").empty();
    $("#epInterfaceTabContentContainer").empty();
    $("#pcMSTabMenu").empty();
    $("#pcMSTabContentContainer").empty();

    // Clean Selector in EAS General Settings
    $("#easGSContainer").empty();
    $("#easRegionSelector").empty();
    $("#easFailoverModalSelector").empty();
    $("#easDomainNameSelector").empty();
    $("#easDualServerPrioritySelector").empty();
    $("#icmpForRouterSelector").empty();
    $("#epMulticastSelector").empty();

    // $('#pcxmlContainer').unbind();
    // $('#pcxmlbtn').remove();
    // $(this).parent(".modal").find('.popUpContainer').remove();
    
})