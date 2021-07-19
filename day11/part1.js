var fs = require('fs');

var password = fs.readFileSync('./input.txt', 'utf8');

function inc(pass) {
    var lastChar = pass[pass.length-1];
    if (lastChar < 'z') {
        lastChar = String.fromCharCode(lastChar.charCodeAt(0)+1);
        return pass.substring(0, pass.length-1)+lastChar;
    } else {
        return inc(pass.substring(0, pass.length-1))+'a';
    }
}

while (true) {
    password = inc(password);

    var hasStraight = false;

    for(var i = 0; i < password.length-2; i++) {
        if (password.charCodeAt(i)+1 == password.charCodeAt(i+1) && password.charCodeAt(i+1)+1 == password.charCodeAt(i+2)) {
            hasStraight = true;
        }
    }

    var doesntContainOil = !/[iol]/.test(password);

    var hasTwoDifferentDoubles = false;
    var hasTwoDoubles = /(.)\1.*(.)\2/.test(password);
    if (hasTwoDoubles) {
        var res = /(.)\1.*(.)\2/.exec(password);
        if (res[1][0] != res[2][0]) {
            hasTwoDifferentDoubles = true;
        }
    }

    if (hasStraight && doesntContainOil && hasTwoDifferentDoubles) {
        console.log(password);
        return;
    }
}