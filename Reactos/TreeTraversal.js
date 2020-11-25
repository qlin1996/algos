/* 
Each of these functions (BreathFirst, DepthFirstPre and DepthFirstPost) will take a node of the tree and a callback. The function will iterate through the child nodes, calling the callback function on each of them. The difference between them is the order in which they iterate.

const node = (value) => ({
    value,
    children: [],
})

var a = node('a');
var b = node('b');
var c = node('c');
var d = node('d');
var e = node('e');
var f = node('f');
var g = node('g');
var h = node('h');
var i = node('i');
var j = node('j');
var k = node('k');
var l = node('l');
var m = node('m');

a.children.push(b, c, d);
b.children.push(e);
e.children.push(k, l);
c.children.push(f, g, h);
h.children.push(m);
d.children.push(i, j);
*/

const breadthFirst = (startingNode, callback) => {
  let queue = [startingNode];
  while (queue.length) {
    let node = queue.shift();
    callback(node.value);
    queue.push(...node.children);
  }
};

const depthFirstPreOrder = (startingNode, callback) => {
  callback(startingNode.value);
  startingNode.children.forEach((child) => {
    depthFirstPreOrder(child, callback);
  });
};

const depthFirstPostOrder = (startingNode, callback) => {
  startingNode.children.forEach((child) => {
    depthFirstPostOrder(child, callback);
  });
  callback(startingNode.value);
};
