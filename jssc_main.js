let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Frank Ocean Blond Light Blue Shirt',
        tag: 'frankoceanblondlightbluetshirt',
        price: 20,
        inCart: 0
    },

    {
        name: 'GOLFWANG Black Hoodie',
        tag: 'golfwangblackhoodie',
        price: 35,
        inCart: 0
    },

    {
        name: 'Frank Ocean 032c Magazine',
        tag: 'frankocean032cmagazine',
        price: 40,
        inCart: 0
    },

    {
        name: 'Bianca Chandon Lover Shorts',
        tag: 'biancachandonlovershorts',
        price: 15,
        inCart: 0
    },
]

for (let i=0; 1 < carts.length; 1++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;

    }
}

function cartNumbers(product) {
    console.log("The product clicked is", product);
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setting('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);

}
function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log("My cartItems are", cartItems);

    if(cartItems !=null) {
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
    }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

onLoadCartNumbers();