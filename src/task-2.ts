

interface Product {
    readonly id: number,
    title: string,
    description ? : string
}



const product = {
  id : 1,
  title: "Tablet",
  description: "Compact and fast",
} as Product;

console.log(`Product: ${JSON.stringify(product)}`);