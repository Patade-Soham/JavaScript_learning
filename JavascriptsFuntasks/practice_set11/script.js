// Create a js class to create a complex number. Create a constructor to set the real and the complex part

// write a method to add two complex numbers in the above  class
class ComplexNumber{
    constructor(real,imaginary ){
        this.real = real;
        this.imaginary= imaginary
        this.complex = `${real} + i${imaginary}`

    }
    
    show(){
        console.log(this.complex)
        
    }
    addNums(num){
        this.real=this.real+num.real;
        this.imaginary= this.imaginary + num.imaginary
        this.complex = `${this.real} + i${this.imaginary}`
    }
}
let num = new ComplexNumber(1,4)
num.show()
let num2=new ComplexNumber(6,5);
num2.show()
num2.addNums(num)
num2.show()


// Create a class Student from a class human override a method and see changes 

class Human{
    constructor(name){
        this.name=name;
    }
    learning(){
        console.log('i am learning to walk (Happy life obv :) )')
    }
}

class Student extends Human{
    learning(){
        console.log('learning a skill which would eventually gonna taken by AI (learning to walk was way better btw)')
    }
}

let a = new Human('som')
let b = new Student('tom')
a.learning()
b.learning()

// See if student is an instance of human using instanceof keyword
console.log(b instanceof Student)
console.log(Student instanceof Human)

// Use getters and setters to set and get the real and imaginarypart of the complex