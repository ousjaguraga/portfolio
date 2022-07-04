const sections = document.querySelectorAll('.section');
const btnGParents = document.querySelectorAll('.btn-gparent');
const btnParent = document.querySelectorAll('.btn-parent');
const allSections = document.querySelector('.main-content');


function pageTransition() {
    // Btn clicked active class
    for (let i = 0; i < btnParent.length; i++) {
       
        btnParent[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            
            currentBtn[0].classList.remove('active-btn');
            this.classList.add('active-btn');    
        })
    }
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id){
            btnParent.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');
            // hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}


pageTransition()
