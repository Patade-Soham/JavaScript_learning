let student = {
    name: "Soham",
    age: 20,
    branch: "Computer Engineering",
    college: "Mumbai University",
    year: "Second",
    cgpa: 8.6,
    city: "Mumbai",
    skills: "JavaScript",
    isHosteller: false,
    graduationYear: 2027
};
let names = []
let details = []

for(let key in student){
    names.push(key)
    details.push(student[key])
}

console.log(names, details)
let new_obj={}
for(let i=0;i<=names.length-1;i++){
    new_obj[names[i]]=details[i]
}
console.log(new_obj)