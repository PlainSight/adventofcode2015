var fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf8');

var sum = 0;

var root = JSON.parse(input);

function traverse(node) {
    Object.values(node).forEach(o => {
        if(typeof o == "object") {
            traverse(o);
        } else {
            if(typeof o == "number"){
                sum += o;
            }
        }
    });
}

traverse(root);

console.log(sum);