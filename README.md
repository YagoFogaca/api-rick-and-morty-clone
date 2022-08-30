# Projeto - API clone Rick and Morty

Uma breve descrição sobre o que esse projeto faz e para quem ele é

O projeto API clone Rick and Morty é do modulo 3 - (Back-end) da BlueEdtch. Ele visa suprir
o front-end, usando o padrão de desenvolvimento chamado BFF (Back-end For Front-end).

<p>O front-end contem os seguintes requisitos:</p>
<p>Funcionais:</p>

    Usuario:
     Criar um novo usuario
     Login na plataforma

    Personagens:
    id = identificador unico
     Mostrar todos os personagens
     Buscar um personagem pelo seu id
     Buscar um personagem pelo seu name
     Editar um personagem pelo seu id
     Adicionar um novo personagem
     Exluir um personagem pelo seu id

<p>Não funcionais:</p>

    Persistência de dados no MongoDB Atlas;
    Formatação do código utilizando o Prettier;
    Documentação Swagger;
    Status Code corretos em todos os endpoints;
    Deploy no Heroku;
    Autenticacao JWT.

## Documentação da API

### Rotas de Users

#### Rota para login

```http
  POST /auth/login
```

| Parâmetro    | Tipo     | Descrição                                    |
| :----------- | :------- | :------------------------------------------- |
| `user_login` | `object` | **Obrigatório**. Email e Password para login |

##### Parâmetro passado pelo body da requisição

##### Retorna um token para o acesso as demais rotas

#### Rota para criar um novo usuario

```http
  POST /users/create
```

| Parâmetro   | Tipo     | Descrição                                          |
| :---------- | :------- | :------------------------------------------------- |
| `user_data` | `object` | **Obrigatório**. Dados do user para ser cadastrado |

##### Parâmetro passado pelo body da requisição

##### Retorna uma mensagem de 'user create', se ja não haver email já cadastrado

#### Rota para buscar todos os usuarios

```http
  GET /users/
```

| Parâmetro | Tipo     | Descrição                           |
| :-------- | :------- | :---------------------------------- |
| `token`   | `object` | **Obrigatório**. Token de validação |

##### Parâmetro passado pelo headers da requisição

##### Retorna um array de object de todos os user cadastrados

### Rotas de Characters

#### Rota para buscar todos os characters

```http
  GET /characters/
```

| Parâmetro | Tipo     | Descrição                           |
| :-------- | :------- | :---------------------------------- |
| `token`   | `object` | **Obrigatório**. Token de validação |

##### Parâmetro passado pelo headers da requisição

##### Retorna um array de object de todos os characters cadastrados

#### Rota para buscar um characters

```http
  GET /characters/find/${id}
```

| Parâmetro | Tipo     | Descrição                           |
| :-------- | :------- | :---------------------------------- |
| `token`   | `object` | **Obrigatório**. Token de validação |

| Parâmetro | Tipo     | Descrição                                 |
| :-------- | :------- | :---------------------------------------- |
| `id`      | `string` | **Obrigatório**. Id do character desejado |

##### Parâmetro - token - passado pelo headers da requisição

##### Parâmetro - id - passado pelo params da requisição

##### Retorna um object com o character desejado

#### Rota para buscar um characters

```http
  GET /characters/search
```

| Parâmetro | Tipo     | Descrição                           |
| :-------- | :------- | :---------------------------------- |
| `token`   | `object` | **Obrigatório**. Token de validação |

| Parâmetro | Tipo     | Descrição                                   |
| :-------- | :------- | :------------------------------------------ |
| `name`    | `string` | **Obrigatório**. Name do character desejado |

##### Parâmetro - token - passado pelo headers da requisição

##### Parâmetro - name - passado pelo query da requisição

##### Retorna um object com o character desejado

#### Rota para atualizar um characters

```http
  PUT /characters/update/${id}
```

| Parâmetro | Tipo     | Descrição                           |
| :-------- | :------- | :---------------------------------- |
| `token`   | `object` | **Obrigatório**. Token de validação |

| Parâmetro | Tipo     | Descrição                                 |
| :-------- | :------- | :---------------------------------------- |
| `id`      | `string` | **Obrigatório**. Id do character desejado |

##### Parâmetro - token - passado pelo headers da requisição

##### Parâmetro - id - passado pelo params da requisição

##### Retorna um object com o character atualizado

#### Rota para criar um novo characters

```http
  POST /characters/create
```

| Parâmetro | Tipo     | Descrição                           |
| :-------- | :------- | :---------------------------------- |
| `token`   | `object` | **Obrigatório**. Token de validação |

| Parâmetro   | Tipo     | Descrição                                               |
| :---------- | :------- | :------------------------------------------------------ |
| `character` | `object` | **Obrigatório**. Dados do character para ser cadastrado |

##### Parâmetro - token - passado pelo headers da requisição

##### Parâmetro - character - passado pelo body da requisição

##### Retorna um object com o character criado

#### Rota para deletar um characters

```http
  DELETE /characters/delete/${id}
```

| Parâmetro | Tipo     | Descrição                           |
| :-------- | :------- | :---------------------------------- |
| `token`   | `object` | **Obrigatório**. Token de validação |

| Parâmetro | Tipo     | Descrição                                 |
| :-------- | :------- | :---------------------------------------- |
| `id`      | `object` | **Obrigatório**. Id do character desejado |

##### Parâmetro - token - passado pelo headers da requisição

##### Parâmetro - id - passado pelo params da requisição

##### Retorna uma mensagem que o character foi deletado
