const consultation = () => {

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
    
    };

    export default consultation;