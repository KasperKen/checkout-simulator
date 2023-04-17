const prompt = require('prompt-sync')();
console.clear()

const shoppingCart = [
  { name: 'Apple', price: 1.50, quantity: 6 },
    { name: 'Pie', price: 8, quantity: 1 },
    { name: 'Magazine', price: 2, quantity: 1 },
]

function displayCart(cart) {
    for (let i = 0; i <= cart.length - 1; i++) {
        console.log(cart[i].name + ': $' + cart[i].price + 'ea - Count: ' + cart[i].quantity + ' - Cost: $' + (cart[i].price * cart[i].quantity));
    }
    console.log("\n                  Total: $" + addTotal(cart) + '\n');
}

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
    { name: 'Visa', balance: 10 },
    { name: 'Master Card', balance: 0},
    { name: 'Discover Card', balance: 100 },
]

function selectCreditCard() {
    console.log('\nPlease Select a Payment Method:');
    for (let i = 0; i <= creditCards.length - 1; i++) {
        console.log(i + '. ' + creditCards[i].name + ' - $' + creditCards[i].balance);
    }
    let creditCardSelection = prompt('Select a Credit Card: ');
    creditCardSelection = creditCards[creditCardSelection];
    return creditCardSelection;
}

function processPayment(remainingTotal) {
    console.log('----------------------------------------------------');
    creditCard = selectCreditCard();
    console.clear()
    console.log('...processing Payment with ' + creditCard.name + '.\n');
    console.log('Previous Total Due: $' + remainingTotal);
    let paymentAmount = 0;
    if (creditCard.balance > remainingTotal) {
        paymentAmmount = remainingTotal;
    }  else {
        paymentAmmount = creditCard.balance;
      }
    creditCard.balance -= paymentAmmount;
    remainingTotal -= paymentAmmount;
    console.log('payment amount: $' + paymentAmount);
    console.log('\n             Total Due: $'  + remainingTotal);
    console.log('----------------------------------------------------');
    console.log('\nYour Remaining ' + creditCard.name + ' Balance is $' + creditCard.balance +'.\n');
    return remainingTotal;
}

function checkout(cart) {
    let remainingTotal = addTotal(cart);
    while (remainingTotal > 0 ) {
        remainingTotal = processPayment(remainingTotal);
    }
    console.log('----------------------------------------------------');
    console.log('Transaction Successful! Thank you for shopping with us!\n\n\n');
}

displayCart(shoppingCart);
checkout(shoppingCart);
