// classes = provides a more structured and cleaner way to work
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    displayProduct() {
        console.log(`The product is: $${this.price.toFixed(2)}`);
    }
}

const product1 = new Product("Shirt", 19.99);