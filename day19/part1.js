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

var distinct = {};

for (var i = 0; i < chemical.length; i++) {
    transforms.forEach(t => {
        if (chemical[i] == t.in) {
            var temp = chemical[i];
            chemical[i] = t.out;
            distinct[chemical.join('')] = true;
            chemical[i] = temp;
        }
    })
}

console.log(Object.keys(distinct).length);