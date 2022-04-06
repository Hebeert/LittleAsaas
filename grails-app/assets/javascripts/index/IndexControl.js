const formReference = document.getElementById("customer-form");
const usernameInputReference = document.getElementById("username");
const emailInputReference = document.getElementById("email");
const cpfcnpjInputReference = document.getElementById("cpfcnpj"); 
const telefoneInputReference = document.getElementById("telefone");
const cepInputReference = document.getElementById("cep");
const enderecoInputReference = document.getElementById("endereco");
const numeroInputReference = document.getElementById("numero");
const bairroInputReference = document.getElementById("bairro");
const cidadeInputReference = document.getElementById("cidade");
const estadoInputReference = document.getElementById("estado");
const passwordInputReference = document.getElementById("password");   
const confirmpasswordInputReference = document.getElementById("confirmpassword");


formReference.addEventListener("submit", (event) => {
    event.preventDefault();
    var customer = {};
    var form = document.querySelector("form")
    var data = new FormData(form)
    data.forEach(function(value, key){
        customer[key] = value;
    });
    console.log(customer)
    
    
    if(checkInputs(customer)){
        alert("Enviado com sucesso!!")
        
    }else{
        alert("Preencha os campos em branco")
    }
   formReference.reset();
    
    
function checkInputs(customer){

var validationOk
    if(!customer.username.trim()){
        setInputAsError(usernameInputReference, "Preencha esse campo")
        validationOk = false;
    }else{
        successValidation(usernameInputReference)
        validationOk = true;
    }

    if(!customer.email.trim()){
        setInputAsError(emailInputReference, "Preencha esse campo")
        validationOk = false;
    }else{
        successValidation(emailInputReference)
        validationOk = true;
    }

    if(!customer.cpfcnpj.trim()){
        setInputAsError(cpfcnpjInputReference, "Preencha esse campo")
        validationOk = false;
    }else if(cpfcnpjInputReference.length > 14){
        setInputAsError(cpfcnpjInputReference, "Esse campo deve ter no máximo 14 caracteres")
        validationOk = false;
    }else{
        successValidation(cpfcnpjInputReference)
        validationOk = true;
    }

    if(!customer.telefone.trim()){
        setInputAsError(telefoneInputReference, "Preencha esse campo")
        validationOk = false;
    }else{
        successValidation(telefoneInputReference)
        validationOk = true;
    }

    if(!customer.cep.trim()){
        setInputAsError(cepInputReference, "Preencha esse campo")
        validationOk = false;
    }else{
        successValidation(cepInputReference)
        validationOk = true;
    }

    if(!customer.endereco.trim()){
        setInputAsError(enderecoInputReference, "Preencha esse campo")
        validationOk = false;
    }else{
        successValidation(enderecoInputReference)
        validationOk = true;
    }

    if(!customer.numero.trim()){
        setInputAsError(numeroInputReference, "Preencha esse campo")
        validationOk = false;
    }else{
        successValidation(numeroInputReference)
        validationOk = true;
    }

    if(!customer.bairro.trim()){
        setInputAsError(bairroInputReference, "Preencha esse campo")
        validationOk = false;
    }else{
        successValidation(bairroInputReference)
        validationOk = true;
    }

    if(!customer.cidade.trim()){
        setInputAsError(cidadeInputReference, "Preencha esse campo")
        validationOk = false;
    }else{
        successValidation(cidadeInputReference)
        validationOk = true;
    }

    if(!customer.estado.trim()){
        setInputAsError(estadoInputReference, "Preencha esse campo")
        validationOk = false;
    }else if(estadoInputReference.length > 2){
        setInputAsError(estadoInputReference, "Apenas 2 caracteres")
        validationOk = false;
    }else{
        successValidation(estadoInputReference)
        validationOk = true;
    }

    if(!customer.password.trim()){
        setInputAsError(passwordInputReference, "Preencha esse campo")
        validationOk = false;
    }else if(passwordInputReference.length < 8){
        setInputAsError(passwordInputReference, "A senha deve ter no mínimo 8 caracteres")
        validationOk = false;
    }else{
        successValidation(passwordInputReference)
        validationOk = true;
    }

    if(!customer.confirmpassword.trim()){
        setInputAsError(confirmpasswordInputReference, "Preencha esse campo")
        validationOk = false;
    //}else if(passwordInputReference !== confirmpasswordInputReference){
       // setInputAsError(confirmpasswordInputReference, "As senhas não se correspondem")
        //validationOk = false;
    }else{
        successValidation(confirmpasswordInputReference)
        validationOk = true;
    }

    if(validationOk){
        return true
    }else{
        return false
    }
    
}
function setInputAsError(input, message){
    const formControl = input.parentElement;
    const errorMessageContainer = formControl.querySelector(".js-error-note");
    errorMessageContainer.innerText = message
    $(formControl).addClass("error").removeClass("success");
}


function successValidation(input){
    const formControl = input.parentElement;
    const errorMessageContainer = formControl.querySelector(".js-error-note");
    errorMessageContainer.innerText = "";
    $(formControl).addClass("success").removeClass("error")
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
    .addEventListener("focusout", pesquisarCep)
})