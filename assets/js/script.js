// Gestion Affichage du menu dropwdown 
    // Toggle au clic sur le boutton 
    $('.button.light').click(function(e){
        var links = $('.links-account');
        if(links.hasClass('d-none')){
            links.removeClass('d-none');
        } else {
            links.addClass('d-none');
        }
        e.stopPropagation();
    });

    // Fermeture simple au clic hor
    $(window).click(function(){
        var links = $('.links-account');
        if(!links.hasClass('d-none')){
            links.addClass('d-none');
        } 
    });