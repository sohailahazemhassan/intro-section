// const myBtn = document.querySelector(".part1 input")
// myBtn.onclick = function(){
//     myBtn.style.color = 'var(--Almost-Black)';
//     myBtn.style.backgroundColor = 'var(--Almost-White)';
//     myBtn.style.border = '.5px solid var(--Medium-Gray)';
// }
const myFrist = document.getElementById("frist")
const myBox1 = document.getElementById("box1")
const mySec = document.getElementById("sec")
const myBox2 = document.getElementById("box2")
const myDown = myFrist.querySelector(".s")
const myUp = myFrist.querySelector(".hide")
const myDowns = mySec.querySelector(".s")
const myUps = mySec.querySelector(".hide")
myFrist.onclick = function() {
    myBox1.classList.toggle("hide");
    myDown.classList.toggle("hide");
    myUp.classList.toggle("show");
};
mySec.onclick = function() {
    myBox2.classList.toggle("hide");
    myDowns.classList.toggle("hide");
    myUps.classList.toggle("show");
};



