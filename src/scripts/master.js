window.onload = () => {
    // make our content visible now that everything has been loaded up
    document.documentElement.classList.remove('no-flash');
    // handlers for our footer
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