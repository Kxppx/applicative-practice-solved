/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let yearCounts = data.asteroids.reduce((acc, val) => {
    if (acc[val.discoveryYear]) {
      acc[val.discoveryYear]++;
    } else {
      acc[val.discoveryYear] = 1;
    }
    return acc;
  }, {});
  let maxYear = Object.entries(yearCounts).reduce((acc, [year, count]) => {
    if (count > acc[1]) {
      return [year,count];
    } else {
      return acc;
    }
  }, [null, 0])[0];
  return Number(maxYear);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
