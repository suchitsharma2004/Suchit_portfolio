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