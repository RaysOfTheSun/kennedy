const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index', {title: 'Kennedy Watches and Premium Accessories'})
});

router.get('/mens-watches', (req, res) => {
    res.render('mens-home', {title: "Kennedy | Men's Watches"});
});

router.get('/womens-watches', (req, res) => {
   res.render('womens-home', {title: "Kennedy | Women's Watches"});
});

router.get('/bags', (req, res) => {
    res.render('bags-home', {title: "Kennedy | Bags"});
});

router.get('/clothing', (req, res) => {
    res.render('clothing-home', {title: "Kennedy | Clothing & Accessories"});
});

router.get('/products/:category/:product', (req, res) => {
   res.render('product', {title: `Kennedy | ${req.params.product}`});
});

router.get('/catalog', (req, res) => {
   res.render('catalog', {title: 'Kennedy | Watches'});
});

module.exports = router;