/**
 * 
 * @param texts list of string [":)", ":(", ":>"]
 * @returns amount of smily face detected
 */
export function countSmilyFace(texts: string[]): number {
    try {
        let count = 0;
        const smileyPattern = /^[:;][-~]?[)D]$/;
        texts.forEach(smiley => {
            if (smileyPattern.test(smiley)) count++;
        });
        return count;
    } catch (error) {
        // TODO : Start your code here
        throw new Error("Not implemented");
    }
}