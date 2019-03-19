window.onload = () => {
    // make our content visible now that everything has been loaded up
    document.documentElement.classList.remove('no-flash');
    const scrollContainer = document.querySelector('.scroll-up-container');

    // fadein and fadeout effects
    const $body = $('body');
    $($body).hide();
    $($body).fadeIn(500);

    $('a').on('click', (e) => {
        e.preventDefault();
        // current target because not every anchor element is a pure anchor element
        if (e.currentTarget.getAttribute('href') !== '#') {
            $('body').fadeOut(() => {
                window.location.href = $(e.currentTarget).attr('href');
            });
        }
    });

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

    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    };

    // click handler for our scroll to top button
    scrollContainer.addEventListener('click', scrollToTop);

    window.onscroll = () => {
        const nav = document.querySelector('.kenny-nav');
        // const navBody = document.querySelector('.kenny-nav-body');
        if (window.scrollY > 1) {
            nav.classList.remove('kenny-nav-landed');
            scrollContainer.classList.add('scroll-up-container-shown');
        } else {
            nav.classList.add('kenny-nav-landed');
            scrollContainer.classList.remove('scroll-up-container-shown');
        }
    }
};