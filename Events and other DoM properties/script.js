// console.log(document.getElementsByTagName('span')[0])
// console.dir(document.getElementsByTagName('span')[0]) //prints as an obj

// const { createElement } = require("react");

// let x=document.getElementsByTagName('span')[0]
// console.log(x)
// console.dir(x)
// console.log(document.body.firstChild.nodeName)
// console.log(document.body.firstElementChild.nodeName)
// x.innerHTML='<i> I am  som </i>'
// x.outerHTML='<div>bye</div>'
// console.log(document.body.textContent)


// console.log(first.getAttribute('class'));
// first.setAttribute('name','container');
// console.log(first.hasAttribute('name'));
// console.log(first.getAttribute('name'));
// console.log(first.dataset.cat)

let a = document.getElementsByTagName('div')[0]
a.innerHTML = a.innerHTML + '<h1>scratch scratch, Astroid destroyer is here </h1>'

let div = document.createElement('div');
div.innerHTML='<h1>Galaxy paww !</h1>'

a.append(div);
