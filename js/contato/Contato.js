class Contato {

  _nome;
  _sobrenome;
  _email;
  _cpf;
  _telefone;
  _contato;
  _mensagem;

  constructor(nome, sobrenome, email, cpf, telefone, contato, mensagem){
    this._nome = nome;
    this._sobrenome = sobrenome;
    this._email = email;
    this._cpf = cpf;
    this._telefone = telefone;
    this._contato = contato;
    this._mensagem = mensagem;

  }

  get getNome(){
    return this._nome;
  }
  get getSobrenome(){
    return this._sobrenome;
  }
  get getEmail(){
    return this._email;
  }
  get getCpf(){
    return this._cpf;
  }
  get getTelefone(){
    return this._telefone;
  }
  get getContato(){
    return this._contato;
  }
  get getMensagem(){
    return this._mensagem;
  }
}
