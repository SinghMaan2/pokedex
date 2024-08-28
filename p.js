let pokeNumber;
let searchBar = document.querySelector(".searchBar input");
let Button = document.querySelector(".searchSection i");
let pic = document.querySelector('img');

let card1 = document.querySelector('.card1');
let card2 = document.querySelector('.card2');
card2.style.display = 'none';

let headingName = document.querySelector(".card2 .name");
let headingNumber = document.querySelector(".card2 .number");
let pokePic = document.querySelector(".card2 .pokeimage img");

async function getdata(pokeNumber) {
    card1.style.display = 'none';
    card2.style.display = 'flex';
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`);
    let data = await response.json();
    console.log(data);
    
    headingName.innerText = data.name;
    headingNumber.innerText = data.id;
    pokePic.setAttribute("src",data.sprites.front_default);

    // pic.setAttribute("src",data.sprites.front_default);
}

Button.addEventListener("click",()=>{
    pokeNumber = searchBar.value;
    getdata(pokeNumber);
})