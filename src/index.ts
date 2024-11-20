class Arma {
    private readonly nome: string;
    private readonly descricao: string;
    private _dano: number;
  
  
    constructor(nome: string, dano: number, descricao: string) {
      this.nome = nome;
      this.descricao = descricao;
      this._dano = dano >= 0 ? dano : 0; 
    }
  
    
    public getNome(): string {
      return this.nome;
    }
  
    public getDescricao(): string {
      return this.descricao;
    }
  
    public getDano(): number {
      return this._dano;
    }
  
   
    public setDano(novoDano: number): void {
      if (novoDano >= 0) {
        this._dano = novoDano;
      } else {
        console.error("O valor do dano não pode ser negativo!");
      }
    }
  }
  
  
  const espada = new Arma("Espada Longa", 50, "Uma espada de aço forjada para combates intensos.");
  console.log(espada.getNome()); 
  console.log(espada.getDescricao()); 
  console.log(espada.getDano()); 
  
  
  espada.setDano(75);
  console.log(espada.getDano()); 
  
  
  espada.setDano(-10); 
  console.log(espada.getDano()); 
  