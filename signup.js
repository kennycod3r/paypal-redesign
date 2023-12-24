let card1 = document.getElementById("form-card-one");
let card2 = document.getElementById("form-card-two");
let card3 = document.getElementById("form-card-three");
let stepText = document.getElementById("stepText");

let form = document.getElementById("form");
let cardList = [card1, card2, card3];
let currentNum = 0;
let currentCard = cardList[currentNum];

form.addEventListener("click", (event) => {

    event.target.matches("[previousBtn]") ? loadPrevCard() : event.target.matches("[nextBtn]") ?
    loadNextCard(): console.log(event.target)


    stepText.innerHTML = `this is step ${currentNum + 1}`
    
})




function loadNextCard(){
    if(!isValid){
        return
    }
    currentNum += 1;
    currentCard = cardList[currentNum];

    //set page back to currentcard[0] when it gets beyond

   if(currentCard == undefined || currentNum > 2){
    currentNum = 0
    currentCard = cardList[currentNum];
   }

    console.log(currentCard);

    // for the next function

    cardList.forEach((card) =>{
        if(card == currentCard){
            return card.classList.add("active")
        }
        else{
            card.classList.remove("active")
        }
    })
}


function loadPrevCard(){
    //current card will always be on one. for you to see this prev btn
    //user must have already clicked the next Btn setting currentCard = 1! so
    currentNum -=1;
    currentCard = cardList[currentNum];

    cardList.forEach((card) =>{

        card == currentCard ? card.classList.add("active"):  card.classList.remove("active")
    })

    console.log(currentCard)
}


