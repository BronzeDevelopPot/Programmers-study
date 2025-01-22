function solution(s) {
  const max = Math.max(...s.split(' ').map(Number));
  const min = Math.min(...s.split(' ').map(Number));
  
  return `${min} ${max}`;
}