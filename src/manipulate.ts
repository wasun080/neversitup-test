/**
 * 
 * @param text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */
export function manipulate(text: string): string[] {
    try {
        if (text.length < 2) {
            return [text];
        }
        let resultArray = [];
        for (let i = 0; i < text.length; i++) {
            let char = text[i];
            if (text.indexOf(char) != i) {
                continue;
            }
            let remaining = text.slice(0, i) + text.slice(i + 1, text.length);
            for (let subPermutation of manipulate(remaining)) {
                resultArray.push(char + subPermutation);
            }
        }
        return resultArray;
    } catch (error) {
        // TODO : Start your code here
        throw new Error("Not implemented");
    }
}