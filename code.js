function convertToAdjList(adjMatrix) {
    var adjList = [];

    for (var i = 0; i < adjMatrix.length; i++) {
        var innerList = [];

        for (var j = 0; j < adjMatrix[i].length; j++) {
            if (adjMatrix[i][j] > 0) {
                innerList.push(j);
            }
        }
        adjList[i] = innerList;
    }

    return adjList;
}


var adjMatrix = [
    [0, 1, 1],
    [0, 0, 1],
    [1, 0, 0]
];

var adjList = convertToAdjList(adjMatrix);

console.log(adjList);
