// working on Cart Quantity
// HTML needed, code goes here for now
`
we need a button, when clicked the quantity changes by 1
+3 button adds 3 to quantity and +2 button 2
reset cart buttons changes the quantity to 0
would be better when displaying 'Cart was reset"
* Starts here: *

<!DOCTYPE html>
    <head>
        <title>Cart Quantity</title>
    </head>
    <body>
        <button onclick="
use backticks->console.log('Cart Quantity: ${cartQuantity})
        ">Show quantity</button>

        onclick runs the js code 
        * button that shows cart quantity *
        * will after js code *
        * 
        <button onclick="
            cartQuantity = cartQuantity + 1;
            cartQuantity += 1; < better way only use 1
            cartQuantity++; < way better way, adds 1
            console.log('Cart Quantity: ${cartQuantity})
            * increases quantity by 1
        ">Add to Cart</button>

        <button onclick="
            cartQuantity = cartQuantity + 2;
            cartQuantity += 2; < better way only use 1
            console.log('Cart Quantity: ${cartQuantity});
        ">+2</button> 

        <button onclick="
            cartQuantity = cartQuantity + 3;
            console.log('Cart Quantity: ${cartQuantity});
        ">+3</button>

        <button onclick="
            cartQuantity = 0;
            console.log('Cart was Reset.');
            console.log('Cart Quantity: ${cartQuantity});
        ">Reset Cart</button>
        * buttons created *
        * next step is javascript code *
        <script>
            down below
        </script>
    </body>
`
// Variables are the best solution
//let cartQuantity = 0; // quantity starts from 0
// camelCase - big small
// PascalCase big big
// kebab-case only in HTML and CSS
// snake_case in python
// advabce:
//true ? 'truthy' : 'falsey'
// same as
//if (true) {
    //'truthy'
//} else {
    //'falsey'
//}

// const result = true ? 'truthy' : 'falsey';
