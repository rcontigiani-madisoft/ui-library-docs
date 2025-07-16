export declare function useDebounce<T extends (...args: any[]) => void>(fn: T, delay: number, maxWait?: number): (...args: Parameters<T>) => void;
