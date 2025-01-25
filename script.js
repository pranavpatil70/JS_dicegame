array = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

randomimg = Math.floor(Math.random() * 6);
randomimg2 = Math.floor(Math.random() * 6)

document.getElementsByClassName("img1")[0].setAttribute("src", "images/" + array[randomimg]);
document.getElementsByClassName("img2")[0].setAttribute("src", "images/" +array[randomimg2]);

if (randomimg > randomimg2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!"
}
else if(randomimg < randomimg2){
    document.querySelector("h1").innerHTML = "Player 2 wins!"
}
else{
    document.querySelector("h1").innerHTML = "This is a tie!"
}