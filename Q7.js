function backspaceCompare(s, t) {
  const processString = (str) => {
      let stack = [];
      for (let char of str) {
          if (char === '#') {
              stack.pop();
          } else {
              stack.push(char);
          }
      }
      return stack.join('');
  }
  return processString(s) === processString(t);
}


// Example usage:
const s = "ab#c";
const t = "ad#c";
console.log(backspaceCompare(s, t));  // Output: true
