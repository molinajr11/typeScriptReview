export {}

interface Product {
    description : string;
    price : number;
}

const phone : Product = {
    description : 'Black berry',
    price:50.0
}

const tablet: Product = {
    description: 'Sam',
    price: 2
}

interface TaxCalculationOptions {
    tax: number;
    products : Product []
}
function taxCalculator(options:TaxCalculationOptions){
    let total = 0;

    options.products.forEach(p =>{
        total += p.price
    })
    return [total,total * options.tax]
}

const shoppingCar = [phone,tablet] ;
const tax = 0.15;

const [total, taxTotal] = taxCalculator ({
    products: shoppingCar,
    tax,

});

console.log('Total',total)
console.log ('Total',taxTotal)