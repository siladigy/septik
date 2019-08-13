const calculator = () => {

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
    };

    export default calculator;