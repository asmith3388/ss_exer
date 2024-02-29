/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
	const asteroid = data.asteroids;
	const aster = asteroid.reduce((a, num) => {
		a[num.discoveryYear] = (a[num.discoveryYear] || 0) + 1;
		return a;
	});
	const highestYear = Object.entries(aster)
		.filter(([, occurrences]) => occurrences === 3)
		.map(([num]) => Number(num));
	return parseInt(highestYear);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
