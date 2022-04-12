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
const confirmPasswordInputReference = document.getElementById("confirmPassword");

formReference.addEventListener("submit", (event) => {
    event.preventDefault();
    var customer = {};
    var form = document.querySelector("form");
    var data = new FormData(form);
    data.forEach(function(value, key){
        customer[key] = value;
    });
    console.log(customer)
    if(checkInputs()){
        alert("Enviado com sucesso!!");
        formReference.reset();
        }else{  
        alert("Preencha os campos em branco");
    }

     
function checkInputs(){
    if(
    checkInputUserName(customer) &&
    checkInputeMail(customer) &&
    checkInputCpfCnpj(customer) &&
    checkInputTelefone(customer) &&
    checkInputCep(customer) &&
    checkInputEndereco(customer) &&
    checkInputNumero(customer) &&
    checkInputBairro(customer) &&
    checkInputCidade(customer) &&
    checkInputEstado(customer) &&
    checkInputPassword(customer) &&
    checkInputConfirmPassword(customer)){
        return true
    }
    
};

function checkInputUserName(customer){
    //var validationOk;
    if(!customer.username.trim()){
        setInputAsError(usernameInputReference, "Preencha esse campo");
        //validationOk = false;
        return false;
    }else{
        successValidation(usernameInputReference);
        //validationOk = true;
        return true;
        
    }};
   
function checkInputeMail(customer){
    if(!customer.email.trim()){
        setInputAsError(emailInputReference, "Preencha esse campo");
        //validationOk = false;
        return false;
    }else{
        successValidation(emailInputReference);
        //validationOk = true;
        return true;
        
    }};
    
function checkInputCpfCnpj(customer){
    if(!customer.cpfcnpj.trim()){
        setInputAsError(cpfcnpjInputReference, "Preencha esse campo");
        //validationOk = false;
        return false;
    }else if(cpfcnpjInputReference.length > 14){
        setInputAsError(cpfcnpjInputReference, "Esse campo deve ter no máximo 14 caracteres");
        //validationOk = false;
        return false;
    }else{
        successValidation(cpfcnpjInputReference);
        //validationOk = true;
        return true;
        
    }};

function checkInputTelefone(customer){
    if(!customer.telefone.trim()){
        setInputAsError(telefoneInputReference, "Preencha esse campo")
        return false;
    }else{
        successValidation(telefoneInputReference)
        //validationOk = true;
        return true;
        
    }};

function checkInputCep(customer){
    if(!customer.cep.trim()){
        setInputAsError(cepInputReference, "Preencha esse campo")
        //validationOk = false;
        return false;
    }else{
        successValidation(cepInputReference)
        //validationOk = true;
        return true;
        
    }};

function checkInputEndereco(customer){
    if(!customer.endereco.trim()){
        setInputAsError(enderecoInputReference, "Preencha esse campo")
        //validationOk = false;
        return false;
    }else{
        successValidation(enderecoInputReference)
        //validationOk = true;
        return true;
        
    }};

function checkInputNumero(customer){
    if(!customer.numero.trim()){
        setInputAsError(numeroInputReference, "Preencha esse campo")
        //validationOk = false;
        return false;
    }else{
        successValidation(numeroInputReference)
        //validationOk = true;
        return true;
        
    }};

function checkInputBairro(customer){
    if(!customer.bairro.trim()){
        setInputAsError(bairroInputReference, "Preencha esse campo")
        //validationOk = false;
        return false;
    }else{
        successValidation(bairroInputReference)
        //validationOk = true;
        return true;
        
    }};

function checkInputCidade(customer){
    if(!customer.cidade.trim()){
        setInputAsError(cidadeInputReference, "Preencha esse campo")
        //validationOk = false;
        return false;
    }else{
        successValidation(cidadeInputReference)
        //validationOk = true;
        return true;
        
    }};

function checkInputEstado(customer){
    if(!customer.estado.trim()){
        setInputAsError(estadoInputReference, "Preencha esse campo")
        //validationOk = false;
        return false;
    }else if(estadoInputReference.length > 2){
        setInputAsError(estadoInputReference, "Apenas 2 caracteres")
        //validationOk = false;
        return false;
    }else{
        successValidation(estadoInputReference)
        //validationOk = true;
        return true;
        
    }};

function checkInputPassword(customer){
    if(!customer.password.trim()){
        setInputAsError(passwordInputReference, "Preencha esse campo")
        //validationOk = false;
        return false;
    }else if(passwordInputReference.length < 8){
        setInputAsError(passwordInputReference, "A senha deve ter no mínimo 8 caracteres")
        //validationOk = false;
        return false;
    }else{
        successValidation(passwordInputReference)
        //validationOk = true;
        return true;
        
    }};
    
function checkInputConfirmPassword(customer){
    if(!customer.confirmPassword.trim()){
        setInputAsError(confirmPasswordInputReference, "Preencha esse campo")
        //validationOk = false;
        return false;
    }else{
        successValidation(confirmPasswordInputReference)
        //validationOk = true;
        return true;
    }};

    //if(validationOk){
    //
   // }else{
   //     return;
   // }
});
    

function setInputAsError(input, message){
    const formControl = input.parentElement;
    const errorMessageContainer = formControl.querySelector(".js-error-note");
    errorMessageContainer.innerText = message;
    $(formControl).addClass("error").removeClass("success");
}


function successValidation(input){
    const formControl = input.parentElement;
    const errorMessageContainer = formControl.querySelector(".js-error-note");
    errorMessageContainer.innerText = "";
    $(formControl).addClass("success").removeClass("error");
}


var preencherFormulario = (endereco) =>{
    enderecoInputReference.value = endereco.logradouro;
    bairroInputReference.value = endereco.bairro;
    cidadeInputReference.value = endereco.localidade;
    estadoInputReference.value = endereco.uf;
  }
  
var pesquisarCep = async() => {
    var cep = cepInputReference.value;
    var url = `http://viacep.com.br/ws/${cep}/json/`;
    var dados = await fetch(url);
    var endereco = await dados.json();
    preencherFormulario(endereco);
  }
  
  cepInputReference.addEventListener("focusout", pesquisarCep);
