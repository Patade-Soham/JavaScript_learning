// Prototypes

// let a ={
//     name : 'soham',
//     lang : 'Javascript',
//     // run :() =>{
//     //     alert('selfrun')
//     // }
// }
// console.log(a)

// let p = {
//     run :() =>{
//         alert('run')
//     }
// }

// a.__proto__ = p

// a.run()
// console.log(a.name)
// console.log(a.lang)
// p.__proto__ = {
//     name :'apj'
// }

// Classes and Object

class vehical{
    start(){
        console.log("starting...")
        console.log('vroomm  vrrrom vrrrroooooooooommmmmmmm')
    }
    stop(){
        console.log('sccreeeechhhh')
        console.log('stopped')
    }
    model(name){
        this.name=name
        console.log(name)
    }
}

let car = new vehical()
let bike = new vehical()

bike.start()
bike.stop()
car.model('Benz')