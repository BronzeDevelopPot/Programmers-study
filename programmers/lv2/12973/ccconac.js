function solution(s) {
  const stack = [];

  if (s.length % 2) return 0;

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    if (char === stack[stack.length - 1]) stack.pop();
    else stack.push(char);
  }

  return stack.length ? 0 : 1;
}
