const questions = () => {
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
    };

    export default questions;