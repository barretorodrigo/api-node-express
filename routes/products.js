const express = require('express');
const router = express.Router();
const { Product } = require('../models');

// Listar todos os produtos
router.get('/', async (req, res, next)=>{
    const products = await Product.findAll();
    res.json(products);
});

// Cadastrar produto
router.post('/', async (req, res, next)=>{
    const product = await Product.create(req.body);
    res.json(product);
});

module.exports = router;
