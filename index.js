var num=document.querySelectorAll(".drum").length;
for(var i=0;i<num;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var button=this.innerHTML;
        switch (button) {
            case "v":
                var audio=new Audio('sounds/crash.mp3');
        audio.play();  break;
        case "i":
                var audio=new Audio('sounds/kick-bass.mp3');
        audio.play();  break;
        case "k":
                var audio=new Audio('sounds/snare.mp3');
        audio.play();  break;
        case "I":
                var audio=new Audio('sounds/tom-1.mp3');
        audio.play();  break;
        case "n":
                var audio=new Audio('sounds/tom-2.mp3');
        audio.play();  break;
        case "g":
                var audio=new Audio('sounds/tom-3.mp3');
        audio.play();  break;
        case "s":
                var audio=new Audio('sounds/tom-4.mp3');
        audio.play();  break;
        
            default:
                alert("Beyond button")
                break;
        }
    });
}