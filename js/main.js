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
            if(i !== 3){
            panelCollapse.forEach((elem) => {
                elem.classList.remove('in');
            });
                panelCollapse[i+1].classList.add('in');
            }
        });
    }

})();

// form

(() => {

    const phoneInput = document.querySelectorAll('.phone-user');

    phoneInput.forEach((elem) => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/[^+0-9]+/gi, "");
          });  
    });

    const sendForm = () => {
  
        const errorMessage = 'что то пошло не так..',
              loadMessage = 'идет отправка..',
              successMessage = 'спасибо! мы скоро с вами свяжемся';
      
          const form = document.querySelectorAll('form');
      
          const statusMessage = document.createElement('div');
          
          const submitForm = () => {
            form.forEach((elem) => {
            elem.addEventListener('submit', (event) => {
                event.preventDefault();
            elem.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
                const formData = new FormData(elem);
                let body = {};
          
                for (let val of formData.entries()){
                  body[val[0]] = val[1];
                }
                postData(body)
                  .then((response) => {
                    if(response.status !== 200) {
                      throw new Error('status network not 200');
                    }
                    statusMessage.textContent = successMessage;
                    elem.reset();
                })
                  .catch((error) => {
                    statusMessage.textContent = errorMessage;
                    console.log(error);
                });
              });
        });
        };
      
        submitForm();
      
      
          const postData = (body) => {
            return fetch('./server.php', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(body)
            }); 
          };
        };
        sendForm();
})();