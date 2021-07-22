var fs = require('fs');

var lights = fs.readFileSync('./input.txt', 'utf8').split('\r\n').map(l => l.split('').map(m => m == '#' ? true : false));

var neighbours = [{ dx: 1, dy: 0},{ dx: 1, dy: 1},{ dx: 0, dy: 1},{ dx: -1, dy: 1},{ dx: -1, dy: 0},{ dx: -1, dy: -1},{ dx: 0, dy: -1},{ dx: 1, dy: -1}];

for (var g = 0; g < 100; g++) {
    var newLights = [];

    for (var y = 0; y < 100; y++) {
        var row = [];
        for (var x = 0; x < 100; x++) {
            var activeNeighbours = 0;
            for(var n = 0; n < neighbours.length; n++) {
                var dx = neighbours[n].dx;
                var dy = neighbours[n].dy;

                if (x+dx >= 0 && x+dx < 100 && y+dy >= 0 && y+dy < 100) {
                    activeNeighbours += lights[y+dy][x+dx] ? 1 : 0;
                }
            }

            var res = false;

            if (lights[y][x]) {
                if (activeNeighbours == 2 || activeNeighbours == 3) {
                    res = true;
                }
            } else {
                if (activeNeighbours == 3) {
                    res = true;
                }
            }

            row.push(res);
        }
        newLights.push(row);
    }

    lights = newLights;
}

var lightsOn = lights.reduce((a, c) => a + c.reduce((aa, cc) => aa + (cc ? 1 : 0), 0), 0);

console.log(lightsOn);