const express = require('express');
const router = express.Router();
const { Product } = require('../models');

// Listar todos os produtos
router.get('/', async (req, res, next)=>{
    const token = req.headers.authorization;
    if(token=='ti-ara-2019'){
        const products = await Product.findAll();
        res.status(200).json(products);
    } 
    res.status(401).send('Token não autorizado');
    
});

// Cadastrar produto
router.post('/', async (req, res, next)=>{
    const product = await Product.create(req.body);
    res.status(201).json(product);
});

// Litar produto por id
router.get('/:id', async (req, res, next)=>{
    const product = await Product.findAll({
        where:{
            id: req.params.id
        }
    });
    res.status(200).json(...product);
});

// Listar produtos por tipo
router.get('/type/:type', async(req, res, next)=>{
    const products = await Product.findAll({
        where:{
            type: req.params.type
        }
    });
    res.status(200).json(products);
});

// Apagar produto por id
router.delete('/:id', async(req, res, next)=>{
    const product = await Product.destroy({
        where:{
            id: req.params.id
        }
    });
    res.status(204).json(product);
});

// Atualizar produto por id
router.put('/:id', async(req, res, next)=>{
    const product = await Product.update(req.body, {
        where:{
            id: req.params.id
        }
    });
    res.status(204).json(product);
});

module.exports = router;
