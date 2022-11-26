# Formulário
Este formulário serve para validação de e-mail, nome e pontuação.
## Endpoints
### GET / 
Endpoint responsável por renderizar a view engine index.ejs e os erros que podem ocorrer durante o processo.
#### Parâmetros
Nenhum
#### Respostas
##### OK! 200
Caso essa resposta aconteça, será renderizado o formulário.

![image](https://user-images.githubusercontent.com/89277603/204098283-0ed8ff8d-f68a-4202-9727-6517ea1187e0.png)


##### Solicitação Inválida! 400
Caso essa resposta aconteça, não será renderizado o formulário

![image](https://user-images.githubusercontent.com/89277603/204098411-e20414d8-b138-4533-a29f-f8412a515f55.png)


### POST /form
Endpoint responsável pelo envio do formulário.
#### Parâmetros
Nenhum
#### Respostas
##### OK! 200
Caso essa resposta aconteça, o formulário foi enviado com sucesso.
Exemplo: 

![image](https://user-images.githubusercontent.com/89277603/204098558-45da1695-fc8a-4d1d-8eb5-77f2e844659f.png)

##### Error! 
Caso aconteça algum erro no envio do formulário, ira ser informado oque precisa ser corrigido.
Exemplo:

![image](https://user-images.githubusercontent.com/89277603/204098679-69085075-5134-4e95-ad32-f78d1f3594bc.png)
