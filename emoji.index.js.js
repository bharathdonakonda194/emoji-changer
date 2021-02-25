const closedface = document.querySelector
(".closed");

const openface = document.querySelector
(".open");


closedface.addEventListener("click",function emojichanger1(){

    if(openface.classList.contains('open')){
        openface.classList.add('active');
        closedface.classList.remove('active');
    }
}) 

openface.addEventListener("click",function emojichanger2(){

    if(closedface.classList.contains('closed')){
        closedface.classList.add('active');
        openface.classList.remove('active')
    }
})

