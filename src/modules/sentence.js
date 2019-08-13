const sentence =() => {
    const  addSentence = document.querySelector('.add-sentence-btn'),
           sentenceBlock = document.querySelectorAll('.sentence-block');
    
    addSentence.addEventListener('click', () => {
        sentenceBlock.forEach((elem) => {
    
                elem.classList.remove('hidden');
                elem.classList.remove('visible-sm-block');
                addSentence.style.display = "none";
            
        });
    });
    };

    export default sentence;