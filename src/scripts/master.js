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
    }

    window.onscroll = () => {
        const nav = document.querySelector('.kenny-nav');
        const navBody = document.querySelector('.kenny-nav-body');
        if (window.scrollY > 100) {
            nav.classList.remove('kenny-nav-landed');
        } else {
            nav.classList.add('kenny-nav-landed');
        }
    }
};