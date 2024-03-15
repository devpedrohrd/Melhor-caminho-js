export class No{
    constructor(valor){
        this.valor = valor;
        this.direita = null;
        this.esquerda = null;
    }
}

const raiz = new No(1);
raiz.esquerda = new No(2);
raiz.direita = new No(3);   
raiz.esquerda.esquerda = new No(4);
raiz.esquerda.direita = new No(5);
raiz.direita.esquerda = new No(6);
raiz.direita.direita = new No(7);
raiz.esquerda.esquerda.esquerda = new No(8);
raiz.esquerda.esquerda.direita = new No(9);

export function buscaLargura(raiz,alvo){
    let fila = [raiz];

    while(fila.length){
        let no = fila.shift();
        if(no.valor === alvo){
            return no.valor;
        }
        if(no.esquerda){
            fila.push(no.esquerda);
        }
        if(no.direita){
            fila.push(no.direita);
        }
    }

    return null;
}
 
export function buscaProfundidade(raiz,alvo){
    let pilha = [raiz];

    while(pilha.length){
        let no = pilha.pop();
        if(no.valor === alvo){
            return no.valor;
        }
        if(no.direita){
            pilha.push(no.direita);
        }
        if(no.esquerda){
            pilha.push(no.esquerda);
        }
        
    }
    return null;
}