//create a list that holds all the cards
let icons=["fa fa-diamond",
"fa fa-plane",
"fa fa-anchor",
"fa fa-bolt",
"fa fa-diamond",
"fa fa-leaf",
"fa fa-bicycle",
"fa fa-bomb",
"fa fa-plane",
"fa fa-bomb",
"fa fa-anchor",
"fa fa-cube",
"fa fa-bolt",
"fa fa-bicycle",
"fa fa-leaf",
"fa fa-cube"];
//select the cards container
const cardsContainer=document.querySelector(".allCards");
//array of opened cards and matched cards
let openedCards=[];
let matchedCards=[];


//function for shuffling of cards
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};



//initialize the game
function initialize(){
    shuffle(icons);
   for (let i=0; i<icons.length; i++){
   
        const card=document.createElement("li");
        card.classList.add("card");
        card.innerHTML=`<i class= "${icons[i]}"></i>`;
        cardsContainer.appendChild(card);

        //shuffle(icons);
        //card click event
        whenClicked(card);
        
        
    } 

}


//what happens when cards are clicked
function whenClicked(card){ 
        
    card.addEventListener("click", function(){
       
 
        if (openedCards.length===1){
            
             
            const currentCard=this;
            const previousCard=openedCards[0];

            
            card.classList.add("open", "show", "disable");
            openedCards.push(this);

            compare(currentCard,previousCard);

            
        }else{
            card.classList.add("open", "show", "disable");
            openedCards.push(this);
        }
    }

    );

}

//compare card1 and card2
function compare(currentCard,previousCard){
   
if (currentCard.innerHTML===previousCard.innerHTML){
                
                
                currentCard.classList.add("match");
                previousCard.classList.add("match");

                matchedCards.push(currentCard,previousCard);

                openedCards=[];

                gameWin();

            }else{

                    currentCard.classList.add("unmatch");
                    previousCard.classList.add("unmatch");

                    //setTime function to delay the action to be done
                setTimeout(function(){
                    currentCard.classList.remove("open", "show", "disable","unmatch");
                    previousCard.classList.remove("open", "show", "disable","unmatch");


                
                }, 400);
                openedCards=[];


            }

            countMoves();
           
           

}



// what happens when all cards are match
function gameWin(){

     if(matchedCards.length===icons.length){
   setTimeout(function(){
                   
         for (i=0; i<timer.length; i++){
            var finalTime= timer[i].innerHTML;
        }

         document.getElementById("totalTime").innerHTML = finalTime;
           for (i=0; i<starsContainer.length; i++){

            var starRatings=starsContainer[i].innerHTML;
        }

        document.getElementById("starRating").innerHTML = starRatings;
        for (i=0; i<movesContainer.length; i++){
        movesContainer[i].innerHTML= moves;
        }   

        document.getElementById("finalMove").innerHTML = moves;
        clearInterval(interval);
        final.classList.remove("removed");

     
   
                }, 700);
    }
}



const movesContainer= document.querySelectorAll(".moves");
let moves=0; 
    //moves counter
function countMoves(){
    moves++;
for (i=0; i<movesContainer.length; i++){
    movesContainer[i].innerHTML=moves;
}
  starRating();
  
    
}


   // var timer = document.querySelectorAll(".timer");
    


let second = 0, minute = 0; hour = 0;
var timer = document.querySelectorAll(".timer");
var interval;
function startTimer(){

    interval = setInterval(function(){
        for (var i=0; i<timer.length; i++){

        timer[i].innerHTML = minute+" mins "+second+" secs";
}


        
        second++;
        if(second == 60){
            minute++;
            second=0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}



    


const starsContainer= document.querySelectorAll(".stars");

//rating of the stars
function starRating(){
   
    for (let i=0; i<starsContainer.length; i++){

        
    


     if (moves>= 0 && moves<=13){
            starsContainer[i].innerHTML=
            `<li><i class="fa fa-star"></i></li>
            <li><i class="fa fa-star"></i></li>
            <li><i class="fa fa-star"></i></li>`;

        }
        
        else if       (moves>13 && moves <= 18){
                        starsContainer[i].innerHTML=
                        `<li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>`;
    }
        else if (moves>18 && moves <= 25){
                        starsContainer[i].innerHTML=
                        `<li><i class="fa fa-star"></i></li>`;
        }else {
                        starsContainer[i].innerHTML="";
        }
}
if (moves===1 ){
            
            startTimer();
        }
   
}


 
       

const final=document.querySelector(".final");
const close=document.querySelector(".close");
const again =document.querySelector("#now");
close.addEventListener("click", function(){
    final.classList.add("removed");
});
again.addEventListener("click", function(){
    final.classList.add("removed");
     cardsContainer.innerHTML= "";
    initialize();
    matchedCards=[];
    moves=0;
    second=0;
    minute=0;
    hour=0;
    for (i=0; i<timer.length; i++){
        var finalTime= timer[i].innerHTML;
    timer[i].innerHTML="0 mins 0 secs";
    clearInterval(interval);
}
   for (i=0; i<movesContainer.length; i++){
        movesContainer[i].innerHTML=moves;
   }  
   for (i=0; i<starsContainer.length; i++){

        starsContainer[i].innerHTML=
        `<li><i class="fa fa-star"></i></li>
        <li><i class="fa fa-star"></i></li>
        <li><i class="fa fa-star"></i></li>`;
    }
});



//restart
const restartButton = document.querySelectorAll(".restart");
for (let i=0; i<restartButton.length; i++){
   restartButton[i].addEventListener("click", function(){
    cardsContainer.innerHTML= "";
    initialize();
    openedCards=[];
    matchedCards=[];
    moves=0;
   
   for (i=0; i<movesContainer.length; i++){
        movesContainer[i].innerHTML=moves;
   }
    
    second=0;
    minute=0;
    hour=0;
    for (i=0; i<timer.length; i++){
    timer[i].innerHTML="0 mins 0 secs";
    clearInterval(interval);
}

    for (i=0; i<starsContainer.length; i++){

        starsContainer[i].innerHTML=
        `<li><i class="fa fa-star"></i></li>
        <li><i class="fa fa-star"></i></li>
        <li><i class="fa fa-star"></i></li>`;
    }
}); 

}


initialize();
