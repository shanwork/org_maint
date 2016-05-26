
      var playGround = document.getElementById('playground');
var circle1 = document.getElementById('circle1');
var startGame = null;
var clicks = 0;
playGround.addEventListener("click", stopGame);
circle1.addEventListener('mousedown', setMotion);
circle1.addEventListener('mousemove', dragMotion);
circle1.addEventListener('mouseup', stopMotion);
circle1.addEventListener('click', getPoint);
var dragMe = false;
var gameOn = false;
if (playGround != null)
{
    console.log(playground.style.display);
}
function setDimensions()
{
    console.log('test');
}
function setMotion()
{
    dragMe = true;
            
}
function dragMotion() {
    //alert('drag1');
    if (dragMe == true) {
        console.log(event.clientX);
        var counter = document.getElementById('counter');
        circle1.style.left = (event.clientX-50) + "px";
        circle1.style.top = event.clientY + "px";
        if (counter != null)
            counter.innerHTML = event.clientX;
    }
}
function stopMotion() {
    dragMe = false;
    gameOn = true;
    interval = document.getElementById("interval");

    var timeOut = 1500;
    if (interval != null)
        timeOut = parseInt(interval.value);
    while (gameOn == true)
        getRandom();
 //   startGame = window.setInterval(getRandom, timeOut);
}
function getRandom() {
    var X = parseInt(circle1.style.left.replace("px", ""));
    var Y = parseInt(circle1.style.top.replace("px", ""));
    var deltaX = Math.floor(Math.random() * window.innerWidth);
    var deltaY = Math.floor(Math.random() * window.innerHeight);
    while (X != deltaX || Y != deltaY) {
        if (X <  deltaX) X++;
        else if(X >   deltaX) X-- ;
        if (Y <  deltaY) Y++;
        else if (Y > deltaY) Y--;
        //circle1.style.left = X + "px";
        //circle1.style.top = Y + "px";
       startGame = window.setInterval(function () {
            circle1.style.left = X + "px";
            circle1.style.top = Y + "px";
        }, 500);
    }
}
function getRandom2()
{
    var X = parseInt(circle1.style.left.replace("px", ""));
    var Y = parseInt(circle1.style.top.replace("px", ""));
    var deltaX = Math.floor(Math.random() * window.innerWidth);
    var deltaY = Math.floor(Math.random() * window.innerHeight);
    if (X <= deltaX) X++;
    else X--;
    if (Y <= deltaY) Y++;
    else Y--;
    circle1.style.left =  X + "px";
    circle1.style.top = Y + "px";
    return;
    while (currentX != X || currentY != Y)
    {
        if (currentX < X)
        {
            currentX++;
        }
        else if (currentX > X) {
            currentX--;
        }
        if (currentY < Y) {
            currentY++;
        }
        else if (currentY > X) {
            currentY--;
        }
                 
        window.setTimeout(function () {
            circle1.style.left = currentX + "px";
            circle1.style.top = currentY + "px";
        }, 20000);
    }
    //    circle1.style.left =  X + "px";
    //    circle1.style.top = Y + "px";
    return;
    var XDir = 0, YDir = 0;
    if (X > circle1.style.left)
        XDir = 1;
    if (XDir < circle1.style.left)
        XDir = -1;
    if (Y > circle1.style.top)
        YDir = 1;
    if (YDir < circle1.style.top)
        YDir = -1;
    var currentX = parseInt(circle1.style.left.replace("px", ""));
    var currentY = parseInt(circle1.style.top.replace("px", ""));
    if (XDir == 1 && YDir == 1)
    {
                  
        while (currentX <= X || currentY <= Y)
        {
            if(currentX < X)
                currentX++;
            if(currentY < Y)
                currentY++;
            circle1.style.left  = currentX + "px";
            circle1.style.top = currentY + "px";
        }
    }
    else if (XDir == -1 && YDir == -1)
    {
                  
        while (currentX >= X || currentY >= Y)
        {
            if(currentX > X)
                currentX--;
            if(currentY > Y)
                currentY--;
            circle1.style.left  = currentX + "px";
            circle1.style.top = currentY + "px";
        }
                 
    }
    else if (XDir == 1 && YDir == -1)
    {
                  
        while (currentX <= X || currentY >= Y)
        {
            if(currentX < X)
                currentX++;
            if(currentY > Y)
                currentY--;
            circle1.style.left  = currentX + "px";
            circle1.style.top = currentY + "px";
        }
                
    }
    else if (XDir == -1 && YDir == 1) {

        while (currentX >= X || currentY <= Y) {
            if (currentX > X)
                currentX--;
            if (currentY < Y)
                currentY++;
            circle1.style.left = currentX + "px";
            circle1.style.top = currentY + "px";
        }
    }
                  
}
function stopGame()
{
    window.clearInterval(startGame);
    gameOn = false;
}
function getPoint()
{
    if (gameOn==true)
    {
        clicks++;
        var counter = document.getElementById('counter');
        counter.innerHTML = "clicked!! " + clicks;
    }
}