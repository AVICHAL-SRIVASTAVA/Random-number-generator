

document.querySelector(".btn").addEventListener("click",function click(){
    let pre=document.querySelector(".newnum").innerHTML;
    document.querySelector(".prenum").innerHTML=pre;
    var ranum=Math.floor(Math.random()*100)+1;
document.querySelector(".newnum").innerHTML=ranum;

})