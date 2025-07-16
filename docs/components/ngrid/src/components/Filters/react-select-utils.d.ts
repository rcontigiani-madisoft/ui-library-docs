import { GroupBase, Options, StylesConfig, Theme } from 'react-select';
import { OptionValue } from '../../typings';
export declare const selectTheme: (theme: Theme) => Theme;
type OptionTypeBase = OptionValue<any>;
export declare const filterStyles: any;
export declare function actionDialogStyles<isMulti extends boolean, OptionType extends OptionTypeBase = OptionTypeBase>(isError?: boolean): StylesConfig<OptionType, isMulti, GroupBase<OptionType>>;
export declare function flexSelectStyles<T extends OptionTypeBase>(): StylesConfig<T, false, GroupBase<T>>;
export declare const dateSelectStyles: any;
export declare function filterOption<T extends OptionTypeBase>(option: T, inputValue: string): boolean;
export declare function aggregateOptions(optionValues: Options<OptionTypeBase>): OptionTypeBase | null;
export declare function noOptionsMessage({ inputValue, }: {
    inputValue?: string;
}): string;
export declare function useCachedFetchOptions(fetchOptions: (text: string) => Promise<OptionValue[]>): (inputValue: string) => Promise<OptionValue<string>[]>;
type AutocompleteParams = {
    url: string;
    field: string;
};
export declare function useLoadOptions({ url, field }: AutocompleteParams): (inputValue: string) => Promise<OptionValue<string>[]>;
/**
 * Carica tutte le opzioni senza paginazione e ricerca localmente i risultati.
 * @param params I parametri per la chiamata iniziale
 * @returns
 */
export declare function useLoadAllOptions({ url, field }: AutocompleteParams): (inputValue: string) => Promise<OptionTypeBase[]>;
export declare function asOptionValue(option: OptionTypeBase | null): {
    label: string;
    value: string;
} | null;
export declare function toValues(option: OptionValue | null): {
    label: string;
    value: string;
}[];
export {};
