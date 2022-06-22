class MinHeap {
  heap = [];
  constructor() {
    this.heap = [null];
  }

  getMin() {
    return this.heap[1];
  }

  insertNewElement(valueToInsert) {
    this.heap.push(valueToInsert); //new value to the end

    if (this.heap.length > 1) {
      let currentNode = this.heap.length - 1;
      while (
        currentNode > 1 &&
        this.heap[currentNode] < this.heap[Math.floor(currentNode / 2)]
      ) {
        //swap
        [this.heap[Math.floor(currentNode / 2)], this.heap[currentNode]] = [
          this.heap[currentNode],
          this.heap[Math.floor(currentNode / 2)],
        ];
        currentNode = Math.floor(currentNode / 2);
      }
    }
  }

  remove() {
    const smallest = this.getMin();
    this.heap[1] = this.heap[this.heap.length - 1]; //replace first with last
    this.heap.splice(this.heap.length - 1, 1); //remove last

    //let heapify

    let current = 1;
    let leftChild = 2 * current;
    let rightChild = 2 * current + 1;

    if (this.heap.length > 2) {

      //for efficiency
      if (this.heap.length === 3) {
        if (this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return smallest;
      }

      while (
        this.heap[current] > this.heap[leftChild] ||
        this.heap[current] > this.heap[rightChild]
      ) {
        if (this.heap[leftChild] > this.heap[rightChild]) {
          [this.heap[current], this.heap[rightChild]] = [
            this.heap[rightChild],
            this.heap[current],
          ];
          current = rightChild;
        } else {
          [this.heap[current], this.heap[leftChild]] = [
            this.heap[leftChild],
            this.heap[current],
          ];
          current = leftChild;
        }

        leftChild = 2 * current;
        rightChild = 2 * current + 1;
      }

      if (
        this.heap[rightChild] === undefined &&
        this.heap[leftChild] < this.heap[current]
      ) {
        [this.heap[current], this.heap[leftChild]] = [
          this.heap[leftChild],
          this.heap[current],
        ];
      }
    } else if (this.heap.length === 2) {
      this.heap.splice(1, 1);
    } else {
      return null;
    }

    return smallest;
  }

  sort() {
    const sorted = [];
    const temp = [...this.heap]; // make a copy

    while (this.heap.length > 1) {
      sorted.push(this.remove());
    }

    this.heap = [...temp]; // paste the copy

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
console.log(minHeap.heap);
