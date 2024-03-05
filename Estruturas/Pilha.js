export class Pilha{
    constructor(){
        this.pilha = [];
    }

    adicionarNaPilha(dado){
        this.pilha.push(dado);
    }

    topo(){
        this.pilha[this.pilha.length-1]
    }

    removerNaPilha(){
        this.pilha.pop();
    }

    estaVazia(){
        this.pilha.length == 0;
    }

    limparFila(){
        this.pilha = [];
    }
}