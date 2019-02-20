import { TextSummaryPipe } from './text-summary.pipe';

let pipe: TextSummaryPipe;

beforeEach(() => {
  pipe = new TextSummaryPipe();
})

describe('TextSummaryPipe', () => {
  it('should return an empty string if the value is null',() => {
    expect(pipe.transform(null)).toBe('');
  });

  it('should return an empty string if the value is undefined',() => {
    expect(pipe.transform(undefined)).toBe('');
  });

  it('should return an empty string if the value is an empty string',() => {
    expect(pipe.transform('')).toBe('');
  });

  it('should return the identical string if there are no arguments and length is less than 10', () => {
    const testValue = "MyString" // 8 characters

    const returnValue = pipe.transform(testValue);

    expect(returnValue).toBe(testValue);
  });

  it('should return the identical string if there are no arguments and length is equal to 10', () => {
    const testValue = "MyStringAB" // 10 characters

    const returnValue = pipe.transform(testValue);

    expect(returnValue).toBe(testValue);
  });

  it('should return a clipped string, ending with ..., if there are no arguments and length is more than 10', () => {
    const testValue = "MyStringTooLong" // 15 characters

    const returnValue = pipe.transform(testValue);

    expect(returnValue).toBe('MyStringTo...');
  });

  it('should return a clipped string, ending with ..., if the argument is 7 and length is more than 7', () => {
    const testValue = "MyStringTooLong" // 15 characters

    const returnValue = pipe.transform(testValue, 7);

    expect(returnValue).toBe('MyStrin...');
  });
});

/*
xdescribe('TextSummaryPipe', () => {
  let pipe: TextSummaryPipe;

  beforeEach(() => {
    pipe = new TextSummaryPipe();
  });

  it('should return an empty string if input is null', () => {
    expect (pipe.transform(null)).toEqual('');
  });

  it('should return null if input is undefined', () => {
    expect (pipe.transform(undefined)).toEqual('');
  });

  it('should return empty string if input is an empty string', () => {
    expect (pipe.transform('')).toEqual('');
  });

  it('should return the same string if the length of input is less than the limit', () => {
    expect (pipe.transform('12345', 5)).toEqual('12345');
  });

  it('should summarize the input if it is longer than the limit', () => {
    expect(pipe.transform('12345678901', 5)).toEqual('12345...');
  });

  it('should assume 10 as the limit if not given', () => {
    expect(pipe.transform('12345678901')).toEqual('1234567890...');
  });
});
*/