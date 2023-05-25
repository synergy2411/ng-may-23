import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('should revrse the supplied string', () => {
    const pipe = new ReversePipe();
    expect(pipe.transform('Hello')).toBe('olleH');
  });
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });
});
