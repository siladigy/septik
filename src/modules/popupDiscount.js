const discount = () => {
    const popupDiscount = document.querySelector('.popup-discount'),
          discountBtn = document.querySelectorAll('.discount-btn');
    
    discountBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            popupDiscount.style.display = "block";
        });
    });
    
    popupDiscount.addEventListener('click', (event) => {
        let target = event.target;
    
        if(target.classList.contains('popup-close') || target.classList.contains('popup')){
            popupDiscount.style.display = "none";
        }
    });
    };

    export default discount;