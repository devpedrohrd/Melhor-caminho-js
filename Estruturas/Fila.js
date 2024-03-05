export class Fila{
    constructor(){
        this.fila = [];
    }

    adicionarNaFila(dado){
        this.fila.push(dado);
    }

    removerDaFila(){
        this.fila.shift()
    }

    listaVazia(){
        return this.fila.length == 0
    }

    limparFila(){
        this.fila = [];
    }
}