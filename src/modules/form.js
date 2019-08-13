const forms = () => {
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
};

export default forms;