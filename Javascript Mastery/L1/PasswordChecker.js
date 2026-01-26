function passwordStrength(pass){
    if(pass.length<=6){
        return 'weak'
    }
    else if(pass.length>6){
        let counter=0
        for(let i =0 ;i<pass.length;i++){
            if(Number.parseInt(pass[i]) in [0,1,2,3,4,5,6,7,8,9]){
                counter+=1
            }
        }
        if(counter>0){
            return 'strong'
        }
        return 'moderate'
    }
}
console.log(passwordStrength('asdfjkllsdf44'))