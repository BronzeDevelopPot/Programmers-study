function solution(n, computers) {
  const visited = new Array(n).fill(0);
  let count = 0;

  function dfs(node) {
    visited[node] = 1;

    for (let i = 0; i < computers.length; i++) {
      if (!visited[i] && computers[node][i]) dfs(i);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      count += 1;
    }
  }

  return count;
}
