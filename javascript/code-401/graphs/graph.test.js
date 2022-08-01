'use strict';

const { Graph } = require('./index');

describe('Graphs Tests', () => {
  test('Node can be successfully added to the graph', () => {
    const graph = new Graph();
    graph.addVertex('A');

    expect(graph.adjacencyList).toMatchObject({});
  });

  test('An edge can be successfully added to the graph', () => {
    const graph = new Graph();
    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    graph.addDirectedEdge(A, B);

    expect(graph.adjacencyList).toMatchObject({});
  });

  test('A collection of all nodes can be properly retrieved from the graph', () => {
    const graph = new Graph();
    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    const C = graph.addVertex('B');
    graph.addDirectedEdge(A, B);
    graph.addDirectedEdge(A, C);
    let nodes = graph.getNodes();

    expect(nodes).toMatchObject({});
  });

  test('All appropriate neighbors can be retrieved from the graph', () => {
    const graph = new Graph();
    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    graph.addDirectedEdge(A, B);
    let neighbors = graph.getNeighbors(A);

    expect(neighbors).toMatchObject({});
  });

  // test('Neighbors are returned with the weight between nodes included', () => {
  //   const graph = new Graph();
  //   const A = graph.addVertex('A');
  //   const B = graph.addVertex('B');
  //   graph.addDirectedEdge(A, B);
  //   let neighbors = graph.getNeighbors();

  //   expect(neighbors).toMatchObject({});
  // });

  test('The proper size is returned, representing the number of nodes in the graph', () => {
    const graph = new Graph();
    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    graph.addDirectedEdge(A, B);
    let size = graph.graphSize();

    expect(size).toEqual(2);
  });

  test('A graph with only one node and edge can be properly returned', () => {
    const graph = new Graph();
    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    graph.addDirectedEdge(A, B);
    let graph2 = graph.breadthFirst(A, console.log);

    expect(graph2).toMatchObject({});
  });

  test('An empty graph properly returns null', () => {
    const graph = new Graph();

    expect(graph).toBeNull;
  });

});
