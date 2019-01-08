window.onload = () => {
    function handleClick() {
        const target = document.getElementById(this.getAttribute('data-nav'));
        target.classList.toggle('collapsed');
    }
    if (window.matchMedia('only screen and (max-width: 1199px)')) {
        const footerTogglers = document.getElementsByClassName('footer-toggle');
        for (let i = 0; i < footerTogglers.length; i++) {
            footerTogglers[i].addEventListener('click', handleClick)
        }
    } else {
        const footerTogglers = document.getElementsByClassName('footer-toggle');
        for(let i = 0; i < footerTogglers.length; i++) {
            footerTogglers[i].removeEventListener('click', handleClick);
        }
    }
};