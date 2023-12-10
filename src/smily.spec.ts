// Write your test here// Write your test hereimport 
import { countSmilyFace } from './smily';

describe('smily testing', () => {
    it('should return currect number!!!', () => {
       expect(countSmilyFace([':)', ';(', ';}', ':-D'])).toBe(2);   // should return 2;
       expect(countSmilyFace([';D', ':-(', ':-)', ';~)'])).toBe(3);    // should return 3; 
       expect(countSmilyFace([';]', ':[', ';*', ':$', ';-D'])).toBe(1); // should return 1; 
    });
});
