type Procedure = (...args: any[]) => void;
/**
 * Returns a memoized function that will only call the passed function when it hasn't been called for the wait period
 * @param func The function to be called
 * @param wait Wait period after function hasn't been called for
 * @returns A memoized function that is debounced
 */
export declare function useDebouncedCallback<Func extends Procedure>(func: Func, wait: number): (...args: Parameters<Func>) => void;
export {};
