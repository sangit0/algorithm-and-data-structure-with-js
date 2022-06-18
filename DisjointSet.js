class DisjointSet {
  store = [];
  rank = [];

  constructor(n) {
    this.store = new Array(n);
    this.rank = new Array(n);

    for (let index = 0; index < n; index++) {
      this.store[index] = index;
      this.rank[index] = 1; // level 1
    }
  }

  find(x) {
    if (x === this.store[x]) {
      return this.store[x];
    }
    return this.find(this.store[x]);
  }

  union(x, y) {
    let storeX = this.find(x);
    let storeY = this.find(y);

    if (this.rank[x] > this.rank[y]) {
      //if x greater parent should be x
      this.store[storeY] = storeX;
    } else if (this.rank[x] < this.rank[y]) {
      this.store[storeX] = storeY;
    } else {
      this.store[storeY] = storeX;
      this.rank[storeX] += 1;
    }
  }
}

const dis = new DisjointSet(10);
dis.union(1, 2);
dis.union(1, 6);
dis.union(6, 1);

console.log(dis.store);




//function implementation

const find = (x) => {
    if (graph[x] === -1) return x;
  
    if (x === graph[x]) return graph[x];
  
    return find(graph[x]);
  };
  
  const union = (x, y) => {
    let pX = find(x);
    let pY = find(y);
  
    if (pX !== pY) {
      graph[pY] = pX;
    }
  };