var fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf8').split('\r\n');

var codesum = 0;
var memorysum = 0;

for (var i = 0; i < input.length; i++) {
    codesum += input[i].length;
    var mem = 0;

    for(var j = 0; j < input[i].length; j++) {
        if (input[i][j] == '\\') {
            switch (input[i][j+1]) {
                case '\\':
                    mem ++;
                    j++;
                break;
                case '"':
                    mem ++;
                    j++;
                break;
                case 'x':
                    mem ++;
                    j+=3;
                break;
            }
        } else {
            if (input[i][j] != '"') {
                mem++;
            }
        }
    }

    memorysum += mem;
}

console.log(codesum - memorysum);