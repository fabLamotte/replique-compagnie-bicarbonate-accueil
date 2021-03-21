// Gestion Affichage du menu dropwdown 
    // Toggle au clic sur "COMPTE" 
        $('.account').click(function(e){
            var links = $('.link-list-account');
            if(links.hasClass('d-none')){
                links.removeClass('d-none');
            } else {
                links.addClass('d-none');
            }
            e.stopPropagation();
        });

    // Fermeture simple au clic sur autre part
        $(window).click(function(){
            var links = $('.link-list-account');
            if(!links.hasClass('d-none')){
                links.addClass('d-none');
            } 
        });

// Gestion affichage bordure input
    // Au clic sur l'input
        $('.input-search input').click(function(e){
            $('.input-search').css({'border': '2px solid #54BEE5', 'box-shadow': '1px 1px 5px'});
            e.stopPropagation();
        });
        $(window).click(function(){
            $('.input-search').css({'border': '1px solid #C6C6C6', 'box-shadow': 'none'});
        });

// Gestion affichage menu dropdown petit menu
    // Au clic sur "COMPTE"
        $('.account.little').click(function(e){
            var links = $('.list-links-account-little');
            if(links.hasClass('d-none')){
                links.removeClass('d-none');
            } else {
                links.addClass('d-none');
            }
            e.stopPropagation();
        });

    // Fermeture simple au clic sur autre part
        $(window).click(function(){
            var links = $('.list-links-account-little');
            if(!links.hasClass('d-none')){
                links.addClass('d-none');
            } 
        });