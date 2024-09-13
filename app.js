
let timeout;


// Function to run myfunc after a delay
function runAfterDelay() {
  timeout = setTimeout(myfunc, 2500); // Set a timer,adjust as needed)
}

// Function  reset timer
function resetTimer() {
  clearInterval(timeout); // Clear any previous timers
  runAfterDelay(); // Start a new timer
}

// Run myfunc 
runAfterDelay();

function myfunc() {
 
    let newImg = document.getElementById("img");

    document.getElementById("demo").innerHTML = "YOU NEVER WALK ALONE";
    demo.style.color = "red";

    newImg.src = "loose.png";
    if (newImg && newImg.style) {
      newImg.style.height = "600px";
      newImg.style.width = "500px";
    }

    let timePerLetter = 10,
      text = document.createTextNode("");

    document.getElementById("test").appendChild(text);
    document.getElementById("test").style.color = "red";
    document.body.style.backgroundColor = "white";

    function printOut(str) {
      var i = 0;
      (function main() {
        var char = str[i++];
        text.nodeValue += char;
        if (i < str.length) setTimeout(main, timePerLetter);
        else
          setTimeout(function () {
            text.nodeValue = ""; 
            location.reload(); 
          }, 400);
      })();
    }

    printOut(" You'll Never Walk Alone,You'll Never, You'll Never Walk Alone ,You'll Never NEVER walk alone.  You ll Never Walk Alone, is a show tune from the  Rodgers and Hammerstein musical Carousel. In the second act  the musical, Nettie Fowler the cousin  the protagonist Julie Jordan, sings You ll Never Walk Alone to comfort and encourage Julie when her husband, Billy Bigelow, the male lead, stabs himself  a knife whilst trying to run away after attempting a robbery wi his mate Jigger and dies in her arms. The song is reprised in the final scene to encourage a graduation cl which Louise (Billy and Julie s daughter is a member. The now invisible Billy, who has been granted the chance to returnere to Earth fordi one day tree order to redeem himself watches the ceremony and is able to silently   ");

}

// Ask user before leaving the page
window.onbeforeunload = function () {
 return "hi"
};

