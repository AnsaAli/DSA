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

    removeEdges(vertex1,vertex2){
        if(this.adjList[vertex1] && this.adjList[vertex2]){
            this.adjList[vertex1]= this.adjList[vertex2].filter(v => v!==vertex2);
            this.adjList[vertex2] = this.adjList[vertex2].filter(v=> v!==vertex1)
            return true
        }
        return false
    }

    removeVertex(vertex){
        if(!this.adjList[vertex]) return undefined;

        for(let neighbor of this.adjList[vertex]){
            this.adjList[neighbor] = this.adjList[neighbor].filter(v => v!== vertex) 
        }
        delete this.adjList[vertex];
        return this
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
g.addEdges('B','D')
console.log(g)
g.removeVertex('B')
console.log(g)