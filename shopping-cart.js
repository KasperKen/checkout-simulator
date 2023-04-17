const shoppingCart = [
  { name: 'Apple', price: 1.50, quantity: 6 },
    { name: 'Pie', price: 8, quantity: 1 },
    { name: 'Magazine', price: 2, quantity: 1 },
]


function addToCart(item, price, quantity) {
    shoppingCart.push({ name: item, price: price, quantity: quantity });
}

function removeFromCart(item, quantity) {
    for (let i = 0; i <= shoppingCart.length - 1; i++) {
        if (shoppingCart[i].name === item) {
            shoppingCart[i].quantity -= quantity;
            if (shoppingCart[i].quantity <= 0) {
                shoppingCart.splice(i, 1);
            }
        }
    }
}

function addTotal(cart) {
    let total = 0;
    for (let i = 0; i <= cart.length - 1; i++) {
        total += (cart[i].price * cart[i].quantity);
    }
    return total;
}

creditCards = [
    { name: 'Visa', ammount: 10 },
    { name: 'Master Card', ammount: 0},
    { name: 'Discover Card', ammount: 100 },
]

let totalPrice = addTotal(shoppingCart);

function processPayment(creditCard, remainingTotal) {
    if (creditCard.ammount > remainingTotal) {
        creditCard.ammount -= remainingTotal;
        remainingTotal -= remainingTotal;
    }
      else {
        remainingTotal -= creditCard.ammount;
        creditCard.ammount -= creditCard.ammount;
      }

    return remainingTotal;
}

function checkout(creditCard, totalPrice) {
    for (let i = 0; i <= creditCards.length - 1; i++) {
        if (totalPrice > 0) {
            totalPrice = processPayment(creditCards[i], totalPrice);
        }
    }
}

console.log(shoppingCart);
console.log(addTotal(shoppingCart));
checkout(creditCards, totalPrice);
console.log(creditCards);
