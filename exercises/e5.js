import { data } from "../data/data";

// SPACE DATA EXERCISE 5
// Return an array with all Planets' names with a massValue greater or equal to a given number (1-7)
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsWithMassValue(data, number) {
	const planets = data.planets;
	const mass = number;

	if (mass >= 3 && mass >= 7) {
		return mass;
	}
	return planets
		.filter(function (planetsMass) {
			if (planetsMass.mass.massValue >= mass) {
				return planetsMass;
			}
		})
		.map(function (planetsNames) {
			return planetsNames.name;
		});
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
