function solution(A, B) {
  const a = A.sort((a, b) => b - a);
  const b = B.sort((a, b) => a - b);

  let answer = 0;

  a.map((aValue, index) => {
    answer += aValue * b[index];
  });

  return answer;
}
