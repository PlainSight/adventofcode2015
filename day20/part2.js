var fs = require('fs');

var input = parseInt(fs.readFileSync('./input.txt', 'utf8'));

var highestSum = 0;

for (var i = 0; i < 100000000; i++) {
    var sum = 0;

    for(var j = 1; j < Math.floor(Math.sqrt(i)); j++) {
        if(i % j == 0) {
            if (i <= j*50) {
                if (j*j !== i) {
                    sum += (11* (i/j));
                }
                sum += (11*j);
            }
        }
    }

    if (sum > highestSum) {
        console.log(i, sum);
        highestSum = sum;
    }

    if (sum >= input) {
        console.log(i, sum);
        return;
    }
}