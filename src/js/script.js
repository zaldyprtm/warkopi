


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
        images: "arabica.jpg",
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
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
        <img src ="img/menu/${value.images}">
        <div class= "title">${value.name}</div> 
        <div class="price">${value.price.toLocaleString()}</div>
        <button class="buttonAdd" onclick="addToCart(${key})"><i class="fa-solid fa-cart-shopping"></i></button>
                           `
        
        list.appendChild(newDiv);
    });
};
initApp(); void
initApp()

const addToCart = (key) => {
    if (listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1
    }

    reloadCard();
}

const reloadCard = () => {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div style="margin-bottom: 8px;"><img src="img/menu/${value.images}"></div>
                <div class="cardTitle">${value.name}</div>
                <div class="cardPrice">${value.price.toLocaleString()}</div>

                <div class="tombol">
                <button style="background-color: #560bad;" class="cardButton" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                <div style="color: black;">${count}</div>
                <button style="background-color: #560bad;" class="cardButton" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
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

