var BSTNode = /** @class */ (function () {
    function BSTNode(value) {
        this.left = null;
        this.right = null;
        this.data = value;
    }
    return BSTNode;
}());
// anything less than the root needs to go left. Any numbers greater or equal to need to go to the right
var BST = /** @class */ (function () {
    function BST() {
        this.root = null;
    }
    BST.prototype.search = function (pointsValue) { };
    BST.prototype.insert = function (points, hours) {
        // Creating a node and initailising
        // with data
        var newNode = new BSTNode({ points: points, hours: hours });
        // root is null then node will
        // be added to the tree and made root.
        if (this.root === null)
            this.root = newNode;
        // find the correct position in the
        // tree and add the node
        else
            this.insertNode(this.root, newNode);
    };
    // Method to insert a node in a tree
    // it moves over the tree to find the location
    // to insert a node with a given data
    BST.prototype.insertNode = function (node, newNode) {
        // if the data is less than the node
        // data move left of the tree
        if (newNode.data.points < node.data.points) {
            // if left is null insert node here
            if (node.left === null)
                node.left = newNode;
            // if left is not null recur until
            // null is found
            else
                this.insertNode(node.left, newNode);
        }
        // if the data is more than the node
        // data move right of the tree
        else {
            // if right is null insert node here
            if (node.right === null)
                node.right = newNode;
            // if right is not null recur until
            // null is found
            else
                this.insertNode(node.right, newNode);
        }
    };
    return BST;
}());
var myBST = new BST();
myBST.insert(23, 58);
myBST.insert(22, 32);
myBST.insert(Math.floor(Math.random() * 25 + 1), Math.floor(Math.random() * 100 + 1));
myBST.insert(Math.floor(Math.random() * 25 + 1), Math.floor(Math.random() * 100 + 1));
myBST.insert(Math.floor(Math.random() * 25 + 1), Math.floor(Math.random() * 100 + 1));
myBST.insert(Math.floor(Math.random() * 25 + 1), Math.floor(Math.random() * 100 + 1));
myBST.insert(Math.floor(Math.random() * 25 + 1), Math.floor(Math.random() * 100 + 1));
myBST.insert(Math.floor(Math.random() * 25 + 1), Math.floor(Math.random() * 100 + 1));
myBST.insert(Math.floor(Math.random() * 25 + 1), Math.floor(Math.random() * 100 + 1));
//# sourceMappingURL=hour_history.js.map