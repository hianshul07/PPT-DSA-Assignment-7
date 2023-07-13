function compress(chars) {
  let i = 0;
  let j = 0;

  while (j < chars.length) {
    const currentChar = chars[j];
    let count = 0;

    while (j < chars.length && chars[j] === currentChar) {
      j++;
      count++;
    }

    chars[i] = currentChar;
    i++;

    if (count > 1) {
      const countStr = count.toString();

      for (let k = 0; k < countStr.length; k++) {
        chars[i] = countStr[k];
        i++;
      }
    }
  }

  return i;
}