// // let str = 'soham';
// // let num = 30
// // let num_string = str+num;
// // console.log(num_string);

// // console.log(typeof(str), typeof(num), typeof(num_string));

// // const obj ={
// //     name : 'soham'
// // }
// // console.log(obj['name']);
// // obj['name']=30;
// // console.log(obj['name']);
// // //yes 

// // obj['age']=20;
// // console.log(obj);

// const prompt = require("prompt-sync")(); 
// let age = prompt('what is your age : ');

// if(age>=10 && age<=20){
//     console.log('you fit the bracket');
// }
// else{
//     console.log('you do not fit the bracket.');
// }

// switch(age){
//     case 1:
//         console.log('you fit the bracket');
//         break;
//     default:
//         console.log('you do not fit the bracket.');
//         break;      
// }
const obje={ram:98,sham:70,som:85}
for (const i in obje){ 
    console.log(i)
    console.log(obje[i]);
}

