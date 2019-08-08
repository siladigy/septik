// popup-call

const popupCall = document.querySelector('.popup-call'),
      callBtn = document.querySelectorAll('.call-btn');

callBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
        popupCall.style.display = "block";
    });
});

popupCall.addEventListener('click', (event) => {
    let target = event.target;
    if(target.classList.contains('popup-close') || target.classList.contains('popup')){
        popupCall.style.display = "none";
    }
});

//popup-check

const popupCheck = document.querySelector('.popup-check'),
      checkBtn = document.querySelector('.check-btn');

checkBtn.addEventListener('click', () => {
    popupCheck.style.display = "block";
});

popupCheck.addEventListener('click', (event) => {
    let target = event.target;
    if(target.classList.contains('popup-close') || target.classList.contains('popup')){
        popupCheck.style.display = "none";
    }
});