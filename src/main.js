//////about////

const tabs= document.querySelectorAll('[data-target]'),
tabContents=document.querySelectorAll('[data-content]');

tabs.forEach((tab)=>{
    tab.addEventListener('click', ()=>{
        const target=document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent)=>{
        tabContent.classList.remove('active_tab');
    });
      target.classList.add('active_tab');

     tabs.forEach((tab)=>{
         tab.classList.remove('active_tab');
     });
     tab.classList.add('active_tab');

    });
});
newtab=document.getElementsByClassName("tab_btn");
console.log(newtab);


///////////////////////////contact form///////////////////////////////

const contactform=document.getElementById('contact-form'),
contactName=document.getElementById('contact-name'),
contactEmail=document.getElementById('contact-email'),
contactSubject=document.getElementById('contact-subject'),
contactMessage=document.getElementById('contact-message'),
errorMessage=document.getElementById('error-message')

const sendEmail= (e)=>{
    e.preventDefault();

    if(
        contactName.value ==='' ||
        contactEmail.value==='' ||
        contactMessage.value===''||
        contactSubject.value===''
    ){
        errorMessage.textContent='Fill all element fields';
    }
    else{
         emailjs.sendForm('service_iteofze',
         'template_vhxpxjw',
         '#contact-form',
         'nIUvqjIIHGnpVKe4m').then(()=>{
         errorMessage.classList.add('color-first');
         errorMessage.textContent='Message sent ✅';

         setTimeout(() => {
            errorMessage.textContent='';
         }, 5000);
         }, (error)=>{
            alert('OOPS! Something went wrong....', error);
         })

         contactName.value ='';
         contactEmail.value ='';
         contactSubject.value ='';
         contactMessage.value ='';

    }
};
contactform.addEventListener('submit',sendEmail);


//////////////////////////////////////////////////////////////

function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove( 'scroll-header');
}
    window. addEventListener('scroll', scrollHeader);
