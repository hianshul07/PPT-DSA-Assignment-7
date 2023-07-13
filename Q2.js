function isValid(s) {
  const stack = [];
  const starStack = [];

  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);

    if (c === '(') {
      stack.push(i);
    } else if (c === '*') {
      starStack.push(i);
    } else {
      if (stack.length > 0) {
        stack.pop();
      } else if (starStack.length > 0) {
        starStack.pop();
      } else {
        return false;
      }
    }
  }

  while (stack.length > 0 && starStack.length > 0) {
    const leftParenIndex = stack.pop();
    const starIndex = starStack.pop();
    if (leftParenIndex > starIndex) {
      return false;
    }
  }

  return stack.length === 0;
}