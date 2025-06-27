const myBox = document.getElementById('myBox');
const moveAmount = 100;
let x = 0;
let y = 0;

myBox.addEventListener("click",event => {
    event.target.style.backgroundColor = 'tomato';
    event.target.textContent = "Ouch!🤕";
    event.target.style.color = 'white';
});

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = 'yellow';
    event.target.textContent = "Warning!⚠️";
    event.target.style.color = 'black';
});

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = 'lightpink';
    event.target.textContent = "Click Me!👆🏻";
    event.target.style.color = 'black';
});

document.addEventListener("keyup", event => {
    myBox.textContent = "😃";
     myBox.style.backgroundColor = 'lightblue';
});

document.addEventListener("keydown", event => {
    myBox.textContent = "🫨";
    myBox.style.backgroundColor = 'lightpink';

});

document.addEventListener("keydown", event => 
    {
    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});