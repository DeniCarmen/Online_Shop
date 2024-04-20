document.addEventListener('DOMContentLoaded', function() {
  
  var searchInput = document.getElementById('searchInput');

  
  searchInput.addEventListener('keypress', function(event) {
    
    if (event.key === 'Enter') {
      
      event.preventDefault();
      
      searchProducts();
    }
  });

  
  document.getElementById('searchButton').addEventListener('click', searchProducts);

  
  function searchProducts() {
    var searchTerm = searchInput.value.trim().toLowerCase();
    var cards = document.querySelectorAll('.card');
    var searchResults = document.getElementById('searchProducts');
    var searchMessage = document.getElementById('searchMessage');
    var foundProducts = [];
    var productsTitle = document.querySelector('.container-fluid.my-5 h1'); 

    cards.forEach(function(card) {
      var cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
      if (cardTitle.includes(searchTerm)) {
        foundProducts.push(card.outerHTML);
      }
    });

    if (foundProducts.length > 0) {
      searchMessage.style.display = 'none';
      searchResults.innerHTML = foundProducts.join('');
      cards.forEach(function(card) {
        card.style.display = 'none';
      });
      productsTitle.style.display = 'none'; 
    } else {
      searchMessage.style.display = 'block';
      searchResults.innerHTML = '';
      cards.forEach(function(card) {
        card.style.display = 'block';
      });
      productsTitle.style.display = 'block'; 
    }
  }
});
