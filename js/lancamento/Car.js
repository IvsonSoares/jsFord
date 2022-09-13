class Car {

  _nome;
  _preco;
  _alturaCacamba;
  _alturaVeiculo;
  _alturaSolo;
  _capacidadeCarga;
  _motor;
  _potencia;
  _volumeCacamba;
  _roda;
  _image;

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
      this._nome = nome;
      this._preco = preco;
      this._alturaCacamba = alturaCacamba;
      this._alturaVeiculo = alturaVeiculo;
      this._alturaSolo = alturaSolo;
      this._capacidadeCarga = capacidadeCarga;
      this._motor = motor;
      this._potencia = potencia;
      this._volumeCacamba = volumeCacamba;
      this._roda = roda;
      this._image = image;
    }

   getCarFeaturesArray(){
      let carFeatures = [];

      //currency format
      let price = this.getPreco;
      let brazillianCurrency = price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

      carFeatures.push(
        this.getImage, this.getNome, this.getAlturaCacamba,
        this.getAlturaVeiculo, this.getAlturaSolo,
        this.getCapacidadeCarga, this.getMotor,
        this.getPotencia, this.getVolumeCacamba,
        this.getRoda, brazillianCurrency
      );

      return carFeatures;
    }

    //GETTERS
    get getImage(){
      return this._image;
    }

    get getNome(){
      return this._nome;
    }

    get getAlturaCacamba(){
      return this._alturaCacamba;
    }

    get getAlturaVeiculo(){
      return this._alturaVeiculo;
    }

    get getAlturaSolo(){
      return this._alturaSolo;
    }

    get getCapacidadeCarga(){
      return this._capacidadeCarga;
    }

    get getMotor(){
      return this._motor;
    }

    get getPotencia(){
      return this._potencia;
    }

    get getVolumeCacamba(){
      return this._volumeCacamba;
    }

    get getRoda(){
      return this._roda;
    }

    get getPreco(){
      return this._preco;
    }
};
