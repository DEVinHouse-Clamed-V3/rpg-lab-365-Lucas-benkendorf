import Arma from "./Arma";

export default class Personagem {
    private nome: string = '';
    private vida: number = 100;
    private forca: number = 10;
    private arma: Arma | null = null;

    constructor(nome: string, vida: number = 100) {
        this.nome = nome;
        this.vida = vida;
    }

    getNome() { return this.nome; }
    getVida() { return this.vida; }
    getForca() { return this.forca; }
    getArma() { return this.arma; }

    setNome(nome: string) { this.nome = nome; }
    setVida(vida: number) { this.vida = vida; }
    setForca(forca: number) { this.forca = forca; }
    setArma(arma: Arma) { this.arma = arma; }

    receberDano(dano: number) {
        this.vida -= dano;
        if (this.vida < 0) {
            console.log(`${this.nome} morreu!`);
        }
    }

    equiparArma(arma: Arma) {
        this.arma = arma;
    }

    causarDano() {
        return this.forca + (this.arma?.getDano() || 0);
    }

    atacar(alvo: Personagem) {
        const chanceDeAcerto = Math.random();
        if (chanceDeAcerto < 0.5) {
            console.log(`${this.nome} errou o ataque em ${alvo.getNome()}`);
        } else {
            const dano = this.causarDano();
            console.log(`${this.nome} atacou ${alvo.getNome()} e causou ${dano} de dano.`);
            alvo.receberDano(dano);
        }
    }
}
