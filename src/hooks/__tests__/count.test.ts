import { act, renderHook } from '@testing-library/react-hooks';
import { useCounterCore } from '../counter';

describe('Test useCounter', () => {
  it('return the default value', () => {
    const { result } = renderHook(() => useCounterCore());

    expect(result.current.count).toEqual(0);
  });

  it('Testing props', () => {
    const { result } = renderHook(() => useCounterCore(12));

    expect(result.current.count).toEqual(12);
  });

  it('Testing increment', () => {
    const { result } = renderHook(() => useCounterCore());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toEqual(1);
  });

  it('Testing descrement', () => {
    const { result } = renderHook(() => useCounterCore());

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toEqual(-1);
  });

  it('Testing reset', () => {
    const { result } = renderHook(() => useCounterCore());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toEqual(1);

    act(() => {
      result.current.reset();
    });

    expect(result.current.count).toEqual(0);
  });
});
