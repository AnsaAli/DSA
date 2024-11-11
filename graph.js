class Graph{
    constructor(){
        this.adjList ={};
    }

    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex] = []
        }
    }

   
}

const g = new Graph();
console.log(g)//Graph { adjList: {} }
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
console.log(g)