// Este software é um exemplo de busca de melhor caminho em um grafo utilizando o algoritmo de busca em largura.

class Cidade {
  nome;
  cidadeVizinha;

  constructor(nome){
    this.nome = nome;
    this.cidadeVizinha = new Map();
  }

  adicionarCidadeVizinha(nome,distancia){
    this.cidadeVizinha.set(nome,distancia);
  }

  removerCidadeVizinha(nome){
    this.cidadeVizinha.delete(nome);
  }
}

function busca_melhor_caminho(origem, destino){
  
  let borda = [[origem]];

  while(borda.length > 0){
    let caminho = borda.shift();
    let ultimaCidade = caminho[caminho.length-1];

    if(ultimaCidade == destino){
      return caminho;
    }

    for(const [vizinhos] of ultimaCidade.cidadeVizinha){
      if(!caminho.includes(vizinhos)){
        let novoCaminho = caminho.slice();
        novoCaminho.push(vizinhos);
        borda.push(novoCaminho);
      }
    }

    borda.sort((a,b)=>{
      let distanciaA = 0;
      let distanciaB = 0;
      for(let i = 0; i < a.length-1; i++){
        distanciaA += a[i].cidadeVizinha.get(a[i+1]);
      }
      for(let i = 0; i < b.length-1; i++){
        distanciaB += b[i].cidadeVizinha.get(b[i+1]);
      }
      return distanciaA - distanciaB;
    })
  }

  return null; 
}

const arad = new Cidade("Arad");
const zerind = new Cidade("Zerind");
const timisoara = new Cidade("Timisoara");
const sibiu = new Cidade("Sibiu");
const fagaras = new Cidade("Fagaras");
const rimnicuVilcea = new Cidade("Rimnicu Vilcea");
const lugoj = new Cidade("Lugoj");
const pitesti = new Cidade("Pitesti");
const bucharest = new Cidade("Bucharest");
const mehadia = new Cidade("Mehadia");
const dobreta = new Cidade("Dobreta");
const craiova = new Cidade("Craiova");
const oradea = new Cidade("Oradea");

arad.adicionarCidadeVizinha(zerind, 75);
arad.adicionarCidadeVizinha(sibiu, 140);
arad.adicionarCidadeVizinha(timisoara, 118);
zerind.adicionarCidadeVizinha(arad, 75);
zerind.adicionarCidadeVizinha(oradea, 71);
sibiu.adicionarCidadeVizinha(arad, 140);
sibiu.adicionarCidadeVizinha(fagaras, 99);
sibiu.adicionarCidadeVizinha(rimnicuVilcea, 80);
timisoara.adicionarCidadeVizinha(arad, 118);
timisoara.adicionarCidadeVizinha(lugoj, 111);
lugoj.adicionarCidadeVizinha(timisoara, 111);
lugoj.adicionarCidadeVizinha(mehadia, 70);
mehadia.adicionarCidadeVizinha(lugoj, 70);
mehadia.adicionarCidadeVizinha(dobreta, 75);
dobreta.adicionarCidadeVizinha(mehadia, 75);
dobreta.adicionarCidadeVizinha(craiova, 120);
craiova.adicionarCidadeVizinha(dobreta, 120);   
craiova.adicionarCidadeVizinha(pitesti, 138);
craiova.adicionarCidadeVizinha(rimnicuVilcea, 146);
rimnicuVilcea.adicionarCidadeVizinha(sibiu, 80);
rimnicuVilcea.adicionarCidadeVizinha(craiova, 146);
rimnicuVilcea.adicionarCidadeVizinha(pitesti, 97);
pitesti.adicionarCidadeVizinha(rimnicuVilcea, 97);
pitesti.adicionarCidadeVizinha(craiova, 138);
pitesti.adicionarCidadeVizinha(bucharest, 101);
bucharest.adicionarCidadeVizinha(pitesti, 101);
bucharest.adicionarCidadeVizinha(fagaras, 211);

const encontrarCaminho = busca_melhor_caminho(arad, dobreta);

const melhorCamiho = encontrarCaminho.map((cidade, index, array) => {
  if(index < array.length - 1){
    return `${cidade.nome} -> ${array[index+1].nome} : ${cidade.cidadeVizinha.get(array[index+1])}km`;
  }
  return "";
});

console.log(melhorCamiho.join("\n"));
