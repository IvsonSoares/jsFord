function Post(form, event) {
  event.preventDefault();
  let data = new Contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value,
            form.elements.namedItem("email").value,
            form.elements.namedItem("cpf").value,
            form.elements.namedItem("telefone").value,
            form.elements.namedItem("contato").value,
            form.elements.namedItem("mensagem").value);

  Enviar(data);

}

function Enviar(data) {
  let enviarBtn = document.querySelector('.btn-enviar');
    if (data.getNome != "") {
        alert('Obrigado sr(a) ' + data.getNome + ' ' + data.getSobrenome + ' os seus dados foram encaminhados com sucesso');
        let contato = JSON.stringify(data);
        saveContato(contato);
        clearFormInput();
      }
  }

  function clearFormInput(){
    let input = document.querySelectorAll('.fordform');
    for(let i = 0; i < input.length; i++){
      input[i].value = "";
    }
  }

  function saveContato(content){
    console.log(content);
  }
