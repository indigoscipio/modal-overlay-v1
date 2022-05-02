let modalBtn = document.querySelectorAll(".modal-button")
let overlayWindow = document.querySelector(".overlay-window")
let closeBtn =  document.querySelector(".close")


for(i=0; i < modalBtn.length; i++){
    modalBtn[i].addEventListener("click", function(){
    overlayWindow.style.display = "flex";
    console.log(this);
    });
}

//close through the X button
closeBtn.addEventListener("click", function(){
    overlayWindow.style.display = "none";
})

//close through the escape key
document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
        overlayWindow.style.display = "none";
        }
})

//close through clicking anywhere outside the modal box
document.addEventListener("click", function(e){
    if(e.target === overlayWindow){
        overlayWindow.style.display = "none"
    }
})