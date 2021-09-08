"use strict";

document.body.onload = createDiv;

function createDiv() {
 let x = document.createElement('div');
 let y = document.createElement('div');
 x.setAttribute("id", "test");
 x.appendChild(y);
var mySpan = document.createElement('span');
var spanText = document.createTextNode("Testing cu Ștefan");
mySpan.style.color = "red";
mySpan.appendChild(spanText);
y.appendChild(mySpan);


document.body.appendChild(x);
};



