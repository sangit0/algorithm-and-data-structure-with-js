function superEggDrop(k, n) {
    let matrix = Array.from(Array(n + 1), () => new Array(k + 1));
  
    // n = floor
    // k = egg
    for (let i = 0; i <= n; i++) {
      matrix[i][1] = i; // one egg -> survived
    }
  
  
    for (let i = 0; i <= k; i++) {
      matrix[1][i] = 1; // for fixed floor 1 egg
    }
  
    for (let i = 2; i <= n; i++) {
      for (let j = 2; j <= k; j++) {
        matrix[i][j] = Number.POSITIVE_INFINITY;
  
        for (let x = 1; x < i; x++) {
          const ifEggBreaks = matrix[x - 1][j - 1]; // look one down floor with one new egg
          const eggSurvived = matrix[i - x][j]; // old egg but in the upper floor
  
          let temp = Math.max(ifEggBreaks, eggSurvived) + 1;
  
          matrix[i][j] =  Math.min(matrix[i][j], temp);
        }
      }
    }
  
    //console.log(matrix[n][k])
  
    return matrix[n][k];
  }
  
  superEggDrop(1, 2);
  