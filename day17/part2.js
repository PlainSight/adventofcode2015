var fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf8').split('\r\n').map(i => parseInt(i)).map((v, i) => { return { v: v, i: i }; });

var ways = {};
var store = 150;

function recurse(picked, j) {
    var current = picked.reduce((a, c) => a+input[c].v, 0);
    var remaining = store - current;
    if (remaining == 0) {
        //console.log(picked, picked.map(p => input[p]));
        ways[picked.sort().join(',')] = picked.length;
        return;
    }
    for (var i = j+1; i < input.length; i++) {
        if (input[i].v <= remaining) {
            var clonePicked = JSON.parse(JSON.stringify(picked));
            clonePicked.push(i);
            recurse(clonePicked, i);
        }
    }
}

recurse([], -1);

var minContainers = Math.min(...Object.values(ways));

console.log(Object.entries(ways).filter((e) => e[1] == minContainers).length);