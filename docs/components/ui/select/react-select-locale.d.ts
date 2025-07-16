import { AriaGuidanceProps, AriaOnChangeProps, AriaOnFilterProps, AriaOnFocusProps, GroupBase } from 'react-select';
export declare const defaultAriaLiveMessages: {
    guidance: (props: AriaGuidanceProps) => string;
    onChange: <Option, IsMulti extends boolean>(props: AriaOnChangeProps<Option, IsMulti>) => string;
    onFocus: <Option, Group extends GroupBase<Option>>(props: AriaOnFocusProps<Option, Group>) => string;
    onFilter: (props: AriaOnFilterProps) => string;
};
export declare const screenReaderStatus: ({ count }: {
    count: number;
}) => string;
