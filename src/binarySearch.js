export default function binarySearch(products, price) {
  let left = 0;
  let right = products.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let guess = products[mid].price;
    // 10 20 30 40
    if (guess === price) {
      return products[mid];
    } else if (guess < price) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
}
