  // Agrega un evento de clic al botón "Mezclar"
  document.querySelector('.accion').addEventListener('click', function() {
    // Obtiene las tarjetas seleccionadas
    const selectedCard1 = document.querySelector('#product_cards_1 .card_2.selected');
    const selectedCard2 = document.querySelector('#product_cards_2 .card_2.selected');
  
    // Obtiene la información de las tarjetas seleccionadas
    const selectedProduct1 = selectedCard1 ? selectedCard1.querySelector('h3').textContent : null;
    const selectedProduct2 = selectedCard2 ? selectedCard2.querySelector('h3').textContent : null;

    // Almacena la información en el almacenamiento de la sesión
    // Si selectedProduct1 o selectedProduct2 es nulo, establece ambos con el mismo valor
    if (!selectedProduct1 || !selectedProduct2) {
      const commonValue = selectedProduct1 || selectedProduct2 || null;
      sessionStorage.setItem('selectedProduct1', commonValue);
      sessionStorage.setItem('selectedProduct2', commonValue);
    } else {
      // Almacena la información en el almacenamiento de la sesión
      sessionStorage.setItem('selectedProduct1', selectedProduct1);
      sessionStorage.setItem('selectedProduct2', selectedProduct2);
    }
    //console.log('Mezcla selectedProduct1:', selectedProduct1);
    //console.log('Mezcla selectedProduct2:', selectedProduct2);
  
    // Redirige a la siguiente página
    window.location.href = 'danger.html';
  });