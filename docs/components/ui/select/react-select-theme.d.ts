import { StylesConfig, Theme } from 'react-select';
import { InputControlProps } from '../control/Control';
import { ChipTheme } from '../chips/Chip';
export declare const selectTheme: (theme: Theme) => {
    borderRadius: number;
    colors: {
        primary: string;
        primary25: string;
        primary50: string;
        neutral0: string;
        neutral50: string;
        neutral80: string;
        neutral10: string;
        danger: string;
        dangerLight: string;
        primary75: string;
        neutral5: string;
        neutral20: string;
        neutral30: string;
        neutral40: string;
        neutral60: string;
        neutral70: string;
        neutral90: string;
    };
    spacing: import('react-select').ThemeSpacing;
};
export declare function selectStyles<T, IsMulti extends boolean>(props?: Pick<InputControlProps, 'appearance'>): StylesConfig<T, IsMulti>;
export declare function selectNewDesignStyles<T, IsMulti extends boolean>(props?: Pick<InputControlProps, 'appearance'> & {
    valueTheme?: ChipTheme;
}): StylesConfig<T, IsMulti>;
