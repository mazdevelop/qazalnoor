const express = require('express');
const router = express.Router();
const ProductController = require('./controllers/ProductController');
const ArticleController = require('./controllers/ArticleController');

// محصولات
router.get('/products', ProductController.getAll);
router.post('/products', ProductController.create);
router.put('/products/:id', ProductController.update);
router.delete('/products/:id', ProductController.delete);
router.patch('/products/:id/toggle-publish', ProductController.togglePublish);

// مقالات
router.get('/articles', ArticleController.getAll);
router.post('/articles', ArticleController.create);
router.put('/articles/:id', ArticleController.update);
router.delete('/articles/:id', ArticleController.delete);
router.patch('/articles/:id/toggle-publish', ArticleController.togglePublish);

module.exports = router;