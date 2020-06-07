const prev = document.querySelector(".btn-prev");
const next = document.querySelector(".btn-next");
const imgbox = document.querySelector(".image-box");
console.log({prev});

let count =0;
prev.addEventListener("click",prevfn);
next.addEventListener("click",nextfn);


function change(){
    imgbox.style.backgroundImage = `url(assets/img${count}.jpg)`;


}
function prevfn(){
if(count === 1)
count = 4
else
count --;

change();


}
function nextfn(){
    if(count === 4)
    count = 1;
    else
    count ++;
    
    change();
    
    
    }

