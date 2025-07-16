import { OptionValue } from '../typings';
export type OptionsCache = Record<string, OptionValue<string>[]>;
export declare function cachedResults(cache: OptionsCache, searchTerm: string, limit?: number): OptionValue<string>[] | undefined;
