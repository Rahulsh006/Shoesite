document.addEventListener("DOMContentLoaded", function() {
    var showMoreBtn = document.getElementById('show-more-btn');
    var productList = document.getElementById('product-list');

    showMoreBtn.addEventListener('click', function() {
        if (productList.style.display === "none" || productList.style.display === "") {
            productList.style.display = "grid";  // Adjust according to your layout
            showMoreBtn.textContent = "LOAD LESS PRODUCTS";
        } else {
            productList.style.display = "none";
            showMoreBtn.textContent = "LOAD MORE PRODUCTS";
        }
    });
});
