'use strict';
// Main
$(document).ready(() => {
  init();
  landing();
  mobile();
  transizioni();
  menu();
  preview();
  tips();
  tracker();
  colori();
  vr();
});

/**
 * Funzione Gestione selettore colori
 */
function colori() {
  $('.colore').on('click tap', function() {
    $('.colore').removeClass('selezionato');
    $(this).addClass('selezionato');
    $('#nome-colore').html($(this).attr('data-color'));
    $('#sedia-colore').attr('src', 'img/' +
    $(this).attr('data-cod') + '.png');
  });
}

/**
 * Funzione Inizializzazioni
 */
function init() {
  // Preloader
  Pace.on('done', () => {
    $('#loading img').addClass('animated fadeOutDown');
    $('#loading').fadeOut();
  });
  // Header
  initHeader();
  // Parallax
  initParallax();
  // Carousel
  initCarousel();
}

/**
 * Funzione Inizializzazione Carousel
 */
function initCarousel() {
  $(window).on('load resize', function() {
    if ($(this).width() < 992) {
      if ($('.owl-carousel').length > 0) {
        $('.owl-carousel').owlCarousel({
          items: 2,
          responsive: {
            0: {
              items: 1,
            },
          },
        });
      }
    }
  });
}

/**
 * Funzione Inizializzazione Header
 */
function initHeader() {
  $(window).on('load resize', function() {
    if ($(this).width() >= 768) {
      if ($('#header').length > 0) {
        $('#header').headroom({
          'offset': 96,
          'tolerance': 5,
          'classes': {
            'initial': 'animated',
            'pinned': 'slideInDown',
            'unpinned': 'slideOutUp',
          },
        });
      }
    }
  });
}

/**
 * Funzione Inizializzazione Parallax
 */
function initParallax() {
  $(window).on('load resize', function() {
    if ($(this).width() >= 992) {
      $('#chairs').removeClass('chairs-mobile');
      $('#chairs').addClass('parallasse');
      $('#chairs:not(".chairs-1").parallasse').parallax({
        imageSrc: 'img/chairs.jpg',
        position: 'center -580px',
      });
      $('#chairs.chairs-1.parallasse').parallax({
        imageSrc: 'img/chairs-1.jpg',
        position: 'center -580px',
      });
    } else {
      $('#chairs').removeClass('parallasse');
      $('#chairs').addClass('chairs-mobile');
    }
  });
}

/**
 * Funzione Gestione Landing
 */
function landing() {
  $(window).on('load resize', function() {
    if ($('#logo-acme').length > 0) {
      if ($(this).width() < 992) {
        $('#logo-acme').insertBefore('#container-links');
      } else {
        $('#logo-acme').insertAfter('#casa').parent();
      }
    }
  });
}

/**
 * Funzione Gestione Menu
 */
function menu() {
  $(window).on('scroll', function() {
    if ($(this).scrollTop() >= 0) {
      $('#menu-principale .navbar-nav a').removeClass('voce-attiva');
      $('a[href="#chairs"]').addClass('voce-attiva');
    }
    if (($('#vr').length > 0) && ($(this).scrollTop() >=
    $('#vr').offset().top)) {
      $('#menu-principale .navbar-nav a').removeClass('voce-attiva');
      $('a[href="#vr"]').addClass('voce-attiva');
    }
    if (($('#preview').length > 0) && ($(this).scrollTop() >=
    $('#preview').offset().top)) {
      $('#menu-principale .navbar-nav a').removeClass('voce-attiva');
      $('a[href="#preview"]').addClass('voce-attiva');
    }
    if ($(this).scrollTop() >= $('#discover').offset().top) {
      $('#menu-principale .navbar-nav a').removeClass('voce-attiva');
      $('a[href="#discover"]').addClass('voce-attiva');
    }
    if (($('#colori').length > 0) && ($(this).scrollTop() >=
    $('#colori').offset().top)) {
      $('#menu-principale .navbar-nav a').removeClass('voce-attiva');
      $('a[href="#colori"]').addClass('voce-attiva');
    }
    // Se si raggiunge la sezione o la fine della pagina
    if (($(this).scrollTop() >= $('#quote').offset().top) ||
    ($(this).scrollTop() + $(this).height() == $(document).height())) {
      $('#menu-principale .navbar-nav a').removeClass('voce-attiva');
      $('a[href="#quote"]').addClass('voce-attiva');
    }
  });
  $('#menu-principale .navbar-nav a').on('click tap', function(e) {
    e.preventDefault();
    $('#menu-principale .navbar-nav a').removeClass('voce-attiva');
    $(this).addClass('voce-attiva');
    $('html, body').animate({
      scrollTop: $('' + $(this).attr('href') + '').offset().top,
    }, 'slow');
  });
}

/**
 * Funzione Gestione Responsive
 */
function mobile() {
  $(window).on('load resize', function() {
    if ($(window).width() < 992) {
      $('#container-sedia-360')
      .insertAfter($('#container-scopri'));
      $('#sedia-colore').insertAfter($('#colori article h2'));
      $('.progetto-sx img').appendTo('#progetto-mobile-1');
      $('.progetto-dx img, .progetto-dx-1 img').appendTo('#progetto-mobile-2');
      $('#container-logo-1').insertBefore('#info');
      $('#sedia-360 img').attr({
        'src': '/img/360-2-mobile/sedia-1.jpg',
        'data-images': '/img/360-2-mobile/sedia-#.jpg',
      });
      $('#claim-carousel').insertAfter('#container-sedia-360');
    } else {
      $('#container-scopri')
      .insertAfter($('#container-sedia-360'));
      $('#sedia-colore').appendTo('#colori > .disattiva');
      $('#progetto-mobile-1 img').appendTo('.progetto-sx');
      $('#progetto-mobile-2 img').appendTo('.progetto-dx');
      $('#container-logo-1').insertAfter('#info');
      $('#sedia-360 img').attr({
        'src': '/img/360-2/sedia-1.jpg',
        'data-images': '/img/360-2/sedia-#.jpg',
      });
      $('#claim-carousel').insertAfter('#sedia-1 + .owl-carousel');
    }
  });
}

/**
 * Funzione Gestione pannello tips VR
 */
function tips() {
  let aperto = false;
  $('#tips h2').removeClass('aperto');
  $('#tips article p, #explore').slideUp();
  $('.freccia').on('click tap', function() {
    if (aperto) {
      $(this).removeClass('attiva');
      $('#tips h2').removeClass('aperto');
      $('#tips article p, #explore').slideUp();
      aperto = false;
    } else {
      $(this).addClass('attiva');
      $('#tips h2').addClass('aperto');
      $('#tips article p, #explore').slideDown();
      aperto = true;
    }
  });
}

/**
 * Funzione Gestione preview
 */
function preview() {
  $('.selettore').on('click tap', function() {
    let id = $('.selettore-colore', this).attr('data-id');
    let tipo =  $('.selettore-colore', this).attr('data-type');

    $(this).parent().find('.selettore-colore')
    .removeClass('selezionato deselezionato');
    $('.selettore-colore', this).addClass('selezionato');
    $(this).parent().find('.selettore-colore:not(".selezionato")')
    .addClass('deselezionato');
    $('.anteprima-sezione[data-type="'+ tipo +'"]')
    .attr('style', 'background-image: url("img/anteprima/prosp/prosp_'+
    tipo +'_'+ id +'.png");');
    $('.anteprima-fronte-sezione[data-type="'+ tipo +'"]')
    .attr('style', 'background-image: url("img/anteprima/front/front_'+
    tipo +'_'+ id +'.png");');
    $('.anteprima-lato-sezione[data-type="'+ tipo +'"]')
    .attr('style', 'background-image: url("img/anteprima/side/side_'+
    tipo +'_'+ id +'.png");');
  });
}

/**
 * Funzione Gestione Slider 360
 */
function tracker() {
  let oldRange = 0;
  $(document).on('input', '#sedia-range', function() {
    let range = $(this).val();
    if (range < 0 && range >= -360) {
      if (range < oldRange) {
        // Definisce l'ampiezza di rotazione
        let i = 4;
        do {
          $('#sedia-360 img').trigger('stepLeft');
          i--;
        } while(i > 1);
      } else {
        let i = 4;
        do {
          $('#sedia-360 img').trigger('stepRight');
          i--;
        } while(i > 1);
      }
    } else if (range > 0 && range <= 360) {
        if (range > oldRange) {
          let i = 4;
          do {
            $('#sedia-360 img').trigger('stepLeft');
            i--;
          } while(i > 1);
        } else {
          let i = 4;
          do {
            $('#sedia-360 img').trigger('stepRight');
            i--;
          } while(i > 1);
        }
    }
    oldRange = range;
  });
}

/**
 * Funzione Gestione transizioni
 */
function transizioni() {
  $(window).on('scroll', function() {
    if ($(window).width() >= 992) {
      let animato = false;

      $('#sedia-360, #spin, #sedia-1, #discover h3').addClass('sfuma');
      $('#sedia-2, .discover-lato-2 p, .colore, #container-progetti')
      .addClass('sfuma');
      if (($('#vr').length > 0) && ($(this).scrollTop() >=
      ($('#vr').offset().top + $('#vr').outerHeight() / 2))) {
        $('#sedia-360, #spin').removeClass('sfuma');
        $('#sedia-360').addClass('animated fadeIn');
        $('#spin').addClass('animated flipInY');
      }
      if (($('#preview').length > 0) && ($(this).scrollTop() >=
      $('#preview').offset().top + $('#preview').outerHeight() / 2)) {
        $('#sedia-1, #discover h3').removeClass('sfuma');
        $('#sedia-1').addClass('animated fadeInLeft');
        $('#discover h3').addClass('animated fadeInRight');
      } else if ($(this).scrollTop() >= $('#discover').offset().top) {
        $('#sedia-1, #discover h3').removeClass('sfuma');
        $('#sedia-1').addClass('animated fadeInLeft');
        $('#discover h3').addClass('animated fadeInRight');
      }
      if ($(this).scrollTop() >= ($('#sedia-1').offset().top +
      $('#sedia-1').outerHeight() / 2)) {
        $('#sedia-2, .discover-lato-2 p').removeClass('sfuma');
        $('#sedia-2').addClass('animated fadeInRight');
        $('.discover-lato-2 p').addClass('animated fadeInLeft');
      }
      if ($(this).scrollTop() >= ($('.discover-lato-2').offset().top +
      $('.discover-lato-2').outerHeight() / 2)) {
        if (!animato) {
          $('.colore:nth-child(2)').removeClass('sfuma')
          .delay(100).addClass('animated bounceIn');
          setTimeout(function() {
            $('.colore:nth-child(3)').removeClass('sfuma')
            .delay(150).addClass('animated bounceIn');
          }, 100);
          setTimeout(function() {
            $('.colore:nth-child(4)').removeClass('sfuma')
            .delay(150).addClass('animated bounceIn');
          }, 150);
          setTimeout(function() {
            $('.colore:nth-child(5)').removeClass('sfuma')
            .delay(200).addClass('animated bounceIn');
          }, 200);
          setTimeout(function() {
            $('.colore:nth-child(6)').removeClass('sfuma')
            .delay(250).addClass('animated bounceIn');
          }, 250);

          animato = false;
        }
      }
      if (($('#discover').length > 0) && ($(this).scrollTop() >=
      ($('#discover').offset().top + $('#discover').outerHeight() / 2))) {
        $('#container-progetti').removeClass('sfuma');
        $('#container-progetti').addClass('animated fadeInLeft');
      }
    } else {
      $('#sedia-360, #spin, #sedia-1, #discover h3').removeClass('sfuma');
      $('#sedia-2, .discover-lato-2 p, .colore, #container-progetti')
      .removeClass('sfuma');
    }
  });
}

/**
 * Funzione Gestione VR
 */
function vr() {
  $('a-scene').on('exit-vr', function() {
      window.location.reload();
  });
}
