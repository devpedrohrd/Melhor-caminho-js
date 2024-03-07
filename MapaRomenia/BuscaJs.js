const mapaRomenia = {
    'Arad': [{'zerind':75, 'sibiu':140, 'timisoara':118}],
    'Zerind': [{'arad':75, 'oradea':71}],
    'Timisoara': [{'arad':118, 'lugoj':111}],
    'Sibiu': [{'arad':140, 'fagaras':99, 'rimnicuVilcea':80}],
    'Fagaras': [{'sibiu':99, 'bucharest':211}],
    'RimnicuVilcea': [{'sibiu':80, 'craiova':146, 'pitesti':97}],
    'Lugoj': [{'timisoara':111, 'mehadia':70}],
    'Pitesti': [{'rimnicuVilcea':97, 'craiova':138, 'bucharest':101}],
    'Mehadia': [{'lugoj':70, 'dobreta':75}],
    'Dobreta': [{'mehadia':75, 'craiova':120}],
    'Craiova': [{'dobreta':120, 'rimnicuVilcea':146, 'pitesti':138}],
    'Oradea': [{'zerind':71}],
    'Bucharest': [{'fagaras':211, 'pitesti':101}]
}

class BuscaJs{
    constructor(inicial, destino){
        this.no = inicial;
        this.destino = destino;
        this.caminho = [];
        this.visitados = [];   
    }
}