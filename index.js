const express = require("express");
const cors = require('cors');

const app = express();


const port = process.env.port || 3009;

const loginRouter = require("./routers/LoginRouter")
const userRouter = require("./routers/UserRouter")

  app.use(express.json());
  app.use(cors());





app.use('/login',loginRouter)
app.use('/user',userRouter)
// Rota para validação de erros (Deve ser sempre a última)

app.use(function(req, res) {
    res.status(404).json({
        errors: [{
            value: `${req.originalUrl}`,
            msg: `A rota ${req.originalUrl} não existe nesta API!`,
            param: 'invalid route'
        }]
    })
})

app.listen(port, ()=> console.log(`Servidor rodando na porta ${port}`));