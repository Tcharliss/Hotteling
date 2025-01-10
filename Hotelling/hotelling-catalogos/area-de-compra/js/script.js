
    const botao = document.querySelector("button"); 
    const modal = document.querySelector("dialog"); 
    const botaosair = document.querySelector("dialog button"); 

    
    botao.onclick = function() {
      modal.showModal();
    }

    
    botaosair.onclick = function () {
      modal.close();
    }