class Usuario{
    email;
    senha;
    nome;
    constructor(email , senha , nome , dataNascimento){
        this.email = email
        this.senha = senha 
        this.nome = nome 
    }
}

const listaUsuario = [
    new Usuario ('joao@gmail.com' , '12345' , 'João' , '')
]

function cadastrar(){
    var receberEmail = document.getElementById('email')
    var receberSenha = document.getElementById('senha')
    var receberSenhaConfirmar = document.getElementById('confirmarSenha')
    var podeCadastrar = true
    var firstName = document.getElementById('firstName')
    var secondName = document.getElementById('secondName')

    if(receberSenha == receberSenhaConfirmar){
        alert('As senhas são iguais')
    }
    else{ 
        alert('As senhas não são iguais')
        podeCadastrar = false
    }

    listaUsuario.forEach(item => {
        if(receberEmail == item.email){
            podeCadastrar = false
            alert('Esse email já está cadaastrado')
        }

    });

    if(podeCadastrar == true){
        alert('Seu usuário foi Cadastrado')
        listaUsuario.push(new Usuario(receberEmail , receberSenha , firstName + ' ' + secondName))
    }

   
}

function Login(){

}