export class No {
  constructor(dado) {
    this.dado = dado;
    this.esquerda;
    this.direita;
  }
}

export class ArvoreBinaria {
  constructor() {
    this.raiz = null;
  }

  inserirNo(no, novoNo) {
    if (no.dado > novoNo.dado) {
      if (no.esquerda === null) {
        no.esquerda = novoNo;
      } else {
        this.inserirNo(no.esquerda, novoNo);
      }
    } else {
      if (no.direita === null) {
        no.direita = novoNo;
      } else {
        this.inserirNo(no.direita, novoNo);
      }
    }
  }

  inserirArvore(dado) {
    let novoNo = new No(dado);

    if (this.raiz === null) {
      this.raiz = novoNo;
    } else {
      this.inserirNo(this.raiz, novoNo);
    }
  }

  exibirArvore(no, espacos = 0) {
    if (no !== null) {
        this.exibirArvore(no.direita, espacos + 4); 
        console.log(" ".repeat(espacos) + no.dado); 
        this.exibirArvore(no.esquerda, espacos + 4);
    }
}

}
