/*
Write a function that determines if a path exists between two vertices of a directed graph.

Example
const graph = {
  a: ['b'],
  b: ['c', 'd'],
  c: ['d'],
  d: []
}

doesPathExist(graph, 'a', 'b') // true
doesPathExist(graph, 'b', 'a') // false
doesPathExist(graph, 'a', 'd') // true
doesPathExist(graph, 'a', 'a') // false
*/

const doesPathExist = (graph, start, target, visited = {}) => {
  if (!graph[start]) return false;
  visited[start] = true;

  return graph[start].some((vertex) => {
    if (vertex === target) return true;
    if (!visited[vertex]) {
      return doesPathExist(graph, vertex, target, visited);
    } else {
      return false;
    }
  });
};

const doesPathExist = (graph, start, target, visited = {}) => {
  if (!graph[start]) return false;

  let queue = [start];
  let pointer = 0;
  while (pointer < queue.length) {
    //As long as you haven't reached
    let node = queue[pointer]; //the end of the queue, keep traversing graph
    visited[node] = true;
    let neighbors = graph[node];
    for (let i = 0; i < neighbors.length; i++) {
      //Iterate through all neighbors
      let vertex = neighbors[i]; //for current node
      if (vertex === target) return true; //return true if it's our target
      if (!visited[vertex]) {
        //Only add to queue if you haven't
        queue.push(vertex); //seen the node before
      }
    }
    pointer++; //Move on to next item in queue. Could alternatively use shift.
  }
  return false;
};
