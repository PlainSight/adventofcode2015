var fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf8').split('\r\n\r\n');

var transforms = input[0].split('\r\n').map(r => { 
    var parts = r.split(' => ');
    return { 
        in: parts[0],
        out: parts[1]
    };
});
var chemical = input[1].split(/(?=[A-Z])/);

// CYK

// this is a pile of booleans dimension n, n, r where n is the length of the output string and r is the number of non terminal symbols
var chart = {};

function k(...a) {
    return a.join(',');
}


for (var i = 0; i < chemical.length; i++) {
    for(var t = 0; t < transforms.length; t++) {
        
    }
}