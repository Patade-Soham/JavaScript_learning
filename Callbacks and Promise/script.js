// console.log('start')
// setTimeout(
//     function (){
//         console.log('hey i am good!')
//     },
//     3000
// );
// console.log('end');

function loadScript(src ,callback){
    let script = document.createElement('script');
    script.src=src;
    script.onload=function(){
        console.log('you script is loaded src : ', src)
        callback(null,src);
    }
    script.onerror=function(){
        console.log('error ', src);
        callback(new Error('src got error'))
    }
    document.body.appendChild(script);
}
function hello(error,src){
    if (error){
        console.log('error' ,error)  
        return
    }
    console.log('script ran successfully',src)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js",hello);

