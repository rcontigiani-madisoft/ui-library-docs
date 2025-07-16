export declare function set<T>(obj: any, path: string | string[], value: T): any;
export declare function omit<T>(obj: T, key: keyof T): Omit<T, typeof key>;
/**
 * Ispeziona l'oggetto e restituisce il valore della proprietà definita in path.
 * Se nel percorso si incontra un array il risultato sarà la concatenazione dei risultati.
 * Ogni proprietà annidata deve essere separata da un punto es: path: 'people.person.name'.
 *
 * @param obj l'oggetto da ispezionare
 * @param path il path che definisce la proprietà di cui si vuole il valore
 */
export declare function get(obj: unknown, path: string): unknown | undefined;
export declare function isBaseType(value: unknown): value is string | boolean | number;
export declare function hasOwnProperty(prop: string, context: unknown): boolean;
