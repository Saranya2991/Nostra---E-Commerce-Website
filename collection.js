// Selecting side Navbar, MenuIcon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")
menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

// Product Search Functionality

const searchInput = document.getElementById('search');
const filters = document.querySelectorAll('.filter');
const products = document.querySelectorAll('.product');

function filterProducts() {
  const searchValue = searchInput.value.toLowerCase();
  const activeCategories = Array.from(filters)
    .filter(f => f.checked)
    .map(f => f.value);

  products.forEach(p => {
    const nameMatch = p.textContent.toLowerCase().includes(searchValue);
    const categoryMatch =
      activeCategories.length === 0 ||
      activeCategories.includes(p.dataset.category);

    // Show if both match
    if (nameMatch && categoryMatch) {
      p.classList.remove('hidden');
    } else {
      p.classList.add('hidden');
    }
  });
}

searchInput.addEventListener('input', filterProducts);
filters.forEach(f => f.addEventListener('change', filterProducts));