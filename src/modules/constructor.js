const constructors = () => {
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
    
    };

    export default constructors;