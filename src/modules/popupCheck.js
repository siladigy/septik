const check = () => {
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
    };

    export default check;