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
              if(!elem.classList.contains('consultation-form') && !elem.classList.contains('discount-form')){
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
              }
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

// popup-consultation

(() => {

    const btn = document.querySelector('.director-btn'),
          popupConsultation = document.querySelector('.popup-consultation'),
          form = document.querySelector('.consultation-form'),
          question = document.querySelector('.question-form');
    
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        popupConsultation.style.display = "block";
    });
    
    popupConsultation.addEventListener('click', (event) => {
        let target = event.target;
    
        if(target.classList.contains('popup-close') || target.classList.contains('popup')){
            popupConsultation.style.display = "none";
        }
    });
    
    const sendForm = () => {
      
        const errorMessage = 'что то пошло не так..',
              loadMessage = 'идет отправка..',
              successMessage = 'спасибо! мы скоро с вами свяжемся',
              statusMessage = document.createElement('div');
    
        const submitForm = () => {
                form.addEventListener('submit', (event) => {
                    const questionForm = {
                        question : document.querySelector('.question-form').value,
                        name : document.getElementById('name_13').value,
                        phone : document.getElementById('phone_13').value
                    };
                    const jsonQuest = JSON.stringify(questionForm);
    
                    event.preventDefault();
                    form.appendChild(statusMessage);
                    statusMessage.textContent = loadMessage;
                    const formData = new FormData();
                    let body = jsonQuest;
              
                    for (let val of formData.entries()){
                      body[val[0]] = val[1];
                    }
                    postData(body)
                      .then((response) => {
                        if(response.status !== 200) {
                          throw new Error('status network not 200');
                        }
                        statusMessage.textContent = successMessage;
                        form.reset();
                        question.value = "";
                    })
                      .catch((error) => {
                        statusMessage.textContent = errorMessage;
                        console.log(error);
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



//calculator

(() => {

  const constructor = document.querySelector('.constructor'),
        checkbox = constructor.querySelectorAll('.onoffswitch-checkbox'),
        secondWell = constructor.querySelector('.second-well'),
        calcResult = document.getElementById('calc-result'),
        formControl = document.querySelectorAll('.form-control'),
        form = document.querySelector('.discount-form'),
        distance = constructor.querySelector('.distance');
  
    secondWell.style.display = "none";
    checkbox[1].checked = false;
  
    let result = 0;
  
  constructor.addEventListener('change', () => {
  
    if(checkbox[0].checked){
      secondWell.style.display = "none";
      result = 10000; 
      let options = document.querySelectorAll('.form-control-2 option');
        for (let i = 0, l = options.length; i < l; i++) {
        options[i].selected = options[i].defaultSelected;
      }
    } else {
      secondWell.style.display = "block";
      result = 15000;
    }
  
    formControl.forEach((elem) => {
      if(elem.value == 1) return;
      else result = result + (result * (+elem.value)); 
      });
  
    if(checkbox[0].checked){
      if(checkbox[1].checked) result += 1000;
      else result;
    } else {
      if(checkbox[1].checked) result += 2000;
      else result;
      }
  
    calcResult.value = result;
  });
  
  distance.addEventListener('input', () =>{
    distance.value = distance.value.replace(/[^+0-9]+/gi, "");
  });
  
  const popupDiscount = document.querySelector('.popup-discount'),
        btn = document.querySelector('.send-construct');
  
        btn.addEventListener('click', () => {
          popupDiscount.style.display = "block";
        });
        
        popupDiscount.addEventListener('click', (event) => {
            let target = event.target;
        
            if(target.classList.contains('popup-close') || target.classList.contains('popup')){
                popupDiscount.style.display = "none";
            }
        });
        
        const sendForm = () => {
    
          const errorMessage = 'что то пошло не так..',
                loadMessage = 'идет отправка..',
                successMessage = 'спасибо! мы скоро с вами свяжемся',
                statusMessage = document.createElement('div');
      
          const submitForm = () => {
                  form.addEventListener('submit', (event) => {
                      const calcForm = {
                          type : checkbox[0].value,
                          firstWellDiametr : formControl[0].options[formControl[0].selectedIndex].text,
                          firstWellCircle : formControl[1].options[formControl[1].selectedIndex].text,
                          secondWellDiametr : formControl[2].options[formControl[2].selectedIndex].text,
                          secondWellCircle : formControl[3].options[formControl[3].selectedIndex].text,
                          wellBottom : checkbox[1].value,
                          distance : distance.value,
                          result : calcResult.value,
                          name : document.getElementById('name_11').value,
                          phone: document.getElementById('phone_11').value
                      };
                      const jsonCalc = JSON.stringify(calcForm);
                      event.preventDefault();
                      form.appendChild(statusMessage);
                      statusMessage.textContent = loadMessage;
                      const formData = new FormData();
                      let body = jsonCalc;
                
                      for (let val of formData.entries()){
                        body[val[0]] = val[1];
                      }
                      postData(body)
                        .then((response) => {
                          if(response.status !== 200) {
                            throw new Error('status network not 200');
                          }
                          statusMessage.textContent = successMessage;
                          form.reset();
                      })
                        .catch((error) => {
                          statusMessage.textContent = errorMessage;
                          console.log(error);
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


