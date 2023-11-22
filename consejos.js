function loadCards() {
    const comedor = [
        {
            "nombre_tip": "Desinfección Profunda",
            "descripcion_tip": "Elimina gérmenes y bacterias para un ambiente seguro.",
            "procedimiento_tip": "Mezcla 1 taza de lejía o blanqueador con 4 litros de agua. Aplica la solución en superficies y deja actuar durante 10 minutos. Enjuaga con agua y seca con un paño limpio.",
            "ingredientes": ["Lejía o blanqueador", "Agua"],
            "imagen": "desinfeccion.png"
        },
        {
            "nombre_tip": "Brillo en Superficies de Cristal",
            "descripcion_tip": "Mantiene las superficies de cristal relucientes y libres de manchas.",
            "procedimiento_tip": "Mezcla partes iguales de vinagre y agua en una botella rociadora. Aplica la solución en superficies de cristal y limpia con un paño no abrasivo.",
            "ingredientes": ["Vinagre", "Agua"],
            "imagen": "brillo_cristal.png"
        },
        {
            "nombre_tip": "Eliminación de Olores Desagradables",
            "descripcion_tip": "Neutraliza olores y deja un ambiente fresco.",
            "procedimiento_tip": "Mezcla 1 taza de polvo para hornear con unas gotas de tu aceite esencial favorito. Coloca la mezcla en recipientes abiertos en el comedor para absorber olores.",
            "ingredientes": ["Polvo para hornear", "Aceite esencial"],
            "imagen": "eliminacion_olores.png"
        }
    ];
    const cocina = [
        {
            "nombre_tip": "Desengrasante Potente",
            "descripcion_tip": "Elimina la grasa difícil para mantener tu cocina impecable.",
            "procedimiento_tip": "Mezcla 1/2 taza de detergente fuerte con 2 litros de agua caliente. Aplica la solución en áreas grasosas y frota con un estropajo. Enjuaga con agua.",
            "ingredientes": ["Detergentes fuertes", "Agua"],
            "imagen": "desengrasante.png"
        },
        {
            "nombre_tip": "Frescura Natural",
            "descripcion_tip": "Elimina olores y refresca el ambiente de la cocina.",
            "procedimiento_tip": "Corta limones y naranjas en rodajas. Colócalos en un recipiente en la cocina. El aroma cítrico actuará como un desodorante natural.",
            "ingredientes": ["Frutas cítricas"],
            "imagen": "frescura_natural.png"
        },
        {
            "nombre_tip": "Limpieza de Electrodomésticos",
            "descripcion_tip": "Mantén tus electrodomésticos limpios y funcionando correctamente.",
            "procedimiento_tip": "Mezcla partes iguales de vinagre y agua. Limpia la superficie de electrodomésticos con un paño humedecido en la solución.",
            "ingredientes": ["Vinagre", "Agua"],
            "imagen": "limpieza_electrodomesticos.png"
        }
    ];
    const bano = [
        {
            "nombre_tip": "Desinfección Total",
            "descripcion_tip": "Elimina gérmenes y mantiene el baño libre de bacterias.",
            "procedimiento_tip": "Mezcla 1 taza de desinfectante con 3 litros de agua. Aplica la solución en superficies y deja actuar durante 15 minutos. Limpia y enjuaga con agua.",
            "ingredientes": ["Desinfectantes", "Agua"],
            "imagen": "desinfeccion_total.png"
        },
        {
            "nombre_tip": "Limpieza de Azulejos",
            "descripcion_tip": "Mantén los azulejos del baño limpios y relucientes.",
            "procedimiento_tip": "Mezcla 1/2 taza de vinagre con 1/2 taza de agua. Aplica la solución en los azulejos y frota con un cepillo o esponja. Enjuaga con agua.",
            "ingredientes": ["Vinagre", "Agua"],
            "imagen": "limpieza_azulejos.png"
        },
        {
            "nombre_tip": "Eliminación de Olores en el Inodoro",
            "descripcion_tip": "Neutraliza olores desagradables y refresca el baño.",
            "procedimiento_tip": "Vierte 1 taza de bicarbonato de sodio seguido de 1 taza de vinagre en el inodoro. Deja actuar durante 10 minutos y luego tira de la cadena.",
            "ingredientes": ["Polvo para hornear", "Vinagre"],
            "imagen": "eliminacion_olores_inodoro.png"
        }
    ];
    const habitacion = [
        {
            "nombre_tip": "Aire Fresco",
            "descripcion_tip": "Mantén la habitación con un ambiente fresco y agradable.",
            "procedimiento_tip": "Abre las ventanas y puertas para permitir la ventilación cruzada. Rocía un desodorante de ambiente o utiliza velas perfumadas para un toque adicional.",
            "ingredientes": ["Desodorante de ambiente", "Velas perfumadas"],
            "imagen": "aire_fresco.png"
        },
        {
            "nombre_tip": "Organización Efectiva",
            "descripcion_tip": "Optimiza el espacio y reduce el desorden en la habitación.",
            "procedimiento_tip": "Dona o desecha artículos no utilizados. Utiliza cajas organizadoras y estantes para mantener todo en su lugar.",
            "ingredientes": ["Cajas organizadoras", "Estantes"],
            "imagen": "organizacion_efectiva.png"
        },
        {
            "nombre_tip": "Limpieza de Superficies",
            "descripcion_tip": "Mantén las superficies limpias y libres de polvo.",
            "procedimiento_tip": "Utiliza un limpiador multiusos y un paño suave para limpiar superficies como mesas, escritorios y estantes.",
            "ingredientes": ["Limpiadores multiusos", "Paño suave"],
            "imagen": "limpieza_superficies.png"
        }
    ];
    const ropa = [
            {
                "nombre_tip": "Lavado Eficiente",
                "descripcion_tip": "Mantén tu ropa limpia y en buen estado con un lavado adecuado.",
                "procedimiento_tip": "Separa la ropa por colores y tipos de tejidos. Utiliza detergentes de calidad y sigue las instrucciones de lavado en las etiquetas.",
                "ingredientes": ["Detergentes de ropa"],
                "imagen": "lavado_eficiente.png"
            },
            {
                "nombre_tip": "Secado Cuidadoso",
                "descripcion_tip": "Protege tus prendas al secarlas de manera adecuada.",
                "procedimiento_tip": "Lee las etiquetas de cuidado y seca la ropa según las indicaciones. Evita la sobreexposición al sol para prevenir la decoloración.",
                "ingredientes": ["Tendedero o secadora"],
                "imagen": "secado_cuidadoso.png"
            },
            {
                "nombre_tip": "Eliminación de Manchas",
                "descripcion_tip": "Actúa rápidamente para eliminar manchas y conservar la apariencia de tus prendas.",
                "procedimiento_tip": "Aplica un quitamanchas adecuado según el tipo de mancha. Lava la prenda después de tratarla para eliminar cualquier residuo.",
                "ingredientes": ["Quitamanchas"],
                "imagen": "eliminacion_manchas.png"
            }
    ];
    const sala = [
        {
            "nombre_tip": "Mantenimiento de Muebles",
            "descripcion_tip": "Conserva la apariencia de tus muebles y prolonga su vida útil.",
            "procedimiento_tip": "Limpia los muebles regularmente con un paño suave y utiliza productos específicos para el tipo de material. Evita la exposición directa al sol para prevenir daños.",
            "ingredientes": ["Productos para muebles", "Paño suave"],
            "imagen": "mantenimiento_muebles.png"
        },
        {
            "nombre_tip": "Orden y Organización",
            "descripcion_tip": "Mantén la sala ordenada y organizada para un ambiente agradable.",
            "procedimiento_tip": "Guarda los objetos fuera de lugar, utiliza cestas o estantes para organizar y dedica unos minutos al día para mantener el orden.",
            "ingredientes": ["Cestas organizadoras", "Estantes"],
            "imagen": "orden_organizacion.png"
        },
        {
            "nombre_tip": "Limpieza de Alfombras",
            "descripcion_tip": "Mantén tus alfombras limpias y libres de suciedad.",
            "procedimiento_tip": "Aspira las alfombras regularmente y realiza limpiezas más profundas según sea necesario. Utiliza productos específicos para el tipo de alfombra.",
            "ingredientes": ["Aspiradora", "Productos para limpieza de alfombras"],
            "imagen": "limpieza_alfombras.png"
        }
    ];
        let zonaSelect = document.querySelector('#zona_select');
        cards = cocina;

        zonaSelect.addEventListener('change', function() {
            let zona = zonaSelect.value;

            if (zona === 'cocina') {
                cards = cocina;
            } else if (zona === 'bano') {
                cards = bano;
            } else if (zona === 'habitacion') {
                cards = habitacion;
            } else if (zona === 'ropa') {
                cards = ropa;
            } else if (zona === 'comedor') {
                cards = comedor;
            } else if (zona === 'sala') {
                cards = sala;
            } else {
                // If none of the conditions are met, set cards to an empty array
                cards = [];
            }

            let html = '';
            let sug = '';

            if (cards.length > 0) {
                sug += `<img src="TipFigures/${zona}.svg" alt="Imagen de zona ${zona}" class="full-width-image">`;
                for (let card of cards) {
                    html += `
                        <a class="card_2" tabindex="0")">
                            <img class="card_2_img" src="TipFigures/${card.imagen}" alt="${card.Producto}">
                            <div class="card_2_txt">
                                <h3>${card.nombre_tip}</h3>
                                <p>${card.descripcion_tip}</p>
                            </div>
                        </a>
                    `;
                }
            }

            document.querySelector('#tips_cards').innerHTML = html;
            document.querySelector('#selected_card_tip').innerHTML = sug;

            document.querySelectorAll('.card_2').forEach(function (card) {
                card.addEventListener('click', function () {
                    // Remove 'selected' class from all cards
                    document.querySelectorAll('.card_2').forEach(function (card) {
                        card.classList.remove('selected');
                    });

                    // Add 'selected' class to the clicked card
                    this.classList.add('selected');

                    // Get the name of the selected card
                    const selectedCardName = this.querySelector('h3').textContent;

                    // Find the corresponding card in the 'cards' array
                    const selectedCard = cards.find(function(card) {
                        return card.nombre_tip === selectedCardName;
                    });

                    sug = '';
                    if (selectedCard) {
                        sug += `
                            <img src="TipFigures/${zona}.svg" alt="Imagen de zona ${zona}" class="full-width-image">
                            <div class="suggest_display">
                                <h3>${selectedCard.nombre_tip}</h3>
                                <p>${selectedCard.descripcion_tip}</p>
                                <p><strong>Ingredientes:</strong></p>
                                <ul>
                                    ${selectedCard.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
                                </ul>
                                <p><strong>¿Cómo se hace?</strong></p>
                                <p>${selectedCard.procedimiento_tip}</p>
                            </div>
                        `;
                    }

                    // Update the HTML elements with the selected card information
                    let selectedCardTip = document.querySelector('#selected_card_tip');
                    selectedCardTip.innerHTML = sug;
                    selectedCardTip.scrollIntoView({ behavior: 'smooth' });
                });
            });
        });
    }