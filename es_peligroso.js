window.onload = function() {
    const cards = [
        {
            "Producto": "Lejía o blanqueador",
            "Ingredientes": ["Cloro", "Hipoclorito de sodio"],
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
            "Ingredientes": ["Acrilamida"],
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
            "Ingredientes": ["Acido sulfurico", "amoniaco", "fenol", "formaldehido", "hipoclorito de sodio"],
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
        }
    ];

    const mezclas = [
        {
            "Producto 1": "Cloro",
            "Producto 2": "Amoniaco",
            "Riesgo": "Alto",
            "Recomendaciones": "Usar en areas bien ventiladas y usar guantes",
            "Riesgos a la salud": "Irritacion respiratoria, corrosivo",
            "Uso recomendado": "Desinfeccion"
        },
        {
            "Producto 1": "Hidroxido de sodio",
            "Producto 2": "Acido sulfurico",
            "Riesgo": "Medio",
            "Recomendaciones": "Manipular con guantes y gafas de proteccion",
            "Riesgos a la salud": "Quemaduras, corrosivo",
            "Uso recomendado": "Limpiadores industriales"
        },
        {
            "Producto 1": "Fenol",
            "Producto 2": "Alcohol etilico",
            "Riesgo": "Bajo",
            "Recomendaciones": "Evitar contacto directo",
            "Riesgos a la salud": "Irritacion leve",
            "Uso recomendado": "Desinfectantes"
        },
        {
            "Producto 1": "Acrilamida",
            "Producto 2": "Acido citrico",
            "Riesgo": "Alto",
            "Recomendaciones": "Evitar inhalacion directa",
            "Riesgos a la salud": "Irritacion respiratoria",
            "Uso recomendado": "Limpieza de superficies"
        },
        {
            "Producto 1": "Formaldehido",
            "Producto 2": "Peroxido de hidrogeno",
            "Riesgo": "Medio",
            "Recomendaciones": "Usar guantes y mascarilla",
            "Riesgos a la salud": "Irritacion ocular, respiratoria",
            "Uso recomendado": "Desinfección de superficies"
        },
        {
            "Producto 1": "Amoniaco",
            "Producto 2": "Alcohol isopropilico",
            "Riesgo": "Bajo",
            "Recomendaciones": "Usar en areas bien ventiladas",
            "Riesgos a la salud": "Irritacion ocular, leve inflamabilidad",
            "Uso recomendado": "Limpieza de vidrios"
        },
        {
            "Producto 1": "Cloruro de benzalconio",
            "Producto 2": "Acetona",
            "Riesgo": "Alto",
            "Recomendaciones": "Usar con precaucion y guantes",
            "Riesgos a la salud": "Irritacion cutanea, corrosivo",
            "Uso recomendado": "Desinfeccion de superficies"
        },
        {
            "Producto 1": "Sulfato de cobre",
            "Producto 2": "Detergente",
            "Riesgo": "Medio",
            "Recomendaciones": "Evitar contacto directo",
            "Riesgos a la salud": "Irritacion cutanea, corrosivo",
            "Uso recomendado": "Limpieza de superficies"
        },
        {
            "Producto 1": "Hipoclorito de sodio",
            "Producto 2": "Amoniaco",
            "Riesgo": "Alto",
            "Recomendaciones": "Usar en areas bien ventiladas y usar guantes",
            "Riesgos a la salud": "Irritacion respiratoria, corrosivo",
            "Uso recomendado": "Desinfeccion de superficies"
        },
        {
            "Producto 1": "Acido formico",
            "Producto 2": "Bicarbonato de sodio",
            "Riesgo": "Bajo",
            "Recomendaciones": "Manipular con guantes y gafas de proteccion",
            "Riesgos a la salud": "Irritacion cutanea, leve corrosivo",
            "Uso recomendado": "Limpieza de desagües"
        }
    ]
    
    
    // Obtiene los nombres de los productos seleccionados del almacenamiento de la sesión
    const selectedProduct1 = sessionStorage.getItem('selectedProduct1');
    const selectedProduct2 = sessionStorage.getItem('selectedProduct2');

    console.log('selectedProduct1:', selectedProduct1);
    console.log('selectedProduct2:', selectedProduct2);

    // Busca los productos seleccionados en la matriz cards
    const product1 = cards.find(card => card.Producto === selectedProduct1);
    const product2 = cards.find(card => card.Producto === selectedProduct2);

    // Guarda los ingredientes en variables
    const ingredients1 = product1 ? product1.Ingredientes : null;
    const ingredients2 = product2 ? product2.Ingredientes : null;

    // Guarda los nombres de las imágenes en variables
    const img1 = product1 ? product1.img : null;
    const img2 = product2 ? product2.img : null;

    // Asume que ingredients1 e ingredients2 son matrices y mezclas es una matriz de objetos
    const ingredients = [...ingredients1, ...ingredients2];
    let riesgo = 3;
    for (let mezcla of mezclas) {
        if (ingredients.includes(mezcla['Producto 1']) && ingredients.includes(mezcla['Producto 2'])) {
          let riesgoTexto = mezcla['Riesgo'];
          if (riesgoTexto === 'Alto') {
            riesgo = 3;
          } else if (riesgoTexto === 'Medio') {
            riesgo = 2;
          } else if (riesgoTexto === 'Bajo') {
            riesgo = 1;
          }
          recomendaciones = mezcla['Recomendaciones'];
          riesgosSalud = mezcla['Riesgos a la salud'];
          usoRecomendado = mezcla['Uso recomendado'];
          console.log(`Los productos ${mezcla['Producto 1']} y ${mezcla['Producto 2']} están en la lista de ingredientes.`);
          
          if (riesgo === 3) {
            break; // Detiene el bucle una vez que riesgo es igual a 3
          }
        }
      }
    
      let fondo = document.getElementById('fondo');

      if (riesgo === 3) {
        fondo.classList.add('alerta');
      } else if (riesgo === 2) {
        fondo.classList.add('cuidado');
      } else if (riesgo === 1) {
        fondo.classList.add('seguro');
      }


    let html = `
        <div class="card_3_item">
        <img class="card_3_img" src="MixFigures/${product1.img}" alt="Image 1">
        <p class="card_3_txt" id="c3txt">${product1.Producto}</p>
        </div>
        <div class="card_3_item">
        <img class="card_3_img" src="MixFigures/${product2.img}" alt="Image 2">
        <p class="card_3_txt" id="c3txtb">${product2.Producto}</p>
        </div>
  `;
    //document.querySelector('#product_cards').innerHTML = html;
    document.querySelector('#mezclados').innerHTML = html;
    let mezclado = document.getElementById('c3txt');
    let mezcladob = document.getElementById('c3txtb');
    if (riesgo === 3) {
        mezclado.classList.add('nousar');
        mezcladob.classList.add('nousar');
    }
}