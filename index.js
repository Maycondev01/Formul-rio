const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require("express-session");
const flash = require("express-flash");
const cookieParser = require("cookie-parser");
const validador = require("validator")

// Arquivos Estáticos
app.use(express.static('public'))

// Definindo a View Engine
app.set('view engine', 'ejs');

// Analisador
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser("asfasklakjgakljgznlkgnal "))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.use(flash()) // Sessões que só duram 1 requisição


app.get("/", (req, res) => {

    var emailError = req.flash("emailError");
    var pontosError = req.flash("pontosError");
    var nomeError = req.flash("nomeError");

    var email = req.flash("email");
    var nome = req.flash("nome");
    var pontos = req.flash("pontos");


    emailError = (emailError == undefined || emailError.length == 0) ? undefined : emailError;
    pontosError = (pontosError == undefined || pontosError.length == 0) ? undefined : pontosError;
    nomeError = (nomeError == undefined || nomeError.length == 0) ? undefined : nomeError;

    email = (email == undefined || email.length == 0) ? "" : email;
    nome = (nome == undefined || nome.length == 0) ? "" : nome;
    if(pontos == undefined) {
        if(pontos.length == 0) {
            pontos == "";
        } else {
            pontos;
        }
    } 
    
    

    res.render("index", {emailError, pontosError, nomeError, email: email, nome: nome, pontos: pontos});
    /*if(emailError != undefined) {
        if(emailError.length == 0) {
            emailError = undefined;
        } else {
            emailError;
        }
    } */
})

app.post("/form", (req, res) => {
    var { email, nome, pontos } = req.body;

    var emailError
    var pontosError;
    var nomeError;

    if (email == undefined || email == "") {
        emailError = "O e-mail não pode está vázio"
    }

    if (pontos == undefined || pontos < 20) {
        pontosError = "Você não pode ter menos que 20 pontos"
    }

    if (nome == undefined || nome == "") {
        nomeError = "Seu nome não pode está vázio"
    }

    if (nome.length < 4) {
        nomeError = "Nome não pode ser menor que 4"
    }

    if (emailError != undefined || pontosError != undefined || nomeError != undefined) {
        req.flash("emailError", emailError);
        req.flash("pontosError", pontosError);
        req.flash("nomeError", nomeError);

        req.flash("email", email);
        req.flash("nome", nome);
        req.flash("pontos", pontos);

        res.redirect("/")
        //res.send("Formulário Inválido!")
    } else {
        res.send("Show de bola esse form")
    }
})


app.listen(3000, function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('Servidor Online!')
    }
})