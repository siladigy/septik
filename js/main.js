// popup-call

(() => {
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
})();

//popup-check
(() => {
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
})();

//sentence
(() => {
const  addSentence = document.querySelector('.add-sentence-btn'),
       sentenceBlock = document.querySelectorAll('.sentence-block');

addSentence.addEventListener('click', () => {
    sentenceBlock.forEach((elem) => {

            elem.classList.remove('hidden');
            elem.classList.remove('visible-sm-block');
            addSentence.style.display = "none";
        
    });
});
})();

//popup-discount

(() => {
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
})();


//questions

(() => {
const question = document.querySelector('.questions'),
      panelHeading = question.querySelectorAll('.panel-heading'),
      panelCollapse = question.querySelectorAll('.panel-collapse'),
      links = question.querySelectorAll('a');

      links.forEach((elem) => {
        elem.href = "#!";
      });

for (let i = 0; i<panelHeading.length; i++){
    panelHeading[i].addEventListener('click', () => {
        panelCollapse.forEach((elem) => {
            elem.classList.remove('in');
        });
        panelCollapse[i].classList.add('in');
    });
}
})();


//constructor

(() => {
const constructor = document.querySelector('.constructor'),
      panelHeading = constructor.querySelectorAll('.panel-heading'),
      panelCollapse = constructor.querySelectorAll('.panel-collapse'),
      constructBtn = constructor.querySelectorAll('.construct-btn'),
      links = constructor.querySelectorAll('a');

      links.forEach((elem) => {
        elem.href = "#!";
      });

      for (let i = 0; i<panelHeading.length; i++){
        panelHeading[i].addEventListener('click', () => {
            panelCollapse.forEach((elem) => {
                elem.classList.remove('in');
            });
            panelCollapse[i].classList.add('in');
        });
        constructBtn[i].addEventListener('click', () => {
            panelCollapse.forEach((elem) => {
                elem.classList.remove('in');
            });
            if(i !== 3){
                panelCollapse[i+1].classList.add('in');
            }
        });
    }

})();

