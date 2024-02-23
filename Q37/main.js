"use strict";
// Q.37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = "Large", message = "I love TypeScript") {
    console.log(`T-shirt Summary: Size - ${size}, Message - "${message}"`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "TypeScript is awesome!");
