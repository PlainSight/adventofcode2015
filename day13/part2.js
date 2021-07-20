var fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf8').split('\r\n');

var people = { Me: {
}};

for (var i = 0; i < input.length; i++) {
    //Alice would gain 2 happiness units by sitting next to Bob.
    var extract = /([A-Za-z]+) would ([a-z]+) (\d+) happiness units by sitting next to ([A-Za-z]+)/.exec(input[i]);
    var person = extract[1];
    var gainlose = extract[2];
    var amount = parseInt(extract[3]);
    var neighbour = extract[4];

    if (!people[person]) {
        people[person] = {};
    }
    people[person][neighbour] = gainlose == 'gain' ? amount : -amount;
}

var bestScore = 0;
var bestOrder = [];

function checkAll(existing) {
    if (existing.length == Object.keys(people).length) {
        // calculate and return score
        var score = 0;
        for(var i = 0; i < existing.length; i++) {
            var current = existing[i];
            var left = existing[(i+existing.length-1)%existing.length];
            var right = existing[(i+1)%existing.length];
            score += people[current][left] || 0;
            score += people[current][right] || 0;
        }
        if (score > bestScore) {
            bestScore = score;
            bestOrder = existing;
        }
        return;
    }
    for(var p in people) {
        if (existing.includes(p)) {
            continue;
        }
        var existingClone = JSON.parse(JSON.stringify(existing));
        existingClone.push(p);
        checkAll(existingClone);
    }
}

checkAll([]);

console.log(bestScore, bestOrder);