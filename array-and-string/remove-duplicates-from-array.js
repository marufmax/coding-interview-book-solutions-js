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

// Using Set

function removeDuplicates(items) {
  const uniqueNo = new Set(items);

  return Array.from(uniqueNo).join(",");
}

const arr1 = [1, 2, 44, 55, 44];
const arr2 = ["m", "a", "b", "f", "f"];
console.log(removeDuplicates(arr1));
