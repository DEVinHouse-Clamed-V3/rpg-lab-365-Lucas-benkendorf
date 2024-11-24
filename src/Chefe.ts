import Inimigo from './Inimigo';
import Personagem from './Personagem';

export default class Chefe extends Inimigo {
    constructor(nome: string, vida: number, forca: number) {
        super(nome, vida, forca); // Chamando o construtor da classe pai (Inimigo)
    }

    // Refazendo o metódo para causar o dobro do dano
    atacar(personagem: Personagem) {
        const chanceDeAcerto = Math.random();
        if (chanceDeAcerto < 0.5) {
            console.log(`${this.getNome()} errou o ataque em ${personagem.getNome()}`);
        } else {
            const dano = this.causarDano() * 2; // Dano em dobro
            console.log(`${this.getNome()} atacou ${personagem.getNome()} e causou ${dano} de dano!`);
            personagem.receberDano(dano);
        }
    }

    
    receberDano(dano: number) {
        super.receberDano(dano); 
        if (this.getVida() <= 0) {
            this.acaoEspecialAntesDeMorrer(); 
        }
    }

 
    private acaoEspecialAntesDeMorrer() {
        const chanceDeAcao = Math.random();
        if (chanceDeAcao < 0.2) 
            console.log(`${this.getNome()} realiza uma ação especial antes de ser derrotado!`);
        } else {
            console.log(`${this.getNome()} foi derrotado definitivamente!`);
        }
    }

