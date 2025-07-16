import { JSONSchema7Definition } from 'json-schema';
import { FilterConfig } from '../../modules/filter-config';
import { GridColumn, Operator, OptionValue } from '../../typings';
type FilterComponentProps<T> = {
    column: GridColumn<any>;
    schema: JSONSchema7Definition;
    config: FilterConfig;
    url: string;
    value: OptionValue<T> | null;
    operator: Operator;
    error: Error | null;
    onChangeValue: (newValue: OptionValue<T> | null) => void;
    onChangeOperator: (newOperator: Operator) => void;
};
export type FilterComponent<T extends string | number | boolean> = React.FC<FilterComponentProps<T>>;
export default function createFilterForm(config: FilterConfig): FilterComponent<any>;
export {};
