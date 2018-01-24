let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('pages/index', { title: 'USA Bridal' });
});

router.get('/about', function (req, res) {
    res.render('pages/about', { title: 'About Us' });
});

router.get('/locations', function (req, res) {
    res.render('pages/locations', { title: 'Store Locations' });
});

router.get('/employment', function (req, res) {
    res.render('pages/employment', { title: 'Employment' });
});

router.get('/contact', function (req, res) {
    res.render('pages/contact', { title: 'Contact Us' });
});

router.get('/appointment', function (req, res) {
    res.render('pages/appointment', { title: 'Request Appointment' });
});

router.get('/register-your-wedding', function (req, res) {
    res.render('pages/register-your-wedding', { title: 'Register Your Wedding' });
});

router.get('/info', function (req, res) {
    res.render('pages/info', { title: 'My Info' });
});

router.get('/policy', function (req, res) {
    res.render('pages/policy', { title: 'Online Policy' });
});
router.get('/post', function (req, res) {
    res.render('pages/post', { title: 'Blog Post' });
});

router.get('/sitemap', function (req, res) {
    res.render('pages/sitemap', { title: 'Site Map' });
});

router.get('/your-bridal', function (req, res) {
    res.render('pages/your-bridal', { title: 'Your Bridal' });
});

router.get('/your-prom', function (req, res) {
    res.render('pages/your-prom', { title: 'Your Prom' });
});

router.get('/your-quinceanera', function (req, res) {
    res.render('pages/your-quinceanera', { title: 'Your Quinceanera' });
});

router.get('/invitations', function (req, res) {
    res.render('pages/invitations', { title: 'Invitations' });
});

router.get('/blog', function (req, res) {
    res.render('pages/blog', { title: 'Blog' });
});

router.get('/promotions', function (req, res) {
    res.render('pages/promotions', { title: 'Promotions' });
});

router.get('/promotions-details', function (req, res) {
    res.render('pages/promotions-details', { title: 'Promotions Detail' });
});

router.get('/contests', function (req, res) {
    res.render('pages/contests', { title: 'Contests' });
});

router.get('/about', function (req, res) {
    res.render('pages/about', { title: 'About Us' });
});

router.get('/gallery', function (req, res) {
    res.render('pages/gallery', { title: 'Gallery' });
});

router.get('/faq', function (req, res) {
    res.render('pages/faq', { title: 'FAQ' });
});

router.get('/testimonials', function (req, res) {
    res.render('pages/testimonials', { title: 'Testimonials' });
});

router.get('/register-your-prom', function (req, res) {
    res.render('pages/register-your-prom', { title: 'Register Your Prom' });
});

router.get('/my-account', function (req, res) {
    res.render('pages/my-account', { title: 'My Account' });
});

router.get('/my-orders', function (req, res) {
    res.render('pages/my-orders', { title: 'My Orders' });
});

router.get('/cart', function (req, res) {
    res.render('pages/cart', { title: 'Cart' });
});

router.get('/my-wishlist', function (req, res) {
    res.render('pages/my-wishlist', { title: 'My Wishlist' });
});

// your-bridal
//      bridal-gowns

module.exports = router;
