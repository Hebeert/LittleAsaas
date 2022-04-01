const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const cpfcnpj = document.getElementById("cpfcnpj");
const telefone = document.getElementById("telefone");
const cep = document.getElementById("cep");
const endereco = document.getElementById("endereco");
const numero = document.getElementById("numero");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");






form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkInputs();
    if(checkInputs()===true){
        alert("Enviado com sucesso!!")
    }else{
        alert("Preencha os campos em branco")
    }
    var lista_dados = [username.value, email.value, cpfcnpj.value, telefone.value, cep.value, 
        endereco.value, numero.value, bairro.value, cidade.value, estado.value, password.value, confirmpassword.value];
    console.log(lista_dados)    
    
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cpfcnpj").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmpassword").value = "";  
    

});





function checkInputs(){
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const cpfcnpjValue = cpfcnpj.value.trim()
    const telefoneValue = telefone.value.trim()
    const cepValue = cep.value.trim()
    const enderecoValue = endereco.value.trim()
    const numeroValue = numero.value.trim()
    const bairroValue = bairro.value.trim()
    const cidadeValue = cidade.value.trim()
    const estadoValue = estado.value.trim()
    const passwordValue = password.value.trim()
    const confirmpasswordValue = confirmpassword.value.trim()

    var usernameOk, emailOk, cpfcnpjOk, telefoneOk, cepOk, enderecoOk, numeroOk, bairroOk, cidadeOk, estadoOk, passwordOk, confirmpasswordOk


    if(usernameValue === ""){
        errorValidation(username, "Preencha esse campo")
        usernameOk = false;
    }else{
        successValidation(username)
        usernameOk = true;
    }

    if(emailValue === ""){
        errorValidation(email, "Preencha esse campo")
        emailOk = false;
    }else{
        successValidation(email)
        emailOk = true;
    }

    if(cpfcnpjValue === ""){
        errorValidation(cpfcnpj, "Preencha esse campo")
        cpfcnpjOk = false;
    }else if(cpfcnpjValue.length > 14){
        errorValidation(cpfcnpj, "Esse campo deve ter no máximo 14 caracteres")
        cpfcnpjOk = false;
    }else{
        successValidation(cpfcnpj)
        cpfcnpjOk = true;
    }

    if(telefoneValue === ""){
        errorValidation(telefone, "Preencha esse campo")
        telefoneOk = false;
    }else{
        successValidation(telefone)
        telefoneOk = true;
    }

    if(cepValue === ""){
        errorValidation(cep, "Preencha esse campo")
        cepOk = false;
    }else{
        successValidation(cep)
        cepOk = true;
    }

    if(enderecoValue === ""){
        errorValidation(endereco, "Preencha esse campo")
        enderecoOk = false;
    }else{
        successValidation(endereco)
        enderecoOk = true;
    }

    if(numeroValue === ""){
        errorValidation(numero, "Preencha esse campo")
        numeroOk = false;
    }else{
        successValidation(numero)
        numeroOk = true;
    }

    if(bairroValue === ""){
        errorValidation(bairro, "Preencha esse campo")
        bairroOk = false;
    }else{
        successValidation(bairro)
        bairroOk = true;
    }

    if(cidadeValue === ""){
        errorValidation(cidade, "Preencha esse campo")
        cidadeOk = false;
    }else{
        successValidation(cidade)
        cidadeOk = true;
    }

    if(estadoValue === ""){
        errorValidation(estado, "Preencha esse campo")
        estadoOk = false;
    }else if(estadoValue.length > 2){
        errorValidation(estado, "Apenas 2 caracteres")
        estadoOk = false;
    }else{
        successValidation(estado)
        estadoOk = true;
    }

    if(passwordValue === ""){
        errorValidation(password, "Preencha esse campo")
        passwordOk = false;
    }else if(passwordValue.length < 8){
        errorValidation(password, "A senha deve ter no mínimo 8 caracteres")
        passwordOk = false;
    }else{
        successValidation(password)
        passwordOk = true;
    }

    if(confirmpasswordValue === ""){
        errorValidation(confirmpassword, "Preencha esse campo")
        confirmpasswordOk = false;
    }else if(passwordValue !== confirmpasswordValue){
        errorValidation(confirmpassword, "As senhas não se correspondem")
        confirmpasswordOk = false;
    }else{
        successValidation(confirmpassword)
        confirmpasswordOk = true;
    }

    if(usernameOk === true && emailOk === true && cpfcnpjOk && telefoneOk === true && cepOk === true && 
        enderecoOk === true && numeroOk === true && bairroOk === true && cidadeOk === true && 
        estadoOk === true && passwordOk === true && confirmpasswordOk){
        return true
    }else{
        return false
    }

}
function errorValidation(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message
    formControl.className = "form-control error"
}

function successValidation(input){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")
    formControl.className = "form-control success"
}

var preencherFormulario = (endereco) =>{
    document.getElementById("endereco").value = endereco.logradouro;
    document.getElementById("bairro").value = endereco.bairro;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("estado").value = endereco.uf;
  }
  
  
  var pesquisarCep = async() => {
    var cep = document.getElementById("cep").value;
    var url = `http://viacep.com.br/ws/${cep}/json/`;
    var dados = await fetch(url);
    var endereco = await dados.json();
    preencherFormulario(endereco)
  }
  
  document.getElementById("cep")
    .addEventListener("focusout", pesquisarCep);