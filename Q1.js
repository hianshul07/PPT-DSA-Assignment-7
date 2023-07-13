function minimumDeleteSum(s1, s2) {
  const m = s1.length;
  const n = s2.length;

  const dp = new Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1);
    dp[i][0] = 0;
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = 0;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1] + s1.charCodeAt(i - 1);
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let sum = 0;
  for (let i = 0; i < m; i++) {
    sum += s1.charCodeAt(i);
  }
  for (let j = 0; j < n; j++) {
    sum += s2.charCodeAt(j);
  }

  return sum - 2 * dp[m][n];
}