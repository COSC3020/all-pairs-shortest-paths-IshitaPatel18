function allPairsShortestPaths(graph) 
{
  let dist = [];
  for (let row = 0; row < graph.length; row++) 
  {
    dist[row] = [];
    for (let column = 0; column < graph.length; column++) 
    {
      if (graph[row][column] > 0) 
      {
        dist[row][column] = graph[row][column];
      } 
      else if (row == column) 
      {
        dist[row][column] = 0;
      } 
      else 
      {
        dist[row][column] = Infinity;
      }
    }
  }

  for (let k = 0; k < graph.length; k++) 
  {
    for (let i = 0; i < graph.length; i++) 
    {
      for (let j = 0; j < graph.length; j++) 
      {
        if (dist[i][j] > dist[i][k] + dist[k][j]) 
        {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }
  return dist;
}
