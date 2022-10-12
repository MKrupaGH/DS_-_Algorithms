function Node(data, left = null, right = null) {
  return {
    data,
    left,
    right,
  };
}

function Tree(array) {
  let sortedArray = mergeSort(array);
  let root = buildTree(sortedArray);

  function buildTree(sortedArray) {
    let start = 0;
    let end = sortedArray.length - 1;
    if (start > end) return null;
    let mid = Math.floor(end / 2);
    let node = new Node(sortedArray[mid]);
    node.left = buildTree(sortedArray.slice(start, mid));
    node.right = buildTree(sortedArray.slice(mid + 1));

    return node;
  }

  const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  function insertRoot(currentRoot = root, value) {
    if (currentRoot === null) {
      return new Node(value);
    }
    if (currentRoot.data === value) return currentRoot;
    if (currentRoot.data < value) {
      currentRoot.right = insertRoot(currentRoot.right, value);
    } else if (currentRoot.data > value) {
      currentRoot.left = insertRoot(currentRoot.left, value);
    }

    return currentRoot;
  }

  function deleteRoot(currentRoot = root, value) {
    if (currentRoot === null) {
      return currentRoot;
    }
    if (currentRoot.data < value) {
      currentRoot.right = deleteRoot(currentRoot.right, value);
    } else if (currentRoot.data > value) {
      currentRoot.left = deleteRoot(currentRoot.left, value);
    }
  }

  function findRoot(root, value) {
    if (root === null || root.data === value) {
      return root;
    }
    if (root.data < value) {
      root = root.right;
      return findRoot(root, value);
    } else {
      root = root.left;
      return findRoot(root, value);
    }
  }

  function mergeSort(arr) {
    if (arr.length === 1) {
      return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);

    return merge(mergeSort(left), mergeSort(right));
  }

  function merge(arrLeft, arrRight) {
    let l = 0;
    let r = 0;
    let result = [];
    while (l < arrLeft.length && r < arrRight.length) {
      if (arrLeft[l] < arrRight[r]) {
        result.push(arrLeft[l]);
        l++;
      } else if (arrLeft[l] > arrRight[r]) {
        result.push(arrRight[r]);
        r++;
      } else {
        result.push(arrLeft[l]);
        l++;
        r++;
      }
    }
    while (l < arrLeft.length) {
      result.push(arrLeft[l]);
      l++;
    }
    while (r < arrRight.length) {
      result.push(arrRight[r]);
      r++;
    }
    return result;
  }

  return {
    root,
    prettyPrint,
    insertRoot,
    findRoot,
  };
}
