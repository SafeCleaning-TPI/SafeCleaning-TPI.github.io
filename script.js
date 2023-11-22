function changePage() {
    $('#page1, #page2').toggleClass('transitioning');

    setTimeout(function () {
        $('#page1, #page2').toggleClass('transitioning');
        $('#page1, #page2').toggle();
    }, 500);
}


//Queda con la base de datos embebida porque no deja a nivel local
function loadCards() {
        const cards = [
            {
                "Producto": "Lejía o blanqueador",
                "Ingredientes": ["Hipoclorito de sodio"],
                "img": "lejia_o_blanqueador.png"
            },
            {
                "Producto": "Limpiadores de desagües",
                "Ingredientes": ["Hidroxido de sodio", "Acido formico"],
                "img": "limpiadores_de_desagues.png"
            },
            {
                "Producto": "Limpiadores industriales",
                "Ingredientes": ["Hidroxido de sodio", "Acrilamida"],
                "img": "limpiadores_industriales.png"
            },
            {
                "Producto": "Desinfectantes",
                "Ingredientes": ["Fenol", "Formaldehido", "Hipoclorito de sodio"],
                "img": "desinfectantes.png"
            },
            {
                "Producto": "Desinfectantes para manos",
                "Ingredientes": ["Fenol"],
                "img": "desinfectantes_para_manos.png"
            },
            {
                "Producto": "Detergentes fuertes",
                "Ingredientes": ["Acrilamida","detegente"],
                "img": "detergentes_fuertes.png"
            },
            {
                "Producto": "Limpiadores multiusos",
                "Ingredientes": ["Amoniaco", "Cloruro de benzalconio", "Detergente"],
                "img": "limpiadores_multiusos.png"
            },
            {
                "Producto": "Productos para cristales",
                "Ingredientes": ["Amoniaco"],
                "img": "productos_para_cristales.png"
            },
            {
                "Producto": "Fungicidas",
                "Ingredientes": ["Sulfato de cobre"],
                "img": "fungicidas.png"
            },
            {
                "Producto": "Productos de limpieza de piscinas",
                "Ingredientes": ["Sulfato de cobre"],
                "img": "productos_de_limpieza_de_piscinas.png"
            },
            {
                "Producto": "Descalcificadores",
                "Ingredientes": ["Acido formico"],
                "img": "descalcificadores.png"
            },
            {
                "Producto": "Limpiadores de inodoro",
                "Ingredientes": ["Acido sulfurico", "hipoclorito de sodio"],
                "img": "limpiadores_de_inodoro.png"
            },
            {
                "Producto": "Destapadores de cañerías",
                "Ingredientes": ["Acido sulfurico", "soda caustica"],
                "img": "destapadores_de_canerias.png"
            },
            {
                "Producto": "Detergentes de ropa",
                "Ingredientes": ["Acido sulfurico", "amoniaco", "fenol", "formaldehido", "hipoclorito de sodio","detegente"],
                "img": "detergentes_de_ropa.png"
            },
            {
                "Producto": "Alcohol antiseptico",
                "Ingredientes": ["Alcohol etilico"],
                "img": "alcohol_antiseptico.png"
            },
            {
                "Producto": "Frutas citricas",
                "Ingredientes": ["Acido citrico"],
                "img": "frutas_citricas.png"
            },
            {
                "Producto": "Agua oxigenada",
                "Ingredientes": ["Peroxido de hidrogeno"],
                "img": "agua_oxigenada.png"
            },
            {
                "Producto": "Limpiadores de electrónicos",
                "Ingredientes": ["Alcohol isopropilico"],
                "img": "limpiadores_de_electronicos.png"
            },
            {
                "Producto": "Removedor de esmalte",
                "Ingredientes": ["Acetona"],
                "img": "removedor_de_esmalte.png"
            },
            {
                "Producto": "Polvo para hornear",
                "Ingredientes": ["Bicarbonato de sodio"],
                "img": "polvo_para_hornear.png"
            },
            {
                "Producto": "Vinagre",
                "Ingredientes": ["Acido acetico"],
                "img": "vinagre.png"
            },
            {
                "Producto": "Bórax",
                "Ingredientes": ["Sal de boro"],
                "img": "polvo_para_hornear.png"
            },
            {
                "Producto": "Sal de mesa",
                "Ingredientes": ["Sal"],
                "img": "polvo_para_hornear.png"
            },
            {
                "Producto": "Agua caliente",
                "Ingredientes": ["agua"],
                "img": "agua.png"
            }
        ];
        let html = '';
  
        for (let card of cards) {
          html += `
            <a class="card_2" tabindex="0">
              <img class="card_2_img" src="MixFigures/${card.img}" alt="${card.Producto}">
              <div class="card_2_txt">
                <h3>${card.Producto}</h3>
                <p>${card.Ingredientes.join(', ')}</p>
              </div>
            </a>
          `;
        }
  
        //document.querySelector('#product_cards').innerHTML = html;
        document.querySelector('#product_cards_1').innerHTML = html;
        document.querySelector('#product_cards_2').innerHTML = html;
        document.querySelectorAll('.card_2').forEach(function(card) {
            card.addEventListener('click', function() {
                const parentId = this.parentElement.id;
                document.querySelectorAll(`#${parentId} .card_2`).forEach(function (card) {
                    card.classList.remove('selected');
                });
                this.classList.add('selected');
            });
        });
  }

  //Esta funión lo carga desde el servidor en internet, por ahora no funciona
  function loadCards_web() {
    // Fetch data from your server-side code
    fetch('/getCardData')
      .then(response => response.json())
      .then(cards => {
        // Start the HTML string
        let html = '';
  
        // Generate the HTML for each card
        for (let card of cards) {
          html += `
            <a class="card_2" tabindex="0">
              <img class="card_2_img" src="MixFigures/${card.image}" alt="${card.alt}">
              <p class="card_2_txt">${card.text}</p>
            </a>
          `;
        }
  
        // Insert the HTML into the DOM
        document.querySelector('#mixing').innerHTML = html;
      })
      .catch(error => console.error('Error:', error));
  }