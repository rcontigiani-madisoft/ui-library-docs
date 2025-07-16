export declare function debounce<Func extends Function>(func: Func, ms: number, immediate?: boolean): Func;
/**
 *
 * @param fn callback
 * @param wait milliseconds
 * @param abortValue if has abortValue, promise will reject it if
 * @returns Promise
 */
export declare function debouncePromise<T extends (...args: any[]) => Promise<any>>(fn: T, wait: number, abortValue?: unknown): (...args: Parameters<T>) => Promise<Awaited<ReturnType<T>>>;
export declare function identity<T>(x: T): T;
type FnA<A, B> = (a: A) => B;
type FnB<B, C> = (b: B) => C;
type FnC<C, D> = (c: C) => D;
type FnD<D, E> = (d: D) => E;
export declare function pipe<A, B>(ab: FnA<A, B>): (arg: A) => B;
export declare function pipe<A, B, C>(ab: FnA<A, B>, bc: FnB<B, C>): (arg: A) => C;
export declare function pipe<A, B, C, D>(ab: FnA<A, B>, bc: FnB<B, C>, cd: FnC<C, D>): (arg: A) => D;
export declare function pipe<A, B, C, D, E>(ab: FnA<A, B>, bc: FnB<B, C>, cd: FnC<C, D>, de: FnD<D, E>): (arg: A) => E;
export declare function curry<A, B, C>(fn: (a: A, b: B) => C): (a: A) => (b: B) => C;
export declare function curry<A, B, C>(fn: (a: A, b: B) => C): (a: A, b: B) => C;
export declare function curry<A, B, C>(fn: (a: A, b: B) => C, a: A): (b: B) => C;
export declare function curry<A, B, C, D>(fn: (a: A, b: B, c: C) => D): (a: A, b: B) => (c: C) => D;
export declare function map<T, U>(fn: (item: T, index: number, items: T[]) => U, items: T[]): U[];
export declare function isNotNull<T>(value: T | null): value is T;
export declare function isNotUndefined<T>(value?: T): value is T;
export {};
