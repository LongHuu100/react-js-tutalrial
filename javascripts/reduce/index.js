/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
let fs = require('fs');
// map lap qua array cu de tao mot array co chieu dai bang array goc, array moi co gia tri tuy bien theo code tren array cu.
// reduce de lap qua cac phan tu cua array
var output = fs.readFileSync('data.txt','utf8').trim().
    split('\n').map(line => line.split(' ')).
    reduce((comtomers,line) => {
        comtomers[line[0]] = [];
        comtomers[line[0]].push({
            name : line[1],
            price : line[2],
            quality : line[3]
        });
        return comtomers;
    },{});
console.log('output --> ', JSON.stringify(output,null,2));

let vals = [4,5,9,3,0];
// sap xep tu lon toi be, a la bien de luu gia tri cua b
let biggest = vals.reduce((a, b) => a > b ? a : b);
console.log('biggest -->', biggest);
