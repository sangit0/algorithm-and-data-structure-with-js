/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  // [
  //        0   1   2
  //     0 [1,  1,  0], => 1
  //     1 [1,  1,  1], => 1
  //     2 [0,  0,  1] => 2
  // ]

  //A => [0,1,2]
  //B =>  [0]

  let count = 0;
  const graph = new Array(isConnected.length).fill(-1);

  const find = (x) => {
    if (graph[x] === -1) return x;

    if (x === graph[x]) return graph[x];

    return find(graph[x]);
  };

  const makeUnion = (i, j) => {
    let x = find(i);
    let y = find(j);
    if (x != y) {
      graph[x] = y;
    }
  };

  for (let i = 0; i < isConnected.length; i++) {
    for (let j = 0; j < isConnected[i].length; j++) {
      if (isConnected[i][j] === 1) {
        makeUnion(i, j);
      }
    }
  }

  for (let i = 0; i < graph.length; i++) {
    if (graph[i] == -1) count++;
  }

  return count;
};
