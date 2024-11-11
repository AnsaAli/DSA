class Graph{
    constructor(){
        this.adjList ={};
    }

    addVertex(vertex){
        //if no vertex, vertex= []
        if(!this.adjList[vertex]){
            this.adjList[vertex] = []
        }
    }

    addEdges(vertex1,vertex2){
       //if these vetices in the adjList
       if(this.adjList[vertex1] && this.adjList[vertex2]){
        //need to add the vertex1 = vertex2
        this.adjList[vertex1].push(vertex2);
        this.adjList[vertex2].push(vertex1);

        return true
       }
       return false
    }

   
}

const g = new Graph();
console.log(g)//Graph { adjList: {} }
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addEdges('A','B')
g.addEdges('A','D')
g.addEdges('B','C')
console.log(g)