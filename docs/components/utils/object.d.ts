import { dequal } from 'dequal/lite';
export declare function set<T>(obj: any, path: string | string[], value: T): any;
export declare function omit<T>(obj: T, key: keyof T): Omit<T, typeof key>;
/**
 * Ispeziona l'oggetto e restituisce il valore della proprietà definita in path.
 * Ogni proprietà annidata deve essere separata da un punto es: path: 'people.person.name'.
 *
 * @param obj l'oggetto da ispezionare
 * @param path il path che definisce la proprietà di cui si vuole il valore
 */
export declare const get: (obj: unknown, path: string) => any;
export declare function deepClone<T>(obj: T): T;
export declare const deepEqual: typeof dequal;
export declare function hasOwnProperty(obj: object, propName: string): boolean;
export declare function hasProperty(obj: unknown, propName: string): obj is {
    [key: typeof propName]: unknown;
};
export declare function deepMerge(obj1: any, obj2: any): unknown;
export declare function objectHashCode(obj: unknown): number;
