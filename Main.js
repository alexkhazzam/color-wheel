const lastColor = []; 

const computerScreen = document.querySelector("html");
computerScreen.addEventListener("click", () => 
{
    let randomColor = "#"+(Math.random()*0xFFFFFF<<0).toString(16); 
    
    const body = document.querySelector("body");
    body.style.backgroundColor = randomColor;

    const h3 = document.querySelector("h3");
    h3.textContent = "";

    const h1 = document.querySelector("h1");
    let hexEquivalent = "Hexadecimal equivalent: " + randomColor;
    h1.textContent = hexEquivalent;

    const h4 = document.querySelector("h4");
    h4.style.color = "black";
    
    lastColor.push(randomColor);

    console.log(randomColor);
});

const previousColor = document.querySelector("html");
previousColor.addEventListener("keydown", () => 
{
    const initialColor = (lastColor[lastColor.length - 2]); 
    const body = document.querySelector("body");
    body.style.backgroundColor = (initialColor.toString());
})



