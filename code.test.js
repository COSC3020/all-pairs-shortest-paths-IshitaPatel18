const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

// All of the answers to the graphs I doubled checked by solving
// them by hand and then using my Dijkstra's algorithm!

let graph1 = [
  [0, 1, 0, 0],
  [0, 0, 6, 0],
  [0, 2, 0, 3],
  [7, 0, 4, 0]
];

let answers1 = [
  [0, 1, 7, 10],
  [16, 0, 6, 9],
  [10, 2, 0, 3],
  [7, 6, 4, 0]
];

let graph2 = [
  [0, 2, 3, 1],
  [5, 0, 0, 0],
  [1, 0, 0, 0],
  [4, 0, 0, 0]
];

let answers2 = [
  [0, 2, 3, 1],
  [5, 0, 8, 6],
  [1, 3, 0, 2],
  [4, 6, 7, 0]
];

let graph3 = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

let answers3 = [
  [0, Infinity, Infinity, Infinity],
  [Infinity, 0, Infinity, Infinity],
  [Infinity, Infinity, 0, Infinity],
  [Infinity, Infinity, Infinity, 0]
]

let graph4 = [
    [0, 0, 4, 1],
    [0, 0, 0, 0],
    [3, 0, 0, 0],
    [2, 0, 0, 0]
  ];

let answers4 = [
    [0, Infinity, 4, 1],
    [Infinity, 0, Infinity, Infinity],
    [3, Infinity, 0, 4],
    [2, Infinity, 6, 0]
  ];

let graph5 = [
    [0, 6, 1, 0],
    [1, 0, 4, 0],
    [0, 3, 0, 2],
    [1, 0, 0, 0]
  ];

let answers5 = [
    [0, 4, 1, 3],
    [1, 0, 2, 4],
    [3, 3, 0, 2],
    [1, 5, 2, 0]
  ];

assert(JSON.stringify(allPairsShortestPaths(graph1)) == JSON.stringify(answers1));
assert(JSON.stringify(allPairsShortestPaths(graph2)) == JSON.stringify(answers2));
assert(JSON.stringify(allPairsShortestPaths(graph3)) == JSON.stringify(answers3));
assert(JSON.stringify(allPairsShortestPaths(graph4)) == JSON.stringify(answers4));
assert(JSON.stringify(allPairsShortestPaths(graph5)) == JSON.stringify(answers5));


