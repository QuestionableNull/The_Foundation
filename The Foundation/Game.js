//Adding Game function
function addingGame(){
    // Declares the variables for the Player and the page
    //Creates a random number between 1 and 6
    var num = Math.floor(Math.random() * 6) + 1;
    //The Player needs to guess the correct number to add up to 10
    //This code opens a prompt on the web page
    var usernum = parseInt(prompt("Try and get the correct number to add to 10"));
    //This will add the two numbers together
    var sum = num + usernum;

    //Checks if the sum of the two numbers equal 10
    if (sum == 10){
        //Sends an alert to the user showing what the page had chosen as its number and what the user had chosen
        //And it tells the user the sum of the two numbers, then tells them if they have won the game
        alert("The page entered: " + num + ". \n You entered: " + usernum + ". \n The sum was: " + sum + ". \nYou Win!");

    } else {
        //Sends an alert to the user showing what the page had chosen as its number and what the user had chosen
        //And it tells the user the sum of the two numbers, then tells them if they have won the game
        alert("The page entered: " + num + ". \n You entered: " + usernum + ". \n The sum was: " + sum + ". \nYou Lose.");
    }
}

//Twenty-One game function
function twentyOne(){
    //Declares the Dealers variable and the Player variable
    //Chooses a random number between 1 and 11
    var dealer = Math.floor(Math.random() * 11) + 1;
    var player = Math.floor(Math.random() * 11) + 1;

    //Starts a while loop and checks if the Player and Dealer are under 21
    while (player < 21 || dealer < 21){
        //Alerts the Player on what number they are currently at, and tells the user what the Dealer is currently at
        alert("You currently have: " + player + ".\nDealer currently has " + dealer + ".");
        //Asks the Player if they want another card
        var hit = prompt("Get another card? (y/n)");
        //Gets another card ready for the Player by choosing a random value
        var card = Math.floor(Math.random() * 11) + 1;
        //Gets another card ready for the Dealer
        var dealerCard = Math.floor(Math.random() * 11) + 1;
        var dealerBust = dealer + dealerCard;
        console.log("Dealer: " + dealer + ", DealerBust: " + dealerBust + ", DealerCard: " + dealerCard + ", Player: " + player + ", PlayerCard: " + card);

        //If the Player decides to get another card it will add the value of the card to the Players current card value
        //And it does the same thing for the Dealer
        if (hit == "y"){
            //Adds the value of the cards to the Dealer and the Player
            if (dealerBust > 21){
                player += card;
                alert("You drew: " + card + ".\nYou are currently at: " + player + ". \nThe Dealer didn't draw.\nDealer is at: " + dealer + ".");

            } else if (dealerBust <= 21){
                dealer += dealerCard;
                player += card;
                //This will tell the Player what they are at and what the Dealer is at, and it will show them what they drew as well as what the Dealer drew
                alert("You drew: " + card + ".\nYou are currently at: " + player + ". \nThe Dealer drew: " + dealerCard + ".\nDealer is at: " + dealer + ".");
            }
            console.log("Dealer: " + dealer + ", DealerBust: " + dealerBust + ", DealerCard: " + dealerCard + ", Player: " + player + ", PlayerCard: " + card);
        
        //If the Player decides not to get another card it will exit the while loop and give the dealer another card
        } else if (hit == "n"){
            if (dealerBust > 21){
                break;

            } else {
                dealer += dealerCard;
                alert("You have: " + player + ". \nThe Dealer drew one more card: " + dealerCard + ". \nThe Dealer now has: " + dealer + ".")
                break;
            }
            console.log("Dealer: " + dealer + ", DealerBust: " + dealerBust + ", DealerCard: " + dealerCard + ", Player: " + player + ", PlayerCard: " + card);
        }

        //This will check if the Player is at or above 21 and if they are it will exit the while loop
        if (player >= 21){
            break;

        //This will check if the Dealer is at or above 21 and it will exit the while loop if they are
        } else if (dealer >= 21){
            break;
        }
    }

    //This will check to see if the Player is equal to 21
    if (player == 21){
        //If the Player is equal to 21 they will win and it will tell them what the Dealer is at
        alert("You win! \nA perfect 21! \nThe Dealer had " + dealer + ".");

    //Checks to see if the Dealer went above 21 and if they did then tells them their value and the Dealers value
    } else if ( dealer > 21){
        alert("You win! \nThe Dealer Bust! \nThe Dealer had " + dealer + ". \nYou had " + player + ".");

    //Checks to see if the Player went above 21 and if they did then tells them their value and the Dealers value
    } else if (player > 21 ){
        alert("You lose! \nYou Bust! \nThe Dealer had " + dealer + ". \nYou had " + player + ".");

    } else if (dealer == 21){
        //If the Dealer is equal to 21 they will win and it will tell them what the Player is at
        alert("You lose! \nThe dealer had a perfect 21! \nYou had " + player + ".");

    } else if (player > dealer){
        alert("You win! \nYou had more than the Dealer. \nThe Dealer had " + dealer + ". \nYou had " + player + ".")

    } else if (player == dealer){
        alert("You lose! \nYou had " + player + ".\nDealer had " + dealer + ".")

    //Tells the Player they lose if they decide not to continue playing or if they had a number equal to the Dealer or if the and the Player bust
    } else {
        alert("You lose! \nYou had " + player + ".\nDealer had " + dealer + ".");
    }
}

//Choose function
function choose(){
    //Asks the user what game they want to play
    var chooseGame = parseInt(prompt("Choose the game you want to play (1 or 2): \n    1. Adding Game \n    2. Twenty-One"));

    //If the user enters 1 then they play the adding game
    if (chooseGame == 1){
        //addingGame();
        twentyOne();

    //If the user enters 2 then they will play Twenty-One
    } else if (chooseGame == 2){
        twentyOne();
    }
}