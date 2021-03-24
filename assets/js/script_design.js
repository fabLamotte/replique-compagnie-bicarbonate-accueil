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
    }
});