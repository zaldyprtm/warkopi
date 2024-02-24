
// hamburger menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#navMenu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});


// klik diluar hamburger
window.addEventListener('click', function(e){
    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// modal item box
const itemDetailModal = document.querySelector('#item-detail-modal');

const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        e.preventDefault();
        itemDetailModal.style.display = 'flex';
    };
});

// close icon modal

document.querySelector('.close-icon').onclick = (e) => {
    e.preventDefault();
    itemDetailModal.style.display = 'none';
}

// click diluar modal
window.onclick = (e) => {
    if(e.target === itemDetailModal ) {
        itemDetailModal.style.display = 'none';
     
    }
}

// shopping cart

const cart = document.querySelector('.shopping-cart');

document.querySelector('#shoppingButton').onclick = (e) => {
    cart.style.display = 'flex';
    e.preventDefault();
};


// close shopping cart
const clsBtn = document.querySelector('.close-icon');
const shopCart = document.querySelector('.shopping-cart');

clsBtn.onclick = (e) => {
    e.preventDefault();
    shopCart.style.display = 'none';
};