export declare function debounce<T extends unknown[]>(func: (...args: T) => void, delay: number): (...args: T) => void;
/**
 *
 * @param fn callback
 * @param wait milliseconds
 * @param abortValue if has abortValue, promise will reject it if
 * @returns Promise
 */
export declare function debouncePromise<T extends (...args: any[]) => Promise<any>>(fn: T, wait: number, abortValue?: any): (...args: Parameters<T>) => Promise<Awaited<ReturnType<T>>>;
