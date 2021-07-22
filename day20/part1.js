var fs = require('fs');

var input = parseInt(fs.readFileSync('./input.txt', 'utf8'));

for (var i = 0; i < 10000000; i++) {
    var sum = 0;

    for(var j = 1; j < Math.floor(Math.sqrt(i)); j++) {
        if(i % j == 0) {
            if (j*j !== i) {
                sum += (10* (i/j));
            }
            sum += (10*j);
        }
    }

    if (sum >= input) {
        console.log(i, sum);
        return;
    }
}