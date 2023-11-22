window.onload = function() {
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

    const mezclas = [
        {
            "Producto 1": "Cloro",
            "Producto 2": "Amoniaco",
            "Riesgo": "Alto",
            "Recomendaciones": "Usar en areas bien ventiladas y usar guantes",
            "Riesgos a la salud": "Irritacion respiratoria y es corrosivo",
            "Uso recomendado": "Desinfeccion"
        },
        {
            "Producto 1": "Hidroxido de sodio",
            "Producto 2": "Acido sulfurico",
            "Riesgo": "Medio",
            "Recomendaciones": "Manipular con guantes y gafas de proteccion",
            "Riesgos a la salud": "Quemaduras y es corrosivo",
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
            "Riesgos a la salud": "Irritacion ocular y respiratoria",
            "Uso recomendado": "Desinfección de superficies"
        },
        {
            "Producto 1": "Amoniaco",
            "Producto 2": "Alcohol isopropilico",
            "Riesgo": "Bajo",
            "Recomendaciones": "Usar en areas bien ventiladas",
            "Riesgos a la salud": "Irritacion ocular, y es levemente inflamable",
            "Uso recomendado": "Limpieza de vidrios"
        },
        {
            "Producto 1": "Cloruro de benzalconio",
            "Producto 2": "Acetona",
            "Riesgo": "Alto",
            "Recomendaciones": "Usar con precaucion y guantes",
            "Riesgos a la salud": "Irritacion cutanea y es corrosivo",
            "Uso recomendado": "Desinfeccion de superficies"
        },
        {
            "Producto 1": "Sulfato de cobre",
            "Producto 2": "Detergente",
            "Riesgo": "Medio",
            "Recomendaciones": "Evitar contacto directo",
            "Riesgos a la salud": "Irritacion cutanea y es corrosivo",
            "Uso recomendado": "Limpieza de superficies"
        },
        {
            "Producto 1": "Hipoclorito de sodio",
            "Producto 2": "Amoniaco",
            "Riesgo": "Alto",
            "Recomendaciones": "Usar en areas bien ventiladas y usar guantes",
            "Riesgos a la salud": "Irritacion respiratoria y es corrosivo",
            "Uso recomendado": "Desinfeccion de superficies"
        },
        {
            "Producto 1": "Acido formico",
            "Producto 2": "Bicarbonato de sodio",
            "Riesgo": "Bajo",
            "Recomendaciones": "Manipular con guantes y gafas de proteccion",
            "Riesgos a la salud": "Irritacion cutanea y es levemente corrosivo",
            "Uso recomendado": "Limpieza de desagües"
        },
        {
            "Producto 1": "Acido acetico",
            "Producto 2": "Bicarbonato de Sodio",
            "Riesgo": "Bajo",
            "Recomendaciones": "Usar guantes y gafas de protección.",
            "Riesgos a la salud": "Puede causar irritación en los ojos y la piel.",
            "Uso recomendado": "Ayuda a aflojar la suciedad y eliminar manchas en superficies como encimeras, bañeras y lavabos."
        },
        {
            "Producto 1": "Peroxido de Hidrogeno",
            "Producto 2": "Acido acetico",
            "Riesgo": "Medio",
            "Recomendaciones": "Usar guantes y gafas de protección. No mezclar en un recipiente cerrado debido a la liberación de gases.",
            "Riesgos a la salud": "Puede causar irritación en los ojos y la piel.",
            "Uso recomendado": "Desinfección de superficies y eliminación de moho."
        },
        {
            "Producto 1": "Amoniaco",
            "Producto 2": "Detergente",
            "Riesgo": "Alto",
            "Recomendaciones": "Usar guantes y gafas de protección. Evitar la inhalación del producto.",
            "Riesgos a la salud": "Puede causar quemaduras en la piel y daño ocular grave.",
            "Uso recomendado": "Limpieza de vidrios y superficies de acero inoxidable."
        },
        {
            "Producto 1": "Vinagre",
            "Producto 2": "Sal",
            "Riesgo": "Bajo",
            "Recomendaciones": "Usar guantes y gafas de protección.",
            "Riesgos a la salud": "Puede causar irritación en los ojos y la piel.",
            "Uso recomendado": "Limpieza de superficies y eliminación de manchas."
        },
        {
            "Producto 1": "Bórax",
            "Producto 2": "Agua caliente",
            "Riesgo": "Bajo",
            "Recomendaciones": "Usar guantes y gafas de protección.",
            "Riesgos a la salud": "Puede causar irritación en los ojos.",
            "Uso recomendado": "Limpieza de superficies y eliminación de moho."
        },
        {
            "Producto 1": "Sal de boro",
            "Producto 2": "Acido citrico",
            "Riesgo": "Bajo",
            "Recomendaciones": "Usar guantes y gafas de protección.",
            "Riesgos a la salud": "Puede causar irritación en los ojos.",
            "Uso recomendado": "Limpieza de superficies y eliminación de moho."
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
    let highestRiesgo = 0;
    let ingredientes = '';
    let existe = false;
    let recomendaciones = '';
    let riesgosSalud = '';
    let usoRecomendado = '';

    for (let mezcla of mezclas) {
        console.log('Mezcla:', mezcla);
        console.log('Ingredientes:', ingredients);
        if (ingredients.map(ingredient => ingredient.toLowerCase()).includes(mezcla['Producto 1'].toLowerCase()) && 
        ingredients.map(ingredient => ingredient.toLowerCase()).includes(mezcla['Producto 2'].toLowerCase())) {
            existe = true;
            let riesgoTexto = mezcla['Riesgo'];
            if (riesgoTexto === 'Alto') {
                riesgo = 3;
            } else if (riesgoTexto === 'Medio') {
                riesgo = 2;
            } else if (riesgoTexto === 'Bajo') {
                riesgo = 1;
            }
            if (riesgo > highestRiesgo) {
                highestRiesgo = riesgo;
                recomendaciones = mezcla['Recomendaciones'];
                riesgosSalud = mezcla['Riesgos a la salud'];
                usoRecomendado = mezcla['Uso recomendado'];
                console.log(`Los productos ${mezcla['Producto 1']} y ${mezcla['Producto 2']} están en la lista de ingredientes.`);
            }
            if (highestRiesgo === 3) {
                ingredientes = `${ingredients[0]} y ${ingredients[1]}`;
                break; // Detiene el bucle una vez que riesgo es igual a 3
            }
        }
    }
          // verifica si los productos son iguales
    if (product1 === product2) {
        riesgo = 1;
    }
    
    let fondo = document.getElementById('fondo');
    let nousar = document.getElementById('nousar');
    let barra = document.getElementById('barra');
    let espacio = document.getElementById('espacio');
    let titulo = '';

    if (riesgo === 3) {
        fondo.classList.add('alerta');
        nousar.style.display = 'block';
        barra.style.display = 'none';
    } else if (riesgo === 2) {
        fondo.classList.add('cuidado');
        espacio.style.marginTop = '30vh';
    } else if (riesgo === 1) {
        fondo.classList.add('seguro');
        espacio.style.marginTop = '30vh';
    }
    let html = '';
    let html_precauciones = '';
    let html_riesgos = '';
    let html_usos = '';
    if (product1 === product2) {
        html = `
            <div class="card_3_item">
            <img class="card_3_img" src="MixFigures/${product1.img}" alt="Image 1">
            <p class="card_3_txt" id="c3txt">${product1.Producto}</p>
            </div>
        `;
        html_precauciones = `
        <div class="card_4">
            <h2>Precauciones</h2>
            <p>
            Si bien no estás mezclando, debes cuidar la ventilación y el uso de guantes como mínimo
            </p>
            <p>
            Nunca lo uses directamente. Siempre dilúyelo en agua.
            </p>
        </div>
        `;
        html_riesgos = '';
        html_usos = '';
    } else {
        html = `
            <div class="card_3_item">
                <img class="card_3_img" src="MixFigures/${product1.img}" alt="Image 1">
                <p class="card_3_txt" id="c3txt">${product1.Producto}</p>
            </div>
            <div class="card_3_item">
                <img class="card_3_img" src="MixFigures/${product2.img}" alt="Image 2">
                <p class="card_3_txt" id="c3txtb">${product2.Producto}</p>
            </div>
        `;
        html_precauciones = `
        <div class="card_4">
            <h2>Precauciones</h2>
            <p>Nunca lo uses directamente, diempre dilúyelo en agua.</p>
            <p>${recomendaciones}</p>
        </div>
        `;
        html_riesgos = `
        <div class="card_4">
            <h2>Riesgos a la salud</h2>
            <p>${riesgosSalud}</p>
        </div>
        `;
        html_usos = `
        <div class="card_4">
            <h2>Uso recomendado</h2>
            <p>${usoRecomendado}</p>
        </div>
        `;
    }
    if (riesgo === 3 && existe) {
        html_precauciones = `
        <div class="card_4 alerta">
            <h2>Razones</h2>
            <p>
            Mezclar ${ingredientes} es peligroso.</p> <p>Causa ${riesgosSalud}.
            </p>
        </div>
        `;
        html_riesgos = '<div class="space"></div>';
        html_usos = '';
    } else if (riesgo === 3 && !existe) {
        html_precauciones = `
        <div class="card_4 alerta">
            <h2>Razones</h2>
            <p>
            No tenemos esta mezcla registrada como segura.</p>
            <p>Lo mejor es que no lo intentes.
            </p>
        </div>
        `;
        html_riesgos = '<div class="space"></div>';
        html_usos = '';
    }

    //document.querySelector('#product_cards').innerHTML = html;
    document.querySelector('#mezclados').innerHTML = html;
    document.querySelector('#precauciones').innerHTML = html_precauciones;
    document.querySelector('#riesgos').innerHTML = html_riesgos;
    document.querySelector('#usos').innerHTML = html_usos;
    document.querySelectorAll('.card_3_item').forEach(item => {
        item.style.backgroundColor = '#fff';});
    let mezclado = document.getElementById('c3txt');
    let mezcladob = document.getElementById('c3txtb');
    if (riesgo === 3) {
        mezclado.classList.add('nousar');
        mezcladob.classList.add('nousar');
    }
}