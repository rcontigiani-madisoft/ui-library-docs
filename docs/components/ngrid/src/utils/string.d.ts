export declare function formatSchoolYear(year: number | string): string;
/**
 * Trasforma un array di campi in una stringa con struttura ad albero.
 *
 * es.
 * input: ["name", "email", "address.city", "address.street", "address.zipCode"]
 * output: "name,email,address{city,street,zipCode}"
 * @param fields I campi di un oggetti in formato obj.property.innerProp
 * @returns L'insieme dei campi in un formato ad albero
 */
export declare function joinAsObjectKeys(fields: string[]): string;
export declare function isHTML(str: string): boolean;
export declare function htmlToText(html: string): string;
export declare function ellipsize(str: string, maxLength: number): string;
export declare function replaceQueryParams(str: string, queryParams?: string): string;
export declare function appendParams(baseUrl: string, search: string | URLSearchParams): string;
export declare function slugify(str: string): string;
export declare function shortId(length?: number): string;
export declare function pluralize(count: number, pattern: string): string;
export declare function pluralize(count: number, singular: string, plural: string): string;
