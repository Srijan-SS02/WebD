let counter=0;
function count(){
    counter++;
    document.querySelector('h1').innerHTML=counter;
    console.log("Hello JS")
    if(counter%10===0)
    {
        alert(`Counter is now ${counter}`);
    }
}

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('button').onclick=count;
});