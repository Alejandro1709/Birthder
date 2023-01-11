import { countdown } from '../utils/date';

describe('Countdown functionallity', () => {
  it('should return 0 when the date is today', () => {
    const today = new Date();
    const result = countdown(today.toString());
    expect(result).toBe(0);
  });

  it('should return 1 when the date is tomorrow', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const result = countdown(tomorrow.toString());
    expect(result).toBe(1);
  });

  it('should return 2 when the date is in 2 days', () => {
    const inTwoDays = new Date();
    inTwoDays.setDate(inTwoDays.getDate() + 2);
    const result = countdown(inTwoDays.toString());
    expect(result).toBe(2);
  });
});
