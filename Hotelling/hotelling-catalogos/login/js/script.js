class usuario{
    email;
    senha;
    constructor(email, senha){
        this.email = email 
        this.senha = senha
    }
}

var usuarioslist = [
    new usuario('tcharlis@gmail.com', '1234'),
    new usuario('paloma@gmail.com', '4321'),
    new usuario('gabriel@gmail.com', '40028922'),
]



if(permitido == false){
    alert("acesso invalidos")
}

function receber (){
    var validaremail = document.getElementById('email').value
    var validarsenha = document.getElementById('senha').value
    var permitido = false
    usuarioslist.forEach(item => {
        if(validaremail == item.email && validarsenha == item.senha){
            alert("Acesso permitido")
            permitido = true
        }
    })
}