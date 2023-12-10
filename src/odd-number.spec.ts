// Write your test here// Write your test hereimport 
import { findOddNumber } from './odd-number';

describe('manipulate testing', () => {
    it('should return currect number!!!', () => {
        expect(findOddNumber([7])).toBe(7);
        expect(findOddNumber([0])).toBe(0);
        expect(findOddNumber([1,1,2])).toBe(2);
        expect(findOddNumber([0,1,0,1,0])).toBe(0);
        expect(findOddNumber([1,2,2,3,3,3,4,3,3,3,2,2,1])).toBe(4);
    });
});
