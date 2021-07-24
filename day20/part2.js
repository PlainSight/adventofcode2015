var fs = require('fs');

var input = parseInt(fs.readFileSync('./input.txt', 'utf8'));

for (var i = 61818; i < 10000000000; i++) {
    var sum = 0;

    for (var x = 1; x <= 50; x++) {
        if (i % x == 0) {
            sum += 11*(i / x);
        }
    }

    if (sum >= input) {
        console.log(i, sum);
        return;
    }
}