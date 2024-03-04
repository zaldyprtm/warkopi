


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
        name: "Blend Coffee Beans",
        images: "blend.jpg",
        price: 15000
    },

    {
        id: 2,
        name: "Original Coffee Beands",
        images: "original.jpg",
        price: 20000
    },

    {
        id: 3,
        name: "Roasted Coffee Beans",
        images: "roasted.jpg",
        price: 20000
    },

    {
        id: 4,
        name: "Luwak Coffee Beans",
        images: "luwak.jpg",
        price: 17000
    }

 
];

let listCards = [];
const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
        <img src ="img/produk/${value.images}">
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
        listCards[key].quantity = 1;
    } else {
        listCards[key].quantity += 1;
    }

    reloadCard();
}

const reloadCard = () => {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    for (const key of Object.keys(listCards)) {
        const value = listCards[key];
        totalPrice += value.price;
        count += value.quantity;
        if (value != null) {
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div style="margin-bottom: 8px;"><img src="img/produk/${value.images}"></div>
                <div class="cardTitle">${value.name}</div>
                <div class="cardPrice">${value.price.toLocaleString()}</div>

                <div class="tombol">
                    <button style="background-color: #560bad;" class="cardButton" onclick="changeQuantity('${key}', ${value.quantity - 1})">-</button>
                    <div style="color: black;">${value.quantity}</div>
                    <button style="background-color: #560bad;" class="cardButton" onclick="changeQuantity('${key}', ${value.quantity + 1})">+</button>
                </div>
            `;
            listCard.appendChild(newDiv);
        }
    }

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

const changeQuantity = (key, quantity) => {
    if (typeof listCards[key] === 'undefined' || typeof products[key] === 'undefined') {
        console.error('Invalid key:', key);
        return;
    }

    if (quantity === 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }

    reloadCard();
}