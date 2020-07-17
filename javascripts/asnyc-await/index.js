/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * uri --> https://gist.github.com/mpj/3f8bc0c6ecda4294fbeff99f1e3fae85
 */
/* global Promise, db */
let fetch = require('fetch');

async function fetchCatAvatars(userId) {
    const response = await fetch(`http://catappapi.herokuapp.com/users/${userId}`);
    const user = await response.json();

    return await Promise.all(user.cats.map(async function (catId) {
        const response = await fetch(`http://catappapi.herokuapp.com/cats/${catId}`);
        const catData = await response.json();
        return catData.imageUrl;
    }));
};

const result = fetchCatAvatars(123);
console.info(result);