
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

// document.querySelector('.close-icon').onclick = (e) => {
//     e.preventDefault();
//     itemDetailModal.style.display = 'none';
// }

// const closeModal = document.querySelector('.close-icon');

// closeModal.addEventListener('click', function(e) {
//     e.preventDefault();
//     itemDetailModal.style.display - 'none';
// });

// click diluar modal
window.onclick = (e) => {
    if(e.target === itemDetailModal ) {
        itemDetailModal.style.display = 'none';
     
    }
}

// // shopping cart

// const openShop = document.querySelector('#shoppingButton');
// const closeShop = document.querySelector('.closeShopping');
// const body = document.querySelector('body');

// openShop.addEventListener('click',  function () {
//     body.classList.add('active');
// });



// CART

const openShopping = document.querySelector('.shopping');
const closeShopping = document.querySelector('.closeShopping');
const list = document.querySelector('.list');
const listCard = document.querySelector('.listCard');
const total = document.querySelector('.total');
const body = document.querySelector('body');
const quantity = document.querySelector('.quantity');

// open cart
openShopping.addEventListener('click', () => {
    body.classList.add('active');
});

// close cart 
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});


// array products

let products = [
    {
        id: 1,
        name: "Espresso",
        images: "espresso.jfif",
        price: 15000
    },

    {
        id: 2,
        name: "Arabica",
        images: "arabica.webp",
        price: 20000
    },

    {
        id: 3,
        name: "Cappucino",
        images: "cappucino.jfif",
        price: 20000
    },

    {
        id: 4,
        name: "Americano",
        images: "americano.jpg",
        price: 17000
    },

    {
        id: 5,
        name: "Macchiato",
        images: "macchiato.jfif",
        price: 25000
    },

    {
        id: 6,
        name: "Mocha Latte",
        images: "mocha.jfif",
        price: 15000
    },

    {
        id: 7,
        name: "Iced Coffee",
        images: "icedcoffee.jfif",
        price: 12000
    }
];

let listCards = [];
const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add("item");
        newDiv.innerHTML = `
        <img src ="img/menu/${value.images}">
        <div class= "title">${value.name}</div> 
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCart(${key})">Add To Cart</button>
                           `
        
        list.appendChild(newDiv);
    });
};
initApp(); void
initApp()

const addToCart = (key) => {
    if (listCards[key] == null) {
        listCards[key] = JSON.parse(json.stringify(products[key]));
        listCards[key].quantity = 1
    }
    reloadCard();
}

const reloadCard = () => {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((calue, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if (value != null) {
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
            <div><img src="img/${value.images}"></div>
            <div class="cardTitle">${value.name}</div>
            <div class="cardPrice">${value.price.toLocaleString()}</div>
            <div><button style="background-color: #560bad;" class="cardButton" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button></div>
            <div class="count">${count}</div>
            <div><button style="background-color: #560bad;" class="cardButton" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button></div>
            `;
            listCard.appendChild(newDiv);
        }
    });

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

const changeQuantity = (key, quantity) => {
    if ( quantity == 0 ) {
        delete listCards[key]
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }

    reloadCard()
}