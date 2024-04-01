const inputSubscribe = document.querySelector(".subscribe__input");
const labelSubscribe = document.querySelector(".subscribe__label");

inputSubscribe.addEventListener('input', ()=>{
    if(inputSubscribe.value.trim() !== "") {
        labelSubscribe.classList.add("subscribe__label_top");
    } else {
        labelSubscribe.classList.remove("subscribe__label_top");
    }
});