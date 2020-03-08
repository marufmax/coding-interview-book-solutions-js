function removeDuplicates(items) {
  let resultedItem = [];

  items.forEach(item => {
    if (!resultedItem.includes(item)) {
      resultedItem.push(item);
    }
  });

  return resultedItem;
}

function removeDuplicates(items) {
  return items.filter((i, position) => {
    return items.indexOf(i) === position;
  });
}

const arr1 = [1, 2, 44, 55, 44];
const arr2 = ["m", "a", "b", "f", "f"];
console.log(removeDuplicates(arr1)); // ["maruf", "alom", "bappy"]; // 3 item
// removeDuplicates(arr2);
