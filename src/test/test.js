import {add} from './math';

it('should return 3 when passed 1,2 to add func', () => {
    const result = add(1,2);
    expect(result).toEqual(2);
});
