let pokeNumber,ID;
let searchBar = document.querySelector(".searchBar input");
let Button = document.querySelector(".searchSection i");
let pic = document.querySelector('img');

let card1 = document.querySelector('.card1');
let card2 = document.querySelector('.card2');
let height = document.querySelector('.card2 .detailBox .Detail .height');
let weight = document.querySelector('.card2 .detailBox .Detail .weight');
card2.style.display = 'none';

let headingName = document.querySelector(".card2 .name");
let headingNumber = document.querySelector(".card2 .number");
let pokePic = document.querySelector(".card2 .pokeimage img");
let pokePicBack = document.querySelector(".card2 .pokeimage");
let abilitiesB = document.querySelector("#abilitiesD");


async function getdata(pokeNumber) {
    console.clear();
    card1.style.display = 'none';
    card2.style.display = 'flex';
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`);
    let data = await response.json();
    console.log(data);
    ID = data.id;
    
    headingName.innerText = data.name;
    headingNumber.innerText = data.id;
    pokePic.setAttribute("src",data.sprites.front_default);
    let heighinft = ((((data.height*0.328084)*12) - ((data.height*0.328084)*12)%12)/12);
    let heightininch = Math.floor(((data.height*0.328084)*12)%12);
    let weightinkg = Math.ceil(data.weight*0.1);
    let types = data.types;
    types.forEach(element => {
        let newHeading = document.createElement("div");
        newHeading.innerText = element.type.name;
        newHeading.style.color = 'white';
        if(newHeading.innerText == 'grass')
        {
            newHeading.style.backgroundColor = 'green';
            pokePicBack.style.backgroundColor = 'green';
        }
        else if(newHeading.innerText == 'fire')
        {
            newHeading.style.backgroundColor = 'orange';
            pokePicBack.style.backgroundColor = 'orange';
        }
        else if(newHeading.innerText == 'water')
        {
            newHeading.style.backgroundColor = 'skyblue';
            pokePicBack.style.backgroundColor = 'skyblue';
        }
        else if(newHeading.innerText == 'electric')
        {
            newHeading.style.backgroundColor = 'yellow';
            pokePicBack.style.backgroundColor = 'yellow';
        }
        else if(newHeading.innerText == 'rock')
        {
            newHeading.style.backgroundColor = '#A38C21';
            pokePicBack.style.backgroundColor = '#A38C21';
        }
        else if(newHeading.innerText == 'poison')
        {
            newHeading.style.backgroundColor = 'purple';
            pokePicBack.style.backgroundColor = 'purple';
        }
        else if(newHeading.innerText == 'ground')
        {
            newHeading.style.background = 'linear-gradient(to bottom,yellow,#A38C21)';
            pokePicBack.style.backgroundColor = 'linear-gradient(to bottom,yellow,#A38C21)';
        }
        else if(newHeading.innerText == 'dragon')
        {
            newHeading.style.background = 'linear-gradient(to bottom,blue,red)';
            pokePicBack.style.backgroundColor = 'linear-gradient(to bottom,blue,red)';
        }
        else if(newHeading.innerText == 'flying')
        {
            newHeading.style.background = 'linear-gradient(to bottom,skyblue 40%,grey)';
            pokePicBack.style.backgroundColor = 'linear-gradient(to bottom,skyblue 40%,grey)';
        }
        else if(newHeading.innerText == 'psychic')
        {
            newHeading.style.backgroundColor = '#F366B9';
            pokePicBack.style.backgroundColor = '#F366B9';
        }
        else if(newHeading.innerText == 'steel')
        {
            newHeading.style.backgroundColor = '#9EB7B8';
            pokePicBack.style.backgroundColor = '#9EB7B8';
        }
        else if(newHeading.innerText == 'fairy')
        {
            newHeading.style.backgroundColor = '#FDB9E9';
            pokePicBack.style.backgroundColor = '#FDB9E9';
        }
        else if(newHeading.innerText == 'ice')
        {
            newHeading.style.backgroundColor = '#51C4E7';
            pokePicBack.style.backgroundColor = '#51C4E7';
        }
        else if(newHeading.innerText == 'bug')
        {
            newHeading.style.backgroundColor = '#729F3F';
            pokePicBack.style.backgroundColor = '#729F3F';
        }
        else if(newHeading.innerText == 'dark')
        {
            newHeading.style.backgroundColor = '#707070';
            pokePicBack.style.backgroundColor = '707070';
        }
        else if(newHeading.innerText == 'ghost')
        {
            newHeading.style.backgroundColor = '#7B62A3';
            pokePicBack.style.backgroundColor = '7B62A3';
        }
        else if(newHeading.innerText == 'fighting')
        {
            newHeading.style.backgroundColor = '#D56723';
            pokePicBack.style.backgroundColor = '#D56723';
        }
        else if(newHeading.innerText == 'normal')
        {
            newHeading.style.backgroundColor = 'black';
            pokePicBack.style.backgroundColor = '#D56723';
        }
        newHeading.style.margin = '5px auto';
        newHeading.style.width = '70px';
        newHeading.style.borderRadius = '5px';
        newHeading.style.display = 'flex';
        newHeading.style.justifyContent = 'center';
        newHeading.style.alignItems = 'center';
        document.querySelector("#typeD").appendChild(newHeading);
    });

    let abilities = data.abilities;
    abilities.forEach(element =>{
        let  abs = document.createElement("div");
        abs.innerText = `•${element.ability.name}`;
        abs.style.color = 'blue';
        abs.style.fontSize = '12px';
        abilitiesB.appendChild(abs);

    });
    
    height.innerText = `  ${heighinft}'${heightininch}"`; 
    weight.innerText = `  ${weightinkg}Kg`; 
    
}

Button.addEventListener("click",()=>{
    pokeNumber = searchBar.value;
    getdata(pokeNumber);
})
document.querySelector("#NextPok").addEventListener("click",()=>{
    document.querySelector("#typeD").innerHTML = "";
    abilitiesB.innerHTML = "";
    getdata(ID+1);
})
document.querySelector("#PrevPok").addEventListener("click",()=>{
    document.querySelector("#typeD").innerHTML = "";
    abilitiesB.innerHTML = "<h4>hello</h4>";
    getdata(ID-1);
})