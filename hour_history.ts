// Problem Domian:

// Assume you have a DB in a data structure of your choice
// Given a value of "points" return the estimated amount of hours based on the closest historical point value.


// Input: 25 points
// Output: 50hrs

// Edge Case
// All Positive values
// All whole numbers

type Points = {
  points: number;
  hours: number;
};

class BSTNode {
  data: Points;
  left: BSTNode | null = null;
  right: BSTNode | null = null;
  constructor(value: Points) {
    this.data = value;
  }
}

class BST {
  root: BSTNode | null = null;

  search(pointsValue: number): number {
    if (!this.root) return 0;
    else {
      if(pointsValue === this.root.data.points) {
        return this.root.data.hours;
      }
      if(pointsValue > this.root.data.points) {
        return this.searchNode(pointsValue, this.root.right, this.root.data.points);
      } else {
        return this.searchNode(pointsValue, this.root.left, this.root.data.points);
      }
    }
  }

  searchNode(
    requestedPointsValue: number,
    node: BSTNode,
    previousPoints: number
  ): number {
    if (requestedPointsValue === node.data.points) return node.data.hours;
    /**  
     * if the points value is within the range +-1 of the
     * current nodes value and previous nodes value
    */
   // if the previous value is smaller and the points value and the current nodes value is greater than the requestedPointsValue
   if(previousPoints < requestedPointsValue && node.data.points > requestedPointsValue) {
    
   }
    if (requestedPointsValue > node.data.points) {
      if (node.right) {
        return this.searchNode(requestedPointsValue, node.right, node.data.points);
      }
    } else {
      if (node.left) {
        return this.searchNode(requestedPointsValue, node.left, node.data.points);
      }
    }
  }

  insert(points: number, hours: number) {
    const newNode = new BSTNode({ points, hours });
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  insertNode(node: BSTNode, newNode: BSTNode) {
    if (newNode.data.points < node.data.points) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }
}

const myBST = new BST();
myBST.insert(22, 32);
myBST.insert(23, 58);
myBST.insert(27, 62);
myBST.insert(
  Math.floor(Math.random() * 50 + 10),
  Math.floor(Math.random() * 100 + 50)
);
myBST.insert(
  Math.floor(Math.random() * 50 + 10),
  Math.floor(Math.random() * 100 + 50)
);
myBST.insert(
  Math.floor(Math.random() * 50 + 10),
  Math.floor(Math.random() * 100 + 50)
);
myBST.insert(
  Math.floor(Math.random() * 50 + 10),
  Math.floor(Math.random() * 100 + 50)
);
myBST.insert(
  Math.floor(Math.random() * 50 + 10),
  Math.floor(Math.random() * 100 + 50)
);
myBST.insert(
  Math.floor(Math.random() * 50 + 10),
  Math.floor(Math.random() * 100 + 50)
);
myBST.insert(
  Math.floor(Math.random() * 50 + 10),
  Math.floor(Math.random() * 100 + 50)
);

myBST.search(25); // 50
