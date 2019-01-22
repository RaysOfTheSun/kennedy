const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index', {title: 'Kennedy Watches and Premium Accessories'})
});

router.get('/mens-watches', (req, res) => {
    res.render('mens-home', {title: "Kennedy | Men's Watches"});
});

module.exports = router;