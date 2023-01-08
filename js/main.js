let btn = document.querySelector("#btn");

btn.addEventListener('click', randomBg);

function randomBg (){
    console.log('#' + Math.random().toString(16).slice(2,8))
    document.body.style.backgroundColor = '#' + Math.random().toString(16).slice(2,8)
}