document.getElementsByClassName('button')[0].style.backgroundColor = 'orange';
document.getElementsByClassName('button')[1].style.backgroundColor = 'green';
document.getElementsByClassName('button')[2].style.backgroundColor = 'blue';
document.getElementsByClassName('button')[3].style.backgroundColor = 'red';
document.getElementsByClassName('button')[4].style.backgroundColor = 'purple';
document.getElementsByClassName('button')[5].style.backgroundColor = 'black';

 
document.getElementById('menuButton').addEventListener('mouseover', (event) =>  {dropdownMenu()});
document.getElementById('colorsList').addEventListener('mouseleave', (event) => {dropdownMenu()});


function dropdownMenu() {
   document.getElementById("colorsList").classList.toggle("show");
   };

document.addEventListener('keypress', (event) => {
    if (event.key == "1") {
        backgroundOrange()
        }
    else if (event.key == "2"){
        backgroundGreen()
        dropdownMenu()
        }
    else if (event.key == "3"){
        backgroundBlue()
        dropdownMenu()
        }
    else if (event.key == "4"){
        backgroundRed()
        dropdownMenu()
        }
    else if (event.key == "5"){
        backgroundPurple()
        dropdownMenu()
        }
    else if (event.key == "6"){
        backgroundBlack()
        dropdownMenu()
        }
    else (alert("There is no color linked to this key, try another one!"))
    return});
    



document.getElementById("orange").addEventListener ('click', (event) => {backgroundOrange()});
document.getElementById("green").addEventListener ('click', (event) => {backgroundGreen()});
document.getElementById("blue").addEventListener ('click', (event) => {backgroundBlue()});
document.getElementById("red").addEventListener ('click', (event) => {backgroundRed()});
document.getElementById("purple").addEventListener ('click', (event) => {backgroundPurple()});
document.getElementById("black").addEventListener ('click', (event) => {backgroundBlack()});

function backgroundOrange() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "orange";
    document.getElementById("h1").style.color = 'black';
    document.getElementById("h2").style.color = 'black';
    document.getElementsByTagName("h3")[0].style.color = 'black';
    document.getElementById("h1").innerHTML = " You changed the background to <i>orange</i>!";
    document.getElementById("h2").innerHTML = " Press one of the following keys on your keyboard to change the background again:";
    document.getElementsByClassName("radioButton")[0].checked = true;
    };

function backgroundGreen() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "green";
    document.getElementById("colorsList").classList.toggle("show");
    document.getElementById("h1").innerHTML = " You changed the background to <i>green</i>!";
    document.getElementById("h2").innerHTML = " Press one of the following keys on your keyboard to change the background again:";
    document.getElementsByClassName("radioButton")[1].checked = true;
    };

function backgroundBlue() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "blue";
    document.getElementById("colorsList").classList.toggle("show");
    document.getElementById("h1").innerHTML = " You changed the background to <i>blue</i>!";
    document.getElementById("h2").innerHTML = " Press one of the following keys on your keyboard to change the background again:";
    document.getElementsByClassName("radioButton")[2].checked = true;
    };

function backgroundRed() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "red";
    document.getElementById("colorsList").classList.toggle("show");
    document.getElementById("h1").innerHTML = " You changed the background to <i>red</i>!";
    document.getElementById("h2").innerHTML = " Press one of the following keys on your keyboard to change the background again:";
    document.getElementsByClassName("radioButton")[3].checked = true;
    };

function backgroundPurple() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "purple";
    document.getElementById("colorsList").classList.toggle("show");
    document.getElementById("h1").innerHTML = " You changed the background to <i>purple!</i>";
    document.getElementById("h2").innerHTML = " Press one of the following keys on your keyboard to change the background again:";
    document.getElementsByClassName("radioButton")[4].checked = true;
    };

function backgroundBlack() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "black";
    document.getElementById("colorsList").classList.toggle("show");
    document.getElementById("h1").style.color = 'white';
    document.getElementById("h2").style.color = 'white';
    document.getElementsByTagName("h3")[0].style.color = 'white';
    document.getElementById("h1").innerHTML = " You changed the background to <i>black</i>!";
    document.getElementById("h2").innerHTML = " Press one of the following keys on your keyboard to change the background again:";
    document.getElementsByClassName("radioButton")[5].checked = true;
    };






// colorChanger = document.getElementById("color-picker");
// colorChanger.addEventListener ('click' , event => {prompt("Which color do you want to see?", "color")});
