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

         <form class="form" id="customer-form">
             <div class="form-control">
                 <label for="usarname"></label>Nome</label>
                 <input type="text" id="username" name="username" >
                 <i><asset:image class="img-success" src="success-icon.svg"/></i>
                 <i><asset:image class="img-error" src="error-icon.svg"/></i>
                 <small class="error-note js-error-note"></small>
             </div>

             <div class="form-control">
                <label for="email"></label>E-mail</label>
                <input type="email" id="email" name="email" >
                <i><asset:image class="img-success" src="success-icon.svg"/></i>
                 <i><asset:image class="img-error" src="error-icon.svg"/></i>
                <small class="error-note js-error-note"></small>
            </div>
             

             <div class="form-control">
                <label for="cpfcnpj"></label>CPF ou CNPJ</label>
                <input type="number" id="cpfcnpj" name="cpfcnpj" >
                <i><asset:image class="img-success" src="success-icon.svg"/></i>
                 <i><asset:image class="img-error" src="error-icon.svg"/></i>
                <small class="error-note js-error-note"></small>
            </div>

            <div class="form-control">
                <label for="telefone"></label>Telefone</label>
                <input type="number" id="telefone" name="telefone" >
                <i><asset:image class="img-success" src="success-icon.svg"/></i>
                 <i><asset:image class="img-error" src="error-icon.svg"/></i>
                <small class="error-note js-error-note"></small>
            </div>

            <div class="form-control">
                <label for="cep"></label>CEP</label>
                <input type="number" id="cep" name="cep" >
                <i><asset:image class="img-success" src="success-icon.svg"/></i>
                 <i><asset:image class="img-error" src="error-icon.svg"/></i>
                <small class="error-note js-error-note"></small>
            </div>

            <div class="form-control">
                <label for="endereco"></label>Endereço</label>
                <input type="text" id="endereco" name="endereco" >
                <i><asset:image class="img-success" src="success-icon.svg"/></i>
                 <i><asset:image class="img-error" src="error-icon.svg"/></i>
                <small class="error-note js-error-note"></small>
            </div>

            <div class="form-control">
                <label for="numero"></label>Número</label>
                <input type="number" id="numero" name="numero" >
                <i><asset:image class="img-success" src="success-icon.svg"/></i>
                 <i><asset:image class="img-error" src="error-icon.svg"/></i>
                <small class="error-note js-error-note"></small>
            </div>

            <div class="form-control">
                <label for="bairro"></label>Bairro</label>
                <input type="text" id="bairro" name="bairro" >
                <i><asset:image class="img-success" src="success-icon.svg"/></i>
                 <i><asset:image class="img-error" src="error-icon.svg"/></i>
                <small class="error-note js-error-note"></small>
            </div>

            <div class="form-control">
                <label for="cidade"></label>Cidade</label>
                <input type="text" id="cidade"name="cidade" >
                <i><asset:image class="img-success" src="success-icon.svg"/></i>
                 <i><asset:image class="img-error" src="error-icon.svg"/></i>
                <small class="error-note js-error-note"></small>
            </div>

            <div class="form-control">
                <label for="estado"></label>Estado</label>
                <input type="text" id="estado" name="estado" >
                <i><asset:image class="img-success" src="success-icon.svg"/></i>
                 <i><asset:image class="img-error" src="error-icon.svg"/></i>
                <small class="error-note js-error-note"></small>
            </div>

            <div class="form-control">
                <label for="password"></label>Senha</label>
                <input type="password" id="password" name="password" >
                <i><asset:image class="img-success" src="success-icon.svg"/></i>
                 <i><asset:image class="img-error" src="error-icon.svg"/></i>
                <small class="error-note js-error-note"></small>
            </div>

            <div class="form-control">
                <label for="confirmPassword"></label>Confirme sua senha</label>
                <input type="password" id="confirmPassword" name="confirmPassword" >
                <i><asset:image class="img-success" src="success-icon.svg"/></i>
                 <i><asset:image class="img-error" src="error-icon.svg"/></i>
                <small class="error-note js-error-note"></small>
            </div>
            <input type="checkbox" name="agreement" id="agreement" required>
            <label for="agreement" id="agreement-label">Eu li e aceito os <a href="https://ajuda.asaas.com/pt-BR/articles/102021-termos-e-condicoes-de-uso">termos de uso</a></label>

            <button type="submit">Cadastrar</button>
        </form>

         <asset:javascript src="index/IndexControl.js"/>
    
    </div>
</body>
</html>
