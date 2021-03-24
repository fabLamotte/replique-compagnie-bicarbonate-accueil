$(document).ready(function(){
    var links_litle = $('.list-links-account-little'); var button_links_litle = $('.account.litle');
    var links = $('.link-list-account'); var button_links = $('.account');
    var panier = $('#panier'); var button_panier = $('.shopping_basket');
    var input_search = $('.input-search input');
    
    // Au clic sur "COMPTE"
    button_links.click(function(e){
        if(links.hasClass('d-none')){
            links.removeClass('d-none');
            panier.addClass('d-none');
            $('.input-search').css({'border': '1px solid #C6C6C6', 'box-shadow': 'none'});
        } else {
            links.addClass('d-none');
        }
        e.stopPropagation();
    });

    // Au clic sur "PANIER"
    button_panier.click(function(e){
        if(panier.hasClass('d-none')){
            panier.removeClass('d-none');
            links.addClass('d-none');
            $('.input-search').css({'border': '1px solid #C6C6C6', 'box-shadow': 'none'});
        } else {
            panier.addClass('d-none');
        }
        e.stopPropagation();
    });

    // Gestion affichage bordure input
        // Au clic sur l'input
        $('.input-search input').click(function(e){
            $('.input-search').css({'border': '2px solid #54BEE5', 'box-shadow': '1px 1px 5px'});
            if(!panier.hasClass('d-none')){
                panier.addClass('d-none');
            }
            if(!links.hasClass('d-none')){
                links.addClass('d-none');
            }
            e.stopPropagation();
        });

    // Au clic n'importe où
    $(document).click(function() {
        if(!panier.hasClass('d-none')){
            panier.addClass('d-none');
        }
        if(!links.hasClass('d-none')){
            links.addClass('d-none');
        }
        $('.input-search').css({'border': '1px solid #C6C6C6', 'box-shadow': 'none'});
    });

    $('.food-gastro').mouseover(function(){
        $('.row-menu').removeClass('d-none');
    });

    $('.row-menu').mouseleave(function(e){
        if(!$(e.target).closest('.row-menu').length || !$(e.target).closest('.food-gastro').length) {
            $('.row-menu').addClass('d-none');
        }
    });

    if($(window).width() <= 770) {
        $('.bloc-infos').children().removeClass('container');
        $('.bloc-infos').children().addClass('container-fluid');
        $('.family').children().removeClass('container');
        $('.family').children().addClass('container-fluid');
        $('.bien-faits').children().removeClass('container');
        $('.bien-faits').children().addClass('container-fluid');
        $('footer').children().removeClass('container');
        $('footer').children().addClass('container-fluid');
        $('.conseils').children().removeClass('container');
        $('.conseils').children().addClass('container-fluid');
        $('.blog').children().removeClass('container');
        $('.blog').children().addClass('container-fluid');
    }

    $('.bien-faits .bloc-image .cadre-container').hover(function(){
        $(this).find('.cadre-content').css({'top': '10%'});
    });
    $('.bien-faits .bloc-image .cadre-container').mouseleave(function(){
        $(this).find('.cadre-content').css({'top': '67%'});
    });

    $('.reassurance .reassurance-bloc').hover(function(){
        $(this).find('.image-circled').css({'background':'#89B610'});
    });
    $('.reassurance .reassurance-bloc').mouseleave(function(){
        $(this).find('.image-circled').css({'background':'#18769A'});
    });
});