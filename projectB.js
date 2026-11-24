let cart = []

const BrawlStars = [
{   name: "Shelly",
    health: 7800,
    damage: 3000, 
    super: 5760,
    rank: "A",
    winR: 36.3,
    price: "free",
    quantity: 2,
    Image: `Shelly_Skin-Default.webp`
    },

{   name: "Mandy",
    health: 6000,
    damage: 2600,
    super: 5000,
    rank: "A",
    winR: 47.3,
    price: 25.99,
    quantity: 8,
    Image: `mandy.jpg`},

{   name: "Nita",
    health: 8400,
    damage: 1920,
    super: 800,
    rank: "D", 
    winR: 47,
    price: 12.99,
    quantity: 3,
    Image: `Nita.webp`
    },

{   name: "Byron", 
    health: 5200,
    damage: 760,
    super: 3000,
    rank: "A",
    winR: 52,
    price: 25.99,
    quantity: 1,
    Image: `Byron.webp`},

{   name: "Frank",
    health: 13600,
    damage: 2320,
    super: 2480,
    rank: "D",
    winR: 35.6,
    price: 12.99,
    quantity: 0, 
    Image: `Frank.webp`},

{   name: "Janet",
    health: 6800,
    damage: 2000,
    super: 1600,
    rank: "B", 
    winR: 58.2,
    price: 20.99,
    quantity: 4,
    Image: `Janet.webp`},

{   name: "Ollie", 
    health: 10800,
    damage: 2000, 
    super: 1600,
    rank: "C",
    winR: 55.9,
    price: 17.87,
    quantity: 26,
    Image: `Ollie.webp`},

{   name: "Darryl", 
    health: 11000,
    damage: 4800,
    super: 800,
    rank: "A",
    winR: 38.5,
    price: 25.99,
    quantity: 2,
    Image: `Darryl.webp`},

{   name: "Angelo",
    health: 6200,
    damage: 4000,
    super: 1000,
    rank: "B",
    winR: 60.8,
    price: 20.99,
    quantity: 2,
    Image: `Angelo.webp` },

{   name: "Gus",
    health: 6600,
    damage: 2160,
    super: 0,
    rank: "S",
    winR: 66.3,
    price: 35.99,
    quantity: 1,
    Image: `Gus.webp`},

{   name: "Berry", 
    health: 5200,
    damage: 1320,
    super: 3040,
    rank: "B",
    winR: 45.9,
    price: 20.99,
    quantity: 2,
    Image: `Berry.webp`
},
{   name: "Surge",
    health: 6600,
    damage: 2360,
    super: 2000,
    rank: "A",
    winR: 39,
    price: 25.99,
    quantity: 7,
    Image: `Surge.webp`},

{   name: "Barley",  
    health: 5400,
    damage: 1600,
    super: 4000,
    rank: "C",
    winR: 49.6,
    price: 16.99,
    quantity: 14,
    Image: `Barley.webp`},

{   name: "Bibi",
    health: 10000,
    damage: 2800,
    super: 1800,
    rank: "B",
    winR: 35.7,
    price: 20.99,
    quantity: 9,
    Image: `Bibi.webp`},

{   name: "Gigi", 
    health: 8200,
    damage: 1000,
    super: 2600,
    rank: "B",
    winR: 55.2,
    price: 20.99,
    quantity: 8,
    Image: `Gigi.webp`},

{   name: "Eve",
    health: 6200,
    damage: 1280,
    super: 1600,
    rank: "B",
    winR: 58.9,
    price: 20.99,
    quantity: 5,
    Image: `Eve.webp` },

{   name: "Buzz",
    health: 10000,
    damage: 4200,
    super: 1.5,
    rank: "B",
    winR: 40.1,
    price: 20.99,
    quantity: 1,
    Image: `Buzz.webp`},

{   name: "Jacky",
    health: 10400,
    damage: 2480,
    super: 0,
    rank: "C",
    winR: 48.6,
    price: 16.99,
    quantity: 2,
    Image: `Jacky.webp`},

{   name: "Leon", 
    health: 7200,
    damage: 3840,
    super: 0,
    rank: "A",
    winR: 38.5,
    price: 26.99,
    quantity: 3,
    Image: `Leon.webp`},

{   name: "Edgar",
    health: 7200,
    damage: 2160,
    super: 0,
    rank: "A",
    winR: 27.8,
    price: 25.99,
    quantity: 12,
    Image: `Edgar_Skin-Default.webp`}

]

function displayBrawlStars(list) {
     const container = document.querySelector(".container"); 
          container.innerHTML = "";
     list.forEach(inject);
     const filterbtns = document.querySelectorAll(".Filter")
     filterbtns.forEach(function(button, index){
        button.addEventListener("click", function(){
            addBrawler(list[index])
        })

     })
}
displayBrawlStars(BrawlStars)

function filterBrawlers(rank){
    if (rank === "Everything"){
        displayBrawlStars(BrawlStars);
}   else {
    const filtered  = BrawlStars.filter(function(Brawler){
        return Brawler.rank === rank;
    })
        displayBrawlStars(filtered);
}};


const filterbuttons = document.querySelectorAll(".filter");

filterbuttons.forEach(function(filterbutton){
    filterbutton.addEventListener("click", function(){
        const selectedRank = filterbutton.getAttribute("rank")
    filterBrawlers(selectedRank)
})
})

const resetbutton = document.querySelector(".filterreset")
resetbutton.addEventListener("click", function(){
    displayBrawlStars(BrawlStars);
})




let Cart = [];
const container = document.querySelector(".container")
const cartainer = document.querySelector(".cartainer")
const total = document.querySelector(".total")
function inject(BrawlStar){
    const container = document.querySelector(".container")
    container.insertAdjacentHTML("beforeend", `
    <div class="card">
        <h2 class="card-header">${BrawlStar.name}</h2>
        <img class ="img" src="/${BrawlStar.Image}" alt=""></img>
        <p class = "word-paragraph">Rank: ${BrawlStar.rank}</p>
        <button class = "cost">${BrawlStar.price}</button>
      </div>`
    );
}


function addtoCart(BrawlStars){
    cart.push(BrawlStars);
    displayCart();
}

function removefromCart(index){
    shoppingCart.splice(index,1);
    displayCart();
}

function displayCart(){
    cartContainer.innerHTML = "";
    let cartTotal = 0;
    shoppingCart.forEach(function(BrawlStars, index)){
        cartTotal = cartTotal + BrawlStars.cost;
        cartContainer.insertAdjacentHTML(
            "beforeend",
            `<div class = "cart-item"> 
            <p> ${BrawlStars.name} - $${BrawlStars.price}</p>
            <button class = "remove-btn">Remove</button>
            </div>`

        )
    }
}

const removeButtons = document.querySelector("filter-btn"){
    filterButtons.forEach(function(button)){
        button.addEventListener
    }
}