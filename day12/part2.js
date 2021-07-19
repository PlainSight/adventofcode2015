var fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf8');

var sum = 0;

var root = JSON.parse(input);

function traverse(node) {
    var hasRed = Object.values(node).includes('red') && !Array.isArray(node);
    if (hasRed) {
        return;
    }
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