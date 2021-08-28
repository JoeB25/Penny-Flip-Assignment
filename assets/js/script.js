//Track variables
let headRolls = 0
let tailRolls = 0

//Add event listener to load HTML and resources
document.addEventListener('DOMContentLoaded', function () {

    //Add event listenr for buttons
document.getElementById('flip').addEventListener('click', () => {

    //Use Math.random() to return a value between 0 and 1
//There's a 50% chance
let flippedHeads = Math.random() < 0.5

//Use else if to determine actions for flipped heads or tails
if (flippedHeads){
//Display appropriate image for heads flipped
    document.getElementById('penny-image').src = "assets/images/penny-heads.jpg"
    document.getElementById('message').textContent = 'You Flipped Heads!'

    //Add one to heads flip count
    headRolls += 1
}

//Use else to determine second condition if first condition is not met
else {
//Display appropriate image for tails flipped   
    document.getElementById('penny-image').src = "assets/images/penny-tails.jpg"
    document.getElementById('message').textContent = 'You Flipped Tails!'

    //Add one to tails flip count    
    tailRolls += 1
}

//Add up total number of rolls
let total = headRolls + tailRolls

//Track percentage of heads and tails flipped
let percentHeads = 0
let percentTails = 0

//Make sure not to divide by 0      
    if (total > 0) {
//Calculate percent heads vs tails
    percentHeads = Math.round((headRolls / total) * 100)
    percentTails = Math.round((tailRolls / total) * 100)

}

//Update scoreboard display
    document.getElementById('heads').textContent = headRolls
    document.getElementById('heads-percent').textContent = percentHeads + '%'
    document.getElementById('tails').textContent = tailRolls
    document.getElementById('tails-percent').textContent = percentTails + '%'
})

    document.getElementById('clear').addEventListener('click', function (){

        
//Clear scoreboard to start over    
    headRolls = 0
    tailRolls = 0

//Display message to user
    document.getElementById('message').textContent = "Let's Get Flipping!"

//Add up total number of rolls
    let total = headRolls + tailRolls

//Track percentage of heads and tails flipped
    let percentHeads = 0
    let percentTails = 0 

//Make sure not to divide by 0   
    if (total > 0) {

//Calculate percent heads vs tails       
        percentHeads = Math.round((headRolls / total) * 100)
        percentTails = Math.round((tailRolls / total) * 100)
    }

//Update scoreboard display
        document.getElementById('heads').textContent = headRolls
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailRolls
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })
})


