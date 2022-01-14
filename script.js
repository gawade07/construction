

let menuBtn = document.querySelector('#menubtn');
let menuLst = document.querySelector('.link');


menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    menuLst.classList.toggle('active');
}