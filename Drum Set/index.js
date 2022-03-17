//window.alert("Hello");
//document.querySelector("button").addEventListener ("click", handleClick);
//document.querySelector("button").addEventListener("click",function() {alert("I just got clicked")});  (Anonynums function use)
//sets up a function to be called whenever the specified event is delivered to the target.
// the first parameter - type("case sensitive string").
// the second parameter is the listener - js function is called when the event is detected.
// if you add the paranthesis in the eventlistener it is immedietly called. 

var but_length= document.querySelectorAll("button").length;
for(var p = 0; p < but_length; p++)
{
    document.querySelectorAll(".drum")[p].addEventListener("click", function() {
        var buttonHTML = this.innerHTML;
        makeSound(buttonHTML);
        });
    document.addEventListener("keypress",function(event){
        makeSound(event.key);
    });
}



function makeSound(key)
    {
    switch (key) {
        case "w":
            var w_audio = new Audio("./sounds/crash.mp3");
            w_audio.play();
            break;
        case "a":
            var a_audio = new Audio("./sounds/kick-bass.mp3");
            a_audio.play();
            break;
        case "s":
            var s_audio = new Audio("./sounds/snare.mp3");
            s_audio.play();
            break;
        case "d":
            var d_audio = new Audio("./sounds/tom-1.mp3");
            d_audio.play();
            break;
        case "j":
            var j_audio = new Audio("./sounds/tom-2.mp3");
            j_audio.play();
            break;
        case "k":
            var k_audio = new Audio("./sounds/tom-3.mp3");
            k_audio.play();
            break;
        case "l":
            var l_audio = new Audio("./sounds/tom-4.mp3");
            l_audio.play();
            break;
        default:
            console.log("Problem");
    }

}


/*

});
*/