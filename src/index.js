import binarySearch from "./binarySearch.js";

const products = [
  { name: "Glasses", price: 10 },
  { name: "T-Shirt", price: 20 },
  { name: "Short", price: 30 },
  { name: "Skirt", price: 40 },
];

const searchProductByPrice = 50;

const productFound = binarySearch(products, searchProductByPrice);

if (productFound) {
  console.log(productFound.name, productFound.price);
} else {
  console.log("Produto não encontrado");
}
