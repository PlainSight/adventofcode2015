var fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf8').split('\r\n');

var codesum = 0;
var encodedsum = 0;

for (var i = 0; i < input.length; i++) {
    codesum += input[i].length;
    var esum = 2;

    for(var j = 0; j < input[i].length; j++) {
        switch (input[i][j]) {
            case '\\':
                esum += 2;
            break;
            case '"':
                esum += 2;
            break;
            default:
                esum += 1;
        }
    }

    encodedsum += esum;
}

console.log(encodedsum - codesum);