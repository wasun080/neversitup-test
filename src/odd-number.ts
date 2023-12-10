/**
 * 
 * @param numbers list of numbers example [7], [0], [1,1,2], [0,1,0,0,1], [1,2,3,4,5,6,7,8,9,0]
 * @returns one number that odd number
 */ 
export function findOddNumber(numbers: number[]) : number {
    try {
        const count = {};
        for(let n of numbers) {
            count[n] = (count[n] || 0) + 1;
        };

        for (let num in count) {
            if (count[num] % 2 !== 0) {
            return parseInt(num, 10);
            }
        }

        return null;
    } catch (error) {
        // TODO : Start your code here
        throw new Error("Not implemented");
    }
}