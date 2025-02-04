function solution(begin, target, words) {
  const visited = [];
  const queue = [];

  let answer = 0;

  if (!words.includes(target)) return 0;

  queue.push([begin, answer]);

  while (queue) {
    let [value, count] = queue.shift();

    if (value === target) return count;

    words.forEach((word) => {
      let notEqual = 0;

      if (visited.includes(word)) return;

      for (let i = 0; i < words.length; i++) {
        if (word[i] !== value[i]) notEqual += 1;
      }

      if (notEqual === 1) {
        count += 1;

        queue.push([word, count]);
        visited.push(word);
      }
    });
  }

  return answer;
}
