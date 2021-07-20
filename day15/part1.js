var fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf8').split('\r\n');

var ingredients = [];

for (var i = 0; i < input.length; i++) {
    var ex = /([A-Za-z]+): capacity (.+), durability (.+), flavor (.+), texture (.+), calories (.+)/.exec(input[i]);

    ingredients.push([
        parseInt(ex[2]),
        parseInt(ex[3]),
        parseInt(ex[4]),
        parseInt(ex[5]),
        parseInt(ex[6])
    ]);
}

console.log(ingredients);

var bestScore = 0;

function permute(added, sum) {
    if (added.length == ingredients.length - 1) {
        added.push(100-sum);

        var mul = 1;

        for (var att = 0; att < 4; att++) {
            var attSum = 0;
            for (var i = 0; i < added.length; i++) {
                attSum += (added[i] * ingredients[i][att]);
            }
            if (attSum < 0) {
                attSum = 0;
            }
            mul *= attSum;
        }

        if (mul > bestScore) {
            console.log(added, mul);
            bestScore = mul;
        }

        return;
    }
    for(var i = 0; i <= 100 - sum; i++) {
        var newAdded = [];
        var newSum = 0;
        for(var j = 0; j < added.length; j++) {
            newAdded.push(added[j]);
            newSum += added[j];
        }
        newAdded.push(i);
        newSum += i;
        permute(newAdded, newSum);
    }
}

permute([], 0);

console.log(bestScore);