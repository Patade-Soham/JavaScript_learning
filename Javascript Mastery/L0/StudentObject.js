class Student {
    constructor(name,marks){
        this.name = name
        this.marks = marks
    }
    display(){
        console.log('Name : ', this.name)
        console.log('Marks : ', this.marks)
    }
    status(){
        if(this.marks<=40){
            console.log('Fail')
        }else{
            console.log('Pass')
        }
    }

}

let s1 = new Student('Soham',89);
let s2 = new Student('Istique',94);
let s3 = new Student('tom',20);

s2.display()
s2.status()
// s3.status()