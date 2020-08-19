const navSlide = () => {
    const burger = document.querySelector('.menu-btn');
    let menuOpen = false;

    const nav = document.querySelector('.nav-links');

    const scrollDisable = document.querySelector('body');

    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');

        if(!menuOpen){
            burger.classList.add('open');
            menuOpen = true;
        }else{
            burger.classList.remove('open');
            menuOpen = false;
        }

        scrollDisable.classList.toggle('scroll-disable');
    });
}
navSlide();

function setupTabs(){
    document.querySelectorAll('.tabs__button').forEach(button => {
        button.addEventListener('click', () => {
            const sideBar = button.parentElement;
            const tabsContainer =  sideBar.parentElement;
            const tabNumber = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`);

            sideBar.querySelectorAll('.tabs__button').forEach(button => {
                button.classList.remove('tabs__button--active');
            });

            tabsContainer.querySelectorAll('.tabs__content').forEach(tab => {
                tab.classList.remove('tabs__content--active');
            });

            button.classList.add('tabs__button--active');
            tabToActivate.classList.add('tabs__content--active');
        });
    })
}
setupTabs();

function closeNav(){
    const navLinks = document.querySelectorAll('.nav-links li');
    const nav = document.querySelector('.nav-links');

    navLinks.addEventListener('click', () =>{
        nav.classList.remove('nav-active');
    });
}
closeNav();