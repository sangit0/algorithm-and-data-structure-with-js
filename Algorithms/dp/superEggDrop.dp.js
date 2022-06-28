function superEggDrop(k, n) {
    let matrix = Array.from(Array(n + 1), () => new Array(k + 1));
  
   
    for (let i = 0; i <= n; i++) {
      matrix[i][1] = i;
    }
  
  
    for (let i = 0; i <= k; i++) {
      matrix[1][i] = 1;
    }
  
    for (let i = 2; i <= n; i++) {
      for (let j = 2; j <= k; j++) {
        matrix[i][j] = Number.POSITIVE_INFINITY;
  
        for (let x = 1; x < i; x++) {
          const ifEggBreaks = matrix[x - 1][j - 1];
          const eggSurvived = matrix[i - x][j];
  
          let temp = Math.max(ifEggBreaks, eggSurvived) + 1;
  
          matrix[i][j] =  Math.min( matrix[i][j], temp);
        }
      }
    }
  
    console.log(matrix[n][k])
  
    return matrix[n][k];
  }
  
  superEggDrop(1, 2);
  