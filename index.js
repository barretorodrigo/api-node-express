const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { Client } = require('./models');


app.use(bodyParser.json());

app.get('/', async (req, res)=>{
    res.send("Projeto em execução...");
});

// Inserção de dado
app.post('/clients', async (req, res)=>{
    const client = await Client.create(req.body);
    res.json(client);
});

// Listagem de todos os dados
app.get('/clients', async (req, res)=>{
    const clients = await Client.findAll();
    res.json(clients);
});

// Remoção de dado 
app.delete('/clients/:id', async(req, res)=>{
    const status = await Client.destroy(
        {
            where:{
                id: req.params.id
            }
        }
    );
    res.json(status);
});

// Atualização de dado
app.put('/clients/:id', async(req,res)=>{
    const client = await Client.update(req.body,
        {
            where:{
                id: req.params.id
            }
        }
    );
    res.json(client);
});

// Listar dado único
app.get('/clients/:id', async(req, res)=>{
    const client = await Client.findAll(
        {
            where:{
                id: req.params.id
            }
        }
    );
    res.json(...client);
});

app.listen(4000);