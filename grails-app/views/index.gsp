<!doctype html>
<html>
<head>
    <meta name="layout" content="main"/>
    <title>Little Asaas</title>
    <asset:stylesheet src="style.css"/>
</head>

<body>

    <div class="container">
        <div class="header">
            <h2>Faça seu cadastro</h2>
         </div>

         <form class="form" id="form">
             <div class="form-control">
                 <label for="usarname"></label>Nome</label>
                 <input type="text" id="username">
                 <i><img class="img-success" src="image/success-icon.svg" alt="certo"> </i>
                 <i><img class="img-error" src="image/error-icon.svg" alt="errado"> </i>
                 <small>Error message</small>
             </div>

             <div class="form-control">
                <label for="email"></label>E-mail</label>
                <input type="email" id="email">
                <i><img class="img-success" src="image/success-icon.svg" alt="certo"> </i>
                 <i><img class="img-error" src="image/error-icon.svg" alt="errado"> </i>
                <small>Error message</small>
            </div>
             

             <div class="form-control">
                <label for="cpfcnpj"></label>CPF ou CNPJ</label>
                <input type="number" id="cpfcnpj">
                <i><img class="img-success" src="image/success-icon.svg" alt="certo"> </i>
                <i><img class="img-error" src="image/error-icon.svg" alt="errado"> </i>
                <small>Error message</small>
            </div>

            <div class="form-control">
                <label for="telefone"></label>Telefone</label>
                <input type="number" id="telefone">
                <i><img class="img-success" src="image/success-icon.svg" alt="certo"> </i>
                <i><img class="img-error" src="image/error-icon.svg" alt="errado"> </i>
                <small>Error message</small>
            </div>

            <div class="form-control">
                <label for="cep"></label>CEP</label>
                <input type="number" id="cep">
                <i><img class="img-success" src="image/success-icon.svg" alt="certo"> </i>
                <i><img class="img-error" src="image/error-icon.svg" alt="errado"> </i>
                <small>Error message</small>
            </div>

            <div class="form-control">
                <label for="endereco"></label>Endereço</label>
                <input type="text" id="endereco">
                <i><img class="img-success" src="image/success-icon.svg" alt="certo"> </i>
                <i><img class="img-error" src="image/error-icon.svg" alt="errado"> </i>
                <small>Error message</small>
            </div>

            <div class="form-control">
                <label for="numero"></label>Número</label>
                <input type="number" id="numero">
                <i><img class="img-success" src="image/success-icon.svg" alt="certo"> </i>
                <i><img class="img-error" src="image/error-icon.svg" alt="errado"> </i>
                <small>Error message</small>
            </div>

            <div class="form-control">
                <label for="bairro"></label>Bairro</label>
                <input type="text" id="bairro">
                <i><img class="img-success" src="image/success-icon.svg" alt="certo"> </i>
                <i><img class="img-error" src="image/error-icon.svg" alt="errado"> </i>
                <small>Error message</small>
            </div>

            <div class="form-control">
                <label for="cidade"></label>Cidade</label>
                <input type="text" id="cidade">
                <i><img class="img-success" src="image/success-icon.svg" alt="certo"> </i>
                <i><img class="img-error" src="image/error-icon.svg" alt="errado"> </i>
                <small>Error message</small>
            </div>

            <div class="form-control">
                <label for="estado"></label>Estado</label>
                <input type="text" id="estado">
                <i><img class="img-success" src="image/success-icon.svg" alt="certo"> </i>
                <i><img class="img-error" src="image/error-icon.svg" alt="errado"> </i>
                <small>Error message</small>
            </div>

            <div class="form-control">
                <label for="password"></label>Senha</label>
                <input type="password" id="password">
                <i><img class="img-success" src="image/success-icon.svg" alt="certo"> </i>
                <i><img class="img-error" src="image/error-icon.svg" alt="errado"> </i>
                <small>Error message</small>
            </div>

            <div class="form-control">
                <label for="confirmpassword"></label>Confirme sua senha</label>
                <input type="password" id="confirmpassword">
                <i><img class="img-success" src="image/success-icon.svg" alt="certo"> </i>
                <i><img class="img-error" src="image/error-icon.svg" alt="errado"> </i>
                <small>Error message</small>
            </div>
            <input type="checkbox" name="agreement" id="agreement">
            <label for="agreement" id="agreement-label">Eu li e aceito os <a href="https://ajuda.asaas.com/pt-BR/articles/102021-termos-e-condicoes-de-uso">termos de uso</a></label>

            <button type="submit" id="botao">Cadastrar</button>




         </form>

         <script src="back.js"></script>

    

    











    </div>
    


</body>
</html>
