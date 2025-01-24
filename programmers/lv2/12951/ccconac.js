function solution(s) {
  const words = s.split(' ');

  const answer = words.map((value) => {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  });

  return answer.join(' ');
}
