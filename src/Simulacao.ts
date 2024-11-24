import Arma from './Arma';
import Personagem from './Personagem';
import Inimigo from './Inimigo';

// Instanciar objetos da classe Arma
const espada = new Arma("Espada Longa", "Uma espada clássica de metal, ideal para combates de média distância.", 50);
const machado = new Arma("Machado de Batalha", "Um machado pesado para ataques devastadores.", 70);
const arco = new Arma("Arco Composto", "Arco ágil com alto alcance.", 30);

console.log(`Armas criadas:`);
console.log(`- ${espada.getNome()} (Dano: ${espada.getDano()}, Descrição: ${espada.getDescricao()})`);
console.log(`- ${machado.getNome()} (Dano: ${machado.getDano()}, Descrição: ${machado.getDescricao()})`);
console.log(`- ${arco.getNome()} (Dano: ${arco.getDano()}, Descrição: ${arco.getDescricao()})`);

// Instanciar o personagem principal
const guerreiro = new Personagem("Alan", 300);
guerreiro.equiparArma(espada);
console.log(`Personagem criado: ${guerreiro.getNome()} com ${guerreiro.getVida()} de vida e força ${guerreiro.getForca()}`);

// Instanciar inimigos
const inimigo1 = new Inimigo("Goblin", 100);
const inimigo2 = new Inimigo("Troll", 250);
const inimigo3 = new Inimigo("Dragão", 1000);
const inimigo4 = new Inimigo("Orc", 160);
const inimigo5 = new Inimigo("Lobo", 80);

const inimigos = [inimigo1, inimigo2, inimigo3, inimigo4, inimigo5];

console.log("Inimigos criados:");
inimigos.forEach((inimigo, index) => {
    console.log(`- Inimigo ${index + 1}: ${inimigo.getNome()} com ${inimigo.getVida()} de vida`);
});

// Simulação de combate
console.log("\nSimulação de Combate:");
guerreiro.atacar(inimigo4); 
inimigo4.atacar(guerreiro); 
guerreiro.atacar(inimigo4); 


console.log("\nResultados após o combate:");
console.log(`${guerreiro.getNome()} tem ${guerreiro.getVida()} de vida restante.`);
console.log(`${inimigo4.getNome()} tem ${inimigo4.getVida()} de vida restante.`);
