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

// class vehical{
//     start(){
//         console.log("starting...")
//         console.log('vroomm  vrrrom vrrrroooooooooommmmmmmm')
//     }
//     stop(){
//         console.log('sccreeeechhhh')
//         console.log('stopped')
//     }
//     model(name){
//         this.name=name
//         console.log(name)
//     }
// }

// let car = new vehical()
// let bike = new vehical()

// bike.start()
// bike.stop()
// car.model('Benz')


// Constructors



// class vehical{
//     constructor(){
//         console.log('Constructor Called')
//     }
//     start(){
//         console.log("starting...")
//         console.log('vroomm  vrrrom vrrrroooooooooommmmmmmm')
//     }
//     stop(){
//         console.log('sccreeeechhhh')
//         console.log('stopped')
//     }
//     model(name){
//         this.name=name
//         console.log(name)
//     }
// }

// let SportsCar = new vehical()
// SportsCar.model('mec') 


// Quiz : make a classs user with follow and unfollow feature.
// class Users{
//     constructor(){
//         this.followers = 0;
//         this.following = 0;
//         console.log('Following :'+this.following+' Followers '+this.followers)
//     }
//     gotFollowed(){
//         this.followers +=1;
//     }
//     follow(userName){
//         this.following+=1
//         userName.gotFollowed()
//     }
//     gotUnfollow(){
//         this.followers-=1;
//     }
//     unfollow(userName){
//         this.following-=1
//         userName.gotUnfollow()
//     }
//     showStatus(){
//         console.log('Following :'+this.following+' Followers '+this.followers)
//     }
// }

// let user1 = new Users();
// let user2 = new Users();



// user1.showStatus()
// user2.follow(user1);
// user1.showStatus()
// user2.showStatus()

// user2.unfollow(user1);
// user2.showStatus()
// user1.showStatus()


// Inheritance

// class animal{
//     jump(){
//         console.log('toing ! toing !....')
//     }
//     sleep(){
//         console.log('Zzzzzzzz....')
//     }

// }

// class Dawg extends animal{
//     bark(){
//         console.log('bhaww bhaww ...')
//     }
// }

// let dogeshBhai = new Dawg();

// dogeshBhai.bark();
// dogeshBhai.jump();
// dogeshBhai.sleep();

// Method Overriding

class Employee{
    constructor(name){
        this.name= name
        console.log(`${name}`)
    }
    login(){
        console.log(`Employee has logged in `)
    }
    logout(){
        console.log(`Employee has logged out `)
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves`)
    }

}

class Programmer extends Employee{
    constructor(name){
        super(name)
        console.log('this is the programmer constructor')
    }
    requestCoffee(x){
        console.log(`Employee hs requested ${x} coffee`)
    }
    requestLeaves(leaves){
        super.requestLeaves(leaves)
        // console.log(`Employee has requested ${leaves+1} leaves (one extra)`)
    }
}
                 
let e = new Programmer('Soham')
e.login()
e.requestLeaves(3)

// Static Methods

class Animal{
    constructor(name) {
        this.name=Animal.Capitalize(name)
    }
    walk(){
        console.log(this.name+' is walking')
    }
    static Capitalize(name){
        return name.charAt(0).toUpperCase()+name.substr(1,name.length)
    }
}

let a = new Animal('astroid destroyer')

a.walk()