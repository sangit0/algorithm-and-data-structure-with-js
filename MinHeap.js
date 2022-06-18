class MinHeap {
  store = [];
  constructor() {
    this.store = [null];
  }

  getMin() {
    return this.store[1];
  }

  insertNewElement(valueToInsert) {
    this.store.push(valueToInsert); //new value to the end

    if (this.store.length > 1) {
      let currentNode = this.store.length - 1;
      while (
        currentNode > 1 &&
        this.store[currentNode] < this.store[Math.floor(currentNode / 2)]
      ) {
        //swap
        [this.store[Math.floor(currentNode / 2)], this.store[currentNode]] = [
          this.store[currentNode],
          this.store[Math.floor(currentNode / 2)],
        ];
        currentNode = Math.floor(currentNode / 2);
      }
    }
  }

  remove() {
    const smallest = this.getMin();
    this.store[1] = this.store[this.store.length - 1]; //replace first with last
    this.store.splice(this.store.length - 1, 1); //remove last

    //let heapify

    let current = 1;
    let leftChild = 2 * current;
    let rightChild = 2 * current + 1;

    if (this.store.length > 2) {

      //for efficiency
      if (this.store.length === 3) {
        if (this.store[1] > this.store[2]) {
          [this.store[1], this.store[2]] = [this.store[2], this.store[1]];
        }
        return smallest;
      }

      while (
        this.store[current] > this.store[leftChild] ||
        this.store[current] > this.store[rightChild]
      ) {
        if (this.store[leftChild] > this.store[rightChild]) {
          [this.store[current], this.store[rightChild]] = [
            this.store[rightChild],
            this.store[current],
          ];
          current = rightChild;
        } else {
          [this.store[current], this.store[leftChild]] = [
            this.store[leftChild],
            this.store[current],
          ];
          current = leftChild;
        }

        leftChild = 2 * current;
        rightChild = 2 * current + 1;
      }

      if (
        this.store[rightChild] === undefined &&
        this.store[leftChild] < this.store[current]
      ) {
        [this.store[current], this.store[leftChild]] = [
          this.store[leftChild],
          this.store[current],
        ];
      }
    } else if (this.store.length === 2) {
      this.store.splice(1, 1);
    } else {
      return null;
    }

    return smallest;
  }

  sort() {
    const sorted = [];
    const temp = [...this.store]; // make a copy

    while (this.store.length > 1) {
      sorted.push(this.remove());
    }

    this.store = [...temp]; // paste the copy

    return sorted;
  }
}

const minHeap = new MinHeap();
minHeap.insertNewElement(5);
minHeap.insertNewElement(1);
minHeap.insertNewElement(0);
minHeap.insertNewElement(4);
minHeap.insertNewElement(1);

console.log(minHeap.sort());
console.log(minHeap.store);
