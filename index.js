
var arr = ['sounds/crash.mp3',
        'sounds/kick-bass.mp3',
        'sounds/snare.mp3',
        'sounds/tom-1.mp3',
        'sounds/tom-2.mp3',
        'sounds/tom-3.mp3',
        'sounds/tom-4.mp3'];

var audio = new Audio(arr[i]);
            
    //detecting button press
    
for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

}

    //detecting keyboard press

document.addEventListener("keypress",function(e){
    makeSound(e.key);
    buttonAnimation(e.key);
});

function makeSound(key){
    switch (key) {
        case 'w':
            var audio = new Audio(arr[0]);
            audio.play();
            break;
        case 'a':
            var audio = new Audio(arr[1]);
            audio.play();
            break;
        case 's':
            var audio = new Audio(arr[2]);
            audio.play();
            break;
        case 'd':
            var audio = new Audio(arr[3]);
            audio.play();
            break;
        case 'j':
            var audio = new Audio(arr[4]);
            audio.play();
            break;
        case 'k':
            var audio = new Audio(arr[5]);
            audio.play();
            break;
        case 'l':
            var audio = new Audio(arr[6]);
            audio.play();
            break;
    
        default:
            break;
    }
};

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },400 );
}