const colors = [
    {
        img: "url('walpaper1.jpg')",
        title:"Itachi Blood Moon"
    },
    {
        img: "url('walpaper2.jpg')",        
        title:"Spiderverse"
    },
    {
        img: "url('walpaper3.jpg')",
        title:"Book Time on Bed"
    },
    {
        img: "url('walpaper4.jpg')",
        title:"Gaming room"
    },
    {
        img: "url('walpaper5.jpg')",
        title:"Work n Coffee"
    },
    {
        img: "url('walpaper6.jpg')",
        title:"Bike Ride"
    },
    {
        img: "url('walpaper7.jpg')",
        title:"Game Time"
    },
    {
        img: "url('walpaper8.jpg')",
        title:"Ganbare Tajiro"
    },

];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    console.log(colors[randomNumber].img);

document.body.style.backgroundImage = colors[randomNumber].img;
color.textContent = colors[randomNumber].title;;

});


function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

/* const randomNumber = getRandomNumber();
console.log(2);
console.log(colors[2].img);

document.body.style.backgroundImage = colors[2].img;
color.textContent = colors[2].title; */

