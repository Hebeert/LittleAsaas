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
    if(checkInputs()){
        alert("Enviado com sucesso!!")
        cleanForm();
    }else{
        alert("Preencha os campos em branco")
    }
    var lista_dados = {'username':username.value, 'email':email.value, 'cpfcnpj':cpfcnpj.value, 'telefone':telefone.value, 'cep':cep.value, 'endereco':endereco.value,
    'numero':numero.value, 'bairro':bairro.value, 'cidade':cidade.value, 'estado':estado.value, 'password':password.value, 'confirmpassword':confirmpassword.value};
    console.log(lista_dados)    
    });
    
function cleanForm(){
    username.value = "";
    email.value = "";
    cpfcnpj.value = "";
    telefone.value = "";
    cep.value = "";
    endereco.value = "";
    numero.value = "";
    bairro.value = "";
    cidade.value = "";
    estado.value = "";
    password.value = "";
    confirmpassword.value = ""; 

  

}

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

var validationOk
    if(!usernameValue){
        errorValidation(username, "Preencha esse campo")
        validationOk = false;
    }else{
        successValidation(username)
        validationOk = true;
    }

    if(!emailValue){
        errorValidation(email, "Preencha esse campo")
        validationOk = false;
    }else{
        successValidation(email)
        validationOk = true;
    }

    if(!cpfcnpjValue){
        errorValidation(cpfcnpj, "Preencha esse campo")
        validationOk = false;
    }else if(cpfcnpjValue.length > 14){
        errorValidation(cpfcnpj, "Esse campo deve ter no máximo 14 caracteres")
        validationOk = false;
    }else{
        successValidation(cpfcnpj)
        validationOk = true;
    }

    if(!telefoneValue){
        errorValidation(telefone, "Preencha esse campo")
        validationOk = false;
    }else{
        successValidation(telefone)
        validationOk = true;
    }

    if(!cepValue){
        errorValidation(cep, "Preencha esse campo")
        validationOk = false;
    }else{
        successValidation(cep)
        validationOk = true;
    }

    if(!enderecoValue){
        errorValidation(endereco, "Preencha esse campo")
        validationOk = false;
    }else{
        successValidation(endereco)
        validationOk = true;
    }

    if(!numeroValue){
        errorValidation(numero, "Preencha esse campo")
        validationOk = false;
    }else{
        successValidation(numero)
        validationOk = true;
    }

    if(!bairroValue){
        errorValidation(bairro, "Preencha esse campo")
        validationOk = false;
    }else{
        successValidation(bairro)
        validationOk = true;
    }

    if(!cidadeValue){
        errorValidation(cidade, "Preencha esse campo")
        validationOk = false;
    }else{
        successValidation(cidade)
        validationOk = true;
    }

    if(!estadoValue){
        errorValidation(estado, "Preencha esse campo")
        validationOk = false;
    }else if(estadoValue.length > 2){
        errorValidation(estado, "Apenas 2 caracteres")
        validationOk = false;
    }else{
        successValidation(estado)
        validationOk = true;
    }

    if(!passwordValue){
        errorValidation(password, "Preencha esse campo")
        validationOk = false;
    }else if(passwordValue.length < 8){
        errorValidation(password, "A senha deve ter no mínimo 8 caracteres")
        validationOk = false;
    }else{
        successValidation(password)
        validationOk = true;
    }

    if(!confirmpasswordValue){
        errorValidation(confirmpassword, "Preencha esse campo")
        validationOk = false;
    }else if(passwordValue !== confirmpasswordValue){
        errorValidation(confirmpassword, "As senhas não se correspondem")
        validationOk = false;
    }else{
        successValidation(confirmpassword)
        validationOk = true;
    }

    if(validationOk){
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
    .addEventListener("focusout", pesquisarCep)