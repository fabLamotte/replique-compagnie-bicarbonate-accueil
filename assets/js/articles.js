var articles = [
    {
        'id':1,
        'image' : 'flacons.jpg',
        'title': 'Pack "Collection" Compagnie du Bicarbonate',
        'prixDeBase': '19.94',
        'prixRemise' : 0,
        'colorButton': '#3FA4CB',
        'colorButtonHover': '#276A84',
        'textButton': 'Voir les détails',
        'linkTitle': "https://www.compagnie-bicarbonate.com/collection-compagnie-du-bicarbonate.html",
        'class' : 'link-detail'
    },
    {
        'id':2,
        'image' : 'percarbonate.jpg',
        'title': 'Percarbonate de sodium (de soude) - Flacon rechargeable 1,1 kg (10 % gratuits)',
        'prixDeBase': '8.95',
        'prixRemise' : '6.46',
        'colorButton': '#64B615',
        'colorButtonHover': '#6FCA18',
        'textButton': 'Ajouter au panier',
        'linkTitle': "https://www.compagnie-bicarbonate.com/percarbonate-de-sodium-sac-1kg.html"
    },
    {
        'id':3,
        'image' : 'miniguide.png',
        'title': 'OFFERT : Mini-Guide des Principales Utilisations du Bicarbonate',
        'prixDeBase': 0,
        'prixRemise' : 0,
        'colorButton': '#64B615',
        'colorButtonHover': '#6FCA18',
        'textButton': 'Ajouter au panier',
        'linkTitle': "https://www.compagnie-bicarbonate.com/guide-gratuit-utilisations-usages-bicarbonate-soude.html"
    },
    {
        'id':4,
        'image' : 'bicarbonate-alimentaire.jpg',
        'title': 'Bicarbonate alimentaire extra-fin - Sac «Open-up» 3 kg',
        'prixDeBase': '12.90',
        'prixRemise' : '9.95',
        'colorButton': '#64B615',
        'colorButtonHover': '#6FCA18',
        'textButton': 'Ajouter au panier',
        'linkTitle': "https://www.compagnie-bicarbonate.com/recharge-3-kg-extra-fin.html"
    },
    {
        'id':5,
        'image' : 'cristaux-soude.jpg',
        'title': 'Cristaux de Soude - 1 kg',
        'prixDeBase': '5.60',
        'prixRemise' : '4.90',
        'colorButton': '#64B615',
        'colorButtonHover': '#6FCA18',
        'textButton': 'Ajouter au panier',
        'linkTitle': "https://www.compagnie-bicarbonate.com/cristaux-de-soude-1-kg.html"
    },
    {
        'id':6,
        'image' : 'savon-marseille.jpg',
        'title': 'Savon de Marseille SANS HUILE DE PALME - 600 g',
        'prixDeBase': '5.16',
        'prixRemise' : '4.60',
        'colorButton': '#64B615',
        'colorButtonHover': '#6FCA18',
        'textButton': 'Ajouter au panier',
        'linkTitle': "https://www.compagnie-bicarbonate.com/savon-de-marseille-sans-huile-de-palme-600g.html"
    },
    {
        'id':7,
        'image' : 'vinaigre-blanc.jpg',
        'title': 'Vinaigre blanc français d\'origine naturelle concentré à 12 °- Arôme citron - 5 litres',
        'prixDeBase': '15.90',
        'prixRemise' : '10.90',
        'colorButton': '#64B615',
        'colorButtonHover': '#6FCA18',
        'textButton': 'Ajouter au panier',
        'linkTitle': "https://www.compagnie-bicarbonate.com/vinaigre-blanc-naturel-citron.html"
    },
    {
        'id':8,
        'image' : 'bipoux.jpg',
        'title': 'Bi-Poux® 400 g - Poudre d\'hygiène et de contrôle de l\'hygrométrie',
        'prixDeBase': '19.90',
        'prixRemise' : '15.60',
        'colorButton': '#64B615',
        'colorButtonHover': '#6FCA18',
        'textButton': 'Ajouter au panier',
        'linkTitle': "https://www.compagnie-bicarbonate.com/bi-poux-poudre-oiseaux-poules-bicarbonate-silice-400g.html"
    },
    {
        'id':9,
        'image' : 'gel-vegetal.jpg',
        'title': 'Gel végétal naturel au vinaigre 14° à la menthe 1 litre',
        'prixDeBase': '4.96',
        'prixRemise' : '3.95',
        'colorButton': '#64B615',
        'colorButtonHover': '#6FCA18',
        'textButton': 'Ajouter au panier',
        'linkTitle': "https://www.compagnie-bicarbonate.com/gel-vinaigre-naturel-menthe-1-litre.html"
    },
    {
        'id':10,
        'image' : 'niaouli-nibouton.jpg',
        'title': '« Niaouli ni bouton » - Peau mixte à grasse',
        'prixDeBase': '4.50',
        'prixRemise' : '0',
        'colorButton': '#64B615',
        'colorButtonHover': '#6FCA18',
        'textButton': 'Ajouter au panier',
        'linkTitle': "https://www.compagnie-bicarbonate.com/niaouli-ni-bouton-peau-mixte-a-grasse.html"
    },
    {
        'id':11,
        'image' : 'bicarbonate-alimentaire-extra-fine.jpg',
        'title': 'Bicarbonate alimentaire - Granulométrie extra-fine (0-130 µm) - Sac de 25 Kg',
        'prixDeBase': '65.00',
        'prixRemise' : '48.99',
        'colorButton': '#64B615',
        'colorButtonHover': '#6FCA18',
        'textButton': 'Ajouter au panier',
        'linkTitle': "https://www.compagnie-bicarbonate.com/bicarbonate-de-sodium-sac-de-25-kg-granulometrie-extra-fine.html"
    },
    {
        'id':12,
        'image' : 'copeaux-savon-marseille.jpg',
        'title': 'Copeaux de Savon de Marseille au BICARBONATE - 1 Kg',
        'prixDeBase': '11.90',
        'prixRemise' : '10.60',
        'colorButton': '#64B615',
        'colorButtonHover': '#6FCA18',
        'textButton': 'Ajouter au panier',
        'linkTitle': "https://www.compagnie-bicarbonate.com/copeaux-savon-marseille-bicarbonate-1kg.html"
    },
    {
        'id':13,
        'image' : 'argile-rose.png',
        'title': 'Argile Rose Kaolinite ultra-ventillée - Laboratoire Argiletz - 200 g',
        'prixDeBase': '5.60',
        'prixRemise' : '4.92',
        'colorButton': '#64B615',
        'colorButtonHover': '#6FCA18',
        'textButton': 'Ajouter au panier',
        'linkTitle': "https://www.compagnie-bicarbonate.com/argile-rose-laboratoire-argiletz-200g.html"
    },
    {
        'id':14,
        'image' : 'savon-liquide-marseille.jpg',
        'title': 'Savon liquide de Marseille à l’huile essentielle de Lavandin - 5L',
        'prixDeBase': '37.81',
        'prixRemise' : '0',
        'colorButton': '#64B615',
        'colorButtonHover': '#6FCA18',
        'textButton': 'Ajouter au panier',
        'linkTitle': "https://www.compagnie-bicarbonate.com/savon-de-marseille-liquide-huile-essentielle-lavandin-5l.html"
    },
    {
        'id':15,
        'image' : 'gel-vegetal-1l.jpg',
        'title': 'Gel végétal naturel au bicarbonate de soude 1 litre',
        'prixDeBase': '4.96',
        'prixRemise' : '3.95',
        'colorButton': '#64B615',
        'colorButtonHover': '#6FCA18',
        'textButton': 'Ajouter au panier',
        'linkTitle': "https://www.compagnie-bicarbonate.com/gel-bicarbonate-soude-naturel-1-litre.html"
    },
    {
        'id':16,
        'image' : '2-lingettes-lavable.jpg',
        'title': '2 lingettes lavables en coton "Douceur du Nil"',
        'prixDeBase': '3.60',
        'prixRemise' : '2.90',
        'colorButton': '#64B615',
        'colorButtonHover': '#6FCA18',
        'textButton': 'Ajouter au panier',
        'linkTitle': "https://www.compagnie-bicarbonate.com/carres-coton-douceur-du-nil.html"
    }
];

var panier = [];    // Initialisation du panier vide pour le remplir plus tard
var total = 0;
var quantite = 0;

// Affichage des articles stockés plus haut
$(document).ready(function(){
    var html = "";
    // On boucle les articles
        $.each(articles, function(index, element){
            html += '<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 ">';
                html += '<div class="m-2 bloc-produit">';
                    html += '<div class="bloc-image position-relative">';
                        html += '<a href="' + element.linkTitle + '">';
                            html += '<img src="assets/images/articles/' + element.image + '" class="img-produit" title="image articles" alt="image articles" />';
                            html += '<div class="position-absolute text-center plus-details justify-content-center align-items-center">';
                                html += '<p><i class="fa fa-plus" aria-hidden="true"></i><br />de détails</p>';
                            html += '</div>';
                        html += '</a>';
                    html += '</div>';
                    html += '<div class="bloc-content">';
                        html += '<div class="title"><a href="' + element.linkTitle + '">' + element.title + '</a></div>';
                        html += '<div class="stars d-flex justify-content-center"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></div>';
                        if(element.prixRemise != 0){
                            html += '<div class="prices d-flex justify-content-center">';
                                html += '<div class="ml-2 mr-2 goodPrice">' + parseFloat(element.prixRemise) + ' €</div>';
                                html += '<div style="text-decoration:line-through;" class="ml-2 mr-2">' + parseFloat(element.prixDeBase) + ' €</div>';
                            html += '</div>';
                        } else {
                            html += '<div class="goodPrice">' + parseFloat(element.prixDeBase) + ' €</div>';
                        }
                    html += '</div>';
                    html += '<div class="zone-ajout-panier">';
                        if(element.class != null){
                            html += '<a href="' + element.linkTitle + '"><div class="font-italic text-white font-bold p-1 ml-2 mr-2 btn-panier" style="background:' + element.colorButton + ';" data-element="' + element.id + '" onmouseover="this.style.background=\'' + element.colorButtonHover + '\';" onmouseout="this.style.background=\'' + element.colorButton + '\';">' + element.textButton + '</div></a>';
                        } else {
                            html += '<div class="prod font-italic text-white font-bold p-1 ml-2 mr-2 btn-panier" style="background:' + element.colorButton + ';" data-element="' + element.id + '" onmouseover="this.style.background=\'' + element.colorButtonHover + '\';" onmouseout="this.style.background=\'' + element.colorButton + '\';">';
                                html += element.textButton;
                            html += '</div>';
                        }
                    html += '</div>';
                html += '</div>';
            html += '</div>';
        });
        $('.liste-target').append(html);
    
    // Gestion de l'animation des images "Détails"
        $(document).on('mouseover', '.bloc-image', function(){
            var details = $(this).find('.plus-details');
            if(!details.is(':visible')){
                details.addClass("d-flex").removeClass("d-none");
            }
        });
        $(document).on('mouseleave', '.bloc-image', function(){
            var details = $(this).find('.plus-details');
            if(details.is(':visible')){
                details.removeClass("d-flex").addClass("d-none");
            }
        });

    // Gestion du clic 'ajouter au panier
        $(document).on('click', '.zone-ajout-panier .prod', function(){
            // Ajout du produit dans le panier
                var produit = articles[$(this).attr('data-element')-1];
                if($.inArray(produit, panier) == '-1'){                       
                    panier.push(produit);
                } 
                refreshPanier();

            // Changement du boutton ajouter
                if(!$(this).hasClass('.added')){
                    $(this).empty().append('ajouté').addClass('added text-uppercase');
                }
                miseAJourQuantite();
        });


    // Supprimer élément dans le panier
        $(document).on('click', '.supprimer-produit', function(){
            var element = $(this).attr('data-element');                     // Recherche de l'élément dans le tableau panier
            var qty = $(this).parent().find('.quantity').val();             // Capture de la quantité renseignée
            var priceToDeduce = 0;                                          // Initialisation du prix à déduire du total
            var price = total;
            $.each(panier, function(index, value){
                if(value != null){
                    if(value.id === parseInt(element)){
                        if(element.prixRemise == 0){                        // On détermine le prix du produit à retenir si remise ou non
                            var priceProduct = parseFloat(element.prixDeBase);
                        } else {
                            var priceProduct = parseFloat(element.prixRemise);
                        }
                        priceToDeduce = priceProduct * qty;                 // Calcul du montant total à déduire du panier
                        price -= priceToDeduce;                             // On effectue le changement du prix
                        panier.splice(index, 1);                            // On retire le produit du panier
                        if($.inArray(element, panier) == -1){               // Si le produit a bien été supprimé
                            $(document).find('.btn-panier[data-element="' + value.id + '"]').removeClass('added').removeClass('text-uppercase').empty().append('Ajouter au panier'); // On autorise à nouveau le boutton d'ajout au panier
                        }
                        miseAJourQuantite();                                // Mise à jour de la quantité panier
                    }
                }
            });

            refreshPanier();                                                // On refraîchit le panier
        });

    // Modification du prix selon la quantité renseignée
        $(document).on('keyup mouseup', '.quantity', function(){
            console.log($(this).val());
        });

    // Message au clic de "commander"
        $(document).on('click', '.command-btn', function(){
            alert('Fin de la démonstration ;)');
        });

    // Lancement du panier
        refreshPanier();    // Lancement de l'hydratation du panier à la fin du chargement du document

        
        function miseAJourQuantite(){
            quantite = panier.length;
            if(quantite != 0){
                $('.shopping_basket').empty().append('<i class="fa fa-shopping-cart" aria-hidden="true"></i> PANIER (' + quantite + ')');
            } else {
                $('.shopping_basket').empty().append('<i class="fa fa-shopping-cart" aria-hidden="true"></i> PANIER');
            }
        }

    // Hydratation des articles dans le panier
        function refreshPanier(){
            var html = '';
            var price = 0;
            $('.panier').empty(); // Suppression du contenu pour éviter l'incrémentation des produits

            if(panier.length == 0){
                html += '<p class="text-uppercase subtitle m-4">Derniers articles ajoutés</p>';
                html += '<div class="mb-3">Votre panier est vide.</div>';
            } else {
                html += '<p class="text-uppercase subtitle m-4">Derniers articles ajoutés</p>';

                $.each(panier, function(index, element){ // On boucle sur les articles 
                    html += '<div class="row border-bottom pb-3 pt-3">';
                        html += '<div class="col-3">';
                            html += '<img src="assets/images/articles/' + element.image + '" alt="article" title="article" class="product-basket" />';
                        html += '</div>';
                        html += '<div class="col-7">';
                            html += '<div class="title text-left">';
                                html += '<div class="linkTitle"><a href="' + element.linkTitle + '">' + element.title + '</a></div>';
                            html += '</div>';
                            html += '<div class="price text-left">';
                                if(element.prixRemise != 0){
                                    html += '<div><span class="priceBold">PRIX :</span> ' + parseFloat(element.prixRemise).toFixed(2) + ' €</div>';
                                    price += parseFloat(element.prixRemise);
                                } else {
                                    html += '<div><span class="priceBold">P> ' + parseFloat(element.prixDeBase).toFixed(2) + ' €</div>';
                                    price += parseFloat(element.prixDeBase);
                                }
                            html += '</div>';
                            html += '<div class="input-quantity text-left d-flex align-items-center">';
                                html += '<div class="text-uppercase mr-1 quantityBold">qté</div>';
                                html += '<input type="number" class="quantity mr-1" width="10" value="1" />';
                                html += '<i class="fa fa-times text-danger mr-1 supprimer-produit" aria-hidden="true" data-element="' + element.id + '"></i>';
                            html += '</div>';
                        html += '</div>';
                    html += '</div>';
                });

                // Intégration du total panier
                    html += '<div class="row no-gutters m-0 p-0">';
                        html += '<div class="col-12">';
                            html += '<div class="total-panier">TOTAL PANIER : ' + parseFloat(price).toFixed(2) + ' €</div>';
                        html += '</div>';
                    html += '</div>';

                // Intégration du boutton de commande du panier
                    html += '<div class="row">';
                        html += '<div class="col-12">';
                            html += '<div class="font-italic command-btn">Commander</div>';
                        html += '</div>';
                    html += '</div>';
            }
            total = price;
            $('.panier').append(html);
        }
});
