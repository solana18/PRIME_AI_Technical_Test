/**
 * Finds two products whose prices add up to the given sum.
 * @param {Array} products - An array of product objects.
 * @param {number} sum - The target sum of two product prices.
 * @returns {Array} - An array containing the ids of the two products, or an empty array if no such products are found.
 */

function findProductsForSum(products, sum) {
    const result = [];
  
    // Create a map to store the prices of each product
    const priceMap = new Map();
    for (const product of products) {
      const { id, price } = product;
  
      // Check if there is another product with the remaining price needed to reach the target sum
      if (priceMap.has(sum - price)) {
        result.push(id, priceMap.get(sum - price));
        return result;
      }
  
      priceMap.set(price, id);
    }
  
    return result;
  }
  // Tests:
  // Feel free to add any relevant test cases.
  function testFindProductsForSum() {
    const products1 = [
      { id: 1, price: 50 },
      { id: 2, price: 30 },
      { id: 3, price: 70 },
      { id: 4, price: 20 },
    ];
  
    const products2 = [
      { id: 1, price: 50 },
      { id: 2, price: 30 },
      { id: 3, price: 70 },
      { id: 4, price: 20 },
    ];
  
    const products3 = [
      { id: 1, price: 40 },
      { id: 2, price: 60 },
      { id: 3, price: 10 },
      { id: 4, price: 90 },
      { id: 5, price: 30 },
    ];
  
    function runTest(products, sum, expected) {
      const result = findProductsForSum(products, sum);
      console.log(`Sum: ${sum}`);
      console.log(
        `Expected: ${JSON.stringify(expected)}, Result: ${JSON.stringify(result)}`
      );
      console.log(
        "Test:",
        JSON.stringify(expected) === JSON.stringify(result) ? "Passed" : "Failed"
      );
      console.log("---");
    }
  
    runTest(products1, 80, [2, 1]);
    runTest(products2, 100, [3, 2]);
    runTest(products3, 100, [2, 1]);
    runTest(products1, 80, [2, 1]);
    runTest(products3, 99, []);
    runTest(products1, 70, [4, 1]);
  }
  
  testFindProductsForSum();
  