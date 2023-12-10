// Write your test hereimport 
import { manipulate } from './manipulate';

describe('manipulate testing', () => {
    it('should return currect array!!!', () => {
        expect(manipulate('a')).toStrictEqual(['a']);
        expect(manipulate('ab')).toStrictEqual(['ab', 'ba']);
        expect(manipulate('abc')).toStrictEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
        expect(manipulate('aabb')).toStrictEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
    });
});
