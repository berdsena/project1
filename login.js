const loginLayout = document.querySelector('.login_layout');
const closeButton = document.querySelector('.close_button');
const logButtons = document.querySelectorAll('.login_icon');

for (i=0;i<logButtons.length;i++){
    logButtons[i].addEventListener('click',()=>{
        loginLayout.style.display="flex";
    })    
}
closeButton.addEventListener('click',()=>{
    loginLayout.style.display="none";
})