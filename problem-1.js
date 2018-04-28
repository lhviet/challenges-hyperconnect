/**
 * Write a function calcAvgHeight which calculates average person height.
 * The function takes only one argument, which is an object whose properties
 * are instances of a person class created with the following function:
 *
 * function Person(h, w) {
 *  this.height = h;
 *  this.weight = w;
 * }
 *
 * Given an object data, return the calculated average height.
 * If there are no persons in the data object, return null.
 *
 * For example, the following call should return (174 + 190) / 2 = 182
 *
 * calcAvgHeight({
 *  Matt: { height: 174, weight: 69 },
 *  Jason: { height: 190, weight: 103 }
 * });
 *
 */

 /**
 * Solution 
 * @param data
 * @returns {*}
 */
function calcAvgHeight(data) {
    // Calculate average height from received data. If no data, return null.

    // check if no data, wrong data, or no data of persons
    if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
        return null;
    }

    // get array of heights of persons
    const heights = Object.values(data)
        .filter(person => person.height)
        .map(person => person.height);

    // calculate the sum of heights
    const sum = heights.reduce((prev, cur) => (prev + cur), 0);

    // return the average height
    return (sum / heights.length);

}
