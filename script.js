const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")

})

function bringToFront(element){
    let container = document.querySelectorAll('.image-container');
    container.forEach((container) =>{
        container.computedStyleMap.zIndex =1;
    });
    element.parentElement.style.zIndex =2;
    element.parentElement.style.zIndex =3;
}

const buttonsComponent =document.querySelector('.buttons');
const buttonsToggle = document.querySelector('.buttons__toggle');

buttonsToggle.addEventListener('click, toggleButtons');

function toggleButtons(){
    buttonsToggle.classList.toggle('buttons__toggle--active');
    buttonsComponent.classList.toggle('buttons--active');
    document.activeElement.getBoundingClientRect();
}