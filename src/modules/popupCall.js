const call = () => {
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
    };

    export default call;