declare function getItem<T>(key: string): T | null;
declare function setItem<T>(key: string, value: T, raw?: boolean): void;
export declare function removeItem(key: string): void;
export { getItem, setItem };
